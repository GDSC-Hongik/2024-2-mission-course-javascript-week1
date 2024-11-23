# 2.1 CSS 기본 문법
- CSS: HTML이나 XML과 같은 구조화 된 문서를 화면, 종이 등에 어떻게 렌더링할 것인지를 정의하기 위한 언어
- 셀렉터: 스타일을 적용하고자 하는 HTML 요소를 선택하기 위해 CSS에서 제공하는 수단
- 프로퍼티: 표준 스펙으로 이미 지정되어 있는 것을 사용하여야하며 사용자가 임의로 정의할 수 없음. 여러 개의 프로퍼티를 연속해서 지정할 수 있으며 세미콜론(;)으로 구분
- 프로퍼티의 값은 해당 프로퍼티에 사용할 수 있는 값을 “키워드”나 “크기 단위” 또는 “색상 표현 단위” 등의 특정 단위로 지정하여야 한다

## HTML와 CSS의 연동
- Link style: HTML에서 외부에 있는 CSS 파일을 로드하는 방식
- Embedding style: HTML 내부에 CSS를 포함하는 방식
- Inline style: HTML요소의 style 프로퍼티에 CSS를 기술하는 방식

## Reset CSS 사용하기
브라우저 별로 제각각인 디폴트 스타일을 하나의 스타일로 통일시켜 주는 역할, 기본적인 HTML 요소의 CSS를 초기화하는 용도

# 2.2 셀렉터
- 전체 셀렉터: *, HTML 문서 내의 모든 요소를 선택한다. html 요소를 포함한 모든 요소가 선택된다. (head 요소도 포함된다)
- 태그 셀렉터: 태그명, 지정된 태그명을 가지는 요소를 선택한다.
- ID 셀렉터: #id 어트리뷰트 값, id 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다. id 어트리뷰트 값은 중복될 수 없는 유일한 값이다.
- 클래스 셀렉터: .class 어트리뷰트 값, class 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다. class 어트리뷰트 값은 중복될 수 있다.
- 어트리뷰트 셀렉터:
    셀렉터[어트리뷰트], 지정된 어트리뷰트를 갖는 모든 요소를 선택한다.
    셀렉터[어트리뷰트=”값”], 지정된 어트리뷰트를 가지며 지정된 값과 어트리뷰트의 값이 일치하는 모든 요소를 선택한다.
    셀렉터[어트리뷰트~=”값”], 지정된 어트리뷰트의 값이 지정된 값을 (공백으로 분리된) 단어로 포함하는 요소를 선택한다.
    셀렉터[어트리뷰트|=”값”], 지정된 어트리뷰트의 값과 일치하거나 지정 어트리뷰트 값 뒤 연이은 하이픈(“값-“)으로 시작하는 요소를 선택한다.
    셀렉터[어트리뷰트^=”값”], 지정된 어트리뷰트 값으로 시작하는 요소를 선택한다.
    셀렉터[어트리뷰트$=”값”], 지정된 어트리뷰트 값으로 끝나는 요소를 선택한다.
    셀렉터[어트리뷰트*=”값”], 지정된 어트리뷰트 값을 포함하는 요소를 선택한다.

## 복합 셀렉터

### 후손 셀렉터
셀렉터A의 모든 후손(하위) 요소 중 셀렉터B와 일치하는 요소를 선택
- 부모 요소: 자신의 1 level 상위에 속하는 요소
- 자손 요소: 자신의 1 level 하위에 속하는 요소
- 후손 요소: 자신보다 n level 하위에 속하는 요소
방식: 셀렉터A 셀렉터B

### 자식 셀렉터
셀렉터A의 모든 자식 요소 중 셀렉터B와 일치하는 요소를 선택
방식: 셀렉터A > 셀렉터B

### 형제 셀렉터
- 인접 형제 셀렉터: 셀렉터A의 형제 요소 중 셀렉터A 바로 뒤에 위치하는 셀렉터B 요소를 선택
    방식: 셀렉터A + 셀렉터B
- 일반 형제 셀렉터: 셀렉터A의 형제 요소 중 셀렉터A 뒤에 위치하는 셀렉터B 요소를 모두 선택
    방식: 셀렉터A ~ 셀렉터B

