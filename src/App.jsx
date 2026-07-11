import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import UseCases from './components/UseCases';
import WhoItsFor from './components/WhoItsFor';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />

        <UseCases />
        <WhoItsFor />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
