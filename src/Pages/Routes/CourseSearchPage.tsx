import React from "react";
import PageContainer from "../../Layout/Container/PageContainer";
import CourseSearchSection from "../Sections/CourseSearchPage/CourseSearchSection";
import CourseCardListSection from "../Sections/CourseSearchPage/CourseCardListSection";
import { SubTitle } from "../../Layout/Typography/Title";

function CourseSearchPage() {
  return (
    <PageContainer>
      <div
        style={{
          padding: "120px 0 0 0",
          margin: "0 120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SubTitle>강의 정보를 검색해보세요</SubTitle>
      </div>
      <CourseSearchSection />
      <CourseCardListSection />
    </PageContainer>
  );
}

export default CourseSearchPage;
