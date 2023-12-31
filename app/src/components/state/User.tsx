import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  //* Eger hech vaxt "null" olmayacaqsa bele yaziriq.
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  //* useState 2 tipden deyer qebul ede biler.
  // const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Zakir",
      email: "zakirer@code.edu.az",
    });
  };

  // const handleLogout = () => {
  //   setUser(null);
  // };

  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <button onClick={handleLogin} className="btn btn-success">
          Login
        </button>
        {/* <button onClick={handleLogout} className="btn btn-warning">
          Logout
        </button> */}
      </div>
      {/* Eger "null" olmayacaqsa "?" yazmaga ehtiyac yoxdur. */}
      <p>User name is {user.name}</p>
      <p>User email is {user.email}</p>
      {/* "null" da ola biler deye "?" ile yazmaliyiq ki partlamasin. */}
      {/* <p>User name is {user?.name}</p>
      <p>User email is {user?.email}</p> */}
    </div>
  );
};

export default User;
