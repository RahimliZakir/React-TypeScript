import React, { useContext } from "react";

import { ThemeProviderContext } from "./ThemeProvider";

const Box: React.FC = () => {
  const themeProviderContext = useContext(ThemeProviderContext);

  return (
    <div
      style={{
        backgroundColor: themeProviderContext.primary.main,
        color: themeProviderContext.primary.text,
      }}
    >
      Box
    </div>
  );
};

export default Box;
