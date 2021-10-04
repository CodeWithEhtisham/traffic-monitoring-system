from re import M
import sqlite3
from model.utils import *
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

insert_Main_table=f""" INSERT INTO {Main.TABLE_NAME}({Main.CAM_ID},{Main.CAM_LOCATION},{Main.CAM_NO},{Main.IMG_PATH},{Main.DATE_TIME})
              VALUES(?,?,?,?,?) """

insert_Details_table=f""" INSERT INTO {Details.TABLE_NAME}({Details.IMG_ID},{Details.X},{Details.Y},{Details.H},{Details.W},{Details.LABEL},{Details.PROPABILITY},{Details.NO_PLATE})
              VALUES(?,?,?,?,?,?,?,?) """

insert_LineCross_table=f""" INSERT INTO {LineCross.TABLE_NAME}({LineCross.NO_PLATE},{LineCross.VIDEO_PATH},{LineCross.IMAGE_PATH},{Main.DATE_TIME})
              VALUES(?,?,?,?) """


select_main_query=f""" SELECT * FROM {Main.TABLE_NAME} """
select_details_query=f""" SELECT * FROM {Main.TABLE_NAME} """
select_linecross_query=f""" SELECT * FROM {Main.TABLE_NAME} """