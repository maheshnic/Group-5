import React, { useEffect, useState } from 'react';

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Mock logs (can be replaced with localStorage or API)
    const mockLogs = [
      { id: 1, action: 'User John registered', time: '2025-06-25 10:22 AM' },
      { id: 2, action: 'Admin approved Education department', time: '2025-06-25 11:10 AM' },
      { id: 3, action: 'Job posted by Health department', time: '2025-06-25 12:45 PM' },
      { id: 4, action: 'Candidate Priya submitted application', time: '2025-06-25 01:05 PM' },
      { id: 5, action: 'Admin rejected Agriculture department', time: '2025-06-25 02:30 PM' },
      { id: 6, action: 'Password changed by user Ravi', time: '2025-06-25 03:20 PM' },
      { id: 7, action: 'Notification sent to all candidates', time: '2025-06-25 04:00 PM' },
      { id: 8, action: 'Department login failed 3 times', time: '2025-06-25 04:10 PM' },
      { id: 9, action: 'Admin reviewed Tourism department', time: '2025-06-25 05:00 PM' },
      { id: 10, action: 'Job deleted by Admin', time: '2025-06-25 06:15 PM' },
    ];
    setLogs(mockLogs);
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#f4f6f9',
      padding: '20px',
      boxSizing: 'border-box',
      overflow: 'auto'
    }}>
      <h2 style={{
        textAlign: 'center',
        color: '#002B5B',
        marginBottom: '20px'
      }}>
        System Logs
      </h2>

      <table style={{
        width: '100%',
        backgroundColor: '#ffffff',
        borderCollapse: 'collapse',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#001f4d', color: '#fff' }}>
            <th style={thStyle}>#</th>
            <th style={thStyle}>Action Performed</th>
            <th style={thStyle}>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id} style={{ textAlign: 'center' }}>
              <td style={tdStyle}>{log.id}</td>
              <td style={tdStyle}>{log.action}</td>
              <td style={tdStyle}>{log.time}</td>
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

export default Logs;