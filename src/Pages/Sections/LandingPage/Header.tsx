import React from "react";
import { MainTitle } from "../../../Layout/Typography/Title";
import FunctionNavLink from "../../../Component/Button/FunctionNavLink";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 96px;
`;

const HeaderButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function Header() {
  const gradRequirementPage = "grad";
  const courseSearchPage = "course-search";
  return (
    <HeaderContainer>
      <MainTitle>강의의 모든것, Gijol에서 확인하세요</MainTitle>
      <HeaderButtonContainer>
        <FunctionNavLink
          text="졸업요건 확인하러 가기"
          destination={gradRequirementPage}
        />
        <FunctionNavLink
          text="강의 검색하러 가기"
          destination={courseSearchPage}
        />
      </HeaderButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
