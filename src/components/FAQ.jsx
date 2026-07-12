import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "Is Mudivu meant to replace real user research?",
    answer: "No. Mudivu's simulation engine is a strategic force multiplier. It allows you to rapidly stress-test value propositions, optimize pricing, and eliminate obvious market failures in the Indian context within minutes. Real-world validation remains essential, but you'll only spend those resources on highly targeted, de-risked hypotheses."
  },
  {
    question: "How is this different from just prompting ChatGPT?",
    answer: "ChatGPT is a single text-generation agent without audience definition or behavioral guardrails. Our platform is a multi-agent simulation engine that models complete demographic cohorts, allowing thousands of distinct personas to deliberate dynamically and generate predictive market data."
  },
  {
    question: "How many synthetic interviews do I need to run?",
    answer: "For qualitative work, 10–12 well-defined participants typically reach saturation — and our saturation score lets you see when new participants stop adding novel themes. For quantitative confidence, you can scale to hundreds in the same study."
  },
  {
    question: "Can I use my own localized Indian data to ground the personas?",
    answer: "Absolutely. You can securely feed your own regional transcripts, market reports, and proprietary customer conversations straight into the Mudivu engine. Your data remains 100% yours; we never train shared models on your private context, ensuring complete confidentiality while giving you highly specific cultural insights."
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
