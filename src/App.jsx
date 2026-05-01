import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';

import Hero from './Components/Hero';
import About from './Components/About';
import Education from './Components/Education';
import Projects from './Components/Project';
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
              <Projects />
              <Resume />
              <Contact />
            </>
          }
        />

        {/* Separate Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;