import React, { createContext, useContext, useEffect, useState } from 'react';
import css from './ToggleSwitch.module.css';
const ThemeContext = createContext();

 const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme === 'dark' ? css.darkTheme : ''}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

 const useTheme = () => {
  return useContext(ThemeContext);
};


export {ThemeProvider, useTheme};