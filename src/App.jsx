import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/index'
import Rotas from "./rotas"
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Rotas />
      </BrowserRouter>
      
    </>
  )
}

export default App