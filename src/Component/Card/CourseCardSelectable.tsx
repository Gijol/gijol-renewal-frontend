import React from "react";
import styled from "styled-components";

const CourseCardContainer = styled.div`
  box-sizing: border-box;
  padding: 24px;
  width: 300px;
  height: 280px;
  background-color: #f2f4f6;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transition: 0.3s;
    transform: translateY(-12px);
    box-shadow: 0 12px 12px -8px rgb(0, 0, 0, 0.35);
    background-color: #d1d6db;
  }
`;

const CourseCode = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
`;

const CourseTitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 32px;
  text-align: center;
`;

const CourseTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

const CourseTag = styled.p`
  margin: 0;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
  /*background-color: #8b95a1;*/
  background-color: white;
  color: black;
`;

const CourseInstructor = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
`;

function CourseCardSelectable() {
  return (
    <CourseCardContainer>
      <CourseCode>GS1001</CourseCode>
      <CourseTitle>Computer Networking</CourseTitle>
      <CourseInstructor>Suman Pandey</CourseInstructor>
      <CourseTagContainer>
        <CourseTag>Tag1</CourseTag>
        <CourseTag>Tag2</CourseTag>
        <CourseTag>Tag3</CourseTag>
      </CourseTagContainer>
    </CourseCardContainer>
  );
}

export default CourseCardSelectable;
