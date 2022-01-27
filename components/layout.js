import React, { useState, createContext } from 'react';
import Navbar from './navbar';
import Footer from './footer';

export const ThemeContext = createContext({});

export default function Layout({ children }) {
  const [mode, setMode] = useState(true);

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
