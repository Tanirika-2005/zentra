import React, { useState } from 'react';
import './Demo.css';

const Demo = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <div className="demo-layout">
          <div className="demo-content">
            <h2 className="section-title">See Mudivu in action</h2>
            <p className="demo-desc">
              Book a personalized demo to see how our predictive human simulation platform can stress-test your value propositions and optimize your pricing before you write a single line of code.
            </p>
            <ul className="demo-benefits">
              <li>✓ Full access to the multi-agent engine</li>
              <li>✓ Example simulations for your specific industry</li>
              <li>✓ Custom onboarding and integration plan</li>
            </ul>
          </div>
          <div className="demo-form-container">
            {submitted ? (
              <div className="demo-success fade-in">
                <div className="success-icon">✓</div>
                <h3>Request Received</h3>
                <p>We'll be in touch shortly to schedule your demo.</p>
              </div>
            ) : (
              <form className="demo-form fade-in" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" required placeholder="Jane" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" required placeholder="Doe" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work Email</label>
                  <input type="email" id="email" required placeholder="jane@company.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" required placeholder="Acme Corp" />
                </div>
                <button type="submit" className="btn-primary form-submit">
                  Request Demo
                </button>
                <p className="form-disclaimer">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
