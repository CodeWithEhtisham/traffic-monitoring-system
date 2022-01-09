from flask import Flask,render_template,request,Response
import os
import json
import model.database as db
import sqlite3
import model.utils as ut
from model.definition import Main,LineCross,Details,database
import base64
import cv2
import numpy as np
from flask_socketio import SocketIO,emit

conn = ut.create_connection(database)

if conn is not None:
    # create projects table
    ut.create_table(conn, db.sql_create_Main_table)
    ut.create_table(conn,db.sql_create_Details_table)
    ut.create_table(conn,db.sql_create_LineCross_table)
else:
    print("Error! cannot create the database connection.")

def send_result(response=None, error='', status=200):
    if response is None:
        response = {}
    result = json.dumps({'result': response, 'error': error})
    return Response(status=status, mimetype="application/json", response=result)

def fetch_data(query=None):
    if query is None:
        return ut.fetch_record(conn,db.select_main_query)
    else:
        return ut.fetch_record(conn,query)


app=Flask(__name__)
sio=SocketIO(app,cors_allowed_origins='*')

@sio.on("connect")
def connect():
    print("client connected successful")
    # emit('graph data',data={
    #       't': '2021-10-05 15:55:50.229885',
    #       'y': 30
    #     },bardata="hello")
    # emit("image","sending data server to clint",broadcast=True)
# @sio.on("detection")
# def detection(json):
#     image=json['image']


signalcount=0
@sio.on('my image')
def get_image(image):
    # print(image)
    emit('frame', image,broadcast=True)

@sio.on('Line_cross_socket')
def Line_cross_socket(jsons):
    try:
        global signalcount
        
        print("data recieved line cross")
        no_plate=request.json['NumberPlate']
        print("number plate: ",no_plate)
        img_path=jsons['ImgPath']
        video_path=jsons['VideoPath']
        date_time=jsons['DateTime']
        signalcount+=int(no_plate)
        ut.insert_record(conn,db.insert_LineCross_table,(no_plate,img_path,video_path,date_time))
        print('line cross data emiting.............')
        sio.emit('linecross',data={
            'no_plate':no_plate,
            'signalcount':signalcount
        },broadcast=True)
    except Exception as e:
        print(e)

@sio.on('VehicleCounting_socket')
def vehicleCountion_socket(jsons):
    try:
        img_str = jsons['image']
        camera_id = jsons["camera_id"]
        camera_no = jsons['camera_no']
        camera_location = jsons['camera_location']
        date_time=jsons["date_time"]
        results = jsons['results']
        frame_id = ut.insert_record(conn,db.insert_Main_table,(camera_id,camera_location,camera_no,date_time,"IMG_PATH"))
        count=0
        bardata={
            "Car":0, "Bus":0, 'Truck':0, "Auto_rikshw":0, "Motorcycle":0, "Van":0
        }
        # bardata=[0,0,0,0,0,0]
            # "Car"
        # }
        # ["Car", "Bus", 'Truck', "Rickshaw", "Bike", "Van"]
        for r in results:
            count+=1
            lbl = r['label']
            prob = r['prob']
            x = r['x']
            y = r['y']
            w = r['w']
            h = r['h']
            # db_results_insertion((frame_id, lbl, prob, x, y, w, h))
            ut.insert_record(conn,db.insert_Details_table,(frame_id,x,y,h,w,lbl,prob,"no_plate"))
            try:
                bardata[lbl]+=1
            except:
                bardata['Motorcycle']+=1
                continue
        # print('emiting data...................................')
        # print(bardata)
        percentages={
            "carpercentage":f'{bardata["Car"]//len(results)}/{len(results)}',
            "buspercentage":f'{bardata["Bus"]//len(results)}/{len(results)}',
            'truckpercentage':f'{bardata["Truck"]//len(results)}/{len(results)}',
            "rickshawpercentage":f'{bardata["Auto_rikshw"]//len(results)}/{len(results)}',
            "bikepercentage":f'{bardata["Motorcycle"]//len(results)}/{len(results)}',
            "vanpercentage":f'{bardata["Van"]//len(results)}/{len(results)}'
        }
        sio.emit('index data',data={'indexchart':{
            't':date_time,
            'y':count
        },
        'data':list(bardata.values())
        },broadcast=True)
        sio.emit('percentages',
        data=percentages,
        broadcast=True
        )

    except KeyError as e:
        print(e)


