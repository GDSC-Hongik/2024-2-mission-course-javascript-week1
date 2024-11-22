# CSS

CSS는 HTML이나 XML과 같은 구조화된 문서를 화면, 종이 등에 어떻게 렌더링할 것인지를 정의하기 위한 언어  
HTML의 각 요소의 스타일을 정의하여 화면 등에 어떻게 렌더링하면 되는지 브라우저에게 설명하기 위한 언어

## 기본 문법

### 셀렉터(선택자)

셀렉터는 스타일을 적용하고자 하는 HTML 요소를 선택하기 위해 CSS에서 제공하는 수단  
`h1 {color:red; font-size:12px;}`  
위를 rule set이라 하며, 셀렉터에 의해 선택된 특정 HTML요소를 어떻게 렌더링할 것인지 브라우저에 지시하는 역할

### 프로퍼티(속성)와 값(속성값)

셀렉터로 HTML 요소를 선택하고 {} 내에 프로퍼티와 값을 지정하는 것

```css
p {
  color: orange;
  font-size: 15px;
}
```

### HTML과 CSS 연동 방법

1. link style

HTML에서 외부에 있는 CSS 파일을 로드하는 방식

```HTML
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1>Hello World</h1>
        <p>This is a web page.</p>
    </body>
</html>
```

```CSS
h1 {color:red;}
p {background:blue;}
```

2. embedding style

HTML 내부에 CSS를 포함시키는 방식

```HTML
<!DOCTYPE html>
<html>
    <head>
        <style>
            h1 {color:red;}
            p {background:aqua;}
        </style>
    </head>
    <body>
        <h1>Hello World</h1>
        <p>This is a web page.</p>
    </body>
</html>
```

3. inline style

HTML 요소의 style 프로퍼티에 CSS를 기술하는 방식

```HTML
<!DOCTYPE html>
<html>
    <body>
        <h1 style="color:red">Hello World</h1>
        <p style="background:blue">This is a web page.</p>
    </body>
</html>
```

## 셀렉터(selector)

스타일을 적용하고자하는 HTML 요소를 셀렉터로 특정하고 선택된 요소에 스타일을 정의하는 것

    h1 {color:red;font-size:12px;}

에서 h1이 셀렉터, 중괄호 안쪽이 선언 블록이 된다.  
복수개의 셀렉터를 연속하여 지정할 수 있으며 쉼표(,)로 구분한다.

#### 셀렉터 종류

1. 전체 셀렉터

   패턴 : _  
   Description : HTML 문서 내의 모든 요소를 선택, html 요소를 포함한 모든 요소가 선택된다.  
   에시 : `_ {color:red;}`

2. 태그 셀렉터

   패턴 : 태그명  
   Description : 지정된 태그명을 가지는 요소를 선택  
   예시 : `p { color:red; }`

3. ID 셀렉터

   패턴 : #id 어트리뷰트 값  
   Description : id 어트리뷰트 값을 지정하여 일치하는 요소를 선택, id 어트리뷰트 값은 중복될 수 없는 유일한 값  
   예시 : `#p1 { color:red; }`

4. 클래스 셀렉터

   패턴 : .class 어트리뷰트 값  
   Description : class 어트리뷰트 값을 지정하여 일치하는 요소를 선택, class 어트리뷰트 값은 중복될 수 있음  
   예시 : `.container { color:red; }`

