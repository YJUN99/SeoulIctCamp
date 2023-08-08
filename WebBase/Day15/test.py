import pymysql

db = pymysql.connect(host='localhost',port=3306,user='root', password='1234',db='myweb', charset='utf8')

cursor = db.cursor()

# user 테이블
sql = """SELECT * FROM user"""
cursor.execute(sql)
result = cursor.fetchall()

print(result)

# post 테이블
sql = """SELECT * FROM post"""
cursor.execute(sql)
result = cursor.fetchall()

print(result)