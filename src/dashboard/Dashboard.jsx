import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'List Department', path: '/dashboard/list-department' },
    { label: 'Approval/Reject Dept', path: '/dashboard/approval-dept' },
    { label: 'List Candidate', path: '/dashboard/list-candidate' },
    { label: 'Logs', path: '/dashboard/logs' },
    { label: 'Job List', path: '/dashboard/job-list' },
    { label: 'Approval/Reject Job', path: '/dashboard/approval-job' },
    { label: 'Notification', path: '/dashboard/notification' },
    { label: 'Settings', path: '/dashboard/settings' }
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      {/* Sidebar */}
      <div style={{
        width: '280px',
        backgroundColor: '#001f4d',
        color: 'white',
        paddingTop: '30px',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Dashboard</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '0 20px' }}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              style={{
                padding: '10px',
                backgroundColor: '#003366',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: '0.3s'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#004080'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#003366'}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '280px',
        padding: '40px',
        flex: 1,
        backgroundColor: '#f5f9ff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ color: '#002147', fontSize: '2.5rem' }}>Welcome to Admin Dashboard</h1>
        <p style={{ fontSize: '18px' }}>Select an option from the left panel to get started.</p>
      </div>
    </div>
  );
};

export default Dashboard;