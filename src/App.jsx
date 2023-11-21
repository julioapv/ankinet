import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Decks } from './pages/Decks'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'
import './App.css'

function App() {
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/decks' element={<Decks />} />
    <Route path= '/*' element= {<NotFound /> } />
  </Routes>
  
  return (
    <NavBar />
  )

}

export default App
