import React from 'react'
import PokemonCard from './components/PokemonCard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div  style={{ maxWidth: "1000px", margin: "15px auto", textAlign: "center" }}>
        <h1>Pokémon Team Manager</h1>
        <PokemonCard />
      </div>
    </>
  )
}

export default App
