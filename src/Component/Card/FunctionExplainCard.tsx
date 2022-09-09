import React from "react";
import { SubDetail } from "../../Layout/Typography/Detail";
import styled from "styled-components";

interface FProps {
  type: string;
}

const FnCard = styled.div`
  border-radius: 8px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f6;
`;

function FunctionExplainCard({ type }: FProps) {
  return (
    <FnCard>
      지졸 기능 소개 카드
      <SubDetail>{type} 에 대한 카드입니다.</SubDetail>
    </FnCard>
  );
}

export default FunctionExplainCard;
