import React from "react";

import styled from "styled-components";

interface SProps {
  reversed?: boolean;
}

const SectionContainerReversible = styled.div`
  box-sizing: border-box;
  padding: 40px;
  margin: 80px;
  background-color: white;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 120px;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

function SectionContainer(props: any) {
  return (
    <SectionContainerReversible>{props.children}</SectionContainerReversible>
  );
}

export default SectionContainer;
