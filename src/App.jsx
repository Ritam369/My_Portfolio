import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/Navbar'
import { BrowserRouter } from "react-router-dom";
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ParticleBackground from './components/ParticleBackground';
import { SocialDock } from './components/SocialDock';

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className='relative z-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 scroll-smooth min-h-screen transition-colors duration-300'>
          <ParticleBackground />
          <div className='relative min-h-screen'>
            <Hero/>
          </div>
          <div className="relative">
            {/* <About/> */}
            <Skills/>
            <Education/>
            <Projects/>
            <Contact/>
          </div>
        </div>
        <Navbar />
        <ThemeToggle />
        <SocialDock />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
