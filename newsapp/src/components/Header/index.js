import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { NavBar, NavLink, Button, HeaderContainer } from "./styles";

function Header({ openTour }) {
  return (
    <HeaderContainer>
      <NavBar>
        <ul>
          <li>
            <Button onClick={openTour}>Tour</Button>
          </li>
          <li id="home">
            <NavLink to="/">
              <ImHome size={20} color="#FFF" />
            </NavLink>
          </li>
          <li id="favs">
            <NavLink to="/favs">Favourites</NavLink>
          </li>
          <li id="configs">
            <NavLink to="/configs">Configurations</NavLink>
          </li>
          <li id="about">
            <NavLink to="about">About</NavLink>
          </li>
        </ul>
      </NavBar>
    </HeaderContainer>
  );
}

export default Header;
