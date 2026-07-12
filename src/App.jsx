import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import UseCases from './components/UseCases';
import WhoItsFor from './components/WhoItsFor';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Demo from './components/Demo';
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
        <Demo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
