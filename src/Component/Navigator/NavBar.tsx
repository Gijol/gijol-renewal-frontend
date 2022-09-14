import React from "react";
import NavMenu from "./NavMenu";
import AuthBox from "./AuthBox";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MobileNavMenu from "./MobileNavMenu";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: fixed;
  background-color: white;
  height: 60px;
`;

const LogoContainer = styled(Link)`
  font-size: 1.75rem;
  text-decoration: none;
  color: black;
  margin-left: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 48px;
  @media only screen and (max-width: 768px) {
    gap: 0;
  }
`;

function NavBar() {
  return (
    <NavBarContainer>
      <LogoContainer to="/">Gijol</LogoContainer>
      <NavSubContainer>
        <NavMenu />
        <AuthBox />
        <MobileNavMenu />
      </NavSubContainer>
    </NavBarContainer>
  );
}

export default NavBar;
