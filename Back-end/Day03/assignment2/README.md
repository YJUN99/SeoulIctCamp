### 해결해야할 과제

JSON 파일에 대해 간략히 알아보고 Python으로 json 파일을 Read, write 할 수 있는 코드 제출하기 (json 파일에 대한 스터디 자료도 제출)

---
### JSON

#### JavaScript Object Notation

- 경량 데이터 교환
- 인간이 읽고 쓰는 것이 쉬움

#### JSON의 두가지 구조
- 이름/값 쌍의 컬렉션 : (대부분 언어에서의 객체, 구조체, 딕셔너리, 해시 등과 비슷하다.)
- 정렬된 값 목록 : (대부분의 언어에서 배열, 벡터, 리스트와 비슷하다.)

현대 프로그래밍 언어에서는 JSON과 같은 자료구조를 대부분 지원한다.

### JSON의 형식

#### Object
<img src=https://www.json.org/img/object.png style="background-color:white">
- Object는 순서가 없는 이름/값의 쌍
- Object는 왼쪽 중괄호로 시작하고, 오른쪽 중괄호로 끝남.
- 각 이름 뒤에는 콜론 : 이 오고, 이름/값 쌍은 ,쉼표로 구분됨.

- 각 'name'은 문자열, 'value'는 다양한 데이터 타입이 가능하다. (number, object, array 등)

#### Array
<img src=https://www.json.org/img/array.png style="background-color:white">
- 대괄호 '[]'로 둘러싸인 구조 
- 정렬되고 순서가 있는 리스트
- 각 값은 어떤 데이터 타입이든 가능하다.
- 각 값은 콤마 , 로 구분된다.

이 두 구조는 중첩될 수 있고, 객체 안에 배열이나 다른 객체를 포함할 수 있고, 배열안에 다른 배열이나 객체를 포함할 수 있다.
#### Value

<img src=https://www.json.org/img/value.png style="background-color:white">
- 'Value'는 JSON에 저장할 수 있는 데이터 항목의 의미

```json
{
    "stringValue": "Hello, World!",
    "numberValue": 123,
    "booleanValue": true,
    "nullValue": null,
    "arrayValue": [1, 2, 3],
    "objectValue": {
        "key": "value"
    }
}
```
#### string
<img src=https://www.json.org/img/string.png style="background-color:white">

- 'string'은 유니코등 문자의 순서. 
- 큰 따옴표 "" 로 둘러싸여 있음
- 특수 문자를 표현하기 위해선 백슬래시로 이스케이프 처리 가능하다.
    - `\"` : 큰 따옴표를 표기하기 위해
    - `\\` : 백슬래스 자체를 표기하기 위해 
    - `\b` : 백스페이스
    - `\f` : 폼 피드
    - `\n` : 새 줄 (개행)
    - `\r` : 캐리지 리턴
    - `\t` : 탭
    - `\uXXXX` : 유니코드 문자 

#### number
- 정수나 부동소수점 숫자를 나타낼 수 있음

#### Whitespace
- JSON의 구조와 의미에 영향을 주지 않는 공백문자.
- 가독성을 위해 사용됨
    - 공백 (space)
    - 탭 (tab)
    - 개행 (newline)
    - 캐리지 리턴 (carriage return)

두 json 객체는 같은 의미를 갖는다.
```json
{"name":"John", "age":30, "city":"Seoul"}

{
    "name": "John",
    "age": 30,
    "city": "Seoul"
}
```