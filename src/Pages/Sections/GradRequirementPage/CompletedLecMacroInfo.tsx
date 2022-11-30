import React from "react";
import {
  FnExplanation,
  FnExplanationDetail,
} from "../../../Layout/Container/FnDescriptionContainer";
import styled from "styled-components";
import CircularProgressBar from "../../../Component/ProgressBar/CircularProgressBar";
import ColumnProgressBar from "../../../Component/ProgressBar/ColumnProgressBar";

const OverallResultContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OverallResultSubContainer = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f6;
  border-radius: 16px;
`;

function CompletedLecMacroInfo() {
  return (
    <>
      <FnExplanation>전반적인 이수 현황을 알려드립니다</FnExplanation>
      <FnExplanationDetail>
        우선 학점에 대한 종합적인 결과입니다
      </FnExplanationDetail>
      <OverallResultContainer>
        <OverallResultSubContainer>
          <CircularProgressBar />
          <ColumnProgressBar />
        </OverallResultSubContainer>
      </OverallResultContainer>
    </>
  );
}

export default CompletedLecMacroInfo;
