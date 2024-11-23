## 과목 : css3 기본문법(css3 syntax)
## 수업일시 : ---
## 수업내용
>[!note+] CSS란?
>- CSS : HTML이나 XML과 같은 구조화된 문서(document)를 화면, 종이에 어떻게 렌더링할 것인지 정의하기 위한 언어
>	- 즉, CSS는 HTML의 각 요소의 style을 정의에어 화면에 어떻게 표현할지 설명해주는 언어이다.
>- HTML5에서는 HTML은 정보와 구조화, CSS는 style 정의라는 각기 다른 업무를 담당하도록 분리되었다.
>	- 두 언어는 별개의 언어(HTML은 CSS를 포함 가능 그러나 역은 불가능)
### 1. selector(선택자)
- html의 스타일을 정의하려면 먼저 어떤 html을 적용할 것인지 선택해야 한다.
	- -> 셀렉터가 이 역할을 해준다.
```css
h1 {color:red; font-size:12px;}
```
- 위 코드를 Rule Set(Rule)이라고 하며 위 rule set은 모든 h1요소를 선택한 후 대괄호 안에 있는 스타일로 지정하였다.
- 위의 코드에서 h1은 selector, 대괄호는 선언 블록이다.
	- 대괄호 안에는 2개의 선언이 있으며 선언은 프로퍼티 : 값; 의 형태로 구성되어있다.
- rule set의 집합을 style sheet(스타일시트)라고 한다.
### 2. property
- 속성. property는 이미 지정되어있는 값이어야 한다.
- 여러개 지정 가능하면 ;로 구분한다.
```css
p {
	color : 000;
	font-size: 111;
}
```
### 3. value(속성값)
- property에 지정하는 값이다.
- 얘도 이미 정의되어있는 범위 안에서 사용해야한다.
```css
p { 
	color: orange; 
	font-size: 16px; 
}
```
### 4. html - css 연동
#### 4.1 link style
- html에서 외부의 css 파일을 로드하는 방식이다.(가장 많이 사용)
```HTML
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href = "css/style.css">
	</head>
	<body>
		<h1>hello world</h1>
	</body>
</html>
```
```css
h1 { background : blue;}
```
#### 4.2 Embedding style
- html 내부에 css 포함시키는 방식
- 근데 잘 안씀...다른 파일로 구분해서 작성하는 link style이 바람직함.
```html
<!DOCTYPE html> 
<html> 
	<head> 
		<style> 
			h1 { color: red; } 
			p { background: aqua; } 
		</style> 
	</head> 
	<body> 
		<h1>Hello World</h1> 
		<p>This is a web page.</p> 
	</body> 
</html>
```
#### 4.3 inline style
- html의 style property에 css를 기술하는 방식
- javascript에서 동적으로 css 생성할 때 사용
- 그치만 그냥 link style 쓰자
### 5. Reset CSS 사용하기
- 보통 내장 스타일이 있어서 CSS가 없어도 되지만 브라우저마다 다르기 때문에 주의가 필요
- 그래서 초기화가 필요한데 이를 Reset CSS가 해준다.
	- Eric Meyer's reset
	- normalize.css
## 할일

