import React from "react";
import styled from "styled-components";

interface CProps {
  courseCode: string;
  courseTitle: string;
  courseInstructor?: string;
  courseTags: Array<string>;
}

export const CourseCardContainer = styled.div`
  box-sizing: border-box;
  padding: 32px;
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
  font-size: 24px;
  text-align: center;
  word-break: keep-all;
  white-space: pre-wrap;
  line-height: 1.5;
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

function CourseCardSelectable({
  courseCode,
  courseTitle,
  courseInstructor,
  courseTags,
}: CProps) {
  const tagContents = courseTags.map((item: string) => {
    return <CourseTag key={item.length}>{item}</CourseTag>;
  });
  return (
    <CourseCardContainer>
      <CourseCode>{courseCode}</CourseCode>
      <CourseTitle>{courseTitle}</CourseTitle>
      <CourseInstructor>{courseInstructor}</CourseInstructor>
      <CourseTagContainer>{tagContents}</CourseTagContainer>
    </CourseCardContainer>
  );
}

export default CourseCardSelectable;
