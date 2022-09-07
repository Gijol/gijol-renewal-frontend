import React from "react";
import FunctionExplainCard from "../../../Component/Card/FunctionExplainCard";

function FuncCardSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        flex: "1:1:1",
        gap: "48px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 졸업요건, 강의 검색, 강의 평가 기능소개 카드들 */}
      <FunctionExplainCard type="졸업요건" />
      <FunctionExplainCard type="강의검색" />
      <FunctionExplainCard type="강의평가" />
    </div>
  );
}

export default FuncCardSection;
