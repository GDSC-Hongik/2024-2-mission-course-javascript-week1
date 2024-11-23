# 2강 HTML5 기본 문법
## HTML5
**HTML (HyperText Markup Language)**은 웹페이지를 기술하기 위한 마크업 언어이다. 조금 더 자세히 말하면 웹페이지의 **내용(content)**과 **구조(structure)**을 담당하는 언어로써 HTML 태그를 통해 정보를 구조화하는 것이다.

## Hello HTML5
```html
<!DOCTYPE html>
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
```
- HTML5 문서는 반드시 `<!DOCTYPE html>`으로 시작하여 문서 형식(document type)을 HTML5로 지정한다.

- 실제적인 HTML document은 2행부터 시작되는데 `<html>`과 `</html>` 사이에 기술한다.

- `<head>`와 `</head>` 사이에는 document title, 외부 파일의 참조, 메타데이터의 설정 등이 위치하며 이 정보들은 브라우저에 표시되지 않는다.

- 웹브라우저에 출력되는 모든 요소는 `<body>`와 `</body>` 사이에 위치한다.

## HTML5의 기본 문법
요소는 중첩될 수 있다. 즉, 요소는 다른 요소를 포함할 수 있다. 이때 부자관계가 성립된다.
html 요소는 body 요소를 포함하며 body 요소는 h1, p 요소를 포함한다. 이 중첩 관계(부자 관계)로 웹페이지의 구조(structure)을 표현한다.

### 빈 요소
content를 가질 수 없는 요소를 빈 요소(Empty element or Self-Closing element)라 한다. 빈 요소는 content가 없으며(필요가 없다) 어트리뷰트(Attribute)만을 가질 수 있다.
```html
<meta charset="utf-8">
```
빈 요소 중 대표적인 요소는 아래와 같다.
- br
- hr
- img
- input
- link
- meta

### 어트리뷰트 (Attribute)
어트리뷰트(Attribute 속성)이란 요소의 성질, 특징을 정의하는 명세이다. 요소는 어트리뷰트를 가질 수 있으며 어트리뷰트는 요소에 추가적 정보(예를 들어 이미지 파일의 경로, 크기 등)를 제공한다. 어트리뷰트는 시작 태그에 위치해야 하며 이름과 값의 쌍을 이룬다. (e.g. name=”value”)  `name이 어트리뷰트명, value는 어트리뷰트 값`

`<img src="html.jpg" width="104" height="142">`

# 3강 시맨틱 요소와 검색 엔진
시맨틱 태그란 브라우저, 검색엔진, 개발자 모두에게 컨텐츠의 의미를 명확히 설명하는 역할을 한다.

시맨틱 웹이란 웹에 존재하는 수많은 웹페이지들이 메타데이터(metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 '의미'와 '관련성'을 가지는 거데한 데이터베이스로 구축하고자 하는 발상이다.

# 4강 웹페이지를 구성하는 기본 태그
## html tag
html은 글로벌 어트리뷰트를 지원한다. 특히 `lang` 어트리뷰트를 사용하는 경우가 많다. 다음은 한국어를 주언어로 사용하는 경우의 예이다.

`<html lang="ko">`

## head tag
head 요소는 메타데이터를 포함하기 위한 요소이며 웹페이지에 단 하나만 존재한다. 메타데이터는 HTML 문서의 title, style, link, script에 대한 데이터로 화면에 표시되지 않는다.

head 요소에는 메타데이터 이외의 화면에 표시되는 일체의 요소를 포함시킬 수 없다.

# 5강 텍스트 관련 태그
## 글자 형태 (Text Formatting) 태그
### b
bold체를 지정한다. 시멘틱 중요성은 없다.
### strong
b tag와 동일하게 bold체를 지정한다. 하지만 시멘틱 중요성을 갖는다.

표현되는 외양은 b tag와 동일하지만 웹표준을 준수하고자 한다면 strong를 사용하는 것이 바람직하다.

### i
Italic체를 지정한다. 의미론적(Semantic) 중요성의 의미는 없다.

### em
emphasized(강조, 중요한) text를 지정한다. i tag와 동일하게 Italic체로 표현된다. 의미론적(Semantic) 중요성의 의미를 갖는다.



# 6강 HTML의 핵심 개념인 Hyperlink
**target 어트리뷰트**
`target="_blank"`를 사용해 외부 페이지를 오픈하는 경우, 이동한 외부 페이지에서 자바스크립트 코드를 사용해 악의적인 페이지로 리다이렉트 할 수 있는 보안취약점(Tabnabbing 피싱 공격)이 있다. 따라서 `rel="noopener noreferrer"`를 추가해 Tabnabbing 피싱 공격에 대비할 것을 권장한다.
# 9강 사용자와의 커뮤니케이션을 위한 폼 태그
## form
GET과 POST에 대해서 더 깊이 알아보자