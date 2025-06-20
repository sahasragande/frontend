import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;