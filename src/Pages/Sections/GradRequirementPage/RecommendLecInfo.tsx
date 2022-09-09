import React from "react";
import {
  FnExplanationDetail,
  FnExplanation,
} from "../../../Layout/Container/FnDescriptionContainer";
import RecommendResult from "./RecommendResult";

function RecommendLecInfo() {
  return (
    <>
      <FnExplanation>그럼 어떤 강의를 들어야 할까요?</FnExplanation>
      <FnExplanationDetail>
        Gijol은 아래 강의들을 추천드립니다
      </FnExplanationDetail>
      <RecommendResult />
    </>
  );
}

export default RecommendLecInfo;
