import sqlite3
from utils import *
from model.definition import Main,LineCross,Details


sql_create_Main_table = f""" CREATE TABLE IF NOT EXISTS {Main.TABLE_NAME} (
                                    {Main.IMG_ID} INTEGER PRIMARY KEY AUTOINCREMENT, 
                                    {Main.CAM_ID} INTEGER NOT NULL,
                                    {Main.CAM_LOCATION} TEXT NOT NULL,
                                    {Main.CAM_NO} TEXT,
                                    {Main.IMG_PATH} TEXT,
                                    {Main.DATE_TIME} TIMESTAMP
                                ); """
sql_create_Details_table = f""" CREATE TABLE IF NOT EXISTS {Details.TABLE_NAME} (
                                    {Details.D_ID} INTEGER PRIMARY KEY AUTOINCREMENT, 
                                    {Details.IMG_ID} INTEGER NOT NULL,
                                    {Details.X} INTEGER NOT NULL,
                                    {Details.Y} INTEGER NOT NULL,
                                    {Details.H} INTEGER NOT NULL,
                                    {Details.W} INTEGER NOT NULL,
                                    {Details.LABEL} TEXT NOT NULL,
                                    {Details.PROPABILITY} REAL NOT NULL,
                                    {Details.NO_PLATE} TEXT NOT NULL,
                                    FOREIGN KEY ({Details.IMG_ID}) REFERENCES {Main.TABLE_NAME} ({Main.IMG_ID})
                                ); """
sql_create_LineCross_table = f""" CREATE TABLE IF NOT EXISTS {LineCross.TABLE_NAME} (
                                    {LineCross.L_ID} INTEGER PRIMARY KEY AUTOINCREMENT, 
                                    {LineCross.NO_PLATE} TEXT NOT NULL,
                                    {LineCross.VIDEO_PATH} TEXT NOT NULL,
                                    {LineCross.IMAGE_PATH} TEXT NOT NULL,
                                    {LineCross.DATE_TIME} TIMESTAMP NOT NULL
                                ); """
# sql_create_tasks_table = """CREATE TABLE IF NOT EXISTS tasks (
#                                 id integer PRIMARY KEY,
#                                 name text NOT NULL,
#                                 priority integer,
#                                 status_id integer NOT NULL,
#                                 project_id integer NOT NULL,
#                                 begin_date text NOT NULL,
#                                 end_date text NOT NULL,
#                                 FOREIGN KEY (project_id) REFERENCES projects (id)
#                             );"""
