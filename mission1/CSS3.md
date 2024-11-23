# 1강 CSS 기본 문법
CSS(Cascading Style Sheets)는 HTML이나 XML과 같으 ㄴ구조화된 문서를 화면, 종이 등에 어떻게 렌더링 할 것인지를 정의하기 위한 언어이다.
# 2강 셀렉터
클래스 셀렉터에서 클래스 어트리뷰트 값은 공백으로 구분하여 여러개 지정할 수 있다.
`<p class="text-large text-red>Large Red</p>`
# 3강 프로퍼티 값의 단위
## 크기 단위
CSS에서 사용하는 대표적인 크기 단위는 px, em, %이다.
px은 절대값이고 em, %는 상대값이다.
대부분의 브라우저의 폰트 사이즈 기본값은 16px, 1em, 100%이다. 프로퍼티 값이 0인 경우, 단위를 생략할 수 있다.
### px
px은 픽셀(화소) 단위이다. 1px은 화소 1개 크기를 의미한다. 픽셀은 디바이스 해상도(resolution)에 따라 상대적인 크기를 갖는다.

디바이스 별로 픽셀의 크기는 제각각이기 때문에 픽셀을 기준으로 하는 단위는 명확하지 않다. 따라서 **대부분의 브라우저는 1px을 1/96 인치의 절대단위로 인식**한다.

px은 요소의 크기나 이미지의 크기 지정에 주로 사용된다.
### %
%는 백분률 단위의 상대 단위이다. 요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈)에 상대적인 사이즈를 설정한다.
예) 폰트 사이즈가 14px라면 120%는 16.8px

### em
em은 배수(倍數) 단위로 상대 단위이다. 요소에 지정된 사이즈(상속된 사이즈나 디폴트 사이즈)에 상대적인 사이즈를 설정한다. 예를 들어 1em은 요소에 지정된 사이즈와 같고 2em은 요소에 지정된 사이즈의 2배이다.

폰트 사이즈 설정이나 콘텐츠를 포함하는 컨테이너의 크기 설정에 사용하면 상대적인 설정이 가능하여 편리하다.

중첩된 자식 요소에 em을 지정하면 모든 자식 요소의 사이즈에 영향을 미치기 때문에 주의하여야 한다.

### rem
em의 기준은 상속의 영향으로 바뀔 수 있다. 즉, 상황에 따라 1.2em은 각기 다른 값을 가질 수 있다.

rem은 최상위 요소(html)의 사이즈를 기준으로 삼는다. rem의 r은 root를 의미한다.

사용자가 브라우저의 기본 폰트 크기를 변경(Mac Chrome의 경우, 설정 > 고급 설정 표시 > 웹 콘텐츠 > 글꼴 맞춤 설정)하더라도 이에 따라 웹사이트의 레이아웃을 적절히 조정할 수 있다는 장점이 있다. 따라서 폰트 사이즈 뿐만이 아니라 콘텐츠의 크기에 따라 가변적으로 대응하여야 하는 wrapper 요소(container) 등에 적합하다.

# 4강 박스 모델
모든 HTML 요소는 Box 형태의 영역을 가지고 있다. Box 형태란 물론 사각형을 의미한다.

이 Box는 콘텐트(Content), 패딩(Padding), 테두리(Border), 마진(Margin)로 구성된다. (차례대로 박스의 안쪽에서 바깥으로)

- Content: 요소의 텍스트나 이미지 등의 실제 내용이 위치하는 영역이다. width, height 프로퍼티를 갖는다.
- Padding: 테두리(Border) 안쪽에 위치하는 요소의 내부 여백 영역이다. padding 프로퍼티 값은 패딩 영역의 두께를 의미하며 기본색은 투명(transparent)이다. 요소에 적용된 배경의 컬러, 이미지는 패딩 영역까지 적용된다.
- Border: 테두리 영역으로 border 프로퍼티 값은 테두리의 두께를 의미한다.
- Margin: 테두리(Border) 바깥에 위치하는 요소의 외부 여백 영역이다. margin 프로퍼티 값은 마진 영역의 두께를 의미한다. 기본적으로 투명(transparent)하며 배경색을 지정할 수 없다.
## witht / height 프로퍼티
만일 width와 height로 지정한 콘텐츠 영역보다 실제 콘텐츠가 크면 콘텐츠 영역을 넘치게 된다는 것에 유의하여야 한다.

