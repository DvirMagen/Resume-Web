import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark'; // Default fallback
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('resume-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    // If no saved preference, use system preference
    return getSystemTheme();
  });

  const [isSystemTheme, setIsSystemTheme] = useState(() => {
    const savedTheme = localStorage.getItem('resume-theme');
    return !savedTheme || savedTheme === 'system';
  });

  useEffect(() => {
    // Listen to system preference changes if using system theme
    if (isSystemTheme && typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleSystemThemeChange = (e) => {
        const systemTheme = e.matches ? 'dark' : 'light';
        setTheme(systemTheme);
      };

      // Set initial theme from system
      setTheme(getSystemTheme());

      // Listen for changes
      mediaQuery.addEventListener('change', handleSystemThemeChange);

      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    }
  }, [isSystemTheme]);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    if (!isSystemTheme) {
      localStorage.setItem('resume-theme', theme);
    } else {
      localStorage.setItem('resume-theme', 'system');
    }
  }, [theme, isSystemTheme]);

  const toggleTheme = () => {
    if (isSystemTheme) {
      // If currently using system theme, switch to opposite of current system theme
      const currentSystemTheme = getSystemTheme();
      const newTheme = currentSystemTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      setIsSystemTheme(false);
    } else {
      // Toggle between light and dark
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

