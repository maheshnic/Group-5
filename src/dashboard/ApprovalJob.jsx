import React, { useState } from 'react';

const ApprovalJob = () => {
  const [jobList, setJobList] = useState([
    { id: 1, title: "Data Analyst", department: "IT", location: "Agartala", status: "Pending" },
    { id: 2, title: "Accountant", department: "Finance", location: "Udaipur", status: "Pending" },
    { id: 3, title: "Clerk", department: "Administration", location: "Kailashahar", status: "Pending" },
    { id: 4, title: "Assistant Engineer", department: "PWD", location: "Dharmanagar", status: "Pending" },
    { id: 5, title: "Teacher", department: "Education", location: "Teliamura", status: "Pending" }
  ]);

  const handleAction = (id, action) => {
    const updatedJobs = jobList.map(job =>
      job.id === id ? { ...job, status: action } : job
    );
    setJobList(updatedJobs);
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '200%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f4f8',
      boxSizing: 'border-box',
      padding: '20px'
    }}>
      <div style={{ width: '100%', maxWidth: '1200px', background: 'white', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Job Approval/Reject</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
              <th style={thStyle}>Job Title</th>
              <th style={thStyle}>Department</th>
              <th style={thStyle}>Location</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobList.map((job) => (
              <tr key={job.id} style={{ textAlign: 'center', borderBottom: '1px solid #ccc' }}>
                <td style={tdStyle}>{job.title}</td>
                <td style={tdStyle}>{job.department}</td>
                <td style={tdStyle}>{job.location}</td>
                <td style={tdStyle}><b>{job.status}</b></td>
                <td style={tdStyle}>
                  <button onClick={() => handleAction(job.id, "Approved")} style={actionButton}>Approve</button>
                  <button onClick={() => handleAction(job.id, "Rejected")} style={{ ...actionButton, backgroundColor: 'crimson' }}>Reject</button>
                  <button onClick={() => handleAction(job.id, "Reviewed")} style={{ ...actionButton, backgroundColor: 'orange' }}>Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const thStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  fontWeight: 'bold'
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #ddd'
};

const actionButton = {
  margin: '0 5px',
  padding: '5px 10px',
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default ApprovalJob;