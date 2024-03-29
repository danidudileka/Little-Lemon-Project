import React from "react";
import logo from "../images/Logo.svg";
import { NavBarItems } from "./Nav";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="Logo" />
          <p>
            We are a family owned restaurent, focused on traditional recipes
            served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            {NavBarItems.map((item) => (
              <li key={item.name}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br />
              123 Towncity, USA
            </li>
            <li>
              Phone: <br />
              +00 123 456 789
            </li>
            <li>
              Email: <br />
              littlelemon@email.com
            </li>
          </ul>
        </div>
        <div>
          <h3>Socail Media</h3>
          <ul>
            <li>
              <a href="www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="www.twitter.com">Twitter</a>
            </li>
          </ul>
        </div>
      </section>
      <p align='center'>Created by Danidu Dileka</p>
    </footer>
  );
};

export default Footer;
