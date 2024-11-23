## 과목 : HTML5 lesson 2
## 수업일시 : ---
## 수업내용
### Lesson2
#### 1. HTML5
- HTML :  웹페이지의 내용(content)와 구조(structure)를 담당하는 언어
	- 이를 통해 웹페이지를 기술할 수 있다.(마크업 언어)
- HTML을 이용하여 아래의 기능을 구현할 수 있다.
	- 멀티미디어 : 플러그인 없이 비디오 및 오디오 기능 지원
	- 그래픽 : 2차원 그래픽, 3차원 그래픽 지원
	- 통신 : HTML5로 넘어오면서 서버와의 양방향 통신 가능
	- 디바이스 접근 : 하드웨어 기능을 직접 제어
	- 오프라인 및 저장소 : 오프라인 상태에서도 애플리케이션 동작 가능
	- 시맨틱 태그 : HTML 요소의 의미를 설명하는 태그
		- 이를 통해 콘텐츠의 의미를 명확하게 전달 가능
	- CSS3 : CSS3를 지원
#### 2. Hello HTML5
- HTML5 문서는 반드시 \<!DOCTYPE html>으로 시작한다.
- 실제 코드는 \<html>과 \</html> 사이에 작성
- \<head>와 \</head> 사이에는 브라우저에 표시되지 않는 정보가 기입
	- document title, 외부파일 참조, metadata
- \<body>와 \</body> 사이에는 브라우저에 표시되는 정보가 기입
- HTML5 문서를 편집하려면 editor or IDE를 사용하자.
#### 3. HTML5의 기본문법
##### 3-1. element
```html
<p>Hello</p>
// <p> : start tag
// Hello : content
// </p> : end tag
```
- HTML 문서는 element의 집합으로 구성
- 태그는 소문자 쓰자.
###### 3-1-1. element 중첩
- 요소는 중첩이 가능하다. 즉 부자관계가 성립한다.
```html
<!DOCTYPE html> 
<html> 
	<head> 
		<meta charset="utf-8"> 
	</head> 
	<body> 
	<h1>안녕하세요</h1> 
	<p>반갑습니다!</p> 
	</body> 
</html>
```
- 위 코드를 확인해보면 html 안에 head와 body가 있고 body 안에 h1, p가 있는 것을 알 수 있다.
- 중첩을 구분하기 위해 들여쓰기 사용
##### 3-1-2. empty element
- content를 가질 수 없는 요소를 "빈 요소"라고 한다.
- 아래의 코드는 빈 요소이고 attribute만 가진다.
```html
<meta charset="utf-8">
```
- 대표적인 빈 요소 : br, hr, img, input, link, meta
#### 3-2. attribute
- attribute : element의 성질, 특징을 정의
- attribute는 element에 추가적인 정보를 제공하는 역할
- attribute만 존재하는 경우도 있음(empty element)
- attribute는 시작태그에 위치 이름과 값의 쌍을 이룬다.
	- ex. \<img src = "html.png">
	- 위 예시를 보면 \<attribute 이름 = attribute 값> 의 형태임을 알 수 있다.
##### 3-2-1. global attribute
- global attribute : 대체로 모든 요소가 공통으로 사용할 수 있는 attribute

| Attribute | Description                                |
| --------- | ------------------------------------------ |
| id        | 유일한 식별자인 id를 요소에 지정한다. 중복 지정 불가            |
| class     | style sheet에 정의된 class를 요소에 지정한다. 중복 지정 가능 |
| hidden    | 브라우저에 노출되지 않는다.                            |
| lang      | 지정된 요소의 언어를 지정한다.                          |
| style     | 요소에 inline style을 지정한다.                    |
| tabindex  | 사용자가 페이지를 내비게이션 시 이동순서를 정한다.               |
| title     | element의 제목을 정한다.                          |
 
#### 3-3. 주석
- 주석 표기 방법 : \<!-- 주석 표시하기 -->
- 다른 언어와 마찬가지로 브라우저에 표시 X
## 할일

