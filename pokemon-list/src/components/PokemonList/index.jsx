import React from 'react'
import styles from './List.module.css'

const PokeList = ({ team, deletePokemon, incrementPokemonCount, decrementPokemonCount }) => {

  return (
    <div>
      <h4 className="mt-2">Your Pokémon Team</h4>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {team.map((pokemon) => (
          <li
            key={pokemon.id}
            className={styles.team}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              <h6>{pokemon.nickname}</h6>
            </div>

            <div className="d-flex align-items-center">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => decrementPokemonCount(pokemon.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#f8b600",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  -
                </button>
                <h6 style={{ minWidth: "18px", marginTop: "3px" }}>
                  {pokemon.count}
                </h6>
                <button
                  onClick={() => incrementPokemonCount(pokemon.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => deletePokemon(pokemon.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                className="mx-3"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokeList
