
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text, setText] = useState();
  function grab(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <span>Enter your name:</span>
      <br />
      <br />
      <input type="text" onChange={grab} />
      <h4>Hello {text} !</h4>
      <br/>
      <hr/>
    </div>
  );
}

export default App