width와 height 프로퍼티의 초기값은 `auto`로써 이것은 브라우저가 상황에 따라 적당한 width와 height 값을 계산할 것을 의미한다.

예를 들어 block 요소의 경우, width는 부모 요소의 100%, height는 콘텐츠의 높이(+ 약간의 여분)가 지정된다.

## margin / padding 프로퍼티
margin / padding 프로퍼티는 content의 4개 방향(top, right, left, bottom)에 대하여 지정이 가능하다
    4개의 값을 지정할 때
    margin: 25px 50px 75px 100px;

    - margin-top: 25px;
    - margin-right: 50px;
    - margin-bottom: 75px;
    - margin-left: 100px;

    3개의 값을 지정할 때
    - margin: 25px 50px 75px;
    - margin-top: 25px;
    - margin-right: 50px; margin-left: 50px;
    - margin-bottom: 75px

    2개의 값을 지정할 때
    - margin: 25px 50px;
    - margin-top: 25px; margin-bottom: 25px;
    - margin-right: 50px; margin-left: 50px;
    
    1개의 값을 지정할 때
    - margin: 25px;
    - margin-top: 25px; margin-right: 25px; margin-bottom: 25px; margin-left: 25px;

margin 프로퍼티에 `auto` 키워드를 설정하면 해당 요소를 브라우저 중앙에 위치 시킬 수 있다.
`margin: 0 auto;`

요소 너비가 브라우저 너비보다 크면 가로 스크롤바가 만들어진다. 이 문제를 해결하기 위해서 `max-width` 프로퍼티를 사용할 수 있다.
`max-width` 프로퍼티를 사용하면 브라우저 너비가 요소의 너비보다 좁아질 때 자동으로 요소의 너비가 줄어든다.
    `max-width` 프로퍼티는 요소 너비의 최대값을, `min-width` 프로퍼티는 요소 너비의 최소값을 지정한다. 예를 들어 `max-width: 300px;`의 경우, 브라우저의 너비가 300px보다 작아지면 요소 너비는 브라우저의 너비에 따라서 작아진다. `min-width: 300px;`의 경우 브라우저의 너비가 300px보다 작아져도 요소 너비는 지정 너비(300px)을 유지한다.

## border 프로퍼티
### boder-style
`border-style` 프로퍼티는 테두리 선의 스타일을 지정한다.

프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능하다.
### border-width
`border-width` 프로퍼티는 테두리의 두께를 지정한다. 프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능하다.

`border-width` 프로퍼티는 border-style과 함께 사용하지 않으면 적용되지 않는다.

### border-color
`border-color` 프로퍼티는 테두리의 색상을 지정한다. 프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능하다.

`border-color` 프로퍼티는 border-style과 함께 사용하지 않으면 적용되지 않는다.

### border-radius
`border-radius` 프로퍼티는 테두리 모서리를 둥글게 표현하도록 지정한다. 프로퍼티 값은 길이를 나타내는 단위(px, em 등)와 %를 사용한다. 각각의 모서리에 border-radius 프로퍼티를 개별적으로 지정할 수도 있고 4개의 모서리를 short-hand로 한번에 지정할 수도 있다.

### box-sizing 프로퍼티
`box-sizing` 프로퍼티는 width, height 프로퍼티의 대상 영역을 변경할 수 있다.

box-sizing 프로퍼티의 기본값은 content-box이다. 이는 width, height 프로퍼티의 대상 영역이 content 영역을 의미한다. box-sizing 프로퍼티의 값을 border-box로 지정하면 마진을 제외한 박스 모델 전체를 width, height 프로퍼티의 대상 영역으로 지정할 수 있어서 CSS Layout을 직관적으로 사용할 수 있게 한다.

