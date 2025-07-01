import React from "react";

const FAQs = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100vw", padding: "40px", backgroundColor: "#f2f2f2", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#ffffff", padding: "30px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <h2>FAQs</h2>
        <p><strong>Q1:</strong> How do I register?</p>
        <p><strong>A:</strong> Click on the 'Register' tab and fill in the required fields.</p>

        <p><strong>Q2:</strong> Can I log in without registering?</p>
        <p><strong>A:</strong> No, only registered users can log in.</p>

        <p><strong>Q3:</strong> How do I contact support?</p>
        <p><strong>A:</strong> Use the 'Contact Us' page to send us a message.</p>
      </div>
    </div>
  );
};

export default FAQs;