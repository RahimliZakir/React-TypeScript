import React, { useContext } from "react";

import { MemberContext } from "./MemberContextProvider";

const User = () => {
  const memberContext = useContext(MemberContext);

  const handleLogin = () => {
    if (memberContext)
      memberContext.setMember({
        name: "Zakir",
        email: "zakirer@code.edu.az",
      });
  };

  const handleLogout = () => {
    if (memberContext) memberContext.setMember(null);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-2">
      <div>
        <button onClick={handleLogin} className="btn btn-success">
          Login
        </button>
        <button onClick={handleLogout} className="btn btn-warning">
          Logout
        </button>
      </div>
      <p>Member name is {memberContext?.member?.name}.</p>
      <p>Member email is {memberContext?.member?.email}.</p>
    </div>
  );
};

export default User;