### 가상 클래스 셀렉터
요소의 특정 상태에 따라 스타일을 정의할 때 사용
- 마우스가 올라와 있을때
- 링크를 방문했을 때와 아직 방문하지 않았을 때
- 포커스가 들어와 있을 때

가상 클래스는 마침표(.) 대신 콜론(:)을 사용
- :link	셀렉터가 방문하지 않은 링크일 때
- :visited	셀렉터가 방문한 링크일 때
- :hover	셀렉터에 마우스가 올라와 있을 때
- :active	셀렉터가 클릭된 상태일 때
- :focus	셀렉터에 포커스가 들어와 있을 때
- :checked	셀렉터가 체크 상태일 때
- :enabled	셀렉터가 사용 가능한 상태일 때
- :disabled	셀렉터가 사용 불가능한 상태일 때
- :first-child	셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택한다.
- :last-child	셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택한다.
- :nth-child(n)	셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택한다.
- :nth-last-child(n)	셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택한다.
- :first-of-type	셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 첫번째 등장하는 요소를 선택한다.
- :last-of-type	셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 마지막에 등장하는 요소를 선택한다.
- :nth-of-type(n)	셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 앞에서 n번째에 등장하는 요소를 선택한다.
- :nth-last-of-type(n)	셀렉터에 해당하는 요소의 부모 요소의 자식 요소 중 뒤에서 n번째에 등장하는 요소를 선택한다.
- :not(셀렉터): 셀렉터에 해당하지 않는 모든 요소를 선택한다.
- :valid(셀렉터): 정합성 검증이 성공한 input 요소 또는 form 요소를 선택한다.
- :invalid(셀렉터): 정합성 검증이 실패한 input 요소 또는 form 요소를 선택한다.

### 가상 요소 셀렉터
요소의 특정 부분에 스타일을 적용하기 위하여 사용
- 요소 콘텐츠의 첫글자 또는 첫줄
- 요소 콘텐츠의 앞 또는 뒤

두개의 콜론(::)을 사용
- ::first-letter	콘텐츠의 첫글자를 선택한다.
- ::first-line	콘텐츠의 첫줄을 선택한다. 블록 요소에만 적용할 수 있다.
- ::after	콘텐츠의 뒤에 위치하는 공간을 선택한다. 일반적으로 content 프로퍼티와 함께 사용된다.
- ::before	콘텐츠의 앞에 위치하는 공간을 선택한다. 일반적으로 content 프로퍼티와 함께 사용된다.
- ::selection	드래그한 콘텐츠를 선택한다. iOS Safari 등 일부 브라우저에서 동작 않는다.

# 2.3 CSS 프로퍼티 값의 단위

프로퍼티에는 키워드, 크기 단위, 색상 표현 단위 등의 특정 단위를 갖는 값을 지정함

## 크기 단위
- px : 픽셀
- % : 백분율
- em: 배수 단위
- rem: 최상위 요소(html)의 사이즈를 기준으로 하는 em
- viewport 단위: viewport를 기준으로 한 상대적 사이즈
    vw: viewport 너비의 1/100
    vh: viewport 높이의 1/100
    vmin: viewport 너비 또는 높이 중 작은 쪽의 1/100
    vmax: viewport 너비 또는 높이 중 큰 쪽의 1/100

## 색상 표현단위
- HEX 코드 단위 (Hexadecimal Colors): #000000
- RGB (Red, Green, Blue): rgb(255, 255, 0)
- RGBA (Red, Green, Blue, Alpha/투명도): rgba(255, 255, 0, 1)
- HSL (Hue/색상, Saturation/채도, Lightness/명도): hsl(0, 100%, 25%)
- HSLA (Hue, Saturation, Lightness, Alpha): hsla(60, 100%, 50%, 1)

