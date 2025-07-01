import React from "react";

const ContactUs = () => {
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
        <h2>Contact Us</h2>
        <p>
          For any queries or issues, feel free to get in touch with us using the form below:
        </p>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label>Name:</label>
            <input type="text" style={{ width: "100%", padding: "8px" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Email:</label>
            <input type="email" style={{ width: "100%", padding: "8px" }} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Message:</label>
            <textarea style={{ width: "100%", padding: "8px" }} rows="4"></textarea>
          </div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#001f3f", color: "white", border: "none", borderRadius: "4px" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;