## 과목 : HTML5 lesson 3
## 수업일시 : --- 
## 수업내용
### 시맨틱 웹(semantic web)
- 웹사이트는 검색엔진에 간택을 받으면 받을수록 노출 빈도가 상승
- 이때 검색엔진에 간택을 잘 받으려면 semantic element를 사용해야한다.
- sementic element는 태그 이름만으로도 어떤 컨텐츠인지 명확하게 알 수 있는 요소를 말한다.
```html
<font size = "6"><b>Hello</b></font>
<h1>Hello</h1>
```
- 위 두 코드는 같은 의미인데 위 코드는 무슨 뜻인지 알아보기 어렵다.
- 아래 코드는 바로 알 수 있는데 h1은 제목 중 최상위 레벨이라는 걸 말한다.
- 아래 코드에 사용된 태그를 시맨틱 태그라고 한다.
- 시맨틱 웹은 시맨틱 태그를 사용하여 웹페이지의 의미가 뚜렷하게 표현한 웹을 말한다.
- 새롭게 추가된 semantic tag
	- header : 헤더
	- nav : 네비게이션
	- aside : 사이드 공간
	- section : 본문의 여러 내용을 포함하는 공간
	- article : 본문의 주내용이 들어가는 공간
	- footer : 푸터
## 할일
## 과목 : HTML5 lesson4(기본문법(basic))
## 수업일시 : ---
## 수업내용
### 1. 문서 형식 정의 tag
- 출력할 웹페이지의 형식을 브라우저에 전달(제일 맨 위에 작성 / 대소문자 구별 X)
- 문서별 양식이 다르다(내용은 아래와 같다.)
	- HTML5
		- \<!DOCTYPE html>
	- HTML 4.01
		- \<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	- XHTML 1.0
		- \<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
### 2. html tag
- 모든 html요소의 부모 요소, 웹페이지에 단 하나만 존재
- \<!DOCTYPE> 제외한 모든 요소는 모두 html 요소 안에 기술
- html은 global attribute 지원. 특히 lang attribute 사용
	- ex. \<html lang = "ko">
### 3. head tag
- head 요소는 metadata를 포함하기 위한 요소. 단 하나만 존재
- head요소는 웹페이지에 표시 X
#### 3-1. title tag
- 문서의 제목 정의 / 정의된 제목은 브라우저의 탭에 표시
#### 3-2. style tag
- HTML 문서를 위한 style 정보 정의
	- 배경색, 글씨 색상 등 정보 포함
#### 3-3. link tag
- 외부리소스와의 연계정보 정의
	- HTML - 외부 CSS 파일 연계에 사용
```html
<link rel="stylesheet" href = "style.css">
```
#### 3-4. script tag
- client-side JavaScript 정의
	- src attribute를 사용하면 외부 자바스크립트 파일 로드 가능
```html
<script> document.addEventListener('click', function () {
	alert('Clicked!);
	});
</script>
```
```html
<script src = "main.js"></script>
```
#### 3.5 meta tag
- meta는 description, keywords, author, 기타 metadata 정의에 사용
	- metadata는 브라우저, 검색엔진 등에 사용
- charset attribute는 브라우저가 사용할 문자셋 정의
```html
<meta charset="utf-8">
<!-- 지금부터 utf-8 문자셋을 사용할거야! -->
```
- 검색엔진 최적화를 위해 검색엔진이 사용할 keywords 정의
```html
<meta name="keywords" content="HTML, CSS, XML, XHTML, Javascript">
<!-- 검색엔진이 사용할 keywords : html, css, xml, xhtml, javascript -->
```
- 웹페이지의 저자를 명기
```html
<meta name="author" content="John Doe">
<!-- 만든사람(저자) 명시-->
```
- 웹페이지를 30초마다 refresh
```html
<meta http-equiv="refresh" content="30">
```
### 4. body tag
- 얘도 웹페이지에 단 하나만 존재
- 메타데이터를 제외하면 대부분 body 안에 위치
```html
<html> 
	<head> 
		<meta charset="utf-8"> 
		<title>문서 제목</title> 
	</head> 
	<body> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
	</body> 
</html>
```
## 할일

## 과목 : HTML5 lesson5(텍스트 태그)
## 수업일시 : ---
## 수업내용
### 1. heading tag
- 제목을 나타낼 때 사용
- h1 ~ h6까지 사용 (1이 최상위, 6이 최하위)
- semantic web의 의미를 살려서 제목 말고는 사용 X
```html
<!DOCTYPE html>
<html>
	<body>
		<h1>heading 1</h1>
		<h2>heading 1</h2>
		<h3>heading 1</h3>
		<h4>heading 1</h4>
		<h5>heading 1</h5>
		<h6>heading 1</h6>
	</body>
</html>
```
### 2. Text Formatting tag

