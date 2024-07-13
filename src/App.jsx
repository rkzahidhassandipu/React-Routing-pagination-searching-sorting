// @ts-nocheck
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Products />
      <Contact />
      <About />
    </>
  )
}

export default App
