import React from 'react';

function Child(props) {
  const handleClick = () => {
    props.sendDataToParent("This is data from the child.");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
