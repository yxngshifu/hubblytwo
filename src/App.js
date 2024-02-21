import React from 'react'
import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Greenmaker from './Component/Greenmaker'
import Howworks from './Component/Howworks'
import Communication from './Component/Communication'
import Why from './Component/Why'
import Collaborators from './Component/Collaborators'

function App() {
  return (
    <div>
      <Hero/>
      <About/>
      <Greenmaker/>
      <Why/>
      <Howworks/>
      <Communication/>
      <Collaborators/>
    </div>
  )
}

export default App
