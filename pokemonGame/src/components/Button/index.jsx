import React from 'react'

import styles from './Button.module.css'

export const Button =  (props) => {
  const {
    color = "danger",
    size = "medium",
    title = "Button",
    weight = "regular",
    disabled,
    children,
    fullWitdh,
    className,
    onClick,
  } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.btn} ${styles[color]} ${styles[size]} ${styles[weight]
        } ${fullWitdh ? styles.full : ""}  ${className}`}
    >
      {children ?? title}
    </button>
  )
}
