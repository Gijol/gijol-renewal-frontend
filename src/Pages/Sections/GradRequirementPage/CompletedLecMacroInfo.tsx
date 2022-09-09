import React from "react";
import { FnExplanationDetail } from "../../../Layout/Container/FnDescriptionContainer";
import styled from "styled-components";

const OverallResult = styled.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const CircularProgressContainer = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 6px;
  background-color: #f2f4f6;
`;

const BarProgressContainer = styled.div`
  width: 500px;
  height: 360px;
  border-radius: 6px;
  background-color: #f2f4f6;
`;

function CompletedLecMacroInfo() {
  return (
    <>
      <FnExplanationDetail>
        우선 졸업요건 충족 현황에 대한 종합적인 결과입니다
      </FnExplanationDetail>
      <OverallResult>
        <CircularProgressContainer />
        <BarProgressContainer />
      </OverallResult>
    </>
  );
}

export default CompletedLecMacroInfo;
