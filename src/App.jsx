import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Project from './components/project';
import Resume from './components/Resume';
import Contact from './components/Contact';

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