import React, { useState, createContext, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export const ThemeContext = createContext({});

export default function Layout({ children }) {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (window) {
      setMode(window.localStorage.getItem("izhantheme"));
    }
    console.log(mode);
  }, []);

  useEffect(() => {
    document.body.classList.remove("dark", "bg-gray-900", "light", "bg-white");
    document.body.classList.add(
      mode ? "light" : "dark",
      mode ? "bg-white" : "bg-gray-900"
    );
  }, [mode]);

  return (
    <main
      className={`${mode ? "light bg-white " : "dark bg-gray-900 "} 
  `}
    >
      <Navbar mode={mode} setMode={setMode} />
      {children}
      <Footer />
    </main>
  );
}
