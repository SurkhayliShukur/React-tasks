import React from 'react'
import styles from './cardContext.module.css'
import {Card} from '../Card'

export const CardContext = (props) =>{
  return (
    <div className={styles.container}>
    <p
      className={styles.title_winner}
      style={{ color: props.isWinner ? "green" : "red" }}
    >
   
      {props.isWinner ? "Winner" : "Lose"}
    </p>

    <p className={styles.title_power}> {props.power}</p>

    <div className={styles.list}>
      {props.pokemons?.map((pokemon) => (
        <Card
          key={"pokecard" + pokemon.id}
          {...pokemon}
        />
      ))}
    </div>
  </div>
  )
}
