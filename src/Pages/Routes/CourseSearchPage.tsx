import React from "react";
import PageContainer from "../../Layout/Container/PageContainer";
import CourseSearchSection from "../Sections/CourseSearchPage/CourseSearchSection";
import CourseCardListSection from "../Sections/CourseSearchPage/CourseCardListSection";
import { FnExplanation } from "../../Layout/Container/FnDescriptionContainer";

function CourseSearchPage() {
  return (
    <PageContainer>
      <FnExplanation>강의 정보를 검색해보세요</FnExplanation>
      <CourseSearchSection />
      <CourseCardListSection />
    </PageContainer>
  );
}

export default CourseSearchPage;
