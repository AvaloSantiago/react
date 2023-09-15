import React, { useState } from "react";

function Card({ imageUrl, title, onDelete }) {
	const [contador, setCounter] = useState(0);

	const incrementCounter = () => {
		setCounter(contador + 1);
	};

	return (
		<div className="card">
			<img className="tarjeta" src={imageUrl} alt="" />
			<h1> {title}</h1>
			<p>Likes {contador}</p>
			<button onClick={incrementCounter}>Likear</button>
			<button onClick={onDelete}>Borrar</button>
		</div>
	);
}

export default Card;
