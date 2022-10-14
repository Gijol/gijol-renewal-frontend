import React from "react";
import styled from "styled-components";
import ResultContainer from "../../../Layout/Container/ResultContainer";
// import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import RecommendCardSlide from "../../../Component/Card/Results/RecommendedCourse/RecommendCardSlide";

const RecommendResultContainer = styled.div`
  box-sizing: border-box;
  margin: 80px 0;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

// const SwiperSlideContainer = styled(SwiperSlide)`
//   box-sizing: border-box;
//   background-position: center;
//   width: fit-content;
//   height: fit-content;
//   background-color: transparent;
//   margin: 40px 0;
// `;

// Swiper Slide 적용 여부 및 animation 조정
function RecommendResult() {
  const cardsOptions = {
    slideShadows: false,
  };
  return (
    <ResultContainer>
      <RecommendResultContainer>
        <RecommendCardSlide />
        <RecommendCardSlide />
        <RecommendCardSlide />
      </RecommendResultContainer>
    </ResultContainer>
  );
}

export default RecommendResult;
