import React from "react";
import { SubDetail } from "../../../Layout/Typography/Detail";
import styled from "styled-components";

interface FProps {
  type: string;
}

const FnCard = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  width: 400px;
  height: fit-content;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  background-color: #f2f4f6;
  box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35);
`;

const FnExplain = styled.p`
  box-sizing: border-box;
  margin: 0;
  padding: 20px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.4;
`;

function FunctionExplainCard({ type }: FProps) {
  const image =
    type === "졸업요건"
      ? {
          src: "src/assets/졸업요건.png",
          alt: "졸업요건 사진",
          explanation:
            "Gijol에서 졸업요건 현황을 분석하여 충족을 위한 강의를 추천드립니다",
        }
      : {
          src: "src/assets/monitor.png",
          alt: "강의검색 사진",
          explanation:
            "강의에 대한 다양하고 체계적인 정보들을 보다 간편하게 찾을 수 있습니다",
        };
  return (
    <FnCard>
      <h2 style={{ fontWeight: "normal", fontSize: "26px" }}>{type}</h2>
      <img src={image.src} alt={image.alt} />
      <FnExplain>{image.explanation}</FnExplain>
    </FnCard>
  );
}

export default FunctionExplainCard;
