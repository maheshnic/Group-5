import React, { useState } from 'react';

const JobList = () => {
  const initialJobs = [
    { id: 1, title: "Software Engineer", department: "Information Technology", location: "Agartala" },
    { id: 2, title: "HR Executive", department: "Human Resources", location: "Udaipur" },
    { id: 3, title: "Accountant", department: "Finance", location: "Dharmanagar" },
    { id: 4, title: "Marketing Manager", department: "Marketing", location: "Agartala" },
    { id: 5, title: "Research Analyst", department: "R&D", location: "Kailashahar" },
    { id: 6, title: "PR Officer", department: "Public Relations", location: "Teliamura" },
    { id: 7, title: "Legal Advisor", department: "Legal", location: "Ambassa" },
    { id: 8, title: "Engineer", department: "Engineering", location: "Khowai" },
    { id: 9, title: "Support", department: "Customer Service", location: "Sabroom" },
    { id: 10, title: "Intern", department: "IT", location: "Agartala" }
  ];

  const [jobs] = useState(initialJobs);
  const [search, setSearch] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.department.toLowerCase().includes(search.toLowerCase()) ||
    job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ width: '100vw', minHeight: '100vh', padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Job List</h2>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by title, department, or location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
        <thead>
          <tr style={{ backgroundColor: '#ddd' }}>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Title</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Department</th>
            <th style={{ padding: '10px', border: '1px solid #ccc' }}>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredJobs.map((job) => (
            <tr key={job.id}>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{job.id}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{job.title}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{job.department}</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>{job.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobList;