import React, { useState } from "react";

const LoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin} className="btn btn-success">
        Login
      </button>
      <button onClick={handleLogout} className="btn btn-warning">
        Logout
      </button>
      <p>User is {loggedIn ? "logged in" : "logged out"}</p>
    </div>
  );
};

export default LoggedIn;
