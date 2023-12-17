import React, { useState, createContext } from "react";

type AuthMember = {
  name: string;
  email: string;
};

type MemberContextType = {
  member: AuthMember | null;
  setMember: React.Dispatch<React.SetStateAction<AuthMember | null>>;
};

export const MemberContext = createContext<MemberContextType | null>(null);

type MemberContextProviderProps = {
  children: React.ReactNode;
};

const MemberContextProvider = ({ children }: MemberContextProviderProps) => {
  const [member, setMember] = useState<AuthMember | null>(null);

  return (
    <MemberContext.Provider value={{ member, setMember }}>
      {children}
    </MemberContext.Provider>
  );
};

export default MemberContextProvider;
