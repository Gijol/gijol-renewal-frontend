import React, { MutableRefObject, useRef, useState } from "react";
import CourseCardSelectable from "../../../Component/Card/CourseSearch/CourseCardSelectable";
import styled from "styled-components";
import useCourseList from "../../../Hooks/Course/useCourseList";
import {
  CourseListType,
  CourseType,
} from "../../../Api/CourseSearch/types/courseListTypes";
import CourseCardLoader from "../../../Component/Loading/CourseCardLoader";
import useIntersect from "../../../Hooks/Intersect/useIntersect";
import { courseList } from "../../../storage/courseList";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [courseMockList, setCourseMockList] = useState(courseList);
  const context = useCourseList();

  const [, setTarget] = useIntersect(async ([entry], observer) => {
    observer.unobserve(entry.target);
    await getMoreItemList();
    observer.observe(entry.target);
  }, {});

  const loadingContent = <p>서버에서 값 불러오는중...</p>;

  const getMoreItemList = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
    let items = courseList;
    setCourseMockList((prev: CourseListType) => prev.concat(items));
    setIsLoaded(false);
  };

  const courseListContent = (
    <>
      {courseMockList.map((item: CourseType, index: number) => {
        return (
          <CourseCardSelectable
            key={index}
            courseCode={item.courseCode}
            courseTitle={item.courseName}
            courseTags={item.courseTags}
          />
        );
      })}
      <div ref={(ref) => setTarget(ref)}>
        {isLoaded && <CourseCardLoader />}
      </div>
    </>
  );
  return (
    <CourseCardGridContainer>
      {context ? courseListContent : loadingContent}
    </CourseCardGridContainer>
  );
}

export default CourseCardListSection;
