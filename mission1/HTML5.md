<HTML>
2강 
#1 HTML이란?
- 웹페이지의 내용과 구조를 담당하는 언어로써 HTML 태그를 통해 정보를 구조화하는 것
#2 Hello World
<!DOCTYPE html>   -> 이걸로 반드시 시작
<html>
    <head>
        <meta charset="utf-8">
        <title>Hello World</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <p>안녕하세요! HTML5</p>
    </body>
</html>
- <head> 와 </head> 사이에는  document titlem 외부 파일의 참조, 메타데이터의 설정등을 기술
- <body> 와 </body> 사이에는 웹브라우저에 출력되는 모든 요소를 기술
#3 HTML5의 기본 문법
1. 요소
- 시작 태그와 종료 태그 사이에 위치한 content로 구성
<p>Hello</p>
->HTML document는 요소들의 집합이다.
- 빈 요소
content를 가질 수 없는 요소 -> content가 없고 어트리뷰트(attribute)만을 가질 수 있음
ex) <meta charset="utf-8">
2. 어트리뷰트(attribute/속성)
= 요소의 성질, 특징을 정의하는 명세
시작 태그에 위치해야 하며 이름과 값의 쌍을 이룬다

3강
시맨틱 웹
크롤링 : 검색엔진의 크롤러가 로봇이라는 프로그램을 이용해 매일 전세계의 웹사이트 정보를 수집하는 것
인덱싱 : 이용자가 검색할 만한 키워드를 미리 예상하여 검색 키워드에 대응하는 인덱스를 만들어 두는 것
인덱스를 생성할 때 사용되는 젙보는 웹사이트의 GTML 코드이다. 이때 시맨틱 요소를 해석한다.
<font size="6"><b>Hello</b></font>
<h1>Hello</h1>
위 두개의 출력값은 같으나 2행이 개발자가 의도한 요소의 의미가 명확히 드러나 코드의 가독성을 높이고 유지보수를 쉽게한다.
시맨틱 태그 : 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할
시맨틱 웹 : 웹에 존재하는 많은 웹페이지들에 메타데이터를 부여하여 기존의 잡다한 데이터 집합이었던 웹페이지를 '의미'와 관련성을 가지는 거대한 데이터베이스로 구축하고자하는 발상

4강
#1 문서 형식 정의 tag
-> 출력할 웹페이지의 형식을 브라우저에게 전달
HTML5 : <!DOCTYPE html>
HTML 4.01 : <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
XHTML 1.0 : <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
#2 html tag
html 태그는 모든 HTML 요소의 브모 요소이다. 즉, 모든 요소는 html 요소의 자식 요소이며 html 요소 내부에 기술해야한다.
#3 head tag
head 요소는 메타데이터를 포함하기 위한 요소
메타데이터 : HTML 문서의 title, style, link, script에 대한 데이터로 화면에 표시하지 않는다.
- title tag : 문서의 제목을 정의, 정의된 제목은 브라우저의 탭에 표시된다
- style tag : HTML 문서를 위한 style 정보를 정의
- link tag : 외부 리소스와의 연계 정보를 정의, 주로 HTML 과 외부 CSS 파일을 연계할때 사용
- script tag : client-side JavaScript를 정의, src 어트리뷰트를 사용하면 외부 JavaScript 파일을 로드할 수 있음
- meta tag : description, keywords, author, 기타 메타데이터 정의에 사용된다. 메타데이터는 브라우저, 검색엔진 등에 의해 사용됨
#4 body tag
HTML 문서의 내용을 나타내며 웹페이지에 단 하나만 존재한다, 웹페이지를 구성하는 대부분의 요소가 기술된다.

5강
#1 제목(Heading) 태그
Heading 태그 -> h1 ~ h6 : 글자 크기 h1부터 h6까지 점점 글씨 크기 작아짐
#2 글자 형태(Text Formatting) 태그
- b : bold체, 의미론적(semantic) 중요성의 의미는 없음
- strong : bold체, 의미론적(semantic) 중요성의 의미를 가짐
- i : italic체, 의미론적(semantic) 중요성의 의미는 없음
- em : italic체, 의미론적(semantic) 중요성의 의미를 가짐
- small : small text
- mark : highlighted text
- del : deleted (removed) text, 가운데에 줄로 쫙 그어진 글씨로 표시됨
- ins : inserted (added) text, 밑줄이 그어진 글씨로 표시됨
- sub : subscripted (아래에 쓰인) text
- sup : superscripted (위에 쓰인) text
#3 본문 태그
- p : 단락(paragraphs)
- br : (강제)개행 (line break)을 지정 -> enter 역할
- 연속적 공백을 삽입하는 방법 : &nbsp; 를 쓴다
- pre : 형식화된(preformatted) text를 지정, pre태그 내의 content는 작성된 그대로 브라우저에 표시됨 즉 공백이 많든 줄바꿈이 많든 내가 쓴 고대로 출력된다 이말
- hr : 수평줄을 삽입
- q : 짧은 인용문(quotation)을 지정, 브라우저는 인용부호(큰따옴표)로 q요소를 감싼다
- blockquote : 긴 인용문 블록을 지정, 브라우저는 blockquote요소를 들여쓰기한다. css를 이용하여 다양한 style을 적용할 수 있음.

