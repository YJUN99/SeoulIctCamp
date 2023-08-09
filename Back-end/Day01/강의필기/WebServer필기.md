### 백엔드 영역
---
#### 기본영역
Network Protocols
- HTTP, WebSocket

Protocol Specs
- REST, GraphQL

WebServer
- Nginx, Apache

Web application
- Tomcat, Unicorn

Server Application (framework)
- Express(자바스크립트), FastAPI(파이썬), Spring(자바)

Database Management System
- MySQL, Oracle

Cloud-based infrastructure
- AWS(강력 추천), AZURE
--- 
### 웹서버 

- 웹서버는 소프트웨어를 보통 말하지만, 웹 서버 소프트웨어가 동작하는 컴퓨터를 말하는 곳도 존재

- 웹 서버의 가장 중요한 기능은 클라이언트가 요청하는 HTML문서나 각종 리소스를 전달하는 것

- 웹 브라이저나 웹 크롤러가 요청하는 리소스는 컴퓨터에 저장되어 있는 정적(static)인 데이터나 동적(Dynamic)인 결과가 될 수 있음
    - 크롤러? 원하고자하는 웹페이지를 자동으로 방문, 대부분 데이터 수집을 위해 활용

- 소프트웨어 측면에서, 웹 서버는 기본적으로 웹 사용자가 어떻게 호스트 파일들에 접근하는지 관리

- 이 문서에서 웹 서버는 HTTP서버로 국한, HTTP서버는 URL과 HTTP(브라우저상 웹 페이지를 보여주기 위한 프로토콜)의 소프트웨어 일부
---
### 웹서버 기본조건
1. 항상 실행 중이어야 함
2. 항상 인터넷과 연결되어 있어야 함
3. 항상 같은 IP주소를 가지고 있어야 함
4. 제 3자에 의해 유지보수
    - 서버를 만들고난 후 사후관리는 
---
### 웹서버의 컨텐츠
- 정적 컨텐츠
1. 정적 컨텐츠로만 웹사이트를 구성하는 것은 쉽고 간편 
2. 대표적인 정적컨텐츠 : HTML, CSS, JS

- 동적 컨텐츠
1. 웹사이트 구축이 복잡해짐
2. 유연하고 여러 사용자에게 다른 화면을 제공할 수 있음
3. 대표적인 동적컨텐츠 : text,image,music,video,application data
---
### 대표적인 웹서버 종류
1. Apache HTTP Server
2. Microsoft IIS
3. Nginx
4. NodeJS

---
### Apache 와 Nginx 의 동작방식
- Apache 
    - Process-based, thread-based 아키텍처
    - 컴퓨터 자원 적극 활용 , 안정성, 확장성 , 호환성
- Nginx
    - Event-driven 아키텍처
    - 이벤트 기반 처리. 여러 사용자의 연결 요청 처리 용이