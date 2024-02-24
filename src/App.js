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

function App() {
  return (
    <div>
   <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="support" element={<Support />} />
         <Route path="offerings" element={<Offerings />} />
         <Route path="goals" element={<Goals/>} />
         <Route path="collaborators" element={<Collaborators />} />
         <Route path="why" element={<Why/>} />
         <Route path="communication" element={<Communication />} />
         <Route path="howworks" element={<Howworks />} />
         <Route path="greenmaker" element={<Greenmaker />} />
         <Route path="about" element={<About/>} />
         <Route path="customer" element={<Customer/>} />
        </Routes>
    </div>
  /</Router>
  
    </div>
  )
}

export default App