## 과목 : css3 lesson2(selector)
## 수업일시 : ---
## 수업내용
>[!note+] Selector란?
>style을 적용하고자 하는 html요소를 특정하는 역할을 한다.
>여러 개의 셀럭터 연속지정하려면 ,(쉼표)로 구분
### 3. 셀럭터 문법
```html
<style>
	/*셀럭터 기본 형식*/
	h1 { color : red; }
	p { color : blue; }
	
	/*중복 셀렉터 지정*/
	h1, p { color : red; }
	
	/* universal selector(모든 요소를 선택) */
	* { color : red;}
	
	/* tag selector(지정된 태그에 한해서 스타일 지정) */
	p { color : blue; } /* 태그가 p인 요소를 선택 */
	
	/* ID selector(지정된 id 속성 값에 한해서 스타일 지정) */
	#p1 { color : red; } /* id 어트리뷰트 값이 p1인 요소를 선택 */
	
	/* class selector(class 어트리뷰트 값 선택) */
	.container { color : red; } /* class 속성 = container인 요소 선택 */
	/* 공백으로 구분하여 여러개 지정 가능 */

	/* Attribute selector(속성값 선택) */
	a[href] { color : red; } /* a 요소 중 href 속성인 요소 선택 */
	a[target="_blank"] { color = red; }
	/* a 요소 중 target 어트리뷰트 값이 _blank인 모든 요소 */
	h1[title~="first"] { color: red; }
	/* h1 요소 중 title 속성 값에 first를 단어로 포함하는 요소 */
	p[lang|="en"] { color : red; }
	/* p 요소 중 lang 속성 값이 "en"과 일치하거나 "en-"로 시작하는 요소 */
	a[href^="https://"] { color : red; }
	/* a 요소 중 href값이 "https://"로 시작하는 요소 */
	a[href$=".html"] { color : red; }
	/* a 요소 중 href값이 ".html"로 끝나는 요소 */
	div[class*="test"] { color: red; }
	/* div 요소 중에서 class 속성 값에 "test"를 포함하는 요소 */
	div[class~="test"] { background-color: yellow; }
	/* div 요소 중 class 속성 값에 "test"를 단어로 포함하는 요소 */
</style>
```

### 4. 복합 셀렉터(combinator)
#### 4.1 후손 셀렉터(descendant combinator)
- 부모요소 : 자신의 1 레벨 상위에 속하는 요소
- 자식요소 : 자신의 1 레벨 하위에 속하는 요소
- 후손 요소(하위 요소) : 자신의 n 레벨 하위에 속하는 요소
- $ 후손 셀렉터는 셀렉터A의 모든 후손 요소 중 셀렉터B와 일치하는 요소
```html
<style>
	div p { color : red };
	/* div인 요소의 후손요소 중 p 요소 선택 */
	
```
- $ 자손 셀렉터는 셀럭터A의 모든 자식 요소 중 셀렉터B와 일치하는 요소
```html
<style>
	div < p { color : red; }
	/* div 요소의 자식요소 중 p 요소 */
```
#### 4.2 형제 셀렉터(sibling combinator)
- 형제 셀렉터는 형제 관계에서 뒤에 위치하는 요소를 선택할 때 사용
##### 4.2.1 인접 형제 셀렉터(Adjacent Sibling Combinator)
- 셀렉터A의 형제 요소 중 셀렉터A 바로 뒤에 위치하는 셀렉터 B요소를 선택
- A와 B 사이에 다른 요소가 있으면 선택 불가
```html
<style>
	p + ul { color: red; }
	/* p 요소의 형제 요소 중 p 요소 바로 뒤에 있는 ul 요소 선택 */
</style>
```
##### 4.2.2 일반 형제 셀렉터(General Sibling Combinator)
- 셀렉터A의 형제 요소 중 셀렉터A 뒤에 위치하는 셀렉터B를 모두 선택
```html
<style>
	p ~ ul { color: red; }
	/* p 요소의 형제 요소 중 p 요소 뒤에 있는 ul 요소를 모두 선택 */
</style>
```
### 5. 가상 클래스 셀렉터(Pseudo-Class Selector)
- 가상 클래스는 요소의 특정 상태에 따라 스타일을 정의할 때 사용
	- 특정상태란 아래와 같다.
		- 마우스가 올라와 있을 때
		- 링크를 방문했을 때, 아직 방문하지 않았을 때
		- 포커스가 들어와있을 때
- 가상 클래스는 . 대신 :를 사용한다. 이미 이름이 CSS 표준에 정의되어있기 때문에 그대로 사용해야 한다.
```css
selector:pesudo-class {
	property: value;
}
```
```css
/* a 요소가 hover 상태일 때 */
a:hover { background-color: red; }
```

