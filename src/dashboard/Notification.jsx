import React, { useState } from "react";

const Notification = () => { const [notifications] = useState([ 
  { id: 1, title: "New Candidate Registered",
     message: "A new candidate named Amit Roy has registered.", 
     date: "2025-06-20", type: "info" }, 
     { id: 2, title: "Job Application Approved", 
      message: "Candidate Sneha Das's job application has been approved.",
       date: "2025-06-19", type: "success" },
        { id: 3, title: "Job Application Rejected",
           message: "Rahul Sen's job application was rejected.", 
           date: "2025-06-18", type: "error" }, 
           { id: 4, title: "Department Review Needed",
             message: "The Finance department requires admin review.", 
             date: "2025-06-17",
              type: "warning" }, 
              { id: 5, title: "New Job Posted", 
                message: "A new job titled Software Engineer has been posted.",
                 date: "2025-06-16", 
                 type: "info" } ]);

const getColor = (type) => { switch (type) { case "success": return "#d4edda"; case "error": return "#f8d7da"; case "warning": return "#fff3cd"; default: return "#d1ecf1"; } };

return ( 
<div style={{ padding: "20px", width: "300%", boxSizing: "border-box" }}> 
<h2>Notifications</h2>
 <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
  {notifications.map((note) => ( <div key={note.id} style={{ backgroundColor: getColor(note.type), padding: "15px", borderRadius: "5px", border: "1px solid #ccc" }} >
   <strong>{note.title}</strong> <p>{note.message}</p>
    <small style={{ fontStyle: "italic" }}>{note.date}</small> 
    </div> ))}
     </div> </div> ); };

export default Notification;