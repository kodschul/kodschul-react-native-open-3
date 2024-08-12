import {createContext, useContext, useState} from 'react';

export const ThemeContext = createContext<any>({
  isDarkMode: false,

  setDarkMode: (value: any) => null,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{isDarkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