@app.route("/")
def index():
    print(fetch_data())
    return render_template('index.html')

# def insertion():
    # db.fetch_record(conn,db.select_main_query)

# @app.route('/api/linecross',methods=['POST'])
# def ApiLineCross():
#     if request.method=='POST':
#         try:
#             print("data recieved line cross")
#             no_plate=request.json['NumberPlate']
#             print("number plate: ",no_plate)
#             img_path=request.json['ImgPath']
#             video_path=request.json['VideoPath']
#             date_time=request.json['DateTime']
#             ut.insert_record(conn,db.insert_LineCross_table,(no_plate,img_path,video_path,date_time))
#             print('line cross data emiting.............')
#             sio.emit('linecross',data={
#                 'no_plate':no_plate
#             },broadcast=True)
#             return send_result("Api Line Cross data recieved", status=201)
#         except KeyError as e:
#             return send_result(error=f'An "image" file is required {e}', status=422)
#         except Exception as e:
#             return send_result(error=f'Error {e}', status=500)
#     else:
#         return "Get request not allowed"



# @app.route("/api/VehicleCounting",methods=["POST"])
# def ApiVehicleCounting():
    # if request.method=="POST":
    #     try:
    #         img_str = request.json['image']
    #         camera_id = request.json["camera_id"]
    #         camera_no = request.json['camera_no']
    #         camera_location = request.json['camera_location']
    #         date_time=request.json["date_time"]
    #         results = request.json['results']
            
    #         # img_byte=base64.b64decode(img_str.encode('utf-8'))
    #         # img=Image.open(io.BytesIO(img_byte))
    #         # img.save(f"static/img/output.jpg")
    #         # # img.save(f"static/img/{tag}.jpg")
    #         # jpg_original = base64.b64decode(img_str)
    #         # jpg_as_np = np.frombuffer(jpg_original, dtype=np.uint8)
    #         # img = cv2.imdecode(jpg_as_np, flags=1)
    #         # print(camera_id,camera_location,camera_no,date_time,results)
    #         # print(img.shape)

    #         frame_id = ut.insert_record(conn,db.insert_Main_table,(camera_id,camera_location,camera_no,date_time,"IMG_PATH"))
    #         # print(frame_id)
    #         # imwrite(f"static/img/output.jpg", img)
    #         count=0
    #         bardata={
    #             "Car":0, "Bus":0, 'Truck':0, "Auto_rikshw":0, "Motorcycle":0, "Van":0
    #         }
    #         # bardata=[0,0,0,0,0,0]
    #             # "Car"
    #         # }
    #         # ["Car", "Bus", 'Truck', "Rickshaw", "Bike", "Van"]
    #         for r in results:
    #             count+=1
    #             lbl = r['label']
    #             prob = r['prob']
    #             x = r['x']
    #             y = r['y']
    #             w = r['w']
    #             h = r['h']
    #             # db_results_insertion((frame_id, lbl, prob, x, y, w, h))
    #             ut.insert_record(conn,db.insert_Details_table,(frame_id,x,y,h,w,lbl,prob,"no_plate"))
    #             try:
    #                 bardata[lbl]+=1
    #             except:
    #                 bardata['Motorcycle']+=1
    #                 continue
    #         print('emiting data...................................')
    #         print(bardata)
            
    #         sio.emit('index data',data={'indexchart':{
    #             't':date_time,
    #             'y':count
    #         },
    #         'data':list(bardata.values())
    #         },broadcast=True)



    #         # pr
    #         # int(fetch_data())


    #         # waiting=True
    #         # print("/////////////////////////////////////////////////////////// ({})".format(waiting))


    #         return send_result("Frame inserted success", status=201)
    #     except KeyError as e:
    #         return send_result(error=f'An "image" file is required {e}', status=422)
    #     except Exception as e:
    #         return send_result(error=f'Error {e}', status=500)
    # else:
    #     return "Get request not allowed"

if __name__=="__main__":
    sio.run(app,debug=True,host='0.0.0.0')