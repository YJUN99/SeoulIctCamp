### 해결해야할 과제
  
- html 문서 앞에 script 태그 내에 js코드를 작성했고, 문서가 로드 되기 전에 script의 element를 가져오지 못한 상태이다.
- element를 가져오지 못한 상태에서 console.log로 디버그하여 개발자도구에 확인해보았을때, 왜 element를 가져와졌는지 이유에 대해서 알아보기.

### 예시코드

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>JavaScript DOM Element</title>
    <script>
        //HTML 태그 이름을 이용한 선택
        console.log('aaa')
        var selectedItem = document.getElementsByTagName('li');     // 모든 <li> 요소를 선택함.
        console.log(selectedItem)
        console.log(selectedItem.length)
        for (var i = 0; i < selectedItem.length; i++) {
            selectedItem.item(i).style.color = 'red';               // 선택된 모든 요소의 텍스트 색상을 변경함.
            console.log(selectedItem.item(i));
        }
    </script>
</head>
<body>
    <h1>HTML 태그 이름을 이용한 선택</h1>
    <ul>
        <li>첫 번째 아이템이에요!</li>
        <li>두 번째 아이템이에요!</li>
        <li>세 번째 아이템이에요!</li>
        <li>네 번째 아이템이에요!</li>
        <li>다섯 번째 아이템이에요!</li>
    </ul>
</body>
</html>
```

### 예시코드의 실행결과

![Untitled](https://github.com/YJUN99/SeoulIctCamp/blob/main/JavaScript/Day09/image/image1.png?raw=true)

---

### 이하 설명시작

- 현재 주어진 예시 코드에 의하면 Script가 <head\> 부분에 위치하고 있다.
- 예시코드의 실행결과를 보면, Script 영역에 있는 코드인 색상을 바꾸는 JS 코드, 
selectedItem.length 가 0으로 출력되는 등 스크립트가 제대로 적용되지 않은 모습을 볼 수 있다.

### DOM의 대해

- Document Object Model의 약자로, 웹 페이지에 대한 인터페이스이다.
- DOM은 문서의 구조화된 표현을 제공하며, 문서 구조, 스타일, 내용 등을 변경할 수 있게 도와준다.
- DOM은 웹 페이지가 중첩 태그로 작성되는 HTML 의 구조를 반영한다.
    - 예) <p\> 태그는 하나의 객체, 그 단락 내의 텍스트는 별도의 객체
    

### 그래서 뭐가 문젠데?

- 예시 코드에서는 DOM 을 사용해 웹 페이지의 특정 요소를 변경하려고 했다. 
(  색상 변경 등 )
- `document.getElementsByTagName('li') 를 사용 해 모든 <li\> 태그를 가지는 요소를 선택하려고 한다.
- 하지만 스크립트가 웹 페이지가 완전히 로드되기 전에 실행되기 때문에 <li\> 요소들이 DOM에 존재하지 않는다.
- 그래서 document.getElementsByTageName(’li’) 는 아무런 요소도 선택하지 못하는 것이다.

![Untitled](https://github.com/YJUN99/SeoulIctCamp/blob/main/JavaScript/Day09/image/image2.png?raw=true)

- 개발자 모드의 Source 탭에는 스크립트 코드의 중단점을 설정할 수 있다.
- Script 의 어떤 부분에 ( 보기는 10번라인 ) 중단점을 잡고, 웹페이지를 새로고침 해보면
- li태그가 로드되지 않아 웹페이지에 아무것도 안보이는 현상을 확인 할 수 있다.

### 그러면 어떻게 해결하는데?

- HTML 문서가 로딩되는 순서를 알 필요가 있다.
    - HTML 문서는 브라우저에 의해 위에서 아래로 파싱된다.
        - “파싱” 이란 텍스트나 데이터를 분석하고 그 구조를 이해하는 과정
    - HTML 문서를 Text로 받아 온다.
    - 각종 HTML 태그와 내용을 분석하고, “토큰화” 한다.
    - “토큰화” 된 내용을 토대로 DOM 트리라는 구조를 생성한다.
    - 만약 스크립트 태그를 만나면, 파싱을 일시 중지하고 스크립트를 실행한다.

- 즉, <Script\> 부분이 <head\> 태그에 존재하면, 스크립트를 즉시 실행하게 되기 때문에 DOM에 로딩되지 않은 태그들에 대해선 조작할 수 없고, 보이지 않게 되는 것이다.


💡 **따라서 우리는 스크립트를 문서의 맨 아래에 위치시키거나 DOMContentLoaded 이벤트를 사용하여 DOM이 완전히 로드 된 후 스크립트가 실행되도록 해야한다.**


```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>JavaScript DOM Element</title>

</head>
<body>
    <h1>HTML 태그 이름을 이용한 선택</h1>
    <ul>
        <li>첫 번째 아이템이에요!</li>
        <li>두 번째 아이템이에요!</li>
        <li>세 번째 아이템이에요!</li>
        <li>네 번째 아이템이에요!</li>
        <li>다섯 번째 아이템이에요!</li>
    </ul>

    <script>
        //HTML 태그 이름을 이용한 선택
        console.log('aaa')
        var selectedItem = document.getElementsByTagName('li');     // 모든 <li> 요소를 선택함.
        console.log(selectedItem)
        console.log(selectedItem.length)
        for (var i = 0; i < selectedItem.length; i++) {
            selectedItem.item(i).style.color = 'red';               // 선택된 모든 요소의 텍스트 색상을 변경함.
            console.log(selectedItem.item(i));
        }
    </script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>JavaScript DOM Element</title>
    <script>
        //HTML 태그 이름을 이용한 선택
        window.addEventListener("DOMContentLoaded",()=>{
            console.log('aaa')
            var selectedItem = document.getElementsByTagName('li');     // 모든 <li> 요소를 선택함.
            console.log(selectedItem)
            console.log(selectedItem.length)
            for (var i = 0; i < selectedItem.length; i++) {
                selectedItem.item(i).style.color = 'red';               // 선택된 모든 요소의 텍스트 색상을 변경함.
                console.log(selectedItem.item(i));
            }
        })
    </script>
</head>
<body>
    <h1>HTML 태그 이름을 이용한 선택</h1>
    <ul>
        <li>첫 번째 아이템이에요!</li>
        <li>두 번째 아이템이에요!</li>
        <li>세 번째 아이템이에요!</li>
        <li>네 번째 아이템이에요!</li>
        <li>다섯 번째 아이템이에요!</li>
    </ul>
</body>
</html>
```
![Untitled](https://github.com/YJUN99/SeoulIctCamp/blob/main/JavaScript/Day09/image/image3.png?raw=true)
