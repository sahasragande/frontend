import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Hover over this text!");

  const handleMouseOver = () => {
    setMessage("You are hovering over the text!");
  };

  const handleMouseOut = () => {
    setMessage("Hover over this text!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ cursor: "pointer" }}
      >
        {message}
      </h2>
    </div>
  );
}

export default App;