#### 5.1 링크 셀렉터, 동적 셀렉터
- Pseudo-class : description
	- :link : 방문하지 않은 링크
	- :visited : 방문한 링크
	- :hover : 마우스가 올라와 있을 때
	- :active : 클릭된 상태
	- :focus : 포커스가 들어와 있을 때
```css
a:link { color: orange; }
```
#### 5.2 UI 요소 상태 셀렉터
- Pseudo-class : description
	- :checked : 셀렉터가 체크상태
	- :enabled : 사용 가능한 상태
	- :disabled : 사용 불가능한 상태
```css
input:enabled + span { color: blue; }
```
#### 5.3 구조 가상 클래스 셀렉터
- Pseudo-class : description
	- :first-child : 셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소 선택
	- :last-child : 셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소 선택
```css
p:first-child { color: red; }
```
- :nth-child(n) : 셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식 요소를 선택
- :nth-last-child(n) : 셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식 요소를 선택
- 이때 n은 0부터 시작하는 정수이고 2n+1, 2n-1과 같이 다양한 수를 만들 수 있으며 음수와 0은 생략하기 때문에 2n+1과 2n-1은 같은 수열을 가진다.

```css
ol > li:nth-child(2n) { color: orange; }
/* ol 요소의 자식 요소인 li 요소 중 짝수번째 요소만 선택 */
ol > li:nth-child(2n+1) { color: green; }
/* ol 요소의 자식 요소인 li 요소 중에서 홀수번째 요소만을 선택 */
```

- :first-of-type : 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 첫번째
- :last-of-type : 셀렉터에 해당하는 요소 중 부모 요소의 자식 요소 중 마지막
- nth-of-type(n) : 셀렉터에 해당하는 요소 중 부모 요소의 자식 요소 중 앞에서 n번째
- nth-last-of-type(n) : 셀렉터에 해당하는 요소 중 부모 요소의 자식 요소 중 뒤에서 n번째
```css
/* p 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 p 요소 */ 
p:first-of-type { color: red; } 
/* p 요소의 부모 요소의 자식 요소 중 마지막 등장하는 p 요소 */ 
p:last-of-type { color: blue; } 
/* p 요소의 부모 요소의 자식 요소 중 앞에서 2번째에 등장하는 p 요소 */ 
p:nth-of-type(2) { color: green; } 
/* p 요소의 부모 요소의 자식 요소 중 뒤에서 2번째에 등장하는 p 요소 */ 
p:nth-last-of-type(2) { color: orange;}
```
- :not(셀렉터) : 셀렉터에 해당하지 않는 모든 요소를 선택
```css
/* input 요소 중 type 속성 값이 password가 아닌 요소 선택 */
input:not([thype=password]) { background: yellow; }
```
- :valid(셀렉터) : 정합성 검증이 성공한 input 요소 또는 form 요소 선택
- :invalid(셀렉터) : 정합성 검증이 실패한 input 요소 또는 form 요소 선택
### 6. 가상 요소 셀렉터
- 가상 요소 : 요소의 특정 부분(첫글자 또는 첫줄, 앞 또는 뒤)
- 가상요소는 두개의 콜론(\:\:) 사용 / 이미 이름이 정해져있기 때문에 임의로 사용 불가

- pseudo-element : description
	- \:\:first-letter : 컨텐츠의 첫글자
	- \:\:first-line : 컨텐츠의 첫줄(블록요소에만 가능)
	- \:\:after : 컨텐츠의 뒤에 있는 공간(일반적으로 content와 같이 사용)
	- \:\:before : 컨텐츠의 앞에 있는 공간(일반적으로 content와 같이 사용)
	- \:\:selection : 드래그한 컨텐츠 선택(일부 브라우저 동작 X)
```css
p::first-letter { font-size: 3em; }
p::first-line { color: red; }
hi::before { 
	content: " HTML!!! ";
	color: blue;	
}
h1::after {
	content : " CSS3!!!";
	color: red;
}
::selection {
	color: red;
	background : yellow;
}
```

