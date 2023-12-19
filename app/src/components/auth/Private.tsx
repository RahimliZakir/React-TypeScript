import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};

export const Private: React.FC<PrivateProps> = ({ isLoggedIn, Component }) => {
  if (isLoggedIn) {
    return <Component name={"Zakir"} />;
  } else {
    return <Login />;
  }
};

export default Private;
