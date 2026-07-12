import React from 'react';
import './Science.css';

const Science = () => {
  return (
    <section className="science" id="science">
      <div className="container">
        <div className="science-header">
          <h2 className="section-title">The science</h2>
          <p className="section-subtitle">We obsess over synthetic-organic parity</p>
          <p className="science-desc">
            The most common question we get is: how do we know it's accurate? We're very open about how we measure it, where we fall short, and how we improve. Here's how we think about it.
          </p>
        </div>

        <div className="science-grid">
          <a href="#" className="science-card">
            <p className="card-category">WHAT THE RESEARCH SAYS</p>
            <h3 className="card-title">21 Peer reviewed papers that support the Mudivu thesis</h3>
            <p className="card-text">Here is a compilation of all the papers that help make a case for Mudivu.</p>
            <span className="card-link">Read article &rarr;</span>
          </a>
          
          <a href="#" className="science-card">
            <p className="card-category">COMPARISON STUDIES</p>
            <h3 className="card-title">Comparison studies. The opportunity lies in the deviation.</h3>
            <p className="card-text">When we compare different studies, especially looking at what synthetic and organic data tell us, we often find they mostly talk about the same things...</p>
            <span className="card-link">Read article &rarr;</span>
          </a>
          
          <a href="#" className="science-card">
            <p className="card-category">AT SCALE</p>
            <h3 className="card-title">Generative Agent Simulations of 1,000 People</h3>
            <p className="card-text">A paper that thoroughly executes a parity study between Synthetic and Organic users.</p>
            <span className="card-link">Read article &rarr;</span>
          </a>
          
          <a href="#" className="science-card">
            <p className="card-category">THE METHOD</p>
            <h3 className="card-title">The wisdom of the silicon crowd</h3>
            <p className="card-text">Combining machine predictions with human insights leads to the most robust forecasting results.</p>
            <span className="card-link">Read article &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Science;
