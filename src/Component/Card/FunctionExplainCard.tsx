import React from "react";
import { SubDetail } from "../../Layout/Typography/Detail";

interface FProps {
  type: string;
}

function FunctionExplainCard({ type }: FProps) {
  return (
    <div
      style={{
        borderRadius: "8px",
        width: "300px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f2f4f6",
      }}
    >
      지졸 기능 소개 카드
      <SubDetail>{type} 에 대한 카드입니다.</SubDetail>
    </div>
  );
}

export default FunctionExplainCard;
