import React from "react";
import { SubTitle } from "../../../Layout/Typography/Title";
import styled from "styled-components";
import WaveAnimation from "../../../Component/Animations/WaveAnimation";

const ServiceDescriptionContainer = styled.div`
  width: 100%;
  background-color: #e5e8eb;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function ServiceDescription() {
  return (
    <>
      <WaveAnimation />
      <ServiceDescriptionContainer>
        <SubTitle>
          " Gijol은 사용자 중심의 체계화된 강의 정보를 제공하는 서비스입니다 "
        </SubTitle>
      </ServiceDescriptionContainer>
      <WaveAnimation reversed />
    </>
  );
}

export default ServiceDescription;
