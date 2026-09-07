import "./Button.css";
import { useState, useEffect } from "react";
import Image from "../Image/Image";
import sunIcon from "../../assets/Icons/sunIcon.svg";
import moonIcon from "../../assets/Icons/moonIcon.svg";

export default function Button({ children, className = "", onClick }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [clicked, setClicked] = useState(false);
  const [buttonIcon, setButtonIcon] = useState();
  const [iconAltText, setIconAltText] = useState("");

  useEffect(() => {
    document.body.setAttribute(`data-theme`, theme);
    getButtonIcon();
  }, []);

  useEffect(() => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);
      document.body.setAttribute(`data-theme`, nextTheme);
      return nextTheme;
    });

    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [clicked]);

  function handleChangeTheme() {
    clicked === false ? setClicked(true) : setClicked(false);
    getButtonIcon();
  }

  function getButtonIcon() {
    if (theme !== "light") {
      setButtonIcon(moonIcon);
      setIconAltText("mørkt tema");
    } else {
      setButtonIcon(sunIcon);
      setIconAltText("lyst tema");
    }
  }

  return (
    <button
      className={`Button ${className}`}
      onClick={onClick || handleChangeTheme}
    >
      {children ? (
        children
      ) : (
        <Image src={buttonIcon} alt={iconAltText} className={"buttonIcon"} />
      )}
    </button>
  );
}
