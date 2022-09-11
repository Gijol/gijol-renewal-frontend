import React from "react";
import CreditCircularCardResult from "./Results/CreditCircularCardResult";
import CreditBarCardResult from "./Results/CreditBarCardResult";
import CreditListCardResult from "./Results/CreditListCardResult";
import styled from "styled-components";

const CardResultContainer = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: cornflowerblue;
`;

const CreditChartContainer = styled.div`
  width: 300px;
  height: calc(100% - 20px);
  background-color: white;
  padding: 10px;
  border: 1px solid black;
`;

function SpecificCardResult() {
  return (
    <CardResultContainer>
      <CreditChartContainer>
        <CreditCircularCardResult />
        <CreditBarCardResult />
      </CreditChartContainer>
      <CreditListCardResult />
    </CardResultContainer>
  );
}

export default SpecificCardResult;
