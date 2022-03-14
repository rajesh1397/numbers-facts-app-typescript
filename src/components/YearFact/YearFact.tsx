import React from 'react'
import { useYearContext } from '../../YearContext/YearContext'
import styles from '../YearFact/YearFact.module.css'

const YearFact = () => {

  const { yearData } = useYearContext();

  return (
    <div className={styles.container}>{ yearData }</div>
  )
}

export default YearFact