box-sizing 프로퍼티는 상속되지 않는다. 따라서 box-sizing 프로퍼티를 사용하도록 초기화하려면 아래와 같이 정의한다.
```css
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
```
# 6강 백그라운드
Background 관련 프로퍼티는 해당 요소의 배경으로 이미지 또는 색상을 정의한다.
## background-image 프로퍼티
요소에 배경 이미지를 지정한다.
## background-repeat 프로퍼티
배경 이미지의 반복을 지정한다. 수직, 수평 또는 수직과 수평 모두의 반복을 지정할 수 있다.

설정된 이미지의 크기가 화면보다 작으면 자동으로 이미지가 반복 출력되어 화면을 채우게 된다. 이것은 `background-repeat` 프로퍼티의 기본값이 `repeat`이기 때문이다.

x축으로만 배경 이미지를 반복할 경우, background-repeat 프로퍼티값에 `repeat-x`, y축으로만 배경 이미지를 반복할 경우, `repeat-y`를 설정한다.

반복 출력을 멈추고 싶은 경우, `background-repeat` 프로퍼티값에 `no-repeat`를 설정한다.
```css
<style>
    body {
      background-image: url("http://poiemaweb.com/img/bg/dot.png");
      background-repeat: no-repeat;
    }
  </style>
```
## background-size 프로퍼티
배경 이미지의 사이즈를 지정한다. 배경 이미지의 고유 비율을 유지하기 때문에 설정에 따라 이미지의 일부가 보이지 않을 수 있다.

프로퍼티값은 px, %, cover, contain 등을 사용한다.

배경이미지의 width, height를 모두 설정할 수 있다. 이때 첫번째 값은 width, 두번째 값은 height를 의미한다. 하나의 값만을 지정한 경우, 지정한 값은 width를 의미하게 되며 height는 auto로 지정된다.

width, height의 프로퍼티값은 공백으로 구분하여야 한다. 프로퍼티값을 쉼표로 구분하면 다른 배경이미지의 너비를 지정하는 것으로 인식되기 때문에 주의가 필요하다.

## background Shorthand
background-color, background-image, background-repeat, background-position를 한번에 정의하기 위한 Shorthand Syntax이다.
```
// order
background: color || image || repeat || attachment || position
```

# 7강 폰트와 텍스트
## font-size 프로퍼티
## font-family 프로퍼티
폰트를 지정한다. 컴퓨터에 해당 폰트가 설치되어 있지 않으면 적용되지 않는다.

폰트는 여러 개를 동시에 지정이 가능하다. 첫번째 지정한 폰트가 클라이언트 컴퓨터에 설치되어 있지 않은 경우, 다음에 지정된 폰트를 적용한다. 따라서 마지막에 지정하는 폰트는 대부분의 OS에 기본적으로 설치되어 있는 generic-family 폰트(Serif, Sans-serif, Mono space)를 지정하는 것이 일반적이다.

폰트명은 따옴표로 감싸주며 폰트명이 한단어인 경우는 따옴표로 감싸주지 않아도 된다.
```css
.serif {
      font-family: "Times New Roman", Times, serif;
    }
```

## font-style / font-weight 프로퍼티
`font-style` 프로퍼티는 이탤릭체의 지정, `font-weight` 프로퍼티는 폰트 굵기 지정에 사용된다.
```
font-style
normal / italic / oblique

font-weight
100 ~ 900 or normal / bold / lighter / bolder
```
## font Shorthand
```
font : font-style(optional) font-variant(optional) font-weight(optional) font-size(mandatory) line-height(optional) font-family(mandatory)
```

## text-align 프로퍼티
텍스트의 수평 정렬을 정의한다.

# 8강 요소의 위치 정의
## position 프로퍼티
`position` 프로퍼티는 요소의 위치를 정의한다. top, bottom, left, right 프로퍼티와 함께 사용하여 위치를 지정한다.
### static (기본위치)
static은 position 프로퍼티의 기본값으로 position 프로퍼티를 지정하지 않았을 때와 같다.