## 과목 : CSS3 Units
## 수업일시 : ---
## 수업내용
- CSS 프로퍼티 : 키워드, 크기단위, 색상 표현 단위 등 특정단위 지정
### 1. 키워드
- 각 프로퍼티 별로 사용할 수 있는 키워드 존재
### 2. 크기단위
- px, em, %
	- px : 절대값
	- em, % : 상대값
- 대부분 브라우저 폰트 기본값 : 16px, 1em, 100%
- 프로퍼티 값이 0인 경우 단위 생략 가능
#### 2.1 px
- px(pixel) : 픽셀(화소 1개 크기)
- 대부분 브라우저는 1px = 1/96 인치의 절대 단위로 인식
```css
div {font-size: 14px;}
```
#### 2.2 %
- % : 백분률 단위의 상대단위
	- 요소에 지정된 사이즈에 상대적인 사이즈를 설정
```css
div {font-size: 120%;}
```
#### 2.3 em
- em : 배수 단위로 상대단위
	- 요소에 지정된 사이즈에 상대적인 사이즈 설정
	- ex. 1em = 요소에 지정된 사이즈 / 2em = 요소에 지정된 사이즈 \* 2
```css
div { font-size : 1.2em; }
```
- 중첩된 자식 요소에 em 지정하면 모든 자식요소에 영향이 있기 때문에 주의
#### 2.4 rem
- em 기준은 상속의 영향으로 바뀜.
- 그러나 rem은 최상위 요소의 사이즈를 기준으로 삼음.(rem의 r = root)
```css
div {font-size: 1.2rem;}
```
- 사용자가 브라우저의 기본 폰트 크기를 변경하더라도 레이아웃을 적절하게 조정 가능
- 가변적으로 바뀌는 wrapper 요소 등에 적합
- Reset CSS를 사용하는 경우 사전에 html 요소의 font-size 지정이 필요. 지정 안하면 16px 적용
#### 2.5 Viewport 단위(vh, vw, vmin, vmax)
- 반응형 웹디자인은 동적 대응을 위해 % 사용
	- %는 상속에 의해 상대적 영향 많이 받음
- Viewport 단위는 viewport 기준으로 상대적 사이즈를 의미함
	- vw : viewport 너비의 1/100
	- vh : viewport 높이의 1/100
	- vmin : viewport  너비 or 높이 중 작은 쪽의 1/100
	- vmax : viewport 너비 or 높이 중 큰 쪽의 1/100
### 3. 색상 표현 단위
- 색상 키워드(red, blue, ...) 사용 가능 but 색상 개수 제한
```html
<h2 style="background-color:red">
<h2 style="background-color:black;color:while">
```
- 다양한 색상 위해 아래의 단위 사용 가능
	- HEX 코드 단위 : \#000000
	- RGB : rgb(255, 255, 0)
	- RGBA : rgba(255, 255, 0, 1)
	- HSL : hsl(0, 100%, 25%)
	- HSLA : hsla(60, 100%, 50%, 1)
```html
<style>
	#hex-p1 {background-color:#ff0000;}
	#rgb-p1 {background-color:rgb(0, 255, 0);}
	#rgba-p1 {background-color:rgba(255, 0, 0, 0.3);}
	#hsl-p1 {background-color:hsl(120, 100%, 50%);}
	#hsla-p1 {background-color:hsla(120, 100%, 50%, 0.3);}
```

## 과목 : CSS3 lesson 4(Box Model)
## 수업일시 : ---
## 수업내용
>[!note+] Box
>- 모든 html 요소는 box를 가지고 있다.
>- box는 4가지 요소로 이루어진다.
>	- content : 요소의 텍스트나 이미지 등의 실제 내용이 위치하는 영역
>		- width, height
>	- padding : 테두리 안쪽에 위치하는 요소의 내부 여백 영역
>		- padding은 두께를 의미, 기본색은 투명
>		- 요소에 적용된 배경의 색깔, 이미지는 패딩영역까지 적용
>	- border : 테두리 영역
>		- border 프로퍼티는 테두리의 두께
>	- Margin : 테두리 바깥에 위치하는 요소의 외부 여백 영역
>		- margin 프로퍼티 값은 마진 영역의 두께
>		- 기본은 투명 / 배경색 지정 불가
>- 이를 통해 스타일의 위치 및 정렬을 지정할 수 있다.

