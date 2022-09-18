import React from "react";
import styled from "styled-components";

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
`;

function CreditListCardResult({ currentTab }: ListCProps) {
  return <ListCardWrapper>{currentTab}에 대한 리스트</ListCardWrapper>;
}

export default CreditListCardResult;
