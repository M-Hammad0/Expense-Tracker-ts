import React, { createContext, useState } from "react";

interface themeStructure {
  isDark: boolean,
  light: {bg: string, bg2: string, syntax: string, syntax2: string},
  dark: {bg: string, bg2: string, syntax: string, syntax2: string},
  toggle: () => void,
}

const initialState = {
  isDark: false,
  light: { bg: "#fff", bg2:'#fff', syntax: 'black', syntax2: "purple" },
  dark: { bg: "#162447", bg2:'#162449', syntax: '#fff', syntax2: "#e43f5a" },
  toggle: () => {""}
}

export const ThemeContext = createContext<themeStructure>(initialState);

const ThemeProvider = (props: any): JSX.Element => {
  const [theme, setTheme] = useState(initialState);


  const toggle = () => {
    if(theme.isDark === false){
      document.body.style.backgroundColor = "#162447";
    }else {
      document.body.style.backgroundColor = "#f7f7f7";
    }
    setTheme((prevValue) => {
      return {
        ...prevValue,
        isDark: !theme.isDark,
      };
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark: theme.isDark,
        light: theme.light,
        dark: theme.dark,
        toggle
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
