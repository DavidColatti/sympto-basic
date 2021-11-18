import AppointmentList from "./components/AppointmentList"
import PatientsList from "./components/PatientsList"
import ServicesTable from './components/ServicesTable'
import styles from './index.module.scss'

const App = () => {
  return (
    <>
      <div className={styles.header}>
        Electronic Medical Health (EMR)
      </div>
      <div className={styles.container}>
        <PatientsList />
        <ServicesTable />
        <AppointmentList />
      </div>
    </>
  )
}

export default App
