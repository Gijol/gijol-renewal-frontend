import React, { useState } from "react";
import styled from "styled-components";

const RecommendCardContainer = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  margin-right: 20px;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
  transform: ${(props: { onClick: () => void; clicked: boolean }) =>
    props.clicked && "rotateY(180deg)"};
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;

function RecommendCardSlide() {
  const [clicked, setClicked] = useState(false);
  const onClickHandler = () => {
    setClicked((prev) => {
      return !prev;
    });
  };
  return (
    <RecommendCardContainer onClick={onClickHandler} clicked={clicked}>
      <div
        style={{
          boxSizing: "border-box",
          height: "400px",
          width: "300px",
          padding: "10px",
          position: "absolute",
          backfaceVisibility: "hidden",
          backgroundColor: "#f2f4f6",
          borderRadius: "6px",
        }}
      >
        슬라이드 1
      </div>
      <div
        style={{
          boxSizing: "border-box",
          height: "400px",
          width: "300px",
          padding: "10px",
          position: "absolute",
          backfaceVisibility: "hidden",
          backgroundColor: "gray",
          transform: "rotateY(180deg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        슬라이드 1의 내용들
      </div>
    </RecommendCardContainer>
  );
}

export default RecommendCardSlide;
