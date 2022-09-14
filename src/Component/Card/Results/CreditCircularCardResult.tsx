import React from "react";
import styled from "styled-components";

interface CircleCProps {
  currentTab: string;
}

const CircularCardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 280px;
  background-color: #f2f4f6;
  border-radius: 6px;
  padding: 10px;
`;

function CreditCircularCardResult({ currentTab }: CircleCProps) {
  return (
    <CircularCardWrapper>{currentTab}의 원형 카드 로딩 바</CircularCardWrapper>
  );
}

export default CreditCircularCardResult;