기본적인 요소의 배치 순서에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 순서에 따라 배치되며 부모 요소 내에 자식 요소로서 존재할 때는 부모 요소의 위치를 기준으로 배치된다.

기본적으로 이 값을 지정할 일은 없지만 이미 설정된 position을 무력화하기 위해 사용될 수 있다.

좌표 프로퍼티(top, bottom, left, right)를 같이 사용할 수 없으며 사용할 경우에는 무시된다

### relative (상대위치)
기본 위치(static으로 지정되었을 때의 위치)를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동시킨다. static을 선언한 요소와 relative를 선언한 요소의 차이점은 좌표 프로퍼티의 동작 여부뿐이며 그외는 동일하게 동작한다.

# 9강 요소 정렬
## 정렬
float 프로퍼티를 사용하지 않은 블록 요소들은 수직으로 정렬된다. `float:left`; 프로퍼티를 사용하면 왼쪽부터 가로 정렬되고, `float:right;` 프로퍼티를 사용하면 오른쪽부터 가로 정렬된다.

오른쪽 가로 정렬의 경우, 먼저 기술된 요소가 가장 오른쪽에 출력되므로 출력 순서가 역순이 된다.

float 프로퍼티는 좌측, 우측 가로 정렬만 할 수 있다. 중앙 가로 정렬은 margin 프로퍼티를 사용해야 한다.

# 10강 스타일의 상속과 적용 우선 순위
## 상속
상속이란 상위(부모, 조상) 요소에 적용된 프로퍼티를 하위(자식, 자손) 요소가 물려 받는 것을 의미한다. 상속 기능이 없다면 각 요소의 Rule set에 프로퍼티를 매번 각각 지정해야 한다.

하지만 모든 프로퍼티가 상속되는 것은 아니다. 프로퍼티 중에는 상속이 되는 것과 되지 않는 것이 있다.

color는 상속되는 프로퍼티로서 자식 요소는 물론 자손 요소까지 적용된다. 하지만 button처럼 요소에 따라 상속 받지 않는 경우도 존재한다.

상속되지 않는 경우(상속받지 않는 요소 또는 상속되지 않는 프로퍼티), inherit 키워드를 사용하여 명시적으로 상속받게 할 수 있다.
`color: inherit;`

## 캐스캐이딩(Cascading)
요소는 하나 이상의 CSS 선언에 영향을 받을 수 있다. 이때 충돌을 피하기 위해 CSS 적용 우선순위가 필요한데 이를 **캐스캐이딩(Cascading Order)**이라고 한다.

캐스캐이딩에는 다음과 같이 세가지 규칙이 있다.
 - 중요도: CSS가 어디에 선언 되었는지에 따라서 우선순위가 달라진다.
 - 명시도: 대상을 명확하게 특정할수록 명시도가 높아지고 우선순위가 높아진다.
 - 선언순서: 선언된 순서에 따라 우선 순위가 적용된다. 즉, 나중에 선언된 스타일이 우선 적용된다.
 ### 중요도
 CSS가 어디에 선언 되었는지에 따라서 우선순위가 달라진다.

1. head 요소 내의 style 요소
2. head 요소 내의 style 요소 내의 `@import` 문
3. `<link>` 로 연결된 CSS 파일
4. `<link>` 로 연결된 CSS 파일 내의 `@import` 문
5. 브라우저 디폴트 스타일시트

### 명시도
대상을 명확하게 특정할수록 명시도가 높아지고 우선순위가 높아진다
`!important > 인라인 스타일 > 아이디 선택자 > 클래스/어트리뷰트/가상 선택자 > 태그 선택자 > 전체 선택자 > 상위 요소에 의해 상속된 속성`

### 선언순서
선언된 순서에 따라 우선 순위가 적용된다. 즉, 나중에 선언된 스타일이 우선 적용된다.