import React from "react";
import CourseSearchBar from "../../../Component/Search/CourseSearchBar";
import SearchFilterButton from "../../../Component/Button/SearchFilterButton";
import styled from "styled-components";
import CourseSearchIcon from "../../../Component/Search/CourseSearchIcon";

const CourseSearchSectionContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 60px;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
`;

const CourseSearchWrapper = styled.div`
  max-width: 580px;
  width: 100%;
  position: relative;
  margin: 0 10px;
  overflow: visible;
  @media only screen and (max-width: 768px) {
    max-width: 300px;
    width: 100%;
  }
`;

function CourseSearchSection() {
  return (
    <CourseSearchSectionContainer>
      <CourseSearchWrapper>
        <CourseSearchBar />
        <CourseSearchIcon />
      </CourseSearchWrapper>
      <SearchFilterButton />
    </CourseSearchSectionContainer>
  );
}

export default CourseSearchSection;
