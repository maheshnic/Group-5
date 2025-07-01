import React from "react";

const Terms = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100vw", padding: "40px", backgroundColor: "#f2f2f2", boxSizing: "border-box" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#ffffff", padding: "30px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <h2>Terms and Conditions</h2>
        <p>By using this portal, you agree to the following terms and conditions:</p>
        <ul>
          <li>You must provide accurate and truthful information.</li>
          <li>Your account access may be restricted for violations.</li>
          <li>This portal is meant solely for job-related activities.</li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;