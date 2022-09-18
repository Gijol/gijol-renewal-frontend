import React from "react";
import CreditCircularCardResult from "./CreditCircularCardResult";
import CreditIsSatisfiedCardResult from "./CreditIsSatisfiedCardResult";
import CreditListCardResult from "./CreditListCardResult";
import styled from "styled-components";

interface CProps {
  currentTab: string;
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
  border-radius: 0 6px 6px 0;
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

function SpecificCardResult({ currentTab }: CProps) {
  // 여기 대쉬보드 뜨게 한다면, 한 탭에서 다른 탭으로 넘어갈 때 보이는 화면도 생성해야됨
  // 로딩 상태와 대쉬보드 누른 상태, 한 탭에서 다른 탭으로 넘어갈 때, 이런거 상태관리 해야됨.
  const contents = !currentTab ? (
    <UnClickedContainer>좌측의 대시보드를 눌러보세요!</UnClickedContainer>
  ) : (
    <CardResultContainer>
      <CreditChartContainer>
        <CreditCircularCardResult currentTab={currentTab} />
        <CreditIsSatisfiedCardResult currentTab={currentTab} />
      </CreditChartContainer>
      <CreditListCardResult currentTab={currentTab} />
    </CardResultContainer>
  );
  return <>{contents}</>;
}

export default SpecificCardResult;
