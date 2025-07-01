import React, { useState } from 'react';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [profile, setProfile] = useState({
    name: ' ',
    email: ' ',
    mobile: ' ',
  });

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    alert('Password reset successfully!');
    setNewPassword('');
  };

  return (
    <div style={outerWrapper}>
      <div style={settingsBox}>
        <h2 style={{ marginBottom: '20px' }}>Settings</h2>

        <div style={sectionStyle}>
          <label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            /> Enable Notifications
          </label>
        </div>

        <div style={sectionStyle}>
          <button style={buttonStyle} onClick={() => setShowUpdateProfile(!showUpdateProfile)}>
            {showUpdateProfile ? 'Cancel Profile Update' : 'Update Profile'}
          </button>

          {showUpdateProfile && (
            <form onSubmit={handleProfileUpdate} style={formStyle}>
              <label>Name:
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  style={inputStyle}
                />
              </label>
              <label>Email:
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  style={inputStyle}
                />
              </label>
              <label>Mobile:
                <input
                  type="text"
                  value={profile.mobile}
                  onChange={(e) => setProfile({ ...profile, mobile: e.target.value })}
                  style={inputStyle}
                />
              </label>
              <button type="submit" style={saveButtonStyle}>Save</button>
            </form>
          )}
        </div>

        <div style={sectionStyle}>
          <button style={buttonStyle} onClick={() => setShowResetPassword(!showResetPassword)}>
            {showResetPassword ? 'Cancel Reset' : 'Reset Password'}
          </button>

          {showResetPassword && (
            <form onSubmit={handlePasswordReset} style={formStyle}>
              <label>New Password:
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={inputStyle}
                />
              </label>
              <button type="submit" style={saveButtonStyle}>Update</button>
            </form>
          )}
        </div>

        <hr style={{ margin: '30px 0' }} />

        <button onClick={handleLogout} style={logoutButtonStyle}>Log Out</button>
      </div>
    </div>
  );
};

// Styling

const outerWrapper = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f7f7f7',
};

const settingsBox = {
  backgroundColor: '#fff',
  padding: '40px',
  width: '400px',
  borderRadius: '10px',
  boxShadow: '0 0 15px rgba(0,0,0,0.1)',
};

const sectionStyle = {
  marginBottom: '25px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const formStyle = {
  marginTop: '15px',
  display: 'grid',
  gap: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginTop: '5px',
};

const saveButtonStyle = {
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

const logoutButtonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default Settings;