import React, { useState } from 'react'
import styles from './Card.module.css'
import { pokemonList } from '../../data'
import PokeList from '../PokemonList'

const PokemonCard = () => {

  const [team, setTeam] = useState(() => {
    const savedTeam = localStorage.getItem("pokemonTeam");
    return savedTeam ? JSON.parse(savedTeam) : [];
  });

  const addPokemonToTeam = (pokemon) => {
    if (!team.some((item) => item.id === pokemon.id)) {
      const newPokemon = { ...pokemon, nickname: pokemon.name, count: 1 };
      const updatedTeam = [...team, newPokemon];
      setTeam(updatedTeam);
      localStorage.setItem("pokemonTeam", JSON.stringify(updatedTeam));
    } else {
      alert(`${pokemon.name} is already in your team!`);
    }
  };

  const deletePokemon = (id) => {
    const updatedTeam = team.filter((pokemon) => pokemon.id !== id);
    setTeam(updatedTeam);
    localStorage.setItem("pokemonTeam", JSON.stringify(updatedTeam));
  };

  const incrementPokemonCount = (id) => {
    const updatedTeam = team.map((pokemon) =>
      pokemon.id === id ? { ...pokemon, count: pokemon.count + 1 } : pokemon
    );
    setTeam(updatedTeam);
    localStorage.setItem("pokemonTeam", JSON.stringify(updatedTeam));
  };

  const decrementPokemonCount = (id) => {
    const updatedTeam = team.map((pokemon) =>
      pokemon.id === id && pokemon.count > 1
        ? { ...pokemon, count: pokemon.count - 1 }
        : pokemon
    );
    setTeam(updatedTeam);
    localStorage.setItem("pokemonTeam", JSON.stringify(updatedTeam));
  };

  const totalPokemon = team.reduce((sum, pokemon) => sum + pokemon.count, 0);



  return (
    <>
      <div className={styles.card}>
        {
          pokemonList.map((pokemon) => (
            <div
              key={pokemon.id}
              className={styles.cardItem}
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{ width: "100px", height: "100px", objectFit: "contain" }}
              />
              <h4>{pokemon.name}</h4>
              <button
                onClick={() => addPokemonToTeam(pokemon)}
                style={{
                  marginTop: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Team
              </button>

            </div>
          ))
        }
      </div>
      <PokeList
        team={team}
        deletePokemon={deletePokemon}
        incrementPokemonCount={incrementPokemonCount}
        decrementPokemonCount={decrementPokemonCount}
      />
      <h3>Total Pokémon in Team: {totalPokemon}</h3>
      <div className="my-4">
        <h4 className="mb-3">Individual Pokémon Count</h4>
        <table className="table table-bordered table-striped">
          <thead className="table-light">
            <tr>
              <th scope="col">Nickname</th>
              <th scope="col">Count</th>
              <th scope="col">Label</th>
            </tr>
          </thead>
          <tbody>
            {team.map((pokemon) => (
              <tr key={pokemon.id} className="fw-bold">
                <td className="text-success">{pokemon.nickname}</td>
                <td className="text-danger">{pokemon.count}</td>
                <td>{pokemon.count > 1 ? "Pokémons" : "Pokémon"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PokemonCard
