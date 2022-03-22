import YearFact from "./components/YearFact/YearFact"
import YearInputForm from "./components/YearInputForm/YearInputForm"
import YearContext from './YearContext/YearContext'
import styles from './App.module.css'


const App = () => {
  return (
    <YearContext>
      <div className={styles.App}>
        <h1>FACTS OF YEAR</h1>
        <YearInputForm />
        <YearFact/>
      </div>
    </YearContext>
  )
}

export default App