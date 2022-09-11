import React from "react";
import ResultContainer from "../../../Layout/Container/ResultContainer";
import styled from "styled-components";
import SpecificResultMenuBar from "../../../Component/MenuBar/SpecificResultMenuBar";
import SpecificCardResult from "../../../Component/Card/SpecificCardResult";

const SpecificResultContainer = styled.div`
  width: 960px;
  height: 400px;
  border-radius: 6px;
  background-color: #f2f4f6;
  margin: 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

function SpecificResult() {
  return (
    <ResultContainer>
      <SpecificResultContainer>
        <SpecificResultMenuBar />
        <SpecificCardResult />
      </SpecificResultContainer>
    </ResultContainer>
  );
}

export default SpecificResult;
