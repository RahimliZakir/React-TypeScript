import React, { ReactNode, FC } from "react";

type OscarProps = {
  children: ReactNode;
};

const Oscar: FC<OscarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Oscar;
