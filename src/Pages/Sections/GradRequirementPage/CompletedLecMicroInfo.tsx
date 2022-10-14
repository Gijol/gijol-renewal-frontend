import React from "react";
import {
  FnExplanation,
  FnExplanationDetail,
} from "../../../Layout/Container/FnDescriptionContainer";
import SpecificResult from "./SpecificResult";

function CompletedLecMicroInfo() {
  return (
    <>
      <FnExplanation>이제 세부적으로 볼까요?</FnExplanation>
      <FnExplanationDetail>
        아래 결과는 항목별 이수 여부 및 학점 현황입니다
      </FnExplanationDetail>
      <SpecificResult />
    </>
  );
}

export default CompletedLecMicroInfo;
