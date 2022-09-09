import React from "react";
import ResultContainer from "../../../Layout/Container/ResultContainer";
import styled from "styled-components";

const SpecificResultContainer = styled.div`
  width: 900px;
  height: 360px;
  border-radius: 6px;
  background-color: #f2f4f6;
  margin: 40px 0;
`;

function SpecificResult() {
  return (
    <ResultContainer>
      <SpecificResultContainer></SpecificResultContainer>
    </ResultContainer>
  );
}

export default SpecificResult;
