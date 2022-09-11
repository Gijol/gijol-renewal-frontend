import React from "react";
import PageContainer from "../../Layout/Container/PageContainer";
import CompletedLecMacroInfo from "../Sections/GradRequirementPage/CompletedLecMacroInfo";
import CompletedLecMicroInfo from "../Sections/GradRequirementPage/CompletedLecMicroInfo";
import { FnExplanation } from "../../Layout/Container/FnDescriptionContainer";
import RecommendLecInfo from "../Sections/GradRequirementPage/RecommendLecInfo";

function GradRequirementPage() {
  return (
    <PageContainer>
      <CompletedLecMacroInfo />
      <CompletedLecMicroInfo />
      <RecommendLecInfo />
    </PageContainer>
  );
}

export default GradRequirementPage;
