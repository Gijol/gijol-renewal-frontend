import React from "react";
import styled from "styled-components";
import useGradStatusValue from "../../../Hooks/Grad/useGradStatusValue";
import { GradCategoriesType } from "../../../Api/Grad/types/gradApiResultTypes";

interface BarCProps {
  currentTab: string;
}

const IsSatisfiedCardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  background-color: #f2f4f6;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-break: keep-all;
`;

function CreditIsSatisfiedCardResult({ currentTab }: BarCProps) {
  const valueContext = useGradStatusValue();

  const calcPercent = (total: number, min: number) => {
    return Math.round((total * 100) / min);
  };

  const tempCategory = valueContext?.graduationCategory as GradCategoriesType;
  const currentCategory = tempCategory[currentTab as keyof GradCategoriesType];

  const satisfied = currentCategory.satisfied;
  const total = currentCategory.totalCredits;
  const min = currentCategory.minConditionCredits;

  const content = [];

  if (satisfied) {
    content.push(<span key={1}>전부 들으셨네요!</span>);
  } else {
    if (total >= min && total > 0) {
      content.push(
        <span key={1}>
          학점은 채우셨지만,
          <br />
          필수과목은 부족하네요...
        </span>
      );
    } else if (total < min && total > 0) {
      content.push(
        <span key={1}>{calcPercent(total, min)}% 만큼 들으셨네요!</span>
      );
    } else {
      content.push(<span key={1}>아무것도 안들으셨네요...</span>);
    }
  }
  return <IsSatisfiedCardWrapper>{content}</IsSatisfiedCardWrapper>;
}

export default CreditIsSatisfiedCardResult;
