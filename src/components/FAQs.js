import React, { useState } from "react";
import "./FAQs.css";

const FAQs = () => {
  const [activeTab, setActiveTab] = useState("eligibility");

  const faqs = {
    eligibility: [
      {
        question: "Who is eligible to participate?",
        answer:
          "Anyone who is 18 years or older and has a valid ID can participate.",
      },
      {
        question: "Are there any prerequisites?",
        answer: "No prerequisites are required to participate.",
      },
    ],
    howToUse: [
      {
        question: "How do I sign up?",
        answer:
          "You can sign up by visiting our registration page and filling out the form.",
      },
      {
        question: "How do I refer a friend?",
        answer:
          "Use your unique referral link to invite friends and earn rewards.",
      },
    ],
    terms: [
      {
        question: "What are the terms and conditions?",
        answer:
          "Please refer to our official terms and conditions document for detailed information.",
      },
      {
        question: "Can I withdraw my participation?",
        answer: "Yes, you can withdraw at any time by contacting support.",
      },
    ],
  };

  return (
    <section className="faqs-container">
      {/* <h2> Frequently Asked Questions </h2> */}
      <div className="faqs-buttons">
        <h2> Frequently Asked Questions </h2>
        <button onClick={() => setActiveTab("eligibility")}>Eligibility</button>
        <button onClick={() => setActiveTab("howToUse")}>How to use?</button>
        <button onClick={() => setActiveTab("terms")}>
          Terms & Conditions
        </button>
      </div>
      <div className="faqs-content">
        {faqs[activeTab].map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
