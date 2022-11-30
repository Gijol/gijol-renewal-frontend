import React from "react";
import styled from "styled-components";
import useGradStatusValue from "../../../Hooks/Grad/useGradStatusValue";
import {
  GradCategoriesType,
  TakenCourseType,
} from "../../../Api/Grad/types/gradApiResultTypes";

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
  margin: 0;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

function CreditListItemCard(item: TakenCourseType) {}

function CreditListCardResult({ currentTab }: ListCProps) {
  const valueContext = useGradStatusValue();

  const tempCategory = valueContext?.graduationCategory as GradCategoriesType;
  const currentCategory =
    tempCategory[currentTab as keyof GradCategoriesType].userTakenCoursesList
      .takenCourses;

  const contents = currentCategory.map((item, index) => {
    return (
      <div
        style={{
          boxSizing: "border-box",
          width: "100%",
          height: "fit-content",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "16px",
          margin: "0 0 20px 0",
        }}
        key={index}
      >
        <p
          style={{
            boxSizing: "border-box",
            padding: "0",
            margin: "0",
            fontSize: "16px",
          }}
        >
          {item.courseCode}{" "}
        </p>
        <p
          style={{
            boxSizing: "border-box",
            padding: "8px 0",
            margin: "0",
            fontSize: "18px",
          }}
        >
          <span>{item.courseName} </span>
        </p>
        <p
          style={{
            boxSizing: "border-box",
            padding: "0",
            margin: "0",
            fontSize: "14px",
          }}
        >
          <span>{item.year}년도 </span>
          <span>{item.semester} </span>
          <span>{item.credit}학점 </span>
          {item.courseType ? (
            <span
              style={{
                boxSizing: "border-box",
                padding: "2px 6px",
                margin: "0 4px",
                backgroundColor: "#f2f4f6",
                borderRadius: "4px",
              }}
            >
              {item.courseType}{" "}
            </span>
          ) : (
            <></>
          )}
        </p>
      </div>
    );
  });
  return <ListCardWrapper>{contents}</ListCardWrapper>;
}

export default CreditListCardResult;
