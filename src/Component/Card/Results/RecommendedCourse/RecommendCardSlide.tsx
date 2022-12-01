import React, { useState } from "react";
import styled from "styled-components";

const RecommendCardContainer = styled.div<{ clicked: boolean }>`
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  margin-right: 20px;
  border-radius: 16px;
  position: relative;
  cursor: pointer;
  transform: ${({ clicked }: { clicked: boolean }) =>
    clicked && "rotateY(180deg)"};
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;

const RecommendCardTitle = styled.div`
  box-sizing: border-box;
  height: 400px;
  width: 300px;
  padding: 10px;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;

const RecommendCardContent = styled.div`
  box-sizing: border-box;
  height: 400px;
  width: 300px;
  padding: 40px;
  position: absolute;
  backface-visibility: hidden;
  background-color: #f2f4f6;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  word-break: keep-all;
`;

function RecommendCardSlide({
  title,
  isSatisfied,
  content,
  color,
}: {
  title: string;
  isSatisfied: boolean;
  content: string[];
  color: string;
}) {
  const [clicked, setClicked] = useState(false);
  const onClickHandler = () => {
    setClicked((prev) => {
      return !prev;
    });
  };
  const messages = content?.map((message, index) => {
    return <p key={index}>👉 {message}</p>;
  });
  return (
    <RecommendCardContainer onClick={onClickHandler} clicked={clicked}>
      <RecommendCardTitle style={{ backgroundColor: color }}>
        <h2 style={{ color: "white" }}>{title}</h2>
        <p style={{ color: "white" }}>👆 눌러서 뒤를 봐보세요!</p>
      </RecommendCardTitle>
      <RecommendCardContent>
        {isSatisfied ? "👏 전부 이수하셨습니다! 👏" : messages}
      </RecommendCardContent>
    </RecommendCardContainer>
  );
}

export default RecommendCardSlide;
