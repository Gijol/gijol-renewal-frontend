import React from "react";
import styled from "styled-components";
import useGradStatusValue from "../../../Hooks/Grad/useGradStatusValue";
import { GradCategoriesType } from "../../../Api/Grad/types/gradApiResultTypes";

interface ListCProps {
  currentTab: string;
}

const ListCardWrapper = styled.div`
  box-sizing: border-box;
  width: 520px;
  height: 100%;
  background-color: #f2f4f6;
  border-radius: 6px;
  padding: 20px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

function CreditListCardResult({ currentTab }: ListCProps) {
  const valueContext = useGradStatusValue();

  const tempCategory = valueContext?.graduationCategory as GradCategoriesType;
  const currentCategory =
    tempCategory[currentTab as keyof GradCategoriesType].userTakenCoursesList
      .takenCourses;

  const contents = currentCategory.map((item) => {
    return (
      <p>
        <span>{item.courseCode} </span>
        <span>{item.courseName} </span>
        <span>{item.year} </span>
        <span>{item.semester} </span>
        <span>{item.credit} </span>
        <span>{item.courseType} </span>
      </p>
    );
  });
  return <ListCardWrapper>{contents}</ListCardWrapper>;
}

export default CreditListCardResult;