5. 어트리뷰트 셀렉터

   패턴 : 셀렉터[어트리뷰트]  
   Description : 지정된 어트리뷰트를 가지는 요소를 선택  
   예시 : `a[href] { color:red; }   `

   <hr>

   패턴 : 셀렉터[어트리뷰트="값"]  
   Description : 지정된 어트리뷰트를 가지며 지정된 값과 어트리뷰트의 값이 일치하는 모든 요소를 선택  
   예시 : `a[target="_blank"] { color:red; }`

   <hr>

   패턴 : 셀렉터[어트리부트~="값"]  
   Description : 지정된 어트리뷰트의 값이 지정된 값을 단어로 포함하는 요소를 선택  
   예시 : `h1[title~="first"] { color:red; }`

   <hr>

   패턴 : 셀렉터[어트리뷰트|="값"]  
   Description : 지정된 어트리뷰트의 값과 일치하거나 지정 어트리뷰트 값 뒤 연이은 하이픈으로 시작하는 요소를 선택  
   예시 : `p[lang|="en"] { color:red; }`

   <hr>

   패턴 : 셀렉터[어트리뷰트^="값"]  
   Description : 지정된 어트리뷰트 값으로 시작하는 요소를 선택  
   예시 : `a[href^="https://"] { color:red; }`

   <hr>

   패턴 : 셀렉터[어트리뷰트$="값"]  
   Description : 지정된 어트리뷰트 값으로 끝나는 요소를 선택  
   예시 : `a[href$=".html"] { color:red; }`

   <hr>

   패턴 : 셀렉터[어트리뷰트*="값"]  
   Description : 지정된 어트리뷰트 값을 포함하는 요소를 선택  
   예시 : `div[class*="test"] { color:red; }`

6. 복합 셀렉터

   후손 셀렉터 : 자신의 1 level 상위에 속하는 요소를 부모 요소, 1 level 하위에 속하는 요소를 자손 요소라 한다. 자신보다 n level 하위에 속하는 요소는 후손 요소라 한다.

   자식 셀렉터 : 자손 셀렉터는 셀렉터A의 모든 자식 요소 중 셀렉터B와 일치하는 요소를 선택한다.

   형제 셀렉터 : 형제 관계에서 뒤에 위치하는 요소를 선택할 때 사용

7. 가상 클래스 셀렉터

   가상 클래스는 요소의 특정 상태에 따라 스타일을 정의할 때 사용됨

   - 마우스가 올라와 있을 때
   - 링크를 방문했을 때와 아직 방문하지 않았을 때
   - 포커스가 들어와 있을 때

   이러한 특정 상태에는 원래 클래스가 존재하지 않지만 가상 클래스를 임의로 지정하여 선택하는 방법임

   | pseudo-class         | Description                                                                           |
   | -------------------- | ------------------------------------------------------------------------------------- |
   | :link                | 셀렉터가 방문하지 않은 링크일 때                                                      |
   | :visited             | 셀렉터가 방문한 링크일 때                                                             |
   | :hover               | 셀렉터에 마우스가 올라와 있을 때                                                      |
   | :active              | 셀렉터가 클릭된 상태일 때                                                             |
   | :focus               | 셀렉터에 포커스가 들어와 있을 때                                                      |
   | :checked             | 셀렉터가 체크 상태일 때                                                               |
   | :enabled             | 셀렉터가 사용 가능한 상태일 때                                                        |
   | :disabled            | 셀렉터가 사용 불가능한 상태일 때                                                      |
   | :first-child         | 셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택                              |
   | :last-child          | 셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택                              |
   | :nth-child(n)        | 셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택                        |
   | :nth-last-child(n)   | 셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택                        |
   | :first-of-type       | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 요소를 선택         |
   | :last-of-type        | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 마지막에 등장하는 요소를 선택       |
   | :nth-of-type(n)      | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 앞에서 n번째에 등장하는 요소를 선택 |
   | :nth-last-of-type(n) | 셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 뒤에서 n번째에 등장하는 요소를 선택 |
   | :not(셀렉터)         | 셀렉터에 해당하는 않는 모든 요소를 선택                                               |
   | :valid(셀렉터)       | 정합성 검증이 성공한 input요소 또는 form 요소를 선택                                  |
   | :invalid(셀렉터)     | 정합성 검증이 실패한 input 요소 또는 form 요소를 선택                                 |

