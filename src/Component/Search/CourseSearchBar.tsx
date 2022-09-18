import React from "react";
import styled from "styled-components";

const CourseSearchBarContainer = styled.input`
  width: 100%;
  border: unset;
  border: 1px solid #b0b8c1;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  padding: 14px 20px;
  border-radius: 6px;
  background-color: #f2f4f6;
  ::placeholder {
    color: #6b7684;
  }
`;

function CourseSearchBar() {
  return (
    <CourseSearchBarContainer
      type="search"
      placeholder="강의 명이나 코드를 입력해보세요"
    />
  );
}

export default CourseSearchBar;
