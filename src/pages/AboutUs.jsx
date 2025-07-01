import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",         
        backgroundColor: "#f2f2f2", 
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>About Us</h2>
        <p>
          This Recruitment Portal is designed to simplify the job search process.
          
          We connect candidates with recruiters in an efficient and transparent manner.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;