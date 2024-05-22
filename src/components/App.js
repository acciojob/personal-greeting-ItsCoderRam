
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  // function grab(e) {
  //   setText(e.target.value);
  // }
  return (
    <div className="App">
     <p>Enter your name:</p>
     <input
       type="text"
       value={name}
       onChange={(e) => setName(e.target.value)}
     />
     {name ? <p>Hello {name}!</p> : null}
   </div>
  );
}

export default App
