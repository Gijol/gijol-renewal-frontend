import React from "react";
import NavMenu from "./NavMenu";
import AuthBox from "./AuthBox";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
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
  height: 100%;
  gap: 48px;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <LogoContainer to="/">Gijol</LogoContainer>
      <NavSubContainer>
        <NavMenu />
        <AuthBox />
      </NavSubContainer>
    </NavBarContainer>
  );
}

export default NavBar;