8. 가상 요소 셀렉터

   가상 요소는 요소의 특정 부분에 스타일을 적용하기 위하여 사용

   - 요소 콘텐츠의 첫글자 또는 첫줄
   - 요소 콘텐츠의 앞 또는 뒤

   | pseudo-element | Description                                                                 |
   | -------------- | --------------------------------------------------------------------------- |
   | ::first-letter | 콘텐츠의 첫글자를 선택                                                      |
   | ::first-line   | 콘텐츠의 첫줄을 선택, 블록 요소에만 적용 가능                               |
   | ::after        | 콘텐츠의 뒤에 위치하는 공간을 선택, 일반적으로 content 프로퍼티와 함께 사용 |
   | ::before       | 콘텐츠의 앞에 위치하는 공간을 선택, 일반적으로 content 프로퍼티와 함께 사용 |
   | ::selection    | 드래그한 콘텐츠를 선택                                                      |

## 프로퍼티 값의 단위

각 프로퍼티에 따라 사용할 수 있는 키워드가 존재한다.

#### 크기 단위

대표적인 크기 단위는 px, em, %  
px는 절대값, em, %는 상대값

#### 색상 표현 단위

색상 지정을 위한 키워드 사용  
사용이 간편하지만 표현할 수 있는 색상의 수는 제한됨

## 박스 모델

모든 HTML 요소는 box 형태(사각형)의 영역을 가지고 있음

| 명칭    | 설명                                                                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| content | 요소의 텍스트나 이미지 등의 실제 내용이 위치하는 영역. width, height 프로퍼티를 가짐                                                                               |
| padding | 테두리 안쪽에 위치하는 요소의 내부 여백 영역. padding 프로퍼티 값은 패딩 영역의 두께를 의미하며 기본색은 투명. 요소에 적용된 배경색, 이미지는 패딩 영역까지 적용됨 |
| border  | 테두리 영역으로 border 프로퍼티 값은 테두리의 두께를 의미                                                                                                          |
| margin  | 테두리 바깥에 위치하는 요소의 외부 여백 영역. margin 프로퍼티 값은 마진 영역의 두께를 의미. 기본적으로 투명하며 배경색을 지정할 수 없음                            |

```HTML
<!DOCTYPE html>
<html>
    <head>
        <style>
            div {
                background-color : lightgrey;
                width: 300px;
                padding : 25px;
                border: 25px solid navy;
                margin: 25px;
            }
        </style>
    </head>
    <body>
        <h2>Box Model</h2>
        <div>This is box</div>
    </body>
</html>
```

#### width/height 프로퍼티

width와 height 프로퍼티는 요소의 너비와 높이를 지정하기 위해 사용  
지정된 요소의 너비와 높이는 콘텐츠 영역을 대상으로 함

width와 height로 지정한 콘텐츠 영역보다 실제 콘텐츠가 크면 콘텐츠 영역을 넘치게 된다는 것에 유의!

#### margin/padding 프로퍼티

content의 4개 방향(top, right, left, bottom)에 대하여 지정이 가능

margin 프로퍼티에 auto 키워드를 설정하면 해당 요소를 브라우저 중앙에 위치시킬 수 있음

#### border 프로퍼티

- border-style 프로퍼티는 테두리 선의 스타일을 지정  
  예시 : dotted, dashed, solid, double 등등

      프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능

- border-width 프로퍼티는 테두리의 두께를 지정  
  예시 : initial, thin, thick 등등

      프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능

- border-color 프로퍼티는 테두리의 색상을 지정  
  border-style과 함께 사용하지 않으면 적용되지 않음

      프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능

- border-radius 프로퍼티는 테두리 모서리를 둥글게 표현하도록 지정  
  프로퍼티 값은 길이를 나타내는 단위(px, em)와 %를 사용  
  각각의 모서리에 개별적으로 지정할 수도 있고 4개의 모서리를 short-hand로 한번에 지정할 수도 있음

- border 프로퍼티는 border-width, border-style, border-color를 한번에 설정하기 위한 shorthand 프로퍼티

#### box-sizing 프로퍼티

width, height 프로퍼티의 대상 영역을 변경할 수 있음  
기본값은 content-box이고 border-box로 지정하면 마진을 제외한 박스 모델 전체를 대상 영역으로 지정할 수 있음

