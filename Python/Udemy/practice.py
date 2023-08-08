##
menu = {"김밥" : 3000, "순대" : 2000, "라면" :4500 }
for menu1, pey in menu.items():
    print(menu1,pey)
    print(menu1.ljust(5), str(pey).rjust(10), sep=":")

##
num = 0 
while num <= 10:
    num += 1
    print("대기번호 : " + str(num).zfill(5))
##

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

##
def add(a,b):
    return a+b

print(add(1,2))

add = lambda a,b : a + b
print(add(1,2))

list1 = [lambda a,b:a+b, lambda a,b : a/b]
print(list1[0](2,1))
print(list1[1](2,1))    
