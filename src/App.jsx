import AdmissionPage from "./Pages/AdmissionPage"
import AlertState from "./Context/AlertState"
import Alert from './Pages/Alert'

function App() {

  return (
    <AlertState>
      <Alert />
    <AdmissionPage />
    </AlertState>
  )
}

export default App
