import React from "react";
import styled from "styled-components";
import ResultContainer from "../../../Layout/Container/ResultContainer";
// import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import RecommendCardSlide from "../../../Component/Card/Results/RecommendedCourse/RecommendCardSlide";
import useGradStatusValue from "../../../Hooks/Grad/useGradStatusValue";

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
  const valueContext = useGradStatusValue();
  const cardsOptions = {
    slideShadows: false,
  };
  const langBasic = valueContext?.graduationCategory.languageBasic
    .messages as string[];
  const basicSci = valueContext?.graduationCategory.scienceBasic
    .messages as string[];
  const human = valueContext?.graduationCategory.humanities
    .messages as string[];
  const major = valueContext?.graduationCategory.major.messages as string[];
  const subMajor = valueContext?.graduationCategory.minor.messages as string[];
  const etcMan = valueContext?.graduationCategory.etcMandatory
    .messages as string[];
  const other = valueContext?.graduationCategory.otherUncheckedClass
    .messages as string[];
  const langBasicSatisfied = valueContext?.graduationCategory.languageBasic
    .satisfied as boolean;
  const basicSciSatisfied = valueContext?.graduationCategory.scienceBasic
    .satisfied as boolean;
  const humanSatisfied = valueContext?.graduationCategory.humanities
    .satisfied as boolean;
  const majorSatisfied = valueContext?.graduationCategory.major
    .satisfied as boolean;
  const subMajorSatisfied = valueContext?.graduationCategory.minor
    .satisfied as boolean;
  const etcManSatisfied = valueContext?.graduationCategory.etcMandatory
    .satisfied as boolean;
  const otherSatisfied = valueContext?.graduationCategory.otherUncheckedClass
    .satisfied as boolean;
  return (
    <ResultContainer>
      <RecommendResultContainer>
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          spaceBetween={40}
          slidesPerView="auto"
          effect="coverflow"
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          grabCursor
          centeredSlides
          touchRatio={1}
          style={{ width: "100%" }}
          cardsEffect={cardsOptions}
          // 여기는 map 함수로 넣어놓는게 맞을듯? 일단 api 받아오고 해봅시다.
        >
          <SwiperSlideContainer>
            <RecommendCardSlide
              title="언어와 기초"
              isSatisfied={langBasicSatisfied}
              content={langBasic}
              color="#6BCB77"
            />
          </SwiperSlideContainer>
          <SwiperSlideContainer>
            <RecommendCardSlide
              title="기초과학"
              isSatisfied={basicSciSatisfied}
              content={basicSci}
              color="#4D96FF"
            />
          </SwiperSlideContainer>
          <SwiperSlideContainer>
            <RecommendCardSlide
              title="인문사회"
              isSatisfied={humanSatisfied}
              content={human}
              color="#F0CA33"
            />
          </SwiperSlideContainer>
          <SwiperSlideContainer>
            <RecommendCardSlide
              title="전공"
              isSatisfied={majorSatisfied}
              content={major}
              color="#FF6B6B"
            />
          </SwiperSlideContainer>
          <SwiperSlideContainer>
            <RecommendCardSlide
              title="부전공"
              isSatisfied={subMajorSatisfied}
              content={subMajor}
              color="#ffbd51"
            />
          </SwiperSlideContainer>
          <SwiperSlideContainer>
            <RecommendCardSlide
              title="연구 및 기타"
              isSatisfied={etcManSatisfied}
              content={etcMan}
              color="#9772FB"
            />
          </SwiperSlideContainer>
          <SwiperSlideContainer>
            <RecommendCardSlide
              title="자유학점"
              isSatisfied={otherSatisfied}
              content={other}
              color="#B0B8C1"
            />
          </SwiperSlideContainer>
        </Swiper>
      </RecommendResultContainer>
    </ResultContainer>
  );
}

export default RecommendResult;
