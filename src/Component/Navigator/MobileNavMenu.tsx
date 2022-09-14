import React from "react";
import styled from "styled-components";
import { Turn as Hamburger } from "hamburger-react";

const MobileNavContainer = styled.div`
  height: fit-content;
  margin-right: 16px;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  background-color: white;
  cursor: pointer;
  color: #6b7684;
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function MobileNavMenu() {
  return (
    <MobileNavContainer>
      <Hamburger rounded size={18} />
    </MobileNavContainer>
  );
}

export default MobileNavMenu;
