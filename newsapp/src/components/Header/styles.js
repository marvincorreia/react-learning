import styled from "styled-components";
import { NavLink as ReactNavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
`;

export const NavBar = styled.nav`
  width: 100%;
  margin: 0;
  background-color: #750c0c;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;

  ul {
    list-style-type: none;
    padding: 5px;
    display: flex;
    align-items: center;

    li {
      text-decoration: none;
      font-weight: bold;
      border: 1px solid transparent;

      &:hover {
        color: white;
        /* background-color: rgba(0, 0, 0, 0.1); */
        /* border: 1px solid #dd2323; */
        border-radius: 0.1rem;
      }
    }

    #home {
      a {
        padding: 0;
      }
    }
  }
`;

export const NavLink = styled(ReactNavLink)`
  font-weight: bold;
  text-decoration: none;
  padding: 10px;
  display: block;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    color: white;
  }
`;

export const Button = styled.button`
  margin-right: 20px;
  left: 20px;
  padding: 10px;
  border: 1px solid #cc1f1f;
  color: #fff;
  background-color: #110404;
`;
