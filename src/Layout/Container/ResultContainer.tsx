import styled from "styled-components";

const ResultSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

import React from "react";

function ResultContainer(props: any) {
  return <ResultSectionContainer>{props.children}</ResultSectionContainer>;
}

export default ResultContainer;
