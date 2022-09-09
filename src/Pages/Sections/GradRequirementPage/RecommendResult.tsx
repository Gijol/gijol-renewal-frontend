import React from "react";
import styled from "styled-components";
import ResultContainer from "../../../Layout/Container/ResultContainer";

const RecommendResultContainer = styled.div`
  width: 100%;
  height: 360px;
  margin: 40px auto 0;
  padding: 40px;
  background-color: #faaaaa;
`;

function RecommendResult() {
  return (
    <ResultContainer>
      <RecommendResultContainer>
        강의 추천 카드가 들어가는 곳
      </RecommendResultContainer>
    </ResultContainer>
  );
}

export default RecommendResult;
