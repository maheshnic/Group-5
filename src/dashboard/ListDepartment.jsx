import React, { useState } from 'react';

const DepartmentList = () => { const [departments, setDepartments] = useState([ { id: 1, name: 'Information Technology', head: 'Dr. A. Dey', location: 'Agartala', status: 'Pending' }, { id: 2, name: 'Human Resources', head: 'Ms. R. Paul', location: 'Udaipur', status: 'Pending' }, { id: 3, name: 'Finance', head: 'Mr. B. Roy', location: 'Kailashahar', status: 'Pending' }, { id: 4, name: 'Marketing', head: 'Mrs. M. Sen', location: 'Agartala', status: 'Pending' }, { id: 5, name: 'Research & Development', head: 'Dr. T. Debbarma', location: 'Dharmanagar', status: 'Pending' }, { id: 6, name: 'Public Relations', head: 'Mr. J. Tripura', location: 'Khowai', status: 'Pending' }, { id: 7, name: 'Legal', head: 'Adv. P. Dutta', location: 'Agartala', status: 'Pending' }, { id: 8, name: 'Engineering', head: 'Er. D. Saha', location: 'Ambassa', status: 'Pending' }, { id: 9, name: 'Customer Support', head: 'Mr. R. Chakma', location: 'Belonia', status: 'Pending' }, { id: 10, name: 'Administration', head: 'Mrs. N. Das', location: 'Sabroom', status: 'Pending' }, ]);

const updateStatus = (id, newStatus) => { setDepartments(departments.map(dept => dept.id === id ? { ...dept, status: newStatus } : dept)); };

return ( <div style={{ padding: '20px', width: '100vw', maxWidth: '100%', boxSizing: 'border-box', overflowX: 'auto' }}> <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Department List</h2>

<table style={{
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: 'white',
    minWidth: '900px'
  }}>
    <thead style={{ backgroundColor: '#4a4a8a', color: 'white' }}>
      <tr>
        <th style={cellStyle}>Department ID</th>
        <th style={cellStyle}>Department Name</th>
        <th style={cellStyle}>Head of Department</th>
        <th style={cellStyle}>Location</th>
        <th style={cellStyle}>Status</th>
        <th style={cellStyle}>Action</th>
      </tr>
    </thead>
    <tbody>
      {departments.map((dept) => (
        <tr key={dept.id} style={{ textAlign: 'center', backgroundColor: '#f9f9f9' }}>
          <td style={cellStyle}>{dept.id}</td>
          <td style={cellStyle}>{dept.name}</td>
          <td style={cellStyle}>{dept.head}</td>
          <td style={cellStyle}>{dept.location}</td>
          <td style={{ ...cellStyle, fontWeight: 'bold', color: getStatusColor(dept.status) }}>{dept.status}</td>
          <td style={cellStyle}>
            <button
              onClick={() => updateStatus(dept.id, 'Approved')}
              style={buttonGreen}>Approve</button>
            <button
              onClick={() => updateStatus(dept.id, 'Rejected')}
              style={buttonRed}>Reject</button>
            <button
              onClick={() => updateStatus(dept.id, 'Under Review')}
              style={buttonYellow}>Review</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

); };

const cellStyle = { padding: '10px', border: '1px solid #ccc', };

const buttonGreen = { marginRight: '5px', backgroundColor: '#28a745', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer' };

const buttonRed = { marginRight: '5px', backgroundColor: '#dc3545', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer' };

const buttonYellow = { backgroundColor: '#ffc107', color: '#212529', padding: '5px 10px', border: 'none', borderRadius: '4px', cursor: 'pointer' };

const getStatusColor = (status) => { switch (status) { case 'Approved': return 'green'; case 'Rejected': return 'red'; case 'Under Review': return 'orange'; default: return 'black'; } };

export default DepartmentList;