## display, visibility, opacity 프로퍼티

#### display 프로퍼티

layout 정의에 자주 사용되는 중요한 프로퍼티  
상속되지 않음

- block 레벨 요소  
  항상 새로운 라인에서 시작하며 화면 크기 전체의 가로폭을 차지함, width, height, padding, margin 프로퍼티 지정이 가능하며 block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있음

- inline 레벨 요소  
  새로운 라인에서 시작하지 않으면 문장 중간에 들어갈 수 있음  
  content의 너비만큼 가로폭을 차지  
  width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없음  
  inline 레벨 요소 뒤에 공백이 있는 경우 정의하지 않은 space가 자동 지정됨  
  inline 레벨 요소 내에 block 레벨 요소를 포함할 수 없음

- inline-block 레벨 요소  
  block과 inline 레벨 요소의 특징을 모두 가짐

#### visibility 프로퍼티

| 키워드   | 설명                                             |
| -------- | ------------------------------------------------ |
| visible  | 해당 요소를 보이게 함(기본값)                    |
| hidden   | 해당 요소를 보이지 않게 함                       |
| collapse | table 요소에 사용하며 행이나 열을 보이지 않게 함 |
| none     | table 요소의 row나 column을 보이지 않게 함       |

#### opacity 프로퍼티

opacity 프로퍼티는 요소의 투명도를 정의함  
0.0 ~ 1.0 => 0이 투명, 1이 불투명을 의미

## 백그라운드

백그라운드 관련 프로퍼티는 해당 요소의 배경으로 이미지 또는 색상을 정의

#### background-image 프로퍼티

요소에 배경 이미지를 지정

#### background-repeat 프로퍼티

배경 이미지의 반복을 지정  
x축으로만 반복할 경우 프로퍼티 값에 `repeat-x`, y축으로만 반복할 경우 `repeat-y`를 설정  
반복 출력을 멈추고 싶은 경우 프로퍼티 값에 `no-repeat`를 설정

#### background-size 프로퍼티

배경 이미지의 사이즈를 지정  
프로퍼티 값은 px, %, cover, contain 등을 사용

#### background-attachment 프로퍼티

일반적으로 화면을 스크롤하면 배경 이미지도 함께 스크롤됨  
화면이 스크롤되더라도 고정되어 있게 하려면 `background-attachment`프로퍼티에 `fixed` 키워드를 지정

#### background-position 프로퍼티

이미지의 좌표(xpos, ypos)를 지정할 수 있음

#### background-color 프로퍼티

요소의 배경 색상을 지정  
색상값 또는 transparent 키워드 지정 가능

#### background Shorthand

background-color, background-image, background-repeat, background-position를 한번에 정의하기 위한 Shorthand Syntax

## 폰트와 텍스트

폰트 및 텍스트 관련 프로퍼티는 폰트의 크기, 지정, 스타일, 정렬 등을 정의

#### font-size 프로퍼티

텍스트의 크기를 정의

#### font-family 프로퍼티

폰트를 지정  
폰트는 여러개를 동시에 지정 가능

#### font-style/font-weight 프로퍼티

`font-style` 프로퍼티는 이탤릭체의 지정, `font-weight` 프로퍼티는 폰트 굵기 지정에 사용됨

#### font shorthand

#### line-height 프로퍼티

텍스트의 높이를 지정  
텍스트 수직 정렬에도 응용되어 사용됨

#### letter-spacing 프로퍼티

글자 사이의 간격을 지정

#### text-align 프로퍼티

텍스트의 수평 정렬을 정의

#### text-decoration 프로퍼티

링크 underline을 제거 가능  
또는 텍스트에 underline, overline, line-through를 추가 가능

## 요소의 위치 정의

#### position 프로퍼티

요소의 위치를 정의  
top, bottom, right, left 프로퍼티와 함께 사용하여 위치를 지정

