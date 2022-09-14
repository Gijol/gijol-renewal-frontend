import React from "react";
import styled from "styled-components";

interface BarCProps {
  currentTab: string;
}

const BarCardWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90px;
  background-color: #f2f4f6;
  border-radius: 6px;
  padding: 10px;
`;

function CreditBarCardResult({ currentTab }: BarCProps) {
  return <BarCardWrapper>{currentTab}의 막대 바 결과</BarCardWrapper>;
}

export default CreditBarCardResult;
