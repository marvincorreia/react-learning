import React from "react";
// import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";

import { NavBar, NavLink } from "./styles";

function Header() {
  return (
    <header>
      <NavBar>
        <ul>
          {/* <li>
          <NavLink to="/">
            <FaReact size={36} color="#000" />
          </NavLink>
        </li> */}
          <li>
            <NavLink to="/favs">Favourites</NavLink>
          </li>
          <li>
            <NavLink to="/configs">Configurations</NavLink>
          </li>
          <li>
            <NavLink to="about">about</NavLink>
          </li>
        </ul>
      </NavBar>
    </header>
  );
}

export default Header;
