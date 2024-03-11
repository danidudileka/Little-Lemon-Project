import React, { useState } from "react";
import logo from "../images/Logo.svg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export const NavBarItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/" },
  { name: "Menu", url: "/" },
  { name: "Reservations", url: "/booking" },
  { name: "Order Online", url: "/" },
  { name: "Login", url: "/" },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [icon, setIcon] = useState(<IoMenu size="2em" />);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIcon(menuOpen ? <IoMenu size="2em" /> : <IoClose size="2em" />);
  };
  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>

      <div className="menu-icon" onClick={toggleMenu}>
        {icon}
      </div>

      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
      {NavBarItems.map((item) => (
          <li key={item.name}>
            <a href={item.url} onClick={toggleMenu}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
