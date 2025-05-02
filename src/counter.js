import React, { useState } from 'react';

function Counter() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleClick = () => {
    setA(prev => prev + 1);
    setB(prev => prev + 1);
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: handleClick },
      'Click Me'
    ),
    React.createElement(
      'p',
      null,
      `a = ${a}, b = ${b}`
    )
  );
}

export default Counter;
