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
import Choose from './page3/Choose'
import Booking from './page3/Booking'
import Trusted from './page3/Trusted'
import Pricing from './page3/Pricing'
import Supportive from './page3/Supportive'
import Privacy from './Component/Privacy'
import OurOfferings from './Pages/OurOfferings'
import AboutUs from './Pages/AboutUs'
import InterestForm from './Pages/InterestForm'
import Terms from './Component/Terms'
import Contact from './Component/Contact'
import Airtable from './Component/Airtable'
import Initiative from './Component/Initiative'
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
         <Route path="wesupport" element={<Supportive/>} />
         <Route path="privacy" element={<Privacy/>} />
         <Route path="terms" element={<Terms/>} />
          <Route path="ourofferings" element={<OurOfferings/>} />
          <Route path="aboutus" element={<AboutUs/>} />
           <Route path="interestform" element={<InterestForm/>} />
              <Route path="contact" element={<Contact/>} />
              <Route path='airtable' element={<Airtable/>} />
                 <Route path='initiative' element={<Initiative/>} />
        </Routes>
    </div>
  /</Router>
  
    </div>
  )
}

export default App
