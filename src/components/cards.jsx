import React from 'react';

function Card({ imageUrl, title }) {
  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <h1>{title}</h1>
    </div>
  );
}

export default Card;