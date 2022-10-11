import React from "react";
import {
  FnExplanation,
  FnExplanationDetail,
} from "../../../Layout/Container/FnDescriptionContainer";
import styled from "styled-components";
import CircularProgressBar from "../../../Component/ProgressBar/CircularProgressBar";
import ColumnProgressBar from "../../../Component/ProgressBar/ColumnProgressBar";

const OverallResult = styled.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function CompletedLecMacroInfo() {
  return (
    <>
      <FnExplanation>전반적인 이수 현황을 알려드립니다</FnExplanation>
      <FnExplanationDetail>
        우선 학점에 대한 종합적인 결과입니다
      </FnExplanationDetail>
      <OverallResult>
        <CircularProgressBar />
        <ColumnProgressBar />
      </OverallResult>
    </>
  );
}

export default CompletedLecMacroInfo;
