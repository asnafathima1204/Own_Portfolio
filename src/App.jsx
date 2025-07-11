import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

