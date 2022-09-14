import React from "react";

import styled from "styled-components";

interface SProps {
  reversed?: boolean;
}

const SectionContainerReversible = styled.div`
  padding: 40px 0;
  margin: 0 80px;
  background-color: white;
  height: 400px;
  display: flex;
  flex-direction: ${(props: SProps) =>
    !props.reversed ? "row" : "row-reverse"};
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

function SectionContainer(props: any) {
  return (
    <SectionContainerReversible reversed={props.reversed}>
      {props.children}
    </SectionContainerReversible>
  );
}

export default SectionContainer;
