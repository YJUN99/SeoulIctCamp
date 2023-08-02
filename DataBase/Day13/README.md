### 해결해야할 과제
- dbeaver 또는 DBMS 툴로 내 웹사이트의 ERD를 그려서 스크린샷 찍어서 제출하기
  
요구사항
1. 내 웹사이트 전반적인 내용을 entity와 relation을 우선 고려하기
2. relation이 구상되면 디비버와 같은 툴로 테이블과 컬럼 그리고 PK,FK를 구성하여 테이블을 생성하기
3. 엔티티 관계도에 들어가서 구성된 테이블들을 스크린샷찍어서 제출하기
4. 각 테이블과 컬럼은 영문을 이용해서 테이블을 만들 것 (해당 테이블과 컬럼에 대한 정보는 한글로 적어서 별도의 텍스트 파일로 작성하여 설명할 것)
  
---
### 테이블 구상하기
![image](MyfirstDBSchema.png)
1. User (사용자)
   - UserID
     - 기본키, 유저각각을 구분짓기 위한 키 입니다. (로그인시 사용됩니다.)
     - VARCHAR(20)
   - UserName
     - 사용자의 실명
     - VARCHAR(10)
   - Password
     - 로그인시 필요한 패스워드
     - VARCHAR(15)
   - email
     - 회원가입시 필요한 이메일 
     - VARCHAR(255)

2. Post (게시글)
   - PostID
     - 기본키, 게시글 각각을 구분짓기 위한 키 입니다.
     - INT
   - Title
     - 게시글의 제목
     - VARCHAR(50)
   - Description
     - 게시글의 내용
     - TEXT (많은 양의 글이 쓰일것이 예상되므로)
   - UserID
     - 게시글을 쓴 유저의 아이디
     - 외래키, 참조 -> User.UserID
     - VARCHAR(20)
   - CategoryID
     - 게시글의 카테고리를 나누기 위함
     - 외래키, 참조 -> Category.category.id
     - INT
   - like
   - dislike
     - 좋아요 와 싫어요 개수를 저장
     - INT
3. comment (댓글)
   - commentID 
     - 기본키, 댓글 각각을 구분 짓기 위한 키
     - INT
   - postID 
     - 어떤 게시글에 대한 댓글인지 확인
     - 외래키, 참조 -> post.postID
   - userID
     - 댓글작성자에 대한 정보
     - 외래키, 참조 -> user.userID
   - content
     - 댓글의 내용
     - VARCHAR(100) (게시글 보단 짧은 양의 글자 수 제한)
4. popularPost (인기글)
   - popularID
     - 기본키, 인기 글에 등록된 글의 ID
     - INT
   - postID
     - 게시글을 가져오기 위한 postID
     - 외래키, 참조 -> post.postID
   - createAt
     - 인기글에 등록된 시간을 저장
     - DATETIME
5. category
   -  CategoryID 
     -  카테고리의 각각에 대해 구분
     -  지금은 0,1,2,3 총 3개에서 4개를 생각중이지만 추후 늘려나가기 위해 테이블화 하였습니다.
     -  INT 
   - CategoryName
     - 실제 CategoryID 에 따른 카테고리 이름 (전자제품, 의류, 자전거 ...) 