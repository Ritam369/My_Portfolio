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

function App() {

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className='z-0 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 scroll-smooth min-h-screen transition-colors duration-300'>
          <div className='min-h-screen'>
            <Navbar />
            <Hero/>
          </div>
          <div className="mt-10">
            <About/>
            <Education/>
            <Projects/>
            <Skills/>
            <Contact/>
          </div>
        </div>
        <ThemeToggle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
