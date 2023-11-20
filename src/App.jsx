import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Decks } from './pages/Decks'
import { NotFound } from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/decks' element={<Decks />} />
      <Route path= '/*' element= {<NotFound /> } />
    </Routes>
  )

}

export default App
