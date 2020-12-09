import styled from "styled-components";
import { NavLink as ReactNavLink } from "react-router-dom";

export const Container = styled.header`
  ul {
    list-style-type: none;

    li {
      display: inline-block;
      text-decoration: none;
      padding: 10px;
      /* background-color: #750c0c; */
      color: #fff;
      font-weight: bold;

      &::hover{
        background-color: #750c0c;
      }
    }
  }
`;

export const NavLink = styled(ReactNavLink)`
  text-decoration: none !important;
  color: #000;
`;
