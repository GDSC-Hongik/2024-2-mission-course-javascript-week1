# CSS
p {
    color: red;
    font-size: red;
}
이런식으로 css 사용함
<link rel='stylesheet' href='css/style.css'>
이런식으로 html에서 css 적용시

## 셀렉터
셀렉터{선언(프로퍼티:값);선언;}
- * 전체 셀렉터
- 태그명 (모든 태그 선택 셀렉터)
- .class 클래스 셀렉터
- 셀렉터[어트리뷰트] ex. a[href]
- 셀렉터[어트리뷰트=”값”]	ex. a[target='_blank'] 
- 자식 셀렉터 셀렉터A > 셀렉터

## 프로퍼티
width + left padding + right padding + left border + right border + left margin + right margin
패딩 및 라운딩 설정을 할 수 있다

## 폰트
font-size / font-family / font-style / font-weigh

## 포지션
- 기본 위치, 상대 위치, 고정 위치, 절대 위치

## 요소 정렬
요소 기본값, 오른쪽 위, 왼쪽 위로 구분
## 상속
특정 프로퍼터는 상속되는 프로퍼티로서 자식 요소는 물론 자손 요소까지 적용된다