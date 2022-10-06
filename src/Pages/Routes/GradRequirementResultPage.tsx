import React from "react";
import PageContainer from "../../Layout/Container/PageContainer";
import CompletedLecMacroInfo from "../Sections/GradRequirementPage/CompletedLecMacroInfo";
import CompletedLecMicroInfo from "../Sections/GradRequirementPage/CompletedLecMicroInfo";
import RecommendLecInfo from "../Sections/GradRequirementPage/RecommendLecInfo";
import GradProvider from "../../Provider/GradProvider";

function GradRequirementResultPage() {
  return (
    <PageContainer>
      <CompletedLecMacroInfo />
      <CompletedLecMicroInfo />
      <RecommendLecInfo />
    </PageContainer>
  );
}

export default GradRequirementResultPage;
