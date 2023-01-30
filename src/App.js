import React,{ useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      
    .then(response => setPokemon(response.results))
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ul>
      {
          pokemon.map((pokemonList, index)=>{
            return (<li key={index}>{pokemonList.results}</li>)
          })
        }
      </ul>
    </div>
  );
}
export default App;