# 2.4 박스 모델
Box는 콘텐트(Content), 패딩(Padding), 테두리(Border), 마진(Margin)로 구성
- Content: 요소의 텍스트나 이미지 등의 실제 내용이 위치하는 영역이다. width, height 프로퍼티를 갖는다.
- Padding: 테두리(Border) 안쪽에 위치하는 요소의 내부 여백 영역이다. padding 프로퍼티 값은 패딩 영역의 두께를 의미하며 기본색은 투명(transparent)이다. 요소에 적용된 배경의 컬러, 이미지는 패딩 영역까지 적용된다.
- Border: 테두리 영역으로 border 프로퍼티 값은 테두리의 두께를 의미한다.
- Margin: 테두리(Border) 바깥에 위치하는 요소의 외부 여백 영역이다. margin 프로퍼티 값은 마진 영역의 두께를 의미한다. 기본적으로 투명(transparent)하며 배경색을 지정할 수 없다.

## margin / padding 프로퍼티
content의 4개 방향(top, right, left, bottom)에 대하여 지정이 가능
margin 프로퍼티에 auto 키워드를 설정하면 해당 요소를 브라우저 중앙에 위치 시킬 수 있다
- max-width: 브라우저 너비가 요소의 너비보다 좁아질 때 자동으로 요소의 너비가 줄어든다.

## border 프로퍼티
- border-style: 테두리 선의 스타일을 지정
    4개 방향(top, right, left, bottom)에 대하여 지정이 가능
- border-width: 테두리의 두께를 지정
    프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능
    border-style과 함께 사용하지 않으면 적용되지 않는다
- border-color: 테두리의 색상을 지정
    프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능
    border-color 프로퍼티는 border-style과 함께 사용하지 않으면 적용되지 않는다
- border-radius: 테두리 모서리를 둥글게 표현하도록 지정
    프로퍼티 값은 길이를 나타내는 단위(px, em 등)와 %를 사용
    하나 혹은 두개의 반지름을 설정하여 각각의 모서리 굴곡을 설정할 수 있음
- border: border-width, border-style, border-color를 한번에 설정하기 위한 shorthand 프로퍼티

## box-sizing 프로퍼티
box-sizing: width, height 프로퍼티의 대상 영역을 변경할 수 있다.
- content-box: width, height 프로퍼티 값은 content 영역을 의미한다. (기본값)
- border-box: width, height 프로퍼티 값은 content 영역, padding, border가 포함된 값을 의미한다.

# 2.5 display, visibility, opacity 프로퍼티

## display 프로퍼티
display: layout 정의에 자주 사용되는 중요한 프로퍼티

### block 레벨 요소
- 항상 새로운 라인에서 시작한다.
- 화면 크기 전체의 가로폭을 차지한다. (width: 100%)
- width, height, margin, padding 프로퍼티 지정이 가능하다.
- block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다

### inline 레벨 요소
- 새로운 라인에서 시작하지 않으며 문장의 중간에 들어갈 수 있다. 즉, 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치한다.
- content의 너비만큼 가로폭을 차지한다.
- width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없다. 상, 하 여백은 line-height로 지정한다.
- inline 레벨 요소 뒤에 공백(엔터, 스페이스 등)이 있는 경우, 정의하지 않은 space(4px)가 자동 지정된다.
- inline 레벨 요소 내에 block 레벨 요소를 포함할 수 없다. inline 레벨 요소는 일반적으로 block 레벨 요소에 포함되어 사용된다.

### inline-block 레벨 요소
- inline 레벨 요소와 같이 한 줄에 표현되면서 width, height, margin 프로퍼티를 모두 지정할 수 있다.
- 기본적으로 inline 레벨 요소와 흡사하게 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치시킬 수 있다.
- block 레벨 요소처럼 width, height, margin, padding 프로퍼티를 모두 정의할 수 있다. 상, 하 여백을 margin과 line-height 두가지 프로퍼티 모두를 통해 제어할 수 있다.
- content의 너비만큼 가로폭을 차지한다.
- inline-block 레벨 요소 뒤에 공백(엔터, 스페이스 등)이 있는 경우, 정의하지 않은 space(4px)가 자동 지정된다.

- none: 해당 요소를 화면에 표시하지 않는다 (공간조차 사라진다)