6강
HTML link는 hyperlink를 의미
a(anchor) tag 가 그 역할을 함
#1
href 어트리뷰트 : 이동하고자 하는 파일의 위치(경로)를 값으로 받는다
- directory : 파일과 다른 디렉터리를 갖는 파일 시스템 내의 존재물로서 폴더라고도로 불리운다
-> 루트 디렉터리 : 파일 시스템 계층 구조 상의 최상위 디렉터리
-> 홈 디렉터리 : 시스템의 사용자에게 각각 할당된 개별 디렉터리이
-> 작업 디렉터리 : 작업중인 파일이 위치한 디렉터리
-> 부모 디렉터리 : 작텁 디렉터리의 부모 디렉토리
- 파일경로 : 파일시스템에서 파일의 위치를 나타내는 방법
-> 절대경로 : 현재 작업 디렉터리와 관계없이 특정 파일의 절대적인 위치를 가리킨다. 루트 디렉터리를 기준으로 파일의 위치를 나타낸다.
-> 상대경로 : 현재 작업 디렉터리를 기준으로 특정 파일의 상대적인 위치르 기리킨다.
#2 target 어트리뷰트
target 어트리뷰트 : 링크를 클릭했을 떄 윈도울ㄹ 어떻게 오픈할 지를 지정
- _self : 링크를 클릭했을 때 연결문서를 현재 윈도우에서 오픈 (기본값) 
-> 보안 취약을 방지해 rel="noopener noreferrer"를 추가
- _blank : 링크를 클릭했을 때 연결문서를 새로운 윈도우나 탭에서 오픈

7강
#1 목록
- 순서 없는 목록
<!DOCTYPE html>
<html>
  <body>
    <h2>순서없는 목록 (Unordered List)</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </body>
</html>
-> 동글뱅이 문양 리스트가 생김
- 순서 있는 목록
<!DOCTYPE html>
<html>
  <body>
    <h2>순서있는 목록 (Ordered List)</h2>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </body>
</html>
-> 숫자 번호가 붙은 리스트가 생김
- type 어트리뷰트를 사용하여 순서를 나타내는 문자를 지정할 수 있다
- start 어트리뷰트로 리스트의 시작값을 지정할 수 있다
- reversed 어트리뷰트를 지정하면 리스트 순서값을 역트로 표현할 수 있다.
#2 테이블
- table : 표를 감싸는 태그
- tr : 표 내부의 행
- th : 행 내부의 제목 셀
- td : 행 내부의 일반 셀
- 테이블 태그의 어트리뷰트
-> border : 표 테두리 두께 지정(CSS border property를 사용하는 것이 더 나은 방법
-> rowspan : 해당 셀이 점유하는 행의 스 지정
-> colspan : 해당 셀이 점유하는 열의 수 지정

8강
#1 이미지
img tag 을 이용
이미지 태그 어트리뷰트
- src : 이미지 파일 경로
- alt : 이미지 파일이 없을 경우 표시되는 문장
- width : 이미지의 너비 (CSS에서 지정하는 것이 일반적)
- height : 이미지의 높이 (CSS에서 지정하는 것이 일반적)
#2 미디어
1) audio
audio tag의 어트리뷰트
- src : 음악 파일 경로 
- preload : 재생 전에 음악 파일을 모두 불러올 것인지 지정
- autoplay : 음악 파일을 자동의 재생 개시할 것인지 지정
- loop : 음악을 반복할 것인지 지정
- controls : 음악 재생 도구를 표시할 것인지 지정. 재생 도구의 외관은 브라우저마다 차이가 있다.
2) 비디오
video tag 의 어트리뷰트
src : 동영상 파일 경로
poster : 동영상 준비 중에 표시될 이미지 파일 경로
preload : 재생 전에 동영상 파일을 모두 불러올 것인지 지정
autoplay : 동영상 파일을 자동의 재생 개시할 것인지 지정
loop : 동영상을 반복할 것인지 지정
controls : 동영상 재생 도구를 표시할 것인지 지정. 재생 도구의 외관은 브라우저마다 차이가 있다.
width : 동영상의 너비를 지정
height : 동영상의 높이를 지정