### 1. width / height 프로퍼티
- 요소의 너비와 높이 지정하는 데 사용
	- 기준은 컨텐츠 영역
- width, height로 지정한 영역보다 실제 콘텐츠가 크면 영역이 넘치게 됨
```html
<style> 
	div { 
		width: 300px; 
		height: 100px; 
		background-color: cornsilk; 
		border: 5px solid navy; 
	}
</style>
```
- overflow: hidden;을 지정하면 넘친 컨텐츠를 감출 수 있다.
- 전체 너비 : width + left padding + right padding + left border + right border + left margin + right margin
- 전체 높이 : height + top padding + bottom padding + top border + bottom border + top margin + bottom margin
- width와 height 초기값 : auto(알아서 계산해줌)
- 지정하려면 크기 단위 사용(px, % 등)
### 2. margin / padding 프로퍼티
- margin / padding에 한해서 contetn의 4개 방향 지정이 가능하다
	- top, right, left, bottom
- margin값 지정 방법
	- 4개의 값을 지정할 때
		- margin: 25px 50px 75px 100px;
		- margin-top: 25px;
		- margin-right: 50px;
		- margin-bottom: 75px;
		- margin-left: 100px;
	- 3개의 값을 지정할 때
		- margin: 25px 50px 75px;
		- margin-top: 25px;
		- margin-right: 50px; margin-left: 50px;
	- margin-bottom: 75px
	- 2개의 값을 지정할 때
		- margin: 25px 50px;
		- margin-top: 25px; margin-bottom: 25px;
		- margin-right: 50px; margin-left: 50px;
	- 1개의 값을 지정할 때
		- margin: 25px;
		- margin-top: 25px; margin-right: 25px; margin-bottom: 25px; margin-left: 25px;
	- max-width를 사용하면 자동으로 너비를 비율에 맞게 조정해준다.
### 3. border
#### 3.1 border-style
- 테두리 선 스타일 지정
```css
p.dotted { border-style: dotted; } 
p.dashed { border-style: dashed; } 
p.solid { border-style: solid; } 
p.double { border-style: double; } 
p.groove { border-style: groove; } 
p.ridge { border-style: ridge; } 
p.inset { border-style: inset; } 
p.outset { border-style: outset; } 
p.none { border-style: none; } 
p.hidden { border-style: hidden; } 
p.mix { border-style: dotted dashed solid double; }
```
- top, right, left, bottom 지정 가능
#### 3.2 border-width
- border-width : 테두리 두께 지정
	- 마찬가지로 top, right, left, bottom 지정 가능
	- 얘는 border-style과 무조건 같이 써야 한다.
#### 3.3 border-color
- 테두리 색상 지정
	- 마찬가지로 4방향 지정 가능
	- 마찬가지로 border-style과 같이 사용
#### 3.4 border-radius
- 테두리 모서리 둥글게 표현(px, em, % 등 사용)
- 각각의 모서리 마다 radius 개별 지정 가능 / 한번에 지정 가능
- 원 혹은 타원 모양 정의 가능
### 4. box-sizing 프로퍼티
- width, height 대상영역 변경
	- content-box : content영역(기본값)
	- border-box : content, padding, border가 포함된 값
- box-sizing은 상속이 안됨. 그래서 초기화하려면 아래와 같이 정의
```css
html { 
	box-sizing: border-box; 
} 
*, *:before, *:after { 
	box-sizing: inherit; 
}
```
## 과목 : CSS3 lesson5(Display)
## 수업일시 : ---
## 수업내용
### 1. display 프로퍼티
- layout 정의에 자주 사용
	- block : block 특성을 가지는 요소(block 레벨 요소)로 지정
	- inline : inline 특성을 가지는 요소(inline 레벨 요소)로 지정
	- inline-block : inline-block 특성을 가지는 요소(inline-block레벨 요소)로 지정
	- none : 해당 요소를 화면에 표시하지 않는다.(공간이 소멸)
