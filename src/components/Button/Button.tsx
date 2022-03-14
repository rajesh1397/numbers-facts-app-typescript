import React from 'react'
import styles from '../Button/Button.module.css'

const Button = ({children,onclick}:{ children:string,onclick?:()=>void }) => {

  return (
    <button className={styles.btn} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button