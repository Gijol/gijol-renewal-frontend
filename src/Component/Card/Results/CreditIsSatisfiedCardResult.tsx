import React from "react";
import styled from "styled-components";

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
  return (
    <IsSatisfiedCardWrapper>
      {currentTab}의 <br />
      충족 여부에 대한 결과 표시
    </IsSatisfiedCardWrapper>
  );
}

export default CreditIsSatisfiedCardResult;
