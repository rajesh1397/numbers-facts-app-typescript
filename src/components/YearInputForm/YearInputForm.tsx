import React,{useState} from 'react'
import Button from '../Button/Button'
import styles from '../YearInputForm/YearInputForm.module.css'

import { useYearContext } from '../../YearContext/YearContext'

const YearInputForm = () => {

  const { getApiData } = useYearContext();
  const [year, setYear] = useState<string>('')
  
  const changehandler = (e: any) => setYear(e.target.value)

  const clickhandler = () => {
    getApiData(Number(year))
  }

  return (
      <>
      <input className={styles.input }type='text' value={year} onChange={changehandler} id='text' placeholder='Enter a year (NOTE : Upto 2022)' />
      <br/>
      <Button onclick={clickhandler}>Get Fact</Button>
      </>
  )
}

export default YearInputForm