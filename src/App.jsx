import react, { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import WillPage from './pages/WillPage/Index'
import NavBar from './components/NavBar/Index'
import Home from './components/Home/Index'

export const UserContext = react.createContext()

function App() {

  const Provider = UserContext.Provider
  const [name, setName] = useState('')
  const [beneficiary, setBeneficiary] = useState('')
  const [possessions, setPossessions] = useState('')

  return (

    <>
   
      <Provider value={{name,setName,beneficiary, setBeneficiary,possessions,setPossessions}}>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/card" element={<Card/>} />
            <Route path="/:name" element={<WillPage/>} />
            
          </Routes>

        </Router>
      </Provider>

    </>
  )
}

export default App