**static**은 기본값으로 기본적인 요소의 배치 순서에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 순서에 따라 배치  
부모 요소 내에 자식 요소로서 존재시 부모 요소의 위치를 기준으로 배치

**relative**는 기본 위치를 기준으로 좌표 프로퍼티를 이용하여 위치를 이동

**absolute**는 부모 요소 또는 가장 가까이 있는 조상 요소를 기준으로 좌표 프로퍼티만큼 이동  
부모에 static 이외의 position 프로퍼티가 지정되어 있을 경우에만 부모를 기준으로 위치. 부모, 조상이 모두 static 프로퍼티인 경우 document body를 기준으로 위치

**fixed**는 부모 요소와 관계없이 브라우저의 viewpoint를 기준으로 좌표 프로퍼티를 사용하여 위치를 이동  
스크롤이 되더라도 화면에서 사라지지 않고 같은 곳에 위치

#### z-index 프로퍼티

z-index 프로퍼티에 큰 숫자값을 지정할수록 화면 전면에 출력됨  
position이 static 이외인 요소에만 적용

#### overflow 프로퍼티

자식 요소가 부모 요소의 영역을 벗어났을 때 처리하는 방법을 정의

## 요소 정렬

float 프로퍼티는 주로 레이아웃을 구성할 때 블록 레벨 요소를 가로 정렬하기 위해 사용되는 기법  
float 프로퍼티는 해당 요소를 다음 요소 위에 떠 있게함(떠있다는 의미 : 요소가 기본 레이아웃 흐름에서 벗어나 요소의 모서리가 페이지의 왼쪽이나 오른쪽에 이동하는 것)

| 프로퍼티값 | Description              |
| ---------- | ------------------------ |
| none       | 요소를 떠 있게 하지 않음 |
| right      | 요소를 오른쪽으로 이동   |
| left       | 요소를 왼쪽으로 이동     |

#### 정렬

float 프로퍼티를 사용하지 않은 블록 요소들은 수직으로 정렬됨  
좌측, 우측 가로 정렬만 할 수 있으므로 중앙 가로 정렬은 margin 프로퍼티를 사용해야 함

#### width

width 프로퍼티의 기본값은 100%이므로 블록 요소는 부모 요소의 가로폭을 가득 채움

- float 프로퍼티가 선언된 요소와 float 프로퍼티가 선언되지 않은 요소간 margin이 사라지는 문제  
  => `overflow:hidden` 프로퍼티 선언하기

- float 프로퍼티가 선언된 자식 요소를 포함한 부모 요소의 높이가 정상적으로 반영되지 않는 문제  
  => float 프로퍼티가 선언된 자식 요소의 부모 요소에 `overflow:hidden` 프로퍼티 선언하기  
   `::after` 가상 요소 선택자 이용하기  
   `display:inline-block` 선언하기

## 스타일의 상속과 적용 우선 순위

#### 상속

상속이란 상위(부모, 조상) 요소에 적용된 프로퍼티를 하위(자식, 자손) 요소가 물려 받는 것을 의미  
하지만 모든 프로퍼티가 상속되는 것은 아님 -> 상속되지 않는 경우 `inherit` 키워드 사용하여 명시적으로 상속 받기

#### 캐스캐이딩

요소는 하나 이상의 CSS 선언에 영향을 받을 수 있는데 이때 충돌을 피하기 위해 CSS 적용 우선순위가 필요  
세가지 규칙 : 중요도, 명시도, 선언순서

1. 중요도

   CSS가 어디에 선언되었는지에 따라 우선순위가 달라짐

   1. head 요소 내의 style 요소
   2. head 요소 내의 style 요소 내의 `@import`문
   3. `<link>`로 연결된 CSS 파일
   4. `<link>`로 연결된 CSS 파일 내의 `@import`문
   5. 브라우저 디폴트 스타일시트

2. 명시도

   대상을 명확하게 특정할수록 명시도가 높아지고 우선순위가 높아짐

3. 선언 순서

   선언된 순서에 따라 우선 순위가 적용  
   나중에 선언된 스타일이 우선 적용
