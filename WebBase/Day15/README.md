### 진행상황


flask를 학부시절 써보긴했는데 나만의 웹을 랜더링하여 써보진 않았다.

```python
from flask import Flask, render_template
# Flask 웹 프레임워크를 사용하기 위한 모듈 import
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
    db_conn.close()

    return render_template('index.html', users=users)
if __name__ == "__main__":
    app.run(debug=True)
```
- @app.rout('/') 
    - 웹 서버의 루트 경로에 접근하면 'index' 함수가 실행됨
- db_conn
    - 'pymysql'을 사용하여 MySQL데이터베이스에 연결함. 연결 정보는 주어진 인자에 따라 다를 수 있음
- with db_conn
    - 'with' 문을 사용해 컨텐스트 안에서만 데이터베이스 연결을 유지하고, 블록이 끝나면 자동으로 연결이 종료
- return ~ 
    - index.html템플릿을 랜더링하여, 'users' 변수를 템플릿에 전달


## 해야하는 것

- 댓글 Form 생성
- right-aside 내용 추가
- 오늘의 인기글 추가 
- 더미코드 삭제 ( 이것저것 한번에 하려다 보니 쓸데없는 요소들이 너무 많아짐 )

- 사실 이 모든 것은 데이터베이스 + 백엔드 적인 요소가 좀 있어서 배우고 생각해봐야할 듯