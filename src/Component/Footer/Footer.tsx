import React from "react";
import styled from "styled-components";
import NavMenu from "../Navigator/NavMenu";
import { Link } from "react-router-dom";

const FooterLogoContainer = styled(Link)`
  font-size: 1.75rem;
  text-decoration: none;
  color: black;
  width: 100%;
  margin: 24px 0;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 24px 0;
  background-color: #e5e8eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterMenuContainer = styled.div`
  width: 50%;
  margin-bottom: 24px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterMenuContainer>
        <FooterLogoContainer to="/">Gijol</FooterLogoContainer>
        <NavMenu />
      </FooterMenuContainer>
    </FooterContainer>
  );
}

export default Footer;
