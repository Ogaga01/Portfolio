import React from 'react';
import Hero from './components/Hero';
import MobileNavbar from './components/MobileNavbar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileNavbar />
      <Hero/>
    </div>
  );
}

export default App;
