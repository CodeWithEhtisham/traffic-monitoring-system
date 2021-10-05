import sqlite3
from sqlite3 import Error

def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file,check_same_thread=False)
        return conn
    except Error as e:
        print(e)
    return conn
def create_table(conn, create_table_sql):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
        print("Table create successfull")
    except Error as e:
        print(e)

def fetch_record(conn, fetch_record_query):
    """ fetch record the the tabel
    :param conn: Connection object
    :param fetch_record_query: Fetch Record from the table
    :return: record
    """
    try:
        c = conn.cursor()
        data=c.execute(fetch_record_query)
        print("fetch record successfull")
        return data.fetchall()
    except Error as e:
        print(e)

def insert_record(conn,insert_query,data):
    """ Insert data into table
    :param conn: Connection object
    :param insert_query: insert query 
    :param data: data for insertion 
    :return:
    """
    try:
        c=conn.cursor()
        c.execute(insert_query,data)
        conn.commit()
        print("Insertion Data Seccessfull")
        return c.lastrowid
    except Error as e:
        print(e)


# def coustomize_select_query(conn,query):
#     """ Insert data into table
#     :param conn: Connection object
#     :param insert_query: insert query 
#     :param data: data for insertion 
#     :return:
#     """
#     try:
#         c=conn.cursor()
#         c.execute(query)
#         # conn.commit()
#         print("Query Seccessfull Run")
#         return c.las
#     except Error as e:
#         print(e)