## visibility 프로퍼티
요소를 보이게 할 것인지 보이지 않게 할 것인지를 정의
- visible: 해당 요소를 보이게 한다 (기본값)
- hidden: 해당 요소를 보이지 않게 한다. display: none;은 해당 요소의 공간까지 사라지게 하지만 visibility: hidden;은 해당 요소의 공간은 사라지지 않고 남아있게 된다.
- collapse: table 요소에 사용하며 행이나 열을 보이지 않게 한다.
- none: table 요소의 row나 column을 보이지 않게 한다. IE, 파이어폭스에서만 동작하며 크롬에서는 hidden과 동일하게 동작한다.

## opacity 프로퍼티
요소의 투명도를 정의한다. 0.0 ~ 1.0의 값을 입력하며 0.0은 투명, 1.0은 불투명을 의미함.

# 2.6 백그라운드
- background-image 프로퍼티: 요소에 배경 이미지를 지정
- background-repeat 프로퍼티: 배경 이미지의 반복을 지정, 수직, 수평 또는 수직과 수평 모두의 반복을 지정할 수 있다
    background-repeat 프로퍼티값에 repeat-x: x축으로만 배경 이미지 반복
    repeat-y: y축으로만 배경 이미지 반복
    no-repeat: 반복 출력 멈춤
    background-image에 복수개의 이미지를 설정할 경우, 먼저 설정된 이미지가 전면에 출력
- background-size 프로퍼티: 배경 이미지의 사이즈를 지정
    %값 지정: %값 비례해 설정, 화면을 줄이거나 늘리면 배경이미지의 크기도 따라서 변경되어 찌그러지는 현상이 나타난다
    px값 지정: px값 그대로 지정
    cover 지정: 배경이미지의 크기 비율을 유지한 상태에서 부모 요소의 width, height 중 큰값에 배경이미지를 맞춘다
    contain 지정: 배경이미지가 보이지 않는 부분없이 전체가 들어갈 수 있도록 이미지 스케일을 조정
    width, height의 프로퍼티값은 공백으로 구분하여야 gka
- background-attachment 프로퍼티: 화면이 스크롤되더라도 배경이미지는 스크롤되지 않고 고정되어 있게 하려면 background-attachment 프로퍼티에 fixed 키워드를 지정
- background-position 프로퍼티: 이미지의 좌표(xpos, ypos)를 지정 할 수 있음
- background-color 프로퍼티: 요소의 배경 색상을 지정
- background Shorthand: // background: color || image || repeat || attachment || position

# 2.7 폰트와 텍스트
- font-size 프로퍼티: 텍스트 크기 정의함
- font-family 프로퍼티: 폰트 지정
    폰트는 여러 개를 동시에 지정이 가능하다. 첫번째 지정한 폰트가 클라이언트 컴퓨터에 설치되어 있지 않은 경우, 다음에 지정된 폰트를 적용한다.
    따라서 마지막에 지정하는 폰트는 대부분의 OS에 기본적으로 설치되어 있는 generic-family 폰트(Serif, Sans-serif, Mono space)를 지정하는 것이 일반적이다
    폰트명은 따옴표로 감싸주며 폰트명이 한단어인 경우는 따옴표로 감싸주지 않아도 된다
- font-style / font-weight 프로퍼티: font-style 프로퍼티는 이탤릭체의 지정, font-weight 프로퍼티는 폰트 굵기 지정에 사용
- font Shorthand: font : font-style(optional) font-variant(optional) font-weight(optional) font-size(mandatory) line-height(optional) font-family(mandatory)
- line-height 프로퍼티: 텍스트 높이 지정
- letter-spacing 프로퍼티: 글자 사이 간격 지정
- text-align 프로퍼티: 텍스트의 수평 정렬 정의
- text-decoration 프로퍼티: 링크 underline을 제거 또는 텍스트에 underline, overline, line-through를 추가할 수 있다
- white-space 프로퍼티: white space: 공백(space), 들여쓰기(tab), 줄바꿈(line break)을 의미, 이러한 기본 동작을 제어하기 위한 프로퍼티.
    normal, nowrap, pre, pre-wrap, pre-line이 있음