9강
#1 form
사용자가 입력한 데이터를 수직하기 위해 사용
-> input, textarea, button, select, checkbox, radio button, submit button 등의 입력 양식 태그를 포함
(1) get
- 전송 URL에 입력 데이터를 쿼리스트링으로 보내는 방식
- 전송 URL 바로 뒤에 ‘?’를 통해 데이터의 시작을 알려주고, key-value형태의 데이터를 추가한다. 1개 이상의 전송 데이터는 ‘&’로 구분한다.
- REST API에서 GET 메소드는 모든 또는 특정 리소스의 조회를 요청한다.
(2) post
- POST 방식은 Request Body에 담아 보내는 방식이다.
- URL에 전송 데이터가 모두 노출되지 않지만 GET에 비해 속도가 느리다.
- REST API에서 POST 메소드는 특정 리소스의 생성을 요청한다.
form tag example
<body>
  <form action="http://jsonplaceholder.typicode.com/users" method="get">
    ID: <input type="text" name="id" value="1"><br>
    username: <input type="text" name="username" value="Bret"><br>
    <input type="submit" value="Submit">
  </form>
</body>
-> submit button이 클릭되면 input 태그에 입력된 데이터가 form 태그의 method 어트리뷰트에 지정된 방식으로 action 어트리뷰트에 지정된 서버측의 처리 로직에 전달된다.
#2 input
- form 태그 중에서 가장 중요한 태그, 사용자로부터 데이터를 입력받기 위해 사용
- type 어트리부트에 의해 종류가 구분됨
- form 태그 내에 존재하여야 입력데이터를 전송할 수 있으나 ajax를 사용할시에는 그러지 않아도 됨
- 서버에 전송되는 데이터는 name 어트리뷰트를 키로, value 어트리뷰트를 값으로하여 key=value의 형태로 전송됨
[type 어트리뷰트 값]
- button : 버튼 생성
- checkbox : checkbox 생성
- color : 컬러 선택 생성
- date : date control (년월일) 생성
- datetime : date & time control (년월일시분초) 생성. HTML spec에서 drop되었다.
- datetime-local : 지역 date & time control (년월일시분초) 생성
- email : 이메일 입력 form 생성. subumit 시 자동 검증한다.
- file : 파일 선택 form 생성
- hidden : 감추어진 입력 form 생성
- image : 이미지로 된 submit button 생성
- month : 월 선택 form 생성	
- number : 숫자 입력 form 생성
- password : password 입력 form 생성
- radio : radio button 생성	 
- range : 범위 선택 form 생성
- reset : 초기화 button 생성
- search : 검색어 입력 form 생성
- submit : 제출 button 생성
- tel : 전화번호 입력 form 생성
- text : 텍스트 입력 form 생성
- time : 시간 선택 form 생성
- url : url 입력 form 생성
- week : 주 선택 입력 form 생성
#3 select
- 복수개의 리스트에서 복수개의 아이템을 선택할 때 사용
[태그]
- select : select form 생성
- option : option 생성
- optgroup : option을 그룹화한다
-> 서버에 전송되는 데이터는 select 요소의 name 어트리뷰트를 키로, option 요소의 value 어트리뷰트를 값으로하여 key=value의 형태로 전송된다.
#4 textarea
- 여러줄의 글자를 입력할 때 사용
#5 button
-  클릭할 수 있는 버튼을 생성
- <input type="button">과 유사하지만 input 태그는 빈 태그인 반면 button 태그는 그렇지 않다.  텍스트나 이미지 같은 콘텐츠를 사용할 수 있다.
- type 어트리뷰트는 반드시 지정하는 것이 바람직하며 어트리뷰트값으로 button, reset, submit를 지정할 수 있다
#6 fieldset / legend
- fieldset 태그 : 관련된 입력 양식들을 그룹화할 때 사용
- legend 태그 : fieldset 태그 내에서 사용되야 하며 그룹화된 fieldset의 제목을 정의한다.

10강
structure
- 공간을 분할할 수 있는 태그는 div, span, table
- 모던 웹에서는 주로 div를 사용하여 레이아웃을 구성, 그러나 div 태그는 의론적으로 의미가 없기 때문에 새롭게 추가된 시맨틱 태그를 사용하는 것이 더 굳
[새롭게 추가된 시맨틱 태그들]
- header : 헤더를 의미한다
- nav : 내비게이션을 의미한다
- aside : 사이드에 위치하는 공간을 의미한다
- section : 본문의 여러 내용(article)을 포함하는 공간을 의미한다
- article : 분문의 주내용이 들어가는 공간을 의미한다
- footer : 푸터를 의미한다