- HTML요소는 기본값으로 block 또는 inline 특성을 갖는다.
- 상속 X
#### 1.1 block 레벨 요소
- block 특성을 갖는 요소의 특징
	- 항상 새로운 라인에서 시작
	- width : 100%
	- width, height, margin, padding 지정 가능
	- block 레벨 요소 내에 inline 레벨 요소 포함 가능
- ex. div, h1, p, ol, ul, li, hr, table, form...
#### 1.2 inline 레벨 요소
- inline 특성 갖는 요소 특징
	- 새로운 라인 시작 X, 문장 중간 삽입 가능
	- content 너비만큼 가로폭 차지
	- width, height, margin-top, margin-bottom 프로퍼티 지정 **불가**
		- 상 하 여백은 line-height로 지정
	- inline 레벨 뒤에 공백 -> space(4px) 자동지정
	- inline 안에 block 포함 불가.
- ex. span, a, strong, img, br, input, select, textarea, button..
#### 1.3 inline-block 레벨 요소
- block, inline 레벨 요소 특징을 모두 갖는다.
### 2. visibility
- 보이게 할지 말지 결정
	- visible : 보이게 함(디폴트)
	- hidden : 보이지 않게함
		- display: none; : 해당 요소의 공간까지 사라지게 함
		- visibility : hidden; : 공간은 그대로
	- collapse : 행이나 열을 보이지 않게함(table 사용)
	- none : table 요소의 column, row 숨김(IE, 파이어폭스에서만 사용)
### 3. opacity
- 투명도 결정(0.0 ~ 1.0)
	- 0.0 : 투명 / 1.0 : 불투명

## 과목 :  CSS3 lesson6(Background)
## 수업일시 : ---
## 수업내용
- 배경이미지 색상 정의
### 1. background-image
- 배경이미지 지정
### 2. background-repeat
- 배경이미지 반복 지정
	- 수직, 수평 또는 모두 반복 가능
- 설정된 이미지 크기가 작으면 자동으로 이미지가 반복 출력되어 표시
	- background-repeat 기본값 : repeat
- x축으로만 반복 : background-repeat -> repeat-x
- y축으로만 반복 : background-repeat -> repeat-y
- 반복 중단 : no-repeat
- 이미지가 여러개 -> 먼저 설정된 이미지가 앞으로 옴
### 3. background-size
- 배경 이미지 사이즈 지정(px, %, cover, contain)
- width, height 모두 지정(첫 번째 값 : width, 두 번째 값 : height)
	- 하나만 지정한 경우 : width만 지정, height는 auto
