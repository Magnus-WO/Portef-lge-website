import "./Navbar.css";
import Image from "../Image/Image";
import { NavLink } from "react-router";

// Importing icons
import homeIcon from "../../assets/Icons/home.svg";
import projectsIcon from "../../assets/Icons/library.svg";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/">
            <Image src={homeIcon} alt={"Hjem"} className={"NavbarIcon"} />
            <p>Hjem</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/mine-prosjekter">
            <Image
              src={projectsIcon}
              alt={"Mine prosjekter"}
              className={"NavbarIcon"}
            />
            <p>Prosjekter</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
