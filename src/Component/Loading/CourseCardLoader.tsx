import React, { memo } from "react";
import styled from "styled-components";
import { CourseCardContainer } from "../Card/CourseSearch/CourseCardSelectable";
import { PulseLoader } from "react-spinners";

const CourseCardLoaderWrapper = styled(CourseCardContainer)`
  justify-content: center;
  align-items: center;
  &:hover {
    transition: none;
    transform: none;
    box-shadow: none;
    background-color: #f2f4f6;
  }
`;

function CourseCardLoader() {
  return (
    <CourseCardLoaderWrapper>
      <PulseLoader color="#333d4b" loading size={12} speedMultiplier={0.75} />
    </CourseCardLoaderWrapper>
  );
}

export default CourseCardLoader;
