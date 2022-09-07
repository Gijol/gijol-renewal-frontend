import React from "react";
import FuncCardSection from "./FuncCardSection";
import FuncCardExplainSection from "./FuncCardExplainSection";
import { SubTitle } from "../../../Layout/Typography/Title";

function FuncIntroSection() {
  return (
    <>
      <div style={{ padding: "120px 0 80px 0" }}>
        <SubTitle>Gijol은 아래 기능들을 제공합니다.</SubTitle>
      </div>
      <FuncCardSection />
      <FuncCardExplainSection />
    </>
  );
}

export default FuncIntroSection;
