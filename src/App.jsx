import react from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Card from './components/Card/Index'
import WillPage from './pages/WillPage/Index'
import NavBar from './components/NavBar/Index'

function App() {


  return (
    
    <Router>
      <NavBar/>
      <Routes>
      
        <Route path="/card" element={<Card/>} />
        <Route path="/:name" element={<WillPage/>} />
        
      </Routes>

    </Router>
  )
}

export default App
