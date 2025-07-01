import React, { useState } from "react";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([
    { id: 1, name: "Amit Roy", email: "amit@example.com", jobTitle: "Developer", qualification: "B.Tech", status: "Approved", appliedOn: "2025-06-20" },
    { id: 2, name: "Sneha Das", email: "sneha@example.com", jobTitle: "Marketing Exec", qualification: "MBA", status: "Pending", appliedOn: "2025-06-19" },
    { id: 3, name: "Rahul Sen", email: "rahul@example.com", jobTitle: "Data Analyst", qualification: "M.Sc", status: "Rejected", appliedOn: "2025-06-18" },
    { id: 4, name: "Pooja Sharma", email: "pooja@example.com", jobTitle: "Finance Assistant", qualification: "B.Com", status: "Approved", appliedOn: "2025-06-17" },
    { id: 5, name: "Ramesh Pal", email: "ramesh@example.com", jobTitle: "HR Executive", qualification: "BBA", status: "Pending", appliedOn: "2025-06-16" },
    { id: 6, name: "Ankita Paul", email: "ankita@example.com", jobTitle: "Frontend Dev", qualification: "B.Tech", status: "Pending", appliedOn: "2025-06-15" },
    { id: 7, name: "Sourav Dev", email: "sourav@example.com", jobTitle: "Backend Dev", qualification: "MCA", status: "Approved", appliedOn: "2025-06-14" },
    { id: 8, name: "Priya Nath", email: "priya@example.com", jobTitle: "Research Asst", qualification: "B.Sc", status: "Rejected", appliedOn: "2025-06-13" },
    { id: 9, name: "Deepak Roy", email: "deepak@example.com", jobTitle: "Support", qualification: "Diploma", status: "Approved", appliedOn: "2025-06-12" },
    { id: 10, name: "Meera Sen", email: "meera@example.com", jobTitle: "Content Writer", qualification: "MA", status: "Pending", appliedOn: "2025-06-11" }
  ]);

  const updateStatus = (id, newStatus) => {
    const updated = candidates.map((c) =>
      c.id === id ? { ...c, status: newStatus } : c
    );
    setCandidates(updated);
  };

  const getStatusColor = (status) => {
    if (status === "Approved") return "green";
    if (status === "Rejected") return "red";
    return "orange";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Candidate List</h2>
      <table style={{ borderCollapse: "collapse", width: "140%" }}>
        <thead>
          <tr>
            <th style={cellHeader}>ID</th>
            <th style={cellHeader}>Name</th>
            <th style={cellHeader}>Email</th>
            <th style={cellHeader}>Job Title</th>
            <th style={cellHeader}>Qualification</th>
            <th style={cellHeader}>Status</th>
            <th style={cellHeader}>Applied On</th>
            <th style={cellHeader}>Action</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c.id}>
              <td style={cellBody}>{c.id}</td>
              <td style={cellBody}>{c.name}</td>
              <td style={cellBody}>{c.email}</td>
              <td style={cellBody}>{c.jobTitle}</td>
              <td style={cellBody}>{c.qualification}</td>
              <td style={{ ...cellBody, color: getStatusColor(c.status), fontWeight: "bold" }}>
                {c.status}
              </td>
              <td style={cellBody}>{c.appliedOn}</td>
              <td style={cellBody}>
                <button onClick={() => updateStatus(c.id, "Approved")} style={btnApprove}>
                  Approve
                </button>
                <button onClick={() => updateStatus(c.id, "Rejected")} style={btnReject}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styles
const cellHeader = {
  padding: "14px",
  border: "1px solid #ccc",
  background: "#f0f0f0",
  fontWeight: "bold",
  textAlign: "left"
};

const cellBody = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "left"
};

const btnApprove = {
  background: "green",
  color: "white",
  border: "none",
  padding: "5px 10px",
  marginRight: "5px",
  cursor: "pointer",
  borderRadius: "4px"
};

const btnReject = {
  background: "red",
  color: "white",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
  borderRadius: "4px"
};

export default CandidateList;