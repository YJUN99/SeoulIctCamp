import threading

# 공유 변수
counter = 0

# 스레드에서 실행될 함수
def increment_counter():
    global counter
    for _ in range(1000000):
        counter += 1

# 두 개의 스레드 생성
thread1 = threading.Thread(target=increment_counter)
thread2 = threading.Thread(target=increment_counter)

# 스레드 시작
thread1.start()
thread2.start()

# 스레드가 종료될 때까지 기다림
thread1.join()
thread2.join()

# 두개의 스레드로 실행한 결과
print(f"예상값 = 2000000, 실제값 = {counter}")
