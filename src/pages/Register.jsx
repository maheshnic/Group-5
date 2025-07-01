import React, { useState } from 'react';

const Register = () => { const [captcha, setCaptcha] = useState(generateCaptcha()); const [success, setSuccess] = useState(false);

function generateCaptcha() { const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join(''); }

const refreshCaptcha = () => setCaptcha(generateCaptcha());

const handleSubmit = (e) => { e.preventDefault();

const form = e.target;
const username = form.username.value;
const password = form.password.value;
const mobile = form.mobile.value;

const newUser = { username, password, mobile };

const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
const userExists = existingUsers.some(user => user.username === username);

if (userExists) {
  alert('User already exists!');
  return;
}

existingUsers.push(newUser);
localStorage.setItem('users', JSON.stringify(existingUsers));
setSuccess(true);
form.reset();
refreshCaptcha();

};

return ( <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: 'black', width: '100%', boxSizing: 'border-box' }}> <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registration Form</h2>

{success && (
    <div style={{
      textAlign: 'center',
      backgroundColor: '#d4edda',
      color: '#155724',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '20px',
      border: '1px solid #c3e6cb'
    }}>
      ✅ Registration Successful!
    </div>
  )}

  <form onSubmit={handleSubmit} style={{
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr 2fr',
    gap: '15px',
    maxWidth: '100%',
    padding: '0 40px',
    boxSizing: 'border-box'
  }}>
    {/* Row 1 */}
    <label>Are You Permanent Resident of Tripura?</label>
    <select><option>Select</option><option>Yes</option><option>No</option></select>
    <label>PRTC Number:</label>
    <input type="text" />

    {/* Row 2 */}
    <label>PRTC Issuing District:</label>
    <input type="text" />
    <label>PRTC Issue Date:</label>
    <input type="date" />

    {/* Row 3 */}
    <label>PRTC Certificate Document (PDF):</label>
    <input type="file" />
    <label>Title:</label>
    <select><option>Select</option><option>Mr</option><option>Ms</option></select>

    {/* Row 4 */}
    <label>Name:</label>
    <input type="text" />
    <label>Father's Name:</label>
    <input type="text" />

    {/* Row 5 */}
    <label>Mother's Name:</label>
    <input type="text" />
    <label>Date of Birth:</label>
    <input type="date" />

    {/* Row 6 */}
    <label>Gender:</label>
    <select><option>Select</option><option>Male</option><option>Female</option></select>
    <label>Mobile Number:</label>
    <input type="text" name="mobile" required />

    {/* Row 7 */}
    <label>Aadhaar Number:</label>
    <input type="text" />
    <label>Email:</label>
    <input type="email" />

    {/* Row 8 */}
    <label>Category:</label>
    <select><option>Select</option><option>General</option><option>SC</option><option>ST</option></select>
    <label>Username:</label>
    <input type="text" name="username" required />

    {/* Row 9 */}
    <label>Password:</label>
    <input type="password" name="password" required />
    <label>Confirm Password:</label>
    <input type="password" />

    {/* Row 10: Captcha */}
    <label>
      Captcha: <b>{captcha}</b>
      <button type="button" onClick={refreshCaptcha} style={{ marginLeft: '10px' }}>Refresh</button>
    </label>
    <input type="text" placeholder="Enter Captcha" />
    <div></div>
    <button type="submit" style={{
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer'
    }}>
      Register
    </button>
  </form>
</div>

); };

export default Register;