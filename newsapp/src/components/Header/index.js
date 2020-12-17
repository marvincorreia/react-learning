import React from "react";
// import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";

import { NavBar, NavLink } from "./styles";

function Header() {
  return (
    <header>
      <NavBar>
        <ul>
          <li>
            <NavLink to="/">
              <ImHome size={20} color="#FFF" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/favs">Favourites</NavLink>
          </li>
          <li>
            <NavLink to="/configs">Configurations</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </NavBar>
    </header>
  );
}

export default Header;