| tag name | function             | semantic meaning |
| -------- | -------------------- | ---------------- |
| b        | bold(굵은 글씨)          | X                |
| strong   | bold(굵은 글씨)          | O                |
| i        | italic(기울임)          | X                |
| em       | italic(기울임)          | O                |
| small    | small text(폰트 크기 작게) |                  |
| mark     | highlighted(형광색 강조)  |                  |
| del      | deleted(취소선)         |                  |
| ins      | 밑줄                   |                  |
| sub      | 지정텍스트를 원래보다 아래에 위치   |                  |
| sup      | 지정텍스트를 원래보다 위에 위치    |                  |
- sub/sup 예시
```html
<!DOCTYPE html> 
<html> 
	<body> 
		<p>This is <sub>subscripted</sub> text.</p> 
		<p>This is <sup>superscripted</sup> text.</p> 
	</body> 
</html>
<!--
This is             text.
		subscripted
		superscripted
This is             text.
-->
```
### 3. 본문 태그
#### 3.1 p
- 문단 지정(paragraphs)
```html
<!DOCTYPE html>
<html>
	<body>
		<p>abcabc</p>
		<p>efgefg</p>
	<body>
</html>
<!--
abcabc

efgef
-->
```
#### 3.2 br
- 줄바꿈 / empty element라서 종료 태그가 없음(\</br은 존재하지 않음)
```html
<!DOCTYPE html>
<html>
	<body>
		<p>This is<br> a para<br>graph with line breaks</p>
	</body>
</html>
<!--
This is
a para
graph with line breaks
-->
```
- HTML에서는 1개 이상의 연속된 공백을 삽입하여도 1개로 표시
- 1개 이상의 연속된 줄바꿈도 1개의 공백으로 표시
- 연속적 공백 삽입은 &nbsp; 사용
#### 3.3 pre
- 형식화된 text 지정 / pre 안에 있는 내용은 작성한 표시 그대로 브라우저에 표시
#### 3.4 hr
- 수평줄을 삽입 / 마찬가지로 종료 태그 X
#### 3.5 q
- 짧은 인용문을 지정 / 브라우저는 큰따옴표로 q 요소를 감싸서 표현
- ex. \<q>Build a future where people live in harmony with nature.\</q> -> "Build a future where people live in harmony with nature."
#### 3.6 blockquote
- 긴 인용문 지정
- 브라우저는 blockquote요소를 들여쓰기함 / 여기는 큰따옴표 X
- css를 사용해서 다양한 style 지정 가능
## 할일

