# HTML5 정리

## 1.1 프런트엔드 개발자 학습 방향
- 프런트엔드 개발에 필요한 기술: HTML, CSS, JavaScript, 크로스브라우징 등
- 효율적으로 프로그래밍 학습 방법 그런건 없으니 의식적인 연습 꾸준히 반복하기

## 1.2 HTML5 기본문법

### HTML5 기본작성방법
- 무조건 <!DOCTYPE html> 로 시작해야됨
- <html>과 </html> 사이에 HTML Document 기술하기
- <head>와 </head> 사이에 document title 등을 적는데 브라우저에 보이진 않음
- 브라우저에 보이는건 전부 <body>와 </body>에 기술
- vs code, webstorm등 다양한 editor/IDE 사용이 일반적

### 요소
- 요쇼는 중첩가능 (요소안에 요소 가능)
- 빈 요소도 있음 (br, hr, img 등)

### 어트리뷰트
- 요소의 성질, 특징을 정의하는 명세
```
<img src="html.png"> 같은 느낌
```
- 글로벌 어트리뷰트: 모든 html 요소가 공통으로 사용할 수 있음 / id, class, style, title 등

### 주석
- 개발자들 코드 설명용, 브라우저에 안뜸

## 1.3 시맨틱 요소와 검색 엔진

### 시맨틱 요소
웹사이트 검색엔진 통해 노출 열심히 되야함
검색엔진은 크롤링 통해 웹사이트 정보 수집하고
인덱싱 통해 검색 키워드 대응하는 인덱스 만듦
검색엔진은 HTML코드만으로 의미 인지해야하는데 그게 **시맨틱 요소**임

검색엔진은 h1 요소를 중요시 여김
**시맨틱 태그**:브라우저, 검색엔진, 개발자 모두에게 의미를 명확하게 설명하는거
**시맨틱 웹**: 웹페이지들에 메타데이터 부여하여 웹페이지를 '의미'와 '관련성'을 가지는 거대한 데이터베이스로 구축하고자 하는 발상 

non-semantic 요소: content에 대해 아무 설명도 안함(div, span 등)
semantic 요소: content 대해 명확히 설명(form,table,img 등)

### 새롭게 추가한 시맨틱 태그
header, nav , aside, section 등

## 1.4 웹페이지 구성하는 기본태그

### 문서 형식 정의 tag
웹페이지 형식 보여줌
```
<!DOCTYPE html> // HTML5
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> //HTML 4.01
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> //XHTML 1.0
```

### html tag
모든 HTML 요소의 부모요소이며 모든 요소는 html 요소의 내부에 기술해야함 (<!DOCTYPE>은 예외)
글로벌 어트리뷰트 지원함
```
<html lang="ko">
```

### head tag
메타데이터 포함하기 위한 요소, 웹페이지에 단 하나만 존재
- title tag: 문서의 제목 정의, 브라우저 탭에 표시
- style tag: HTML 문서 위한 style 정보를 정의
- link tag: 외부 리소스와 연계정보 정의, 보통 HTML, 외부 CSS 파일을 연계에 사용
- script tag: client-side JavaScript를 정의, src 어트리뷰트를 사용하면 외부 JavaScript 파일을 로드 가능
- meta tag: description, keywords, author, 기타 메타데이터 정의에 사용, 메타데이터는 브라우저, 검색엔진(keywords) 등에 의해 사용
- charset 어트리뷰트: 브라우저가 사용할 문자셋 정의
```
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript"> :SEO(검색엔진 최적화)를 위해 검색엔진이 사용할 keywords을 정의한다.
<meta name="description" content="Web tutorials on HTML and CSS">  :웹페이지의 설명을 정의한다.
<meta name="author" content="John Doe">                            :웹페이지의 저자을 명기한다.
<meta http-equiv="refresh" content="30">                           :웹페이지를 30초 마다 Refresh한다.
```

### body tag
메타데이터를 제외한 웹페이지를 구성하는 대부분의 요소 나타냄, 웹페이지에 단 하나만 존재

## 1.5 텍스트 관련 태그
### 제목(heading) 태그
제목을 나타낼 때 사용, h1이 제일 중요한 제목 의미, 글자도 가장 큼
시맨틱 웹 생각해서 제목 외에 사용안하는게 좋음

### 글자 형태 (Text Formatting) 태그
```
- <b>: bold체 지정, 중요성 의미 x
- <strong>: bold체 지정, 중요성 의미 o
- <i>: Italic체 지정, 중요성 의미 x
- <em>: emphasized(강조) text를 지정, Italic체로 표현, 중요성 의미 o
- <small>: small 텍스트 지정
- <mark>: highlighted text 지정
- <del>: deleted text(줄글) 지정
- <ins>: inserted text 지정
- <sub>: subscripted text(아래에 쓰인) 지정, <sup> superscripted(위에 쓰인) text 지정
```

