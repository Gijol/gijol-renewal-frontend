import React from "react";
import CreditCircularCardResult from "./CreditCircularCardResult";
import CreditIsSatisfiedCardResult from "./CreditIsSatisfiedCardResult";
import CreditListCardResult from "./CreditListCardResult";
import styled from "styled-components";
import useGradStatusValue from "../../../Hooks/Grad/useGradStatusValue";

interface CProps {
  currentTab: string;
  cntColor: string;
}

const UnClickedContainer = styled.div`
  box-sizing: border-box;
  width: 830px;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 6px 6px 0;
  box-shadow: -2px 0 3px 1px rgb(0 0 0 / 10%);
`;

const CardResultContainer = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 0 16px 16px 0;
  box-shadow: -2px 0 3px 1px rgb(0 0 0 / 10%);
`;

const CreditChartContainer = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function SpecificCardResult({ currentTab, cntColor }: CProps) {
  const contents = !currentTab ? (
    <UnClickedContainer>좌측의 대시보드를 눌러보세요!</UnClickedContainer>
  ) : (
    <CardResultContainer>
      <CreditChartContainer>
        <CreditCircularCardResult currentTab={currentTab} cntColor={cntColor} />
        <CreditIsSatisfiedCardResult currentTab={currentTab} />
      </CreditChartContainer>
      <CreditListCardResult currentTab={currentTab} />
    </CardResultContainer>
  );
  return <>{contents}</>;
}

export default SpecificCardResult;
