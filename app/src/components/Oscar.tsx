import React from "react";

type OscarProps = {
  children: React.ReactNode;
};

const Oscar: React.FC<OscarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Oscar;
