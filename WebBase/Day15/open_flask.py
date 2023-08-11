from flask import Flask, render_template, request, redirect
import pymysql

app = Flask(__name__)

@app.route('/')
def index():
    db_conn = pymysql.connect(host='localhost', user='root',
            password='1234', database='myweb',
            autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_conn:
        print("DB연결 완료")
        db_cursor = db_conn.cursor()
        db_cursor.execute("SELECT * FROM user")
        users = db_cursor.fetchall()

    return render_template('index.html', users=users)

@app.route('/new-post')
def new_post():
    return render_template('/html/write-page.html')

@app.route('/submit-post',methods=['GET','POST'])
def submit_post():
    db_conn = pymysql.connect(host='localhost', user='root',
        password='1234', database='myweb',
        autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_conn:
        print("submit OK")
        title = request.form['title']
        description = request.form['description']
        userID = request.form['userid']
        category_name = request.form['categoryid']
        
        print("카테고리이름은 : ",category_name)
        image = request.files['image']
        if image:
            pass
        
        db_cursor = db_conn.cursor()
        
        # 지금까지 데이터베이스에 올라온 포스트의 수 세기
        db_cursor.execute("SELECT count(*) as cnt from post")
        post_num = db_cursor.fetchone()['cnt'] + 1
        
        db_cursor = db_conn.cursor()
        db_cursor.execute(
            "INSERT INTO post (PostID, Title, Description, UserID, CategoryID, like_num, dislike_num) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (post_num, title, description, userID, category_name, 0, 0))
        
    return redirect('/')

@app.route('/new-comment',methods=['GET','POST'])
def new_comment():
    db_conn = pymysql.connect(host='localhost', user='root',
        password='1234', database='myweb',
        autocommit=True, cursorclass=pymysql.cursors.DictCursor)
    with db_conn:
        print("submit OK")
        title = request.form['title']
        description = request.form['description']
        userID = request.form['userid']
        category_name = request.form['categoryid']
        
        print("카테고리이름은 : ",category_name)
        image = request.files['image']
        if image:
            pass
        
        db_cursor = db_conn.cursor()
        
        # 지금까지 데이터베이스에 올라온 포스트의 수 세기
        db_cursor.execute("SELECT count(*) as cnt from post")
        post_num = db_cursor.fetchone()['cnt'] + 1
        
        db_cursor = db_conn.cursor()
        db_cursor.execute(
            "INSERT INTO post (PostID, Title, Description, UserID, CategoryID, like_num, dislike_num) VALUES (%s, %s, %s, %s, %s, %s, %s)",
            (post_num, title, description, userID, category_name, 0, 0))
        
    return redirect('/')
    
if __name__ == "__main__":
    app.run(debug=True)