### 본문 태그
- p: 단락 지정
- br: 강제 개행 지정, 빈 요소라 종료태그가 없음
- HTML에서는 1개 이상의 연속된 공백 삽입하여도 1개의 공백으로 표시
- 연속적 공백을 삽입하는 방법: 
```
&nbsp;
```
- pre: 형식화된 text 지정, pre 태그 내의 content는 작성된 그대로 브라우저에 표시됨.
- hr: 수평줄 삽입
- q: 짧은 인용문 지정
- blockquote: 긴 인용문 블록 지정

## 1.6 HTML의 핵심 개념인 Hyperlink

- Hyperlink: 한 텍스트에서 다른 텍스트로 건너뛰어 읽는 기능
- a 태그가 그역할 맡음

### href 어트리뷰트
- 이동하고자 하는 파일의 위치를 값으로 받음

#### 디렉터리
디렉터리는 파일과 다른 디렉터리를 갖는 파일 시스템 내의 존재물, 폴더라고도 불림
- 루트 디렉터리: 최상위 디렉터리 // 윈도우: C:\
- 홈 디렉터리: 시스템 사용자에게 각각 할당된 디렉터리 // 윈도우: C:\users\계정명
- 작업 디렉터리: 작업중인 파일의 위치한 디렉터리 // ./
- 부모 디렉터리: 작업 디렉터리의 부모 디렉터리 // ../

#### 파일 경로
파일 시스템에서 파일 위치 나타내는법
- 절대경로: 특정 파일의 절대적인 경로 나타냄 // http://www.mysite.com/index.html , C:\users\leeungmo\Desktop\myImage.jpg 등
- 상대경로: 현재 작업 디렉터리 기준으로 경로 나타냄 // ./index.html , ../dist/index.js 등

- href 어트리뷰트에 사용 가능한 것: 절대 URL, 상대 URL, fragment identifier, 메일, script

### target 어트리뷰트
- _self: 링크 클릭했을 때 연결문서를 현재 윈도우에서 오픈함
- _blank: 링크 클릭했을 때 연결문서를 새 윈도우에서 오픈함
- _blank 사용시 악의적 페이지로 리다이렉트 할수 있는 취약점 있으므로 rel="noopener noreferrer" 추가하자

## 1.7 목록(List)와 표(Table) 형식 표현을 위한 태그

