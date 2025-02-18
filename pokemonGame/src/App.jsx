import React, { useState } from 'react'
import { Header } from './components/Header'
import {CardContext} from './components/cardContext'
import pokemonData from './data/pokemon.json'

function App() {
  const [firstTeam, setFirstTeam] = useState([])
  const [secondTeam, setSecondTeam] = useState([])

  const handleStart = () => {
    let newFirstTeam = [...pokemonData];
    let newSecondTeam = [];

    while (newSecondTeam.length < newFirstTeam.length) {
      const randomIndex = Math.floor(Math.random() * newFirstTeam.length);

      const rmvPokemon = newFirstTeam.splice(randomIndex, 1);

      console.log("rmvPokemon", rmvPokemon);

      newSecondTeam.push(rmvPokemon[0]);
    }

    setFirstTeam(newFirstTeam);
    setSecondTeam(newSecondTeam);
  };

  const team1Power = firstTeam?.reduce(
    (sum, item) => sum + item?.base_experience,
    0
  );

  const team2Power = secondTeam?.reduce(
    (sum, item) => sum + item?.base_experience,
    0
  );


  return (
    <>
    <Header handleStart = {handleStart}/>
      {
        !!secondTeam.length && (
          <>
            <CardContext
              pokemons={firstTeam}
              power={team1Power}
              isWinner={team1Power > team2Power}
            />

            <h2 style={{ textAlign: "center", fontSize: 60 }}>VS</h2>

            <CardContext
              pokemons={secondTeam}
              power={team2Power}
              isWinner={team2Power > team1Power}
            />
          </>
        )
      }
    </>
  )
}

export default App
