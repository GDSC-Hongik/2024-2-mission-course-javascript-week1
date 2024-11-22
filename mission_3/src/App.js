//import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

function App() {
  return (
    <>
    <h1>과제 3 : 버튼 누르면 인삿말 출력하기</h1>
    <div>
      <Button text={"안녕하세요."} />
    </div>

    <div>
      <Button text={"반갑습니다."}/>
    </div>

    <div>
      <Button text={"잘부탁드립니다."}/>
    </div>
    </>
  );
}

export default App;
