import React from "react";
import CourseCardSelectable from "../../../Component/Card/CourseSearch/CourseCardSelectable";
import styled from "styled-components";

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
  return (
    <CourseCardGridContainer>
      {/* 여기에 강의 정보 받아와서 보여주는 부분 */}
      <CourseCardSelectable />
      <CourseCardSelectable />
      <CourseCardSelectable />
      <CourseCardSelectable />
      <CourseCardSelectable />
    </CourseCardGridContainer>
  );
}

export default CourseCardListSection;
