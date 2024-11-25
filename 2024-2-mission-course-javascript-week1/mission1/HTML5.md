# HTML 기본 문법 정리

### Semantic 태그 ('의미'와 '관련성'을 지닌 태그)

- header: 헤더를 의미한다.
- nav: 내비게이션을 의미한다.
- aside: 사이드에 위치하는 공간을 의미한다.
- section: 본문의 여러 내용(article)을 포함하는 공간을 의미한다.
- article: 본문의 주내용이 들어가는 공간을 의미한다.
- footer: 푸터를 의미한다.

### 텍스트 관련 태그

- <code>em:</code> emphasized text 지정 (Italic체로 표현됨)<br>
  ex) <em>This text is emphasized
- <code>mark:</code> highlighted text 지정(노란색 형광팬 표시)<br>
  ex) HTML <mark>Marked</mark> Formatting
- <code>ins:</code> inserted text 지정(밑줄 표시)<br>
  ex) My favorite color is <ins>green</ins>.
- <code>hr:</code> 수평줄을 삽입한다. (Markdownd의 #와 같음)<br>

### HTML의 핵심 개념인 Hyperlink

#### 한 텍스트에서 다른 텍스트로 건너뛰어 읽을 수 있는 기능

- Target 어트리뷰트 <br>
  1. <code>\_self:</code>링크를 클릭했을 때 연결문서를 현재 윈도우에서 오픈한다.(기본값)
  2. <code>\_blank:</code>링크를 클릭했을 때 연결문서를 새로운 윈도우나 탭에서 오픈한다.
     ex) <a href="www.naver.com" target="_blank">네이버</a>

### 사용자와의 커뮤니케이션을 위한 폼태그

- Form 태그

  1. <code>action:</code> 입력 데이터가 전송될 URL 지정
  2. <code>method:</code> 입력 데이터 전달 방식 지정(get/post)
     ex) <\form action="www.naver.com" method = "get">

- Input 태그
  1. <code>button:</code>
     ex) '
     <input type="button" value="Click me">
     '
  2. <code>checkbox:</code>
     ex) <input type="checkbox" name="fruit" value="grape"> 포도
  3. <code>datetime:</code>
     ex) <input type="datetime">

### 웹페이지의 레이아웃을 구성하기 위해 공간을 분할하는 태그

- header, nav, aside, section, article, footer
