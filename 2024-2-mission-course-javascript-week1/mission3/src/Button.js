import React from "react";

const Button = () => {
  function click() {
    return window.alert("안녕하세요");
  }

  return (
    <button type="button" onClick={click}>
      버튼
    </button>
  );
};

export default Button;
