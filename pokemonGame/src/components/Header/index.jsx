import React from 'react'
import { Button } from '../Button'

import styles from './Header.module.css'

export const Header = (props) => {
  return (
    <div className={styles.content}>
      <p className={styles.title}>Pokedex</p>
      <Button
        title="Start Game"
        color="success"
        size="large"
        onClick={props.handleStart}
      />
    </div>
  )
}
