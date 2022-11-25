import react from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Card from './components/Card/Index'

function App() {


  return (
    <Router>
      <Routes>
      
        <Route path="/card" element={<Card/>} />
        
      </Routes>

    </Router>
  )
}

export default App
