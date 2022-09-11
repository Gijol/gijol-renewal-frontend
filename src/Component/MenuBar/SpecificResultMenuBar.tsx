import React from "react";
import styled from "styled-components";

const MenuBarContainer = styled.div`
  width: 160px;
  height: 100%;
  background-color: green;
  border: 1px solid black;
`;

function SpecificResultMenuBar() {
  return <MenuBarContainer>메뉴 바</MenuBarContainer>;
}

export default SpecificResultMenuBar;
