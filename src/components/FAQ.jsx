import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "Can this replace traditional market research?",
    answer: "It's designed to. A typical consumer survey takes 4–6 weeks, costs lakhs, and can only test scenarios you've already committed to. With synthetic agents grounded in real demographic data, you can test unlimited \"what if\" scenarios on demand — new pricing, new markets, policy changes — and get segmented, explainable results the same day. Run the survey that would have taken a month, then run five more before lunch."
  },
  {
    question: "How is this different from just prompting ChatGPT?",
    answer: "ChatGPT is a single text-generation agent without audience definition or behavioral guardrails. Our platform is a multi-agent simulation engine that models complete demographic cohorts, allowing thousands of distinct personas to deliberate dynamically and generate predictive market data."
  },
  {
    question: "How many agents do I need?",
    answer: "50–100 agents deliver clear, segmented results in under 5 minutes — enough to see how different income groups react to a price change or market shock. For research that needs to match traditional survey precision, scale to 300–500 agents — the statistical equivalent of a 1,500-person field study, delivered in minutes instead of weeks. Every agent comes with a full reasoning trace, so you see why they decided, not just what they picked."
  },
  {
    question: "Can I use my own data to ground the participants?",
    answer: "Absolutely. Our native MCP integration allows you to feed your own transcripts, customer conversations, and proprietary data straight into the engine. Your data remains 100% yours; we never train shared models on your private context."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-layout">
          <div className="faq-header">
            <h2 className="section-title">FAQ</h2>
            <p className="section-subtitle">The questions we hear on every demo call</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className="faq-answer-container">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
