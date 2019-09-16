import React from 'react';
import { useDarkMode } from './useDarkMode';

const Navbar = () => {
  const [ darkMode, setDarkMode ] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className = "navbar">
      <h1 className = "navheader"> Women's World Cup </h1>
      <div className = "dark-mode__toggle">
        <button
          onClick = {toggleMode}
          className = {darkMode ? 'toggle toggled' : 'toggle'}
        > Dark Mode Toggle </button>
      </div>
    </nav>
  );
};

export default Navbar;