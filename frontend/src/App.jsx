import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
        
      </main>
    </div>

  )
}

export default App