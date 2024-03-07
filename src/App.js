import React from 'react'

import About from './Component/About'
import Greenmaker from './Component/Greenmaker'
import Howworks from './Component/Howworks'
import Communication from './Component/Communication'
import Why from './Component/Why'
import Collaborators from './Component/Collaborators'

import Goals from './Component/Goals'
import Offerings from './Component/Offerings'
import Home from './Component/Home'
import Support from './Pages/Support'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Customer from './Component/Customer'
import HubblyWorks from './Pages/HubblyWorks'
import Choose from './Component/page3/Choose'
import Booking from './Component/page3/Booking'
import Trusted from './Component/page3/Trusted'
import Pricing from './Component/page3/Pricing'
import Supportive from './Component/page3/Supportive'
import Privacy from './Component/Privacy'
import OurOfferings from './Pages/OurOfferings'
import AboutUs from './Pages/AboutUs'
function App() {
  return (
    <div>
   <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="support" element={<Support />} />
         <Route path="hubblyworks" element={<HubblyWorks />} />
         <Route path="offerings" element={<Offerings />} />
         <Route path="goals" element={<Goals/>} />
         <Route path="collaborators" element={<Collaborators />} />
         <Route path="why" element={<Why/>} />
         <Route path="communication" element={<Communication />} />
         <Route path="howworks" element={<Howworks />} />
         <Route path="greenmaker" element={<Greenmaker />} />
         <Route path="about" element={<About/>} />
         <Route path="customer" element={<Customer/>} />
         <Route path="choose" element={<Choose/>} />
         <Route path="booking" element={<Booking/>} />
         <Route path="trusted" element={<Trusted/>} />
         <Route path="pricing" element={<Pricing/>} />
         <Route path="support" element={<Supportive/>} />
         <Route path="privacy" element={<Privacy/>} />
          <Route path="ourofferings" element={<OurOfferings/>} />
          <Route path="aboutus" element={<AboutUs/>} />
        </Routes>
    </div>
  /</Router>
  
    </div>
  )
}

export default App
