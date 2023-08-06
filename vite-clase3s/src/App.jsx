import './App.css'
import ChildComponent from './Components/ChildComponent'

function App() {

  const nombre = "Nacho"

  return (
    <> <ChildComponent nombre={nombre}/> </>
  )
}

export default App
