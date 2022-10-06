import React from "react";
import PageContainer from "../../Layout/Container/PageContainer";
import {
  FnExplanation,
  FnExplanationDetail,
} from "../../Layout/Container/FnDescriptionContainer";
import FileUploadSections from "../Sections/GradRequirementPage/FileUploadSections";

function GradRequirementUploadPage() {
  return (
    <PageContainer>
      <FnExplanation>졸업요건을 확인해드립니다</FnExplanation>
      <FnExplanationDetail>
        아래 칸에 성적 확인 파일을 업로드 해주세요
      </FnExplanationDetail>
      <FileUploadSections />
    </PageContainer>
  );
}

export default GradRequirementUploadPage;
