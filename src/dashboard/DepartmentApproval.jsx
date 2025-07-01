import React, { useState } from 'react';

const DepartmentApproval = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'Education', hod: 'Alice Das', location: 'Agartala', status: 'Pending' },
    { id: 2, name: 'Health', hod: 'Raju Debbarma', location: 'Udaipur', status: 'Pending' },
    { id: 3, name: 'Agriculture', hod: 'Monika Tripura', location: 'Kailashahar', status: 'Pending' },
    { id: 4, name: 'PWD', hod: 'Bikash Nath', location: 'Dharmanagar', status: 'Pending' },
    { id: 5, name: 'IT', hod: 'Amit Dey', location: 'Agartala', status: 'Pending' },
    { id: 6, name: 'Finance', hod: 'Tumpa Saha', location: 'Belonia', status: 'Pending' },
    { id: 7, name: 'Fisheries', hod: 'Rajib Reang', location: 'Khowai', status: 'Pending' },
    { id: 8, name: 'Sports', hod: 'Rina Chakma', location: 'Ambassa', status: 'Pending' },
    { id: 9, name: 'Tourism', hod: 'Rupak Das', location: 'Teliamura', status: 'Pending' },
    { id: 10, name: 'Revenue', hod: 'Nirmal Darlong', location: 'Sabroom', status: 'Pending' },
  ]);

  const handleAction = (id, action) => {
    setDepartments(prev =>
      prev.map(dept =>
        dept.id === id ? { ...dept, status: action } : dept
      )
    );
  };

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      padding: '20px',
      backgroundColor: '#f4f6f9',
      boxSizing: 'border-box',
      overflow: 'auto'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Department Approval</h2>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#001f4d', color: 'white' }}>
            <th style={thStyle}>Department ID</th>
            <th style={thStyle}>Department Name</th>
            <th style={thStyle}>Head of Department</th>
            <th style={thStyle}>Location</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(dept => (
            <tr key={dept.id} style={{ textAlign: 'center' }}>
              <td style={tdStyle}>{dept.id}</td>
              <td style={tdStyle}>{dept.name}</td>
              <td style={tdStyle}>{dept.hod}</td>
              <td style={tdStyle}>{dept.location}</td>
              <td style={tdStyle}>{dept.status}</td>
              <td style={tdStyle}>
                <button onClick={() => handleAction(dept.id, 'Approved')} style={btnStyleGreen}>Approve</button>{' '}
                <button onClick={() => handleAction(dept.id, 'Rejected')} style={btnStyleRed}>Reject</button>{' '}
                <button onClick={() => handleAction(dept.id, 'Review')} style={btnStyleBlue}>Review</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: '12px',
  border: '1px solid #ddd'
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #ddd'
};

const btnStyleGreen = {
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  borderRadius: '5px'
};

const btnStyleRed = {
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  borderRadius: '5px'
};

const btnStyleBlue = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  borderRadius: '5px'
};

export default DepartmentApproval;