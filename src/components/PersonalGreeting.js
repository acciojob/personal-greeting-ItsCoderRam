import React, { useState } from "react";

function PersonalGreeting() {
 const [name, setName] = useState('');

const greetMessage = (e) => {
    setName(e.target.value)
}
 return (
   <div>
     <p>Enter your name:</p>
     <input
       type="text"
       value={name}
       onChange={greetMessage}
     />
     {name ? <p>Hello {name}!</p> : null}
   </div>
 );
}
export default PersonalGreeting