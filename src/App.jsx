import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Decks } from './pages/Decks'
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import './App.css'

function App() {
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/decks' element={<Decks />} />
    <Route path= '/*' element= {<NotFound /> } />
  </Routes>
  
  return (
    <div>
      <Header />
    </div>
  )

}

export default App
