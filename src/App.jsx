import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';

import Hero from './Components/Hero';
import About from './Components/About';
import Education from './Components/Education';
import Project from './Components/Project';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>  
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Education />
              <Project />
              <Resume />
              <Contact />
            </>
          }
        />

        {/* Separate Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;