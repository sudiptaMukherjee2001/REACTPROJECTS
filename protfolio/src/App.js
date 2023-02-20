import React from 'react'
import Home from './component/Home';
import Skill from './component/Skill';
import Navbar from './component/Navbar';
import Project from './component/Project';
import Contact from './component/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    // <Home />
    // <Skill />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App