- text-overflow 프로퍼티: wrapping(자동줄바꿈)이 되지 않은 텍스트의 처리 방법을 의미
    사용조건:
    width 프로퍼티가 지정되어 있어야 한다. 이를 위해 필요할 경우 block 레벨 요소로 변경하여야 한다.
    자동 줄바꿈을 방지하려면 white-space 프로퍼티를 nowrap으로 설정한다.
    overflow 프로퍼티에 반드시 “visible” 이외의 값이 지정되어 있어야 한다.
    ellipsis: 영역을 벗어난 텍스트를 잘라내어 보이지 않게 하고 말줄임표(…)를 표시한다.
- word-wrap 프로퍼티: 한 단어의 길이(링크같은거)가 길어서 부모 영역을 벗어난 텍스트의 처리 방법을 의미
- word-break 프로퍼티: word-wrap이랑 비슷하나 word-break: break-all;는 단어를 고려하지 않고 부모 영역에 맞추어 강제 개행

# 2.8 요소의 위치 정의

## position 프로퍼티
요소의 위치를 정의

### static (기본위치)
position 프로퍼티의 기본값
이미 설정된 position을 무력화하기 위해 사용

### relative (상대위치)
기본 위치 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동

### absolute (절대위치)
가장 가까이 있는 조상 요소(static 제외)를 기준으로 좌표 프로퍼티(top, bottom, left, right)만큼 이동
relative, absolute, fixed 프로퍼티가 선언되어 있는 부모 또는 조상 요소를 기준으로 위치가 결정
absolute 선언 시, block 레벨 요소의 width는 inline 요소와 같이 content에 맞게 변화되므로 적절한 width를 지정하여야 함

### fixed (고정위치)
부모 요소와 관계없이 브라우저의 viewport를 기준으로 좌표프로퍼티(top, bottom, left, right)을 사용하여 위치를 이동
스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치함

## z-index 프로퍼티
z-index 프로퍼티에 큰 숫자값을 지정할수록 화면 전면에 출력, static 이외인 요소에만 적용

## overflow 프로퍼티
자식 요소가 부모 요소의 영역를 벗어났을 때 처리 방법을 정의
- visible: 영역을 벗어난 부분을 표시한다. (기본값)
- hidden: 영역을 벗어난 부분을 잘라내어 보이지 않게 한다.
- scroll: 영역을 벗어난 부분이 없어도 스크롤 표시한다.(현재 대부분 브라우저는 auto과 동일하게 작동한다)
- auto: 영역을 벗어난 부분이 있을때만 스크롤 표시한다.

# 2.9 요소 정렬
float:left; 프로퍼티: 왼쪽부터 가로 정렬되고, float:right; 프로퍼티: 오른쪽부터 가로 정렬됨
float 프로퍼티를 사용하지 않은 블록 요소들은 수직으로 정렬
width 프로퍼티: 기본값은 100%

## float 프로퍼티 관련 문제 해결 방법

### float 프로퍼티가 선언된 요소와 float 프로퍼티가 선언되지 않은 요소간 margin이 사라지는 문제
float 프로퍼티를 선언하지 않은 요소(.d2)에 overflow: hidden 프로퍼티를 선언하기

### float 프로퍼티가 선언된 자식 요소를 포함하는 부모 요소의 높이가 정상적으로 반영되지 않는 문제
float 프로퍼티가 선언된 자식 요소의 부모 요소(.container)에 overflow: hidden 프로퍼티를 선언하기

# 2.10 스타일의 상속과 적용 우선 순위

## 상속
상위(부모, 조상) 요소에 적용된 프로퍼티를 하위(자식, 자손) 요소가 물려 받는 것
프로퍼티 중에는 상속이 되지 않는 것도 있음
상속되지 않는 경우 inherit 키워드를 사용하여 명시적으로 상속받게 할 수 있다.

## 캐스캐이딩
CSS 적용 우선순위
케스케이딩 3가지 규칙

### 중요도
CSS가 어디에 선언 되었는가
- head 요소 내의 style 요소
- head 요소 내의 style 요소 내의 @import 문
- 링크로 연결된 CSS 파일
- 링크로 연결된 CSS 파일 내의 @import 문
- 브라우저 디폴트 스타일시트

### 명시도
대상을 명확하게 특정할수록 우선순위가 높아짐

### 선언순서
나중에 선언된 스타일이 우선 적용