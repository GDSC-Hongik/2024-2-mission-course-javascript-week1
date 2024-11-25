# CSS 기본 문법 정리

### universal_selector

```css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* CSS선택자
        전체선택자 (*) */
      * {
        color: lightblue;
        font-size: x-large;
      }
    </style>
  </head>
  <body>
    <header>제목</header>
    <main>내용</main>
    <footer>참조</footer>
  </body>
</html>
```

### class_selector

```css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .color-red {
        color: red;
      }
      .color-blue {
        color: blue;
      }
      .color-main {
        color: white;
        background-color: green;
      }
    </style>
  </head>
  <body>
    <p class="color-red">빨간색 글자입니다.</p>
    <p class="color-blue">파란색 글자입니다.</p>
    <span class="color-main">네이버</span>
  </body>
</html>
```

### tag_selector

```css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      a {
        text-decoration: none;
      }

      .underline {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <!-- 태그선택자 -->
    <!-- 태그명을 선택자로 사용 -->
    <!-- 해당하는 태그에 동일한 디자인 적용 -->
    <a href="">링크1</a>
    <a href="">링크2</a>
    <a href="" class="underline">링크3</a>
  </body>
</html>
```

### id_selector

```css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* id 선택자 */
      /* 선택자 앞에 # + id 속성값 */
      #container {
        width: 400px;
        height: 500px;
        background-color: greenyellow;
      }
    </style>
  </head>
  <body>
    <div id="container">컨테이너 박스</div>
  </body>
</html>
```

### display_flexbox

```css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        border: 3px dotted green;
        display: flex;
        /* flex-direction: row; */
        /* flex-direction: column; */
        /* flex-direction: row-reverse; */
      }
      .item {
        background-color: black;
        border: 1px solid red;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">A</div>
      <div class="item">B</div>
      <div class="item">C</div>
    </div>
  </body>
</html>
```

### box_sizing

```css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .box-bb,
      .box-cb {
        width: 300px;
        height: 100px;
        margin: 10px;
        padding: 10px;
        border: 10px solid greenyellow;
      }
      .box-cb {
        box-sizing: content-box;
      }
      .box-bb {
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <div class="box-cb">CSS 박스 모델:content-box</div>
    <div class="box-bb">CSS 박스 모델:border-box</div>
    <div style="width: 100%; height: 200px; background-color: green">
      <div
        style="
          width: 50%;
          max-width: 900px;
          min-width: 200px;
          height: 50%;
          background-color: red;
        "
      ></div>
    </div>
  </body>
</html>
```
