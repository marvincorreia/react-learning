import React from "react";
// import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";

import { Container, NavLink } from "./styles";

function Header() {
  return (
    <Container>
      <ul>
        <li>
          <NavLink to="/">
            <FaReact size={36} color="#000" />
          </NavLink>
        </li>
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
    </Container>
  );
}

export default Header;
