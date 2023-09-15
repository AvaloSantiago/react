import { useState } from "react";
import Card from "./components/Cards";
import "./App.css";
function App() {
	const [cards, setCards] = useState([
		{
			id: 1,
			imageUrl:
				"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
			title: "Bulbasaur",
		},
		{
			id: 2,
			imageUrl:
				"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
			title: "Ivysaur",
		},
		{
			id: 3,
			imageUrl:
				"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/be/latest/20160309230456/Venusaur.png/800px-Venusaur.png",
			title: "Venusaur",
		},
		{
			id: 4,
			imageUrl:
				"https://images.wikidexcdn.net/mwuploads/wikidex/5/56/latest/20200307023245/Charmander.png",
			title: "Charmander",
		},
		{
			id: 5,
			imageUrl:
				"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fb/latest/20200411222755/Charmeleon.png/800px-Charmeleon.png",
			title: "Charmeleon",
		},
		{
			id: 6,
			imageUrl:
				"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/95/latest/20160817212623/Charizard.png/640px-Charizard.png",
			title: "Charizard",
		},
		// Agrega más tarjetas si es necesario
	]);

	const handleDeleteCard = (id) => {
		// Filtrar las tarjetas para eliminar la que coincida con el ID
		const updatedCards = cards.filter((card) => card.id !== id);
		setCards(updatedCards);
	};

	return (
		<div className="card-container">
			{cards.map((card) => (
				<Card
					key={card.id}
					imageUrl={card.imageUrl}
					title={card.title}
					onDelete={() => handleDeleteCard(card.id)} // Pasar la función de eliminación
				/> 
			))}
		</div>
	);
}

export default App;
