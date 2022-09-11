import React from "react";
import styled, { keyframes } from "styled-components";

interface WPosProps {
  reversed?: boolean;
}

interface WUnitProps {
  duration?: string;
  zIndex?: string;
  opacity?: string;
  delay?: string;
  bottom?: string;
}

const waveAnimation = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    background-position: 1000px;
  }
`;

export const WaveContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: white;
`;

const WaveUnit = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  background: #e5e8eb url("/src/assets/wave.png");
  background-size: 1000px 100px;
  bottom: ${(props: WUnitProps) => props.bottom};
  z-index: ${(props: WUnitProps) => props.zIndex};
  opacity: ${(props: WUnitProps) => props.opacity};
  animation: ${waveAnimation} linear infinite;
  animation-delay: ${(props: WUnitProps) => props.delay};
  animation-duration: ${(props: WUnitProps) => props.duration};
`;

const WaveUnitReversed = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  background: #e5e8eb url("/src/assets/wave.png");
  background-size: 1000px 100px;
  transform: rotate(180deg);
  bottom: ${(props: WUnitProps) => props.bottom};
  z-index: ${(props: WUnitProps) => props.zIndex};
  opacity: ${(props: WUnitProps) => props.opacity};
  animation: ${waveAnimation} linear infinite;
  animation-delay: ${(props: WUnitProps) => props.delay};
  animation-duration: ${(props: WUnitProps) => props.duration};
`;

function WaveAnimation(props: WPosProps) {
  const content = !props.reversed ? (
    <>
      <WaveUnitReversed
        duration="30s"
        zIndex="100"
        opacity="1"
        delay="0s"
        bottom="0"
      />
      <WaveUnitReversed
        duration="20s"
        zIndex="101"
        opacity="0.5"
        delay="-5s"
        bottom="0px"
      />
      <WaveUnitReversed
        duration="10s"
        zIndex="102"
        opacity="0.2"
        delay="-2s"
        bottom="0px"
      />
    </>
  ) : (
    <>
      <WaveUnit duration="30s" zIndex="100" opacity="1" delay="0s" bottom="0" />
      <WaveUnit
        duration="15s"
        zIndex="101"
        opacity="0.5"
        delay="-5s"
        bottom="10px"
      />
      <WaveUnit
        duration="15s"
        zIndex="102"
        opacity="0.2"
        delay="-2s"
        bottom="15px"
      />
    </>
  );
  return <WaveContainer>{content}</WaveContainer>;
}

export default WaveAnimation;
