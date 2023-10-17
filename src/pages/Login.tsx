import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');  // for displaying error messages

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:80/admin/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName: username, password })
      });




      const data = await response.json();

      if (data.code === 200) {
        setIsLoggedIn(true);
        setErrorMessage(''); // Clear any previous error messages
      } else {
        setErrorMessage(data.msg);
      }

    } catch (error) {
      console.error("There was an error logging in:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* Display error messages */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;