import React, { useState, createContext, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

export const ThemeContext = createContext({});

export default function Layout({ children }) {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (window) {
      setMode(window.localStorage.getItem('izhantheme'));
    }
    console.log(mode);
  }, []);

  return (
    <main
      className={`${mode ? 'light bg-white ' : 'dark bg-gray-900 '} 
  `}
    >
      <Navbar mode={mode} setMode={setMode} />
      {children}
      <Footer />
    </main>
  );
}
