import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-blue-600/20 backdrop-blur-sm 
                hover:bg-blue-600/30 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <i className="fas fa-sun text-yellow-400 group-hover:rotate-45 transition-transform duration-300" />
      ) : (
        <i className="fas fa-moon text-blue-300 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle; 