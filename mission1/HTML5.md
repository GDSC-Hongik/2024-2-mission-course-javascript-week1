## HTML5
##### 요소(Element)
`<start tag> Contents <end tag>`
##### 어트리뷰트(Attribute)
* `<img src="html.png">`
src - attribute name  
"html.png" - attribute value  
* 글로벌 어트리뷰트
모든 HTML 요소가 공통으로 사용할 수 있는 어트리뷰트 (id, class, lang, style, title 등)
## 시멘틱 웹
**웹에 존재하는 수많은 웹페이지들에 메타데이터(Metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상** - 의미론적으로 문서 정보 전달, 효과적인 크롤링과 인덱싱 -> 개발자의 의도가 명시적으로 드러나기 때문에 가독성과 유지보수에 필수!
##### non-semantic 요소
div, span 등이 있으며 이들 태그는 content에 대하여 어떤 설명도 하지 않는다.
##### semantic 요소
form, table, img 등이 있으며 이들 태그는 content의 의미를 명확히 설명한다.
## Tag
`<!DOCTYPE html>` - 문서 형식 정의 태그, 문서 최상위  
`<html> </html>` - 모든 html 요소의 부모 요소 (`<!DOCTYPE html>`는 예외)  
`<html lang="ko">` - 한국어를 주언어로 사용하는 글로벌 어트리뷰트 lang  
`<head> </head>` - 메타데이터를 포함하기 위한 요소  
`<title> </title>` - 제목, 브라우저 탭에 표시  
`<style> </style>` - 스타일 정보 정의  
`<link rel="stylesheet" href="style.css">` - 외부 리소스와의 연계 정보를 정의, 주로 HTML과 외부 CSS 파일을 연계에 사용  
`<meta charset="utf-8">` - 메타데이터 정의에 사용 / 메타데이터는 브라우저, 검색엔진(keywords) 등에 의해 사용 / charset 어트리뷰트는 브라우저가 사용할 문자셋을 정의  
`<body> </body>` - 메타데이터 제외 대부분의 요소가 기술됨  
`Heading Tag` - 제목 나타낼 때 사용 `<h1>`부터 `<h6>`까지 있음 / h1이 가장 크고 중요한 제목  
`Text Formatting Tag` - 글자 형태 지정 `<b> <strong>`: 볼드체 / `<i> <em>`: 기울임 / `<small>`: 작게 / `<mark>`: 형광펜 / `<del>`: 가운데줄 / `<ins>`: 밑줄 / `<sub> <sup>`: 아래, 위  
`본문 태그` - `<p>`: 단락 지정 / `<br>`: 줄바꿈 (빈 요소이므로 종료태그 없음) / 연속 공백은 `&nbsp;` 사용 / `<pre>`: preformatted text, 작성된 그대로 표시 / `<hr>`: 수평줄 (빈 요소이므로 종료태그 없음) / `<q>`: 짧은 인용문, "큰따옴표로 q 요소 감싼다." / `<blockquote>`: 긴 인용문, 들여쓰기
## Hyperlink
HTML link는 hyperlink를 의미하며 a(anchor) tag가 그 역할을 담당한다.
```html
<!DOCTYPE html>
<html>
  <body>
    <a href="http://www.google.com">Visit google.com!</a>
  </body>
</html>
```
##### herf 어트리뷰트
href 어트리뷰트는 이동하고자 하는 경로(path, 파일 시스템 상에서 특정 파일의 위치)를 값으로 받는다.
* 루트 directory
파일 시스템 계층 구조 상의 최상위 디렉터리 `Unix: /` `Windows: C:\`
* 홈 directory
시스템의 사용자에게 각각 할당된 개별 디렉터리 `Unix: /Users/{계정명}` `Windows: C:\Users\{계정명}`
* 작업 directory
작업 중인 파일의 위치한 디렉터리 `./`
* 부모 directory
작업 디렉터리의 부모 디렉토리 `../`
* 절대경로(Absolute path)
루트 디렉터리 기준 특정 파일의 절대적인 위치
* 상대경로(Relative path)
현재 작업 디렉터리 기준 특정 파일의 상대적인 위치
##### taget 어트리뷰트
* _self
링크를 클릭했을 때 연결문서를 현재 윈도우에서 오픈 (기본값)
* _blank
링크를 클릭했을 때 연결문서를 새로운 윈도우나 탭에서 오픈  
`target="_blank"`를 사용해 외부 페이지를 오픈하는 경우, 이동한 외부 페이지에서 자바스크립트 코드를 사용해 악의적인 페이지로 리다이렉트할 수 있는 보안 취약점(Tabnabbing 피싱 공격)이 있다. 따라서 `rel="noopener noreferrer"`를 추가해 Tabnabbing 피싱 공격에 대비할 것을 권장한다.
## 목록(List)과 표(Table)
##### 목록(List)
* 순서 없는 목록 (Unordered List)
`<ul> <li>contents</li> </ul>`
* 순서있는 목록 (Ordered List)
`<ol> <li>contents</li> </ol>`
  * ol tag 안에 type 어트리뷰트를 사용하여 순서를 나타내는 문자 지정 가능  
"1" 숫자(기본값) / "A" 대문자 알파벳 / "a" 소문자 알파벳 / "I" 대문자 로마숫자 / "i" 소문자 로마숫자
  *  start 어트리뷰트로 리스트의 시작값 지정 가능
  * reversed 어트리뷰트를 지정하면 리스트의 순서값을 역으로 표현
##### 표(Table)
* `<table>` 표를 감싸는 태그
* `<tr>` 표 내부의 행 (table row)
* `<th>` 행 내부의 제목 셀 (table heading)
* `<td>` 행 내부의 일반 셀 (table data)
* 테이블 테그의 어트리뷰트  
"border" 표 테두리 두께 / "rowspan" 해당 셀이 점유하는 행의 수 / "colspan" 해당 셀이 점유하는 열의 수

## Image & Multimedia Tag
##### img tag 어트리뷰트
* src: 이미지 파일 경로 / alt: 이미지 파일이 없을 경우 표시되는 문장 / width: 이미지 너비 / height: 이미지 높이
##### audio tag 어트리뷰트
* src: 음악 파일 경로 / preload: 재생 전에 파일을 모두 불러올 것인지 지정 / autoplay: 음악 파일을 자동의 재생 개시할 것인지 지정 / loop: 음악을 반복할 것인지 지정 / controls: 음악 재생 도구를 표시할 것인지 지정
##### video tag 어트리뷰트
* src: 동영상 파일 경로 / poster: 동영상 준비 중에 표시될 이미지 파일 경로 / preload: 재생 전에 동영상 파일을 모두 불러올 것인지 지정 / autoplay: 동영상 파일을 자동의 재생 개시할 것인지 지정 / loop: 동영상을 반복할 것인지 지정 / controls: 동영상 재생 도구를 표시할 것인지 지정 / width, height
## Forms
##### form
* form tag - 사용자가 입력한 데이터 수집  
* attribute  
action=URL: 입력 데이터(form data)가 전송될 URL 지정  
method=get/post: 입력 데이터(form data) 전달 방식 지정 = HTTP request method
##### input
* input tag는 type 어트리뷰트에 의해 구분, form tag 내에 존재
* 서버에 전송되는 데이터는 name 어트리뷰트를 키로, value 어트리뷰트를 값으로하여 `key=value`의 형태로 전송
* button, checkbox, color, date, datetime, email, file, hidden 등
##### select
* 복수개의 리스트에서 복수개의 아이템을 선택할 때 사용
* 서버에 전송되는 데이터는 select 요소의 name 어트리뷰트를 키로, option 요소의 value 어트리뷰트를 값으로하여 `key=value`의 형태로 전송
* select: select form 생성 / option: option 생성 / optgroup: option을 그룹화
##### textarea
* 여러 줄의 글자를 입력할 때 사용
##### button
* `<input type="button">`은 빈 태그이지만 button 태그는 아니므로 텍스트나 이미지 같은 콘텐츠를 사용할 수 있음
* type 어트리뷰트는 반드시 지정하는 것이 바람직하며 어트리뷰트값으로 button, reset, submit를 지정할 수 있음
##### fieldset / legend
* fieldset 태그는 관련된 입력 양식들을 그룹화할 때 사용
* legend 태그는 fieldset 태그 내에서 사용되야 하며 그룹화된 fieldset의 제목을 정의
## Structure
<img src="https://poiemaweb.com/img/building-structure.png" width="50%">