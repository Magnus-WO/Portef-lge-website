import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute(`data-theme`, theme);
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [theme]);

  function handleChangeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <>
      <LandingPage />
      <Navbar></Navbar>
    </>
  );
}
