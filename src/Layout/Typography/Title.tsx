import React from "react";
import styled from "styled-components";

const MainTitleWrapper = styled.div`
  font-size: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 3rem 0;
  word-break: keep-all;
  line-height: 1.6;
  @media only screen and (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
    padding: 0 80px;
    font-size: 32px;
    text-align: center;
    line-height: 1.5;
  }
  @media only screen and (max-width: 300px) {
    font-size: 24px;
    margin: 0 40px;
  }
`;

const SubTitleWrapper = styled.div`
  font-size: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 2.25rem 0;
  text-align: center;
  word-break: keep-all;
  @media only screen and (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
    padding: 0 40px;
    font-size: 24px;
    text-align: center;
    line-height: 1.5;
  }
  @media only screen and (max-width: 300px) {
    font-size: 16px;
    margin: 0 40px;
  }
`;

function MainTitle(props: any) {
  return <MainTitleWrapper>{props.children}</MainTitleWrapper>;
}

function SubTitle(props: any) {
  return <SubTitleWrapper>{props.children}</SubTitleWrapper>;
}

export { MainTitle, SubTitle };
