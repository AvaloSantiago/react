import { useState } from 'react';
import './App.css';
import Card from './components/cards';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card-container">
      <div className='planta'>
      <Card imageUrl={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"} title={"Bulbasaur"} />
      <Card imageUrl={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"} title={"Ivysaur"} />
      <Card imageUrl={"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/be/latest/20160309230456/Venusaur.png/800px-Venusaur.png"} title={"Venusaur"}/>
      </div>
      <div className="fuego">
      <Card imageUrl={"https://images.wikidexcdn.net/mwuploads/wikidex/5/56/latest/20200307023245/Charmander.png"} title={"Charmander"}/>
      <Card imageUrl={"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fb/latest/20200411222755/Charmeleon.png/800px-Charmeleon.png"} title={"Charmeleon"}/>
      <Card imageUrl={"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/95/latest/20160817212623/Charizard.png/640px-Charizard.png"} title={"Charizard"}/>
    </div>
    </div>
  );
}

export default App;