- px값 지정할 경우 지정값 그대로 설정(첫 번재는 width, 두 번째는 height)
- %값 지정할 경우 %에 비례해서 설정(위와 동일)
- cover 지정할 경우 비율 유지한 채로 부모 요소의 width, height 중 큰값에 이미지를 맞춘다.
- contain 지정할 경우 비율 유지한 채로 부모 요소의 영역에 배경이미지가 보이지 않는 부분없이 전체가 들어갈 수 있도록 크기 조정
### 4. background-attachment
- 화면이 스크롤될 때 배경이미지 고정을 시키려면 background-attachment : fixed
### 5. background-position
- 이미지 좌표 지정(xpos, ypos)
- 기본값은 우측 상단(0%, 0%)
### 6. background-color
- 배경색상 지정
- 색상값 or transparent 키워드 지정 가능
### 7. background Shorthand
- background-color, background-image, background-repeat, background-position 한번에 지정하는 용도
```code
// order
background : color || image || repeat || attachment || position
```
## 과목 : CSS3 lesson7(Font & Text)
## 수업일시 : ---
## 수업내용
### 1. font-size
- 텍스트 크기 지정
```css
.font-size-40 { font-size: 40px; }
```
### 2. font-family
- 폰트 지정
- 이때 해당 폰트가 컴퓨터에 없으면 적용 X
- 여러개 지정이 가능한데 첫 번째 지정한 폰트가 없으면 다음 걸로 넘어감
- 그래서 마지막은 대부분 있는 generic-family 폰트로 지정
- 폰트명은 따옴표로 감싸기. 단 한글자인 경우 감쌀 필요 X
### 3. font-style / font-weight
- font-style : 이탤릭체 지정
- font-weight : 폰트 굵기 지정
```css
.italic { font-style: italic; }
.light { font-weight : lighter; }
```
### 4. font Shorthand
```code
font : font-style(optional) font-variant(optional) font-weight(optional) font-size(mandatory) line-height(optional) font-family(mandatory)
```
### 5. line-height
- 텍스트 높이 지정(수직 정렬에도 사용)
```css
.small {
	line-height: 70;
}
```
### 6. letter-spacing
- 글자 사이의 간격 지정
```css
.loose {
	letter-spacing: 2px;
}
.tight {
	letter-spacing: -1px;
}
```
### 7. text-align
- 텍스트의 수평 정렬
```css
h1 { text-align : center; }
```
### 8. text-decoration
- 링크 underline 제거 가능
- underline, overline, line-through 추가 가능
```css
a { text-decoration: none; } 

p:nth-of-type(1) { text-decoration: overline; } 
p:nth-of-type(2) { text-decoration: line-through; } 
p:nth-of-type(3) { text-decoration: underline; }
```
### 9. white-space
- 공백, 들여쓰기, 줄바꿈

|프로퍼티값|line break|space/tab|wrapping(자동줄바꿈)|
|---|---|---|---|
|normal|무시|1번만 반영|O|
|nowrap|무시|1번만 반영|X|
|pre|반영|그대로 반영|X|
|pre-wrap|반영|그대로 반영|O|
|pre-line|반영|1번만 반영|O|
### 10. text-overflow
- 부모 영역을 벗어난 wrapping(자동 줄바꿈)이 되지 않은 텍스트의 처리 방법 정의
- 대신 조건이 필요
	- width 프로퍼티 지정(block 레벨 요소 변경 필요성 존재)
	- white-space -> nowrap
	- overflow -> visible 말고 다른 값 지정 되어야 함
```css
/* 부모 영역을 벗어난 텍스트를 잘라내어 보이지 않게 하고 말줄임표(...)를 표시한다. */ 
.truncate { 
	width: 150px; /* width가 지정되어 있어야 한다. */ 
	white-space: nowrap; /* 자동 줄바꿈을 방지 */ 
	overflow: hidden; /* 반드시 "visible" 이외의 값이 지정되어 있어야 한다. */ 
	text-overflow: ellipsis; /* ellipsis or clip */ 
}
```

| 프로퍼티값    | Description                          | 비고                                  |
| -------- | ------------------------------------ | ----------------------------------- |
| clip     | 영역을 벗어난 텍스트는 표시X(Default)            |                                     |
| ellipsis | 영역을 벗어난 텍스트를 잘라내어 보이지 않게 하고 말줄임표를 표시 |                                     |
| <!-      | \<string>                            | 프로퍼티 값으로 지정한 임의의 문자열을 출력(파이어폭스만 지원) |
### 11. word-wrap
- 한 단어의 길이가 길어서 부모영역을 벗어난 텍스트의 처리 방법 정의
```css
.word-wrap { word-wrap : break-word; }
```
### 12. word-break
- 한 단어의 길이가 길어서 부모영역을 벗어난 텍스트의 처리 방법 정의
- word-wrap은 단어를 어느정도는 고려하지만 word-brea: brea-all;는 단어를 고려하지 않고 강제 개행한다.
```css
.word-break { word-break: break-all; }
```

