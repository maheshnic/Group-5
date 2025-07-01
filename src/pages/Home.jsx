import React, { useEffect, useRef } from "react";

const Home = () => {
  const scrollRef = useRef(null);

  const notifications = [
    "📄 Exam Notification: Technical Posts – Apply by July 15",
    "📢 Walk-in Interviews: Marketing Division – June 22",
    "📂 Online Application for Data Analyst – Open Now",
    "📌 Document Verification: Group B Roles – Starts July 5",
    "💡 Resume Workshop: Register by June 30",
    "📍 Job Fair (North East Zone): July 10–12",
    "🗂 Internship Call: Govt Sector – Deadline June 28",
  ];

  useEffect(() => {
    const container = scrollRef.current;
    const list = container.querySelector(".scroll-list");
    const clone = list.cloneNode(true);
    container.appendChild(clone);

    let scrollTop = 0;
    const scroll = () => {
      scrollTop += 1;
      if (scrollTop >= list.scrollHeight) {
        scrollTop = 0;
      }
      container.scrollTop = scrollTop;
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: "20px",
        margin: 0,
        backgroundColor: "#f9f9f9",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Left: Welcome & Image */}
        <div
          style={{
            flex: 2,
            backgroundColor: "#fff",
            borderRadius: "12px",
            padding: "25px",
            boxShadow: "0 0 8px rgba(0,0,0,0.08)",
          }}
        >
          <h1 style={{ color: "#003366", marginBottom: "10px" }}>
            Welcome to TRIPURA PUBLIC SERVICE COMMISSION
          </h1>
          <img
            src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg"
            alt="Team"
            style={{
              width: "90%",
              height: "400px",
              objectFit: "no margin",
              borderRadius: "25px",
            }}
          />
        </div>

        {/* Right: What's New */}
        <div
          style={{
            width: "400px",
            backgroundColor: "#e6f0ff",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 8px rgba(0,0,0,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              backgroundColor: "#355af5",
              color: "white",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            🔔 What's New
          </div>

          <div
            ref={scrollRef}
            style={{
              height: "350px",
              overflow: "hidden",
              paddingTop: "10px",
              position: "relative",
            }}
          >
            <div className="scroll-list" style={{ display: "flex", flexDirection: "column" }}>
              {notifications.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#fff",
                    padding: "10px 14px",
                    margin: "5px 10px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;