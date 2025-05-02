import React, { useState } from 'react';
// import Child from './Child';
import Child from './Child'; // Mismatch — file is lowercase

function Parent() {
  const [dataFromChild, setDataFromChild] = useState('');

  const getChildData = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data received from child: {dataFromChild}</p>
      <Child sendDataToParent={getChildData} />
    </div>
  );
}

export default Parent;
