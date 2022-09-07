import React from "react";
import PageContainer from "../../Layout/Container/PageContainer";
import CompletedLecMacroInfo from "../Sections/GradRequirementPage/CompletedLecMacroInfo";
import CompletedLecMicroInfo from "../Sections/GradRequirementPage/CompletedLecMicroInfo";

function GradRequirementPage() {
  return (
    <PageContainer>
      졸업요건 페이지
      <CompletedLecMacroInfo />
      <CompletedLecMicroInfo />
    </PageContainer>
  );
}

export default GradRequirementPage;
