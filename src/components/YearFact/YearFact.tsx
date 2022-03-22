import { useYearContext } from '../../YearContext/YearContext'
import styles from '../YearFact/YearFact.module.css'

const YearFact = () => {

  const { yearData } = useYearContext();

  return (
    yearData ? (<div className={styles.container} data-testid='yearfactdiv'>{ yearData }</div>) : null
  )
}

export default YearFact