## 과목 : HTML5 lesson 6(Hyperlink)
## 수업일시 : ---
## 수업내용
## 하이퍼링크란?
- 한 텍스트에서 다른 텍스트로 건너뛰어 읽을 수 있는 기능
- 여기서 하이퍼는 정보가 다중으로 연결되어있는 상태를 의미
- 따라서 기존 문서나 텍스트를 사용자가 원하는 순서대로 취득할 수 있는 기능을 제공 -> 하이퍼링크
- a(anchor) tag로 구현가능
```html
<!DOCTYPE html>
<html>
	<body>
	<a href="http://www.google.com">Visit google.com!</a>
	</body>
</html>
```
- 결과 : [Visit google.com!](http://www.google.com/)
### 1. href attribute
- 이동하고자 하는 파일의 위치(경로 / path)를 값으로 받음
#### 1.1 directory
- 디렉터리 : 폴더
	- 루트 디렉터리 : 구조상 최상위 디렉터리
	- 홈 디렉터리 : 사용자에게 할당된 개별 디렉터리
	- 작업 디렉터리 : 작업중인 파일이 위치한 디렉터리
	- 부모 디렉터리 : 작업 디렉터리의 상위(부모) 디렉터리
#### 1.2 file path
- 파일 경로 : 파일시스템에서 파일의 위치를 나타내는 방법
	- 여기에는 절대경로와 상대경로가 있다.
		- 절대경로 : 루트 디렉터리를 기준으로 위치를 표현
		- 상대경로 : 지금 작업하고 있는 디렉터리를 기준으로 위치를 표현
- href attribute에 사용가능한 값은 아래와 같다.

| Value               | Description                                           |
| ------------------- | ----------------------------------------------------- |
| 절대 URL              | 웹사이트 URL (href=”http://www.example.com/default.html”) |
| 상대 URL              | 자신의 위치를 기준으로한 대상의 URL (href=”html/default.html”)      |
| fragment identifier | 페이지 내의 특정 id를 갖는 요소에의 링크 (href=”#top”)                |
| 메일                  | mailto:                                               |
| script              | href=”javascript:alert(‘Hello’);”                     |
### 2. target attribute
- target attribute는 링크를 클릭했을 때 윈도우를  어떻게 오픈할 지를 지정한다.
	- \_self : 링크를 클릭했을 때 연결문서를 현재 윈도우에서 오픈
	- \_blank : 링크를 클릭했을 때 연결문서를 새로운 윈도우에서 오픈
		- 얘를 사용할 경우 자바스크립트 코드를 사용해 악의적인 페이지로 강제 전환하는 보안취약점이 존재
		- 따라서 rel = "noopener noreferrer"를 추가해 피싱공격에 대비할 것을 권장 / 성능상 이점도 존재
## 할일
## 과목 : HTML5 - List & Table
## 수업일시 : ---
## 수업내용
### 1. List
#### 1.1 순서없는 목록
```html
<ul>
	<li>coffee</li>
	<li>tea</li>
</ul>
```
>[!note]+ 결과
>- coffee
>- tea

#### 1.2 순서없는 목록
```html
<ol>
	<li>coffee</li>
	<li>tea</li>
</ol>
```
>[!note+] 결과
>1. coffee
>2. tea

- type 속성을 사용해서 순서를 나타내는 문자 지정도 가능
	- 1 : 숫자(default)
	- A : 대문자 알파벳
	- a : 소문자 알파벳
	- I : 대문자 로마숫자
	- i : 소문자 로마숫자
- start 속성으로 리스트의 시작값을 지정할 수 있다.
	- start = "3"으로 하면 3부터 카운트(3, 4, 5, ...)
- reversed 속성을 사용하면 리스트순서값의 역순으로 표현
	- 원래 1,2,3이라면 reverse 적용한 후 3, 2, 1로 카운트
```html
<ol reversed>
	<li>coffee</li>
	<li>tea</li>
</ol>
```
#### 1.3 중첩 테이블
```html
<!DOCTYPE html> 
<html> 
	<body> 
	<h2>중첩 목록</h2> 
	<ul> 
		<li>Coffee</li> 
		<li>Tea 
			<ol> 
				<li>Black tea</li> 
				<li>Green tea</li> 
			</ol> 
		</li> 
		<li>Milk</li> 
	</ul> 
	</body> 
</html>
```
>[!note+] 결과
>## 중첩목록
>- coffee
>- tea
>	1. black tea
>	 2. Green tea
>- milk
### 2. table
#### table tag

| tag   | description               |
| ----- | ------------------------- |
| table | 표를 감싸는 태그                 |
| tr    | 표 내부의 행(table row)        |
| th    | 행 내부의 제목 셀(table heading) |
| td    | 행 내부의 일반 셀(table data)    |
#### table tag's attribute

| attribute | description                                     |
| --------- | ----------------------------------------------- |
| border    | 표 테두리 두께 지정(CSS border property를 사용하는 게 더 best) |
| rowspan   | 해당 셀이 점유하는 행의 수 지정                              |
| colspan   | 해당 셀이 점유하는 열의 수 지정                              |
```html
<!-- 예시 -->
border: 1px solid black; 
border-collapse: collapse;
<th colspan="2">Telephone</th>
<th rowspan="2">Telephone:</th>
```
## 할일

## 과목 : HTML5 - Image & Multimedia
## 수업일시 : ---
## 수업내용
### 1. 이미지
- 이미지 삽입은 img tag
- img tag 속성
	- src : 이미지 파일 경로
	- alt : 이미지 파일 없을 때 표시되는 문장
	- width : 이미지의 너비(보통 css에서 지정)
	- height : 이미지의 높이(보통 css에서 지정)
```html
<!DOCTYPE html> 
<html> 
	<body> 
		<img src="assets/images/doug.jpg" alt="doug" width="100"> 
		<img src="assets/images/wrongname.gif" alt="이미지가 없습니다."> 
	</body> 
</html>
```
### 2. 미디어
#### 2.1 audio
- html5에 새롭게 추가된 태그. 이전 버전은 사용불가
- audio 태그 속성
	- src : 음악 파일 경로
	- preload : 재생 전 음악 파일을 모두 불러올 것인지 지정
	- autoplay : 음악 파일을 자동재생할 건지 지정
	- loop : 음악 반복 재생할 건지 지정
	- controls : 음악 재생도구를 표시할 것인지 지정, 재생 도구 외관은 브라우저마다 다름
```html
<!DOCTYPE html> 
<html> 
	<body> 
		<audio src="assets/audio/Kalimba.mp3" controls></audio> 
	</body> 
</html>
```
- 웹 브라우저마다 지원하는 음악 형식이 다른데 이는 아래와 같다. 

| Browser           | MP3      | Wav | Ogg |
| ----------------- | -------- | --- | --- |
| Internet Explorer | YES      | NO  | NO  |
| Chrome            | YES      | YES | YES |
| Firefox           | YES(24~) | YES | YES |
| Safari            | YES      | YES | NO  |
| Opera             | YES(25~) | YES | YES |
- source tag를 사용해서 문제 해결 가능. type 속성은 생략 가능
#### 2.2 video
- 마찬가지로 html5 이전 버전은 사용 불가
- video 태그 속성
	- src : 비디오 경로
	- poster : 비디오 썸네일
	- preload : 재생 전에 동영상 파일 모두 불러올 건지 말건지 지정
	- autoplay : 자동재생 지정
	- loop : 반복재생 지정
	- controls : 동영상 재생도구 표시할 것인지 지정. 위와 마찬가지로 브라우저마다 다름
	- width : 동영상의 너비 지정
	- height : 동영상의 높이 지정
- 파일 형식의 차이 문제 존재하고 source 태그 사용해서 문제 해결. type 속성은 생략 가능

| Browser           | MP4      | WebM | Ogv |
| ----------------- | -------- | ---- | --- |
| Internet Explorer | YES      | NO   | NO  |
| Chrome            | YES      | YES  | YES |
| Firefox           | YES(21~) | YES  | YES |
| Safari            | YES      | NO   | NO  |
| Opera             | YES(25~) | YES  | YES |

## 할일
## 과목 : HTML5 - Forms
## 수업일시 : ---
## 수업내용
### 1. form
- form은 사용자의 입력데이터를 수집하기 위해 사용되며 아래와 같은 입력양식태그를 사용할 수 있다.
	- input, textarea, button, select, checkbox, radio button, submit button 등
- form 속성
	- action(value : URL) : 입력데이터(form data)가 전송될 URL 지정
	- method(value : get/post) : 입력데이터(form data) 전달 방식 지정
		- get과 post는 **HTTP request method**(http 프로토콜을 이용해서 사용자 입력데이터를 서버에 전달)
			- get
				- URL에 입력데이터를 쿼리스트링으로 보내는 방식
				- URL 뒤에 ?를 통해 데이터의 시작을 암시, key-value형태의 데이터 추가. 1개 이상의 데이터는 &로 구분
				- 보안 문제 취약, 전송 데이터 한계 존재(max 255자)
				- REST API에서 get 메소드는 **모든 or 특정 리소스의 조회**를 요청
			- post
				- post 방식은 request body에 담아 보내는 방식
				- 보안문제는 양호, 그러나 get에 비해 속도는 현저히 낮음
				- REST API에서 post 메소드는 **특정 리소스 생성** 요청
- submit button이 클릭되면 input 태그에 입력된 데이터가 form 태그의 method 어트리뷰트에 지정된 방식으로 action 어트리뷰트에 지정된 서버측의 처리 로직에 전달된다.
### 2. input
- input 태그는 사용자로부터 데이터를 입력받기 위해 사용된다.(제일 중요)
- input 태그는 다양한 종류가 있는데 type 어트리뷰트에 의해 구분된다. 
	- form 태그 내에 존재하여야 입력 데이터를 전송할 수 있음.
	- but [ajax](https://poiemaweb.com/js-ajax)를 사용할 시에는 form 태그 내에 존재하지 않아도 된다.
- 서버에 전송되는 데이터는 name 어트리뷰트를 키로, value 어트리뷰트를 값으로하여 key=value의 형태로 전송된다.

| type 어트리뷰트값    | Description                                           | HTML5 추가 | IE     | FF  | CR  | SF  | OP  |
| -------------- | ----------------------------------------------------- | -------- | ------ | --- | --- | --- | --- |
| button         | 버튼 생성                                                 |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| checkbox       | checkbox 생성                                           |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| color          | 컬러 선택 생성                                              | ◯        | X      | ◯   | ◯   | X   | ◯   |
| date           | date control (년월일) 생성                                 | ◯        | X      | X   | ◯   | ◯   | ◯   |
| datetime       | date & time control (년월일시분초) 생성. HTML spec에서 drop되었다. | ◯        | X      | X   | X   | X   | X   |
| datetime-local | 지역 date & time control (년월일시분초) 생성                    | ◯        | X      | X   | ◯   | ◯   | ◯   |
| email          | 이메일 입력 form 생성. subumit 시 자동 검증한다.                    | ◯        | ◯(10~) | ◯   | ◯   | X   | ◯   |
| file           | 파일 선택 form 생성                                         |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| hidden         | 감추어진 입력 form 생성                                       |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| image          | 이미지로 된 submit button 생성                               |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| month          | 월 선택 form 생성                                          | ◯        | X      | X   | ◯   | ◯   | ◯   |
| number         | 숫자 입력 form 생성                                         | ◯        | ◯(10~) | ◯   | ◯   | ◯   | ◯   |
| password       | password 입력 form 생성                                   |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| radio          | radio button 생성                                       |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| range          | 범위 선택 form 생성                                         | ◯        | ◯(10~) | ◯   | ◯   | ◯   | ◯   |
| reset          | 초기화 button 생성                                         |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| search         | 검색어 입력 form 생성                                        | ◯        | X      | X   | ◯   | ◯   | X   |
| submit         | 제출 button 생성                                          |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| tel            | 전화번호 입력 form 생성                                       | ◯        | X      | X   | X   | X   | X   |
| text           | 텍스트 입력 form 생성                                        |          | ◯      | ◯   | ◯   | ◯   | ◯   |
| time           | 시간 선택 form 생성                                         | ◯        | X      | X   | ◯   | ◯   | ◯   |
| url            | url 입력 form 생성                                        | ◯        | ◯(10~) | ◯   | ◯   | X   | ◯   |
| week           | 주 선택 입력 form 생성                                       | ◯        | X      | X   | ◯   | ◯   | ◯   |

### 3. select
- 복수개의 리스트에서 복수개의 아이템을 선택할 때 사용한다. 
- 서버에 전송되는 데이터 : key = value -> name 속성(selected element) = value 속성(option element)

|tag|Description|
|---|---|
|select|select form 생성|
|option|option 생성|
|optgroup|option을 그룹화한다|
### 4. textarea
- 여러 줄의 글자를 입력할 때 사용
```html
<!DOCTYPE html> 
<html> 
	<body> 
		<textarea name="message" rows="10" cols="30">Write something here</textarea> 
	</body> 
</html>
```
### 5. button
- 클릭할 수 있는 버튼 생성
- input태그를 사용해서(\<input type = "button">) 구현이 가능하지만 input은 empty element, button은 empty element가 아니라서 다양한 컨텐츠를 사용할 수 있다.
- type attribute는 무조건 지정. 다른 속성으로는 button, reset, submit이 있다.
- button은 컨텐츠로 문자열과 HTML요소도 받을 수 있다.
	- 이때 오래된 IE를 사용하게 되는 경우 결과가 달라지기 때문에 이때는 input을 사용하자.
### 6. fieldest / legend
- fieldest 태그는 관련된 입력 양식들을 그룹화할 때 사용.
- legend 태그는 fieldset 태그 내에서 사용되야 하고 그룹화된 fieldset 제목을 정의


## 할일
## 과목 : HTML5 lesson10(웹페이지 레이아웃)
## 수업일시 : ---
## 수업내용
- 웹페이지 레이아웃을 구성하려면 공간을 분할해야한다.
- 공간분할 태그는 div, span, table 다양하게 존재
- 요즘은 div 태그 사용, 그러나 semantic tag가 아니기 때문에 아래의 semantic tag를 사용하는게 좋다.
	- 그러나 아래의 태그들은 IE에서 작동하지 않기때문에 각별한 주의가....

| tag     | Description                 |
| ------- | --------------------------- |
| header  | 헤더                          |
| nav     | 내비게이션                       |
| aside   | 사이드에 위치하는 공간                |
| section | 본문의 여러 내용(article)을 포함하는 공간 |
| article | 분문의 주내용이 들어가는 공간            |
| footer  | 푸터(마지막 공간)                  |

## 할일









































