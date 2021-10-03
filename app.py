from flask import Flask,render_template,request
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



app=Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')


if __name__=="__main__":
    app.run(debug=True)