## 과목 : CSS3 lesson8(Position)
## 수업일시 : ---
## 수업내용
### 1. position
- 요소의 위치 정의(top, bottom, left, right)
#### 1.1 static(기본위치)
- 기본값
- 위에서 아래로, 왼쪽에서 오른쪽으로 배치
	- 부모 자식 관계면 부모 기준으로
- 이미 설정된 값을 무시할때 사용
#### 1.2 relative(상대위치)
- 기본값을 기준으로 좌표 프로퍼티를 사용하여 위치를 이동시킨다.
```css
.relative-box { 
	position: relative; 
	top: 50px; 
	left: 50px; 
	background: #2E303D; 
	color: #e55c3c; 
	font-weight: bold; 
	text-align: center; 
	line-height: 150px; 
}
```
#### 1.3 absolute(절대위치)
- 부모 요소 또는 가장 가까이 있는 조상요소(static 제외)를 기준으로 좌표 프로퍼티(top, bottom, left, right)만큼 이동
- 즉, relative, absolute, fixed 선언되어있는 부모 또는 조상 요소 기준으로 위치 결정
- 만일 부모 또는 조상이 static인 경우 document body를 기준으로 위치 결정
- 부모 요소를 배치의 기준으로 삼기 위해서는 부모 요소에 relative 정의해야한다.
- 다른 요소가 먼저 위치를 점유하고 있어도 뒤로 밀리지 않고 덮어쓰게 된다(이런 특성을 부유 또는 부유 객체라고 한다.)
- absolute 선언 시 block 레벨 요소의 width는 inline 과 같이 content에 맞게 변화되므로 적절한 width 지정해야한다.
```css
.absolute-box { 
	position: absolute; 
	height: 200px; 
	width: 200px; 
	top: 50px; 
	left: 50px; 
	color: #e55c3c; 
	font-weight: bold; 
	text-align: center; 
	background: #2E303D; 
	line-height: 200px; 
}
```
- relative는 기본위치를 기준으로 위치 이동
- absolute는 부모에 static이외의 다른 프로퍼티가 지정되어있을 경우 부모 기준으로 위치
	- 만일 부모, 조상이 모두 static인 경우 document body를 기준으로 위치
#### 1.4 fixed(고정위치)
- 스크롤해도 위치 고정시키는 용도
### 2. z-index
- z-index에 큰 숫자값을 지정할수록 화면 전면에 출력
### 3. overflow
- overflow
	- visible : 영역을 벗어난 부분 표시
	- hidden : 영역을 벗어난 부분을 잘라냄
	- scroll : 영역 벗어난 부분이 없어도 스크롤
	- auto : 영억을 벗어난 부분이 있을때만 스크롤 표시

## 과목 : CSS3 lesson9(float / 요소 정렬)
## 수업일시 : ---
## 수업내용
- float : 레이아웃을 구성할 때 블록레벨 요소를 가로 정렬하는 데 사용
- float는 해당 요소를 다음 요소 위에 떠 있게 함.
	- property : description
	- none : 떠 있지 않음(기본값)
	- right : 요소를 오른쪽으로 이동
	- left : 요소를 왼쪽으로 이동
### 1. 정렬
- float:left; -> 왼쪽부터 가로정렬
- float:right; -> 오른쪽부터 가로정렬
### 2. width
- width가 inline 요소와 같이  content에 맞게 최소화함.

## 과목 : CSS3 lesson10(Inheritance & Cascading / 스타일의 상속과 적용 우선 순위)
## 수업일시 : 2024-11-23
## 수업내용
### 1. 상속
- 상속 : 상위 요소에 적용된 프로퍼티를 하위 요소가 물려 받는 것
- 상속이 되지 않으면 inherit 키워드 사용해서 명시적 상속 가능
### 2. 캐스캐이딩
- CSS 적용 우선순위 지정. 근데 규칙 존재
	- CSS가 어디에 선언되었는지에 따라서 결정
	- 명확하게 특정 -> 명시도 UP -> 우선순위  UP
	- 선언된 순서에 따라서 결정(나중에 선언될 수록 먼저 적용)
