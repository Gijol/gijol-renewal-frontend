import React from "react";
import CreditCircularCardResult from "./Results/CreditCircularCardResult";
import CreditBarCardResult from "./Results/CreditBarCardResult";
import CreditListCardResult from "./Results/CreditListCardResult";
import styled from "styled-components";

interface CProps {
  currentTab: string;
}

const UnClickedContainer = styled.div`
  width: 800px;
  height: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: -2px 0 4px 0 rgb(0 0 0 / 20%);
`;

const CardResultContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: -2px 0 4px 0 rgb(0 0 0 / 20%);
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
        <CreditBarCardResult currentTab={currentTab} />
      </CreditChartContainer>
      <CreditListCardResult currentTab={currentTab} />
    </CardResultContainer>
  );
  return <>{contents}</>;
}

export default SpecificCardResult;