### 목록
- 순서없는 목록: ul
- 순서있는 목록: ol
- type 어트리뷰트 사용해서 순서 나타내는 문자 지정 가능
```
“1”	숫자 (기본값)
“A”	대문자 알파벳
“a”	소문자 알파벳
“I”	대문자 로마숫자
“i”	소문자 로마숫자
```
- start 어트리뷰트로 시작값 지정가능 (ex: start="3" 하면 3. 부터 시작)
- reverse 어트리뷰트로 순서값 역으로 표현 가능
- 중첩목록
```
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

### 테이블
과거엔 테이블 태그로 레이아웃 구성했으나 모던 웹에서는 주로 div태그 사용
- table: 표를 감싸는 태그
- tr: 표 내부의 행 (table row)
- th: 행 내부의 제목 셀 (table heading)
- td: 행 내부의 일반 셀 (table data)
테이블 태그의 어트리뷰트
- border: 표 테두리 두께 지정. (CSS border property를 사용하는 것이 더 나음)
- rowspan: 해당 셀이 점유하는 행의 수 지정
- colspan: 해당 셀이 점유하는 열의 수 지정

## 1.8 이미지의 표현과 동영상, 음악 등 멀티미디어를 지원하는 태그

### 이미지
웹페이지에 이미지 넣을 때 img 태그 사용
- src: 이미지 파일 경로
- alt: 이미지 파일 없을 때 표시되는 문항
- width: 이미지 너비 (css에서 보통 지칭함)
- height: 이미지 높이 (css에서 보통 지칭함)

### 미디어

#### 오디오
- src: 음악 파일 경로
- preload: 재생 전에 음악 파일을 모두 불러올 것인지 지정
- autoplay: 음악 파일을 자동재생 개시할 것인지 지정
- loop: 음악을 반복할 것인지 지정
- controls: 음악 재생 도구를 표시할 것인지 지정

웹브라우저 별로 지원하는 음악 파일 형식이 다르다
source 태그를 사용하여 파일 형식의 차이 문제를 해결 할 수 있음, type 어트리뷰트는 생략 가능

#### 비디오
- src: 동영상 파일 경로
- poster: 동영상 준비 중에 표시될 이미지 파일 경로
- preload: 재생 전에 동영상 파일을 모두 불러올 것인지 지정
- autoplay: 동영상 파일을 자동의 재생 개시할 것인지 지정
- loop: 동영상을 반복할 것인지 지정
- controls: 동영상 재생 도구를 표시할 것인지 지정. 재생 도구의 외관은 브라우저마다 차이가 있다.
- width: 동영상의 너비를 지정
- height: 동영상의 높이를 지정

웹브라우저 별로 지원하는 동영상 파일 형식이 다르다
source 태그를 사용하여 파일 형식의 차이 문제를 해결 할 수 있음, type 어트리뷰트는 생략 가능

## 1.9 사용자와의 커뮤니케이션을 위한 폼 태그

### form
사용자가 입력한 데이터를 수집하기 위해 사용, input, checkbox, button 등 태그 포함가능
- action: URL // 입력 데이터(form data)가 전송될 URL 지정
- method: get / post // 입력 데이터(form data) 전달 방식 지정
- GET 방식: 전송 URL에 입력 데이터를 쿼리스트링으로 보내는 방식
  예) http://jsonplaceholder.typicode.com/posts?userId=1&id=1
  전송 URL 바로 뒤에 ‘?’를 통해 데이터의 시작을 알려주고, key-value형태의 데이터를 추가. 1개 이상의 전송 데이터는 ‘&’로 구분한다.
  URL에 전송 데이터가 모두 노출되기 때문에 보안에 문제가 있으며 전송할 수 있는 데이터의 한계가 있다. (최대 255자).
  REST API에서 GET 메소드는 모든 또는 특정 리소스의 조회를 요청한다
- POST 방식: Request Body에 담아 보내는 방식이다.
  예) http://jsonplaceholder.typicode.com/posts
  URL에 전송 데이터가 모두 노출되지 않지만 GET에 비해 속도가 느림.
  REST API에서 POST 메소드는 특정 리소스의 생성을 요청함

### input
form 태그중 가장 중요한 태그, 사용자로부터 데이터를 입력받기위해 사용
서버에 전송되는 데이터는 name 어트리뷰트를 키로, value 어트리뷰트를 값으로하여 key=value의 형태로 전송

button: 버튼 생성
checkbox: checkbox 생성
color: 컬러 선택 생성
date: date control (년월일) 생성
datetime: date & time control (년월일시분초) 생성. HTML spec에서 drop되었다.
datetime-local: 지역 date & time control (년월일시분초) 생성
email: 이메일 입력 form 생성. submit 시 자동 검증한다.
file: 파일 선택 form 생성
hidden: 감추어진 입력 form 생성
image: 이미지로 된 submit button 생성
month: 월 선택 form 생성	
number: 숫자 입력 form 생성
password: password 입력 form 생성
radio: radio button 생성
range: 범위 선택 form 생성
reset: 초기화 button 생성
search: 검색어 입력 form 생성
submit: 제출 button 생성
tel: 전화번호 입력 form 생성
text: 텍스트 입력 form 생성
time: 시간 선택 form 생성
url: url 입력 form 생성
week: 주 선택 입력 form 생성

### select
복수개의 리스트에서 복수개의 아이템을 선택할 때 사용
서버에 전송되는 데이터는 select 요소의 name 어트리뷰트를 키로, option 요소의 value 어트리뷰트를 값으로하여 key=value의 형태로 전송
select: select form 생성
option: option 생성
optgroup: option을 그룹화한다

### textarea
textarea 태그는 여러 줄의 글자를 입력할 때 사용

### button
button 태그는 클릭할 수 있는 버튼을 생성
<input type="button">과 유사하지만 input 태그는 빈 태그인 반면 button 태그는 그렇지 않다.
따라서 button 요소에는 텍스트나 이미지 같은 콘텐츠를 사용할 수 있음
type 어트리뷰트는 반드시 지정하는 것이 바람직하며 어트리뷰트값으로 button, reset, submit를 지정할 수 있음

### fieldset / legend
fieldset 태그는 관련된 입력 양식들을 그룹화할 때 사용
legend 태그는 fieldset 태그 내에서 사용되야 하며 그룹화된 fieldset의 제목을 정의함

## 1.10 웹페이지의 레이아웃을 구성하기 위해 공간을 분할하는 태그
과거에는 table 태그를 사용하여 레이아웃을 구성하기도 하였으나 모던 웹에서는 주로 div를 사용하여 레이아웃을 구성
div 태그는 의미론적으로 어떠한 의미도 가지고 있지 않기 때문에 HTML5에서 새롭게 추가된 시맨틱 태그를 사용하는 것이 더 나은 방법
header: 헤더를 의미한다
nav: 내비게이션을 의미한다
aside: 사이드에 위치하는 공간을 의미한다
section: 본문의 여러 내용(article)을 포함하는 공간을 의미한다
article: 분문의 주내용이 들어가는 공간을 의미한다
footer: 푸터를 의미한다

div와 span의 차이는 block 레벨 요소와 inline 레벨 요소를 이해하여야 한다