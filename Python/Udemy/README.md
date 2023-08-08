### Udemy "코딩초보자를 위한 파이썬 입문"

### 너무 기초적인 강좌이기 때문에 파이썬을 지금까지 쓰면서 몰랐던 내용이나, 헷갈린 내용 위주로 작성됨.

---

### 다양한 입출력 - 오른쪽 정렬과 왼쪽 정렬

```python
menu = {"김밥" : 3000, "순대" : 2000, "라면" :4500 }
for menu1, pey in menu.items():
    print(menu1,pey)
    # 출력 
    # 김밥 3000
    # 순대 2000
    # 라면 4500
    print(menu1.ljust(5), str(pey).rjust(10), sep=":")
    # 출력
    # 김밥   :      3000
    # 순대   :      2000
    # 라면   :      4500
```

- ljust 는 인자만큼 공간을 생성후 왼쪽부터 채움 
- rjust 는 인자만큼 공간을 생성후 오른쪽부터 채움

---
### 다양한 입출력 - zfill
```python
num = 0 
while num < 10:
    num += 1
    print("대기번호 : " + str(num).zfill(5))

# 대기번호 : 00001
# 대기번호 : 00002
# 대기번호 : 00003
# 대기번호 : 00004
# 대기번호 : 00005
# 대기번호 : 00006
# 대기번호 : 00007
# 대기번호 : 00008
# 대기번호 : 00009
# 대기번호 : 00010
```
- zfill 은 0로 채우는 method, 인자만큼 공간을 0으로 채운 후, 오른쪽에 value를 넣는다.

### 3자리 마다 콤마 ex) 1,000원
``` python
# print("내월급 : {0:,}원".format(2000000))
# print("내자산 : {0:+,}원".format(2000000))
```
- "{0:,}" 는 파이썬에서 문자열 형식을 지정할 때 천 단위로 구분하여 표시하기 위한 형식 지정자
- 아래는 문자열 형식 지정에 대한 내용이다.
```python

## 채우기 지정자 및 정렬 지정자
number = 5
print("{:<10}".format(number))  # "5         "
print("{:>10}".format(number))  # "         5"
print("{:^10}".format(number))  # "    5     "
print("{:*^10}".format(number))  # "****5*****"

## 숫자 형식 지정

pi = 3.141592
print("{:.2f}".format(pi))   # "3.14"

## 형 변환
data = "Hello"
print("{!s}".format(data))  # "Hello"       # 문자열 변환
print("{!r}".format(data))  # "'Hello'"     # repr() (문자열 객체를 다시생성) 로 변환
print("{!a}".format(data))  # "'Hello'"     # ascii() 결과로 반환

```
- 문자열 형식 지정은 주어진 값을 특정 형식의 문자열로 변환하는 것
- format() 메서드와 함께 사용됨.
- 문자열 변환 또는 출력시 유용하게 사용됨

### lambda funcion 

```python
def add(a,b):
    return a+b

print(add(1,2))

add = lambda a,b : a + b
print(add(1,2))

```
- 람다함수는 리스트 안에서 표현될 수 있다. (def 정의 함수는 불가능)

```python
list1 = [lambda a,b:a+b, lambda a,b : a/b]
print(list1[0](2,1))
print(list1[1](2,1))
``` 

- 람다함수는 더 간결한 문법을 제공
- 이름없이 정의되기 때문에 임시적으로 사용할 함수 정의 편리
- 특정 함수나 메서드의 인수로 전달도리 때 사용됨.