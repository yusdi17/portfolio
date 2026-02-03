import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import SplashCursor from './components/SplashCursor'

function App() {

  return (
    
    <div className="min-h-screen overflow-x-hidden">
      <SplashCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App
