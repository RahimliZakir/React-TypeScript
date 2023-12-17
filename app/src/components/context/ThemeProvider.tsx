import React, { createContext } from "react";

import { theme } from "./theme";

//* default value of Context.
export const ThemeProviderContext = createContext(theme);

type ThemeProviderTypes = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderTypes> = ({ children }) => {
  return (
    <ThemeProviderContext.Provider value={theme}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export default ThemeProvider;
