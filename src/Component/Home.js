import React from 'react'
import Hero from './Hero'
import About from './About'
import Greenmaker from './Greenmaker'
import Howworks from './Howworks'
import Communication from './Communication'
import Why from './Why'
import Collaborators from './Collaborators'
import Footer from './Footer'
import Goals from './Goals'
import Offerings from './Offerings'


function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Greenmaker/>
      <Why/>
      <Howworks/>
      <Communication/>
      <Collaborators/>
      <Offerings/>
      <Goals/>
      <Footer/>
    </div>
  )
}

export default Home