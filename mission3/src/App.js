// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Button from "./Button";

function App() {
  return (
    <div className="App">
      <button>
        <Link to="/Button">버튼</Link>
      </button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
        <Route path="/Button" element={<Button />} />
      </Routes>
    </div>
  );
}

export default App;
