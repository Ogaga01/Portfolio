import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import MobileNavbar from './components/MobileNavbar';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Recommendation from './components/Recommendation';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileNavbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Recommendation/>
    </div>
  );
}

export default App;
