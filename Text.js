import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Hello, world!");

  const handleClick = () => {
    setText("The text has been updated!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{text}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
