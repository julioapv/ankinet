import { Route, Routes, useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Decks } from './pages/Decks'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'
import { Account } from './pages/Account'
import { FAQ } from './pages/FAQ'
import './App.css'

function App() {
  
  let AppRoutes = () => { 
    let routes = useRoutes([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "account",
        element: <Account /> 
    },
    {
        path: "decks",
        element: <Decks />
    },
    {
        path: "faq",
        element: <FAQ />
    },
    {
      path: "*",
      element: <NotFound />
  },
  ])
  return routes
}

  
  return (
    <div>
        <NavBar />
        <AppRoutes />
    </div>
  )

}

export default App
