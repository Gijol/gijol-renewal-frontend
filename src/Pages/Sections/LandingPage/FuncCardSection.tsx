import React from "react";
import FunctionExplainCard from "../../../Component/Card/FunctionExplainCard";
import styled from "styled-components";

const FnCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

function FuncCardSection() {
  return (
    <FnCardContainer>
      <FunctionExplainCard type="졸업요건" />
      <FunctionExplainCard type="강의검색" />
      <FunctionExplainCard type="강의평가" />
    </FnCardContainer>
  );
}

export default FuncCardSection;
