"use client";

import { createContext, useContext } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#0070ff",
    secondary: "#99a1af",
    background: "#f0f0f0",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
