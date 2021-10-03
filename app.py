from flask import Flask,render_template,request,Response
import os
import json
import model.database as db
import sqlite3
import model.utils as ut
from model.definition import Main,LineCross,Details,database

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


app=Flask(__name__)
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/VehicleCounting",methods=["POST"])
def VehicleCounting():
    if request.method=="POST":
        try:
            # img_str = request.json['image']
            # tag = request.json["tag"]
            # camera_id = request.json['camera_id']
            # camera_loc = request.json['camera_loc']
            # date_time=request.json["datetime"]
            # results = request.json['results']
            # img_byte=base64.b64decode(img_str.encode('utf-8'))
            # img=Image.open(io.BytesIO(img_byte))
            # img.save(f"static/img/output.jpg")
            # # img.save(f"static/img/{tag}.jpg")
            # # jpg_original = base64.b64decode(img_str)
            # # jpg_as_np = np.frombuffer(jpg_original, dtype=np.uint8)
            # # img = imdecode(jpg_as_np, flags=1)
            # frame_id = db_data_insertion(
            #     (camera_id, camera_loc,date_time , tag))
            # # imwrite(f"static/img/output.jpg", img)

            # for r in results:
            #     lbl = r['label']
            #     prob = r['prob']
            #     x = r['x']
            #     y = r['y']
            #     w = r['w']
            #     h = r['h']
            #     db_results_insertion((frame_id, lbl, prob, x, y, w, h))
            # waiting=True
            # print("/////////////////////////////////////////////////////////// ({})".format(waiting))


            return send_result("Frame inserted success", status=201)
        except KeyError as e:
            return send_result(error=f'An "image" file is required {e}', status=422)
        except Exception as e:
            return send_result(error=f'Error {e}', status=500)
    else:
        return "Get request not allowed"

if __name__=="__main__":
    app.run(debug=True)