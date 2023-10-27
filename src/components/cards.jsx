import React, { useState } from 'react';

function Card({ imageUrl, title, onDelete }) {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleDeleteClick = () => {
    // Llama a la función de eliminación proporcionada por el componente padre
    onDelete();
  };

  return (
    <div className="card">
      <img src={imageUrl} alt="" />
      <h1>{title}</h1>
      <div className="likes">
        <button onClick={handleLikeClick}>Like</button>
        <span>{likes} Likes</span>
      </div>
      <button onClick={handleDeleteClick}>Eliminar</button>
    </div>
  );
}

export default Card;
