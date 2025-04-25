// App.js

import React, { useState } from "react";

function App() {
  const [inputFocused, setInputFocused] = useState(false);
  const [blurText, setBlurText] = useState(false);
  const [blurImage, setBlurImage] = useState(false);

  const handleFocus = () => setInputFocused(true);
  const handleBlur = () => setInputFocused(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Input Focus */}
      <input
        type="text"
        placeholder="Click to focus"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          padding: "10px",
          fontSize: "16px",
          outline: "none",
          border: inputFocused ? "2px solid blue" : "2px solid gray",
          borderRadius: "5px",
        }}
      />

      <br /><br />

      {/* Hover to Blur Text */}
      <p
        onMouseOver={() => setBlurText(true)}
        onMouseOut={() => setBlurText(false)}
        style={{
          fontSize: "20px",
          filter: blurText ? "blur(3px)" : "none",
          transition: "filter 0.3s",
          cursor: "pointer",
        }}
      >
        Hover over this text to blur it
      </p>

      {/* Hover to Blur Image */}
      <img
        src="https://via.placeholder.com/200"
        alt="Example"
        onMouseOver={() => setBlurImage(true)}
        onMouseOut={() => setBlurImage(false)}
        style={{
          width: "200px",
          height: "auto",
          filter: blurImage ? "blur(3px)" : "none",
          transition: "filter 0.3s",
          cursor: "pointer",
        }}
      />
    </div>
  );
}

export default App;
