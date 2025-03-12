import React from 'react'
// import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Sercives from './Components/Services'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Navbar1 from './Components/HamburgerMenu'

function App() {

  return (
    <> 
      <Navbar1/>
      {/* <Navbar/> */}
      <HeroSection/>
      <About/>
      <Sercives/>
      <Projects/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
