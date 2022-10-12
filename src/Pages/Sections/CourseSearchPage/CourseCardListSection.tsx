import React, { useState } from "react";
import CourseCardSelectable from "../../../Component/Card/CourseSearch/CourseCardSelectable";
import styled from "styled-components";
import useCourseList from "../../../Hooks/Course/useCourseList";
import { CourseType } from "../../../Api/CourseSearch/types/courseListTypes";

const CourseCardGridContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding: 48px 0 96px 0;
  display: grid;
  grid-gap: 40px;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 500px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  } ;
`;

function CourseCardListSection() {
  const context = useCourseList();
  const loadingContent = <p>서버에서 값 불러오는중...</p>;
  const courseListContent = context?.map((item: CourseType) => {
    return (
      <CourseCardSelectable
        key={item.id}
        courseCode={item.courseCode}
        courseTitle={item.courseName}
        courseTags={item.courseTags}
      />
    );
  });
  return (
    <CourseCardGridContainer>
      {context ? courseListContent : loadingContent}
    </CourseCardGridContainer>
  );
}

export default CourseCardListSection;
