import React from "react";
import FunctionExplainCard from "../../../Component/Card/Functions/FunctionExplainCard";
import styled from "styled-components";

const FnCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 48px;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin-bottom: 80px;
  @media only screen and (max-width: 500px) {
    margin-bottom: 80px;
  }
`;

function FuncCardSection() {
  return (
    <FnCardContainer>
      <FunctionExplainCard type="졸업요건" />
      <FunctionExplainCard type="강의검색" />
      {/*<FunctionExplainCard type="추가중입니다...!" />*/}
    </FnCardContainer>
  );
}

export default FuncCardSection;
