import React, { useState } from "react";
import styled from "styled-components";
import ResultContainer from "../../../Layout/Container/ResultContainer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
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

const SwiperSlideContainer = styled(SwiperSlide)`
  box-sizing: border-box;
  background-position: center;
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  margin: 40px 0;
`;

// Swiper Slide 적용 여부 및 animation 조정
function RecommendResult() {
  const cardsOptions = {
    slideShadows: false,
  };
  return (
    <ResultContainer>
      <RecommendResultContainer>
        {/*<Swiper*/}
        {/*  modules={[EffectCoverflow, Pagination]}*/}
        {/*  spaceBetween={40}*/}
        {/*  slidesPerView="auto"*/}
        {/*  effect="coverflow"*/}
        {/*  coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1 }}*/}
        {/*  grabCursor*/}
        {/*  centeredSlides*/}
        {/*  touchRatio={1}*/}
        {/*  style={{ width: "100%" }}*/}
        {/*  cardsEffect={cardsOptions}*/}
        {/*  // 여기는 map 함수로 넣어놓는게 맞을듯? 일단 api 받아오고 해봅시다.*/}
        {/*>*/}
        {/*<SwiperSlideContainer>*/}
        <RecommendCardSlide />
        {/*</SwiperSlideContainer>*/}
        {/*<SwiperSlideContainer>*/}
        <RecommendCardSlide />
        {/*</SwiperSlideContainer>*/}
        {/*<SwiperSlideContainer>*/}
        <RecommendCardSlide />
        {/*</SwiperSlideContainer>*/}
        {/*<SwiperSlideContainer>*/}
        <RecommendCardSlide />
        {/*</SwiperSlideContainer>*/}
        {/*<SwiperSlideContainer>*/}
        <RecommendCardSlide />
        {/*  </SwiperSlideContainer>*/}
        {/*<SwiperSlideContainer>*/}
        <RecommendCardSlide />
        {/*  </SwiperSlideContainer>*/}
        {/*</Swiper>*/}
      </RecommendResultContainer>
    </ResultContainer>
  );
}

export default RecommendResult;
