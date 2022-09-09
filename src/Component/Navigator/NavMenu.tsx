import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const NavMenuLink = styled(Link)`
  height: fit-content;
  padding: 12px 16px;
  font-size: 1rem;
  text-decoration: none;
  color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  &:hover {
    background-color: #f2f4f6;
  }
`;

const NavMenuOuterLink = styled.a`
  height: fit-content;
  text-decoration: none;
  color: gray;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #f2f4f6;
  }
`;

function NavMenu() {
  // styled-component 사용해야됨
  return (
    <NavMenuContainer>
      <NavMenuLink to="/grad">졸업요건</NavMenuLink>
      <NavMenuLink to="/course-search">강의검색</NavMenuLink>
      <NavMenuOuterLink
        href="https://choieungi-project.notion.site/Q-A-9e325eabef4e479a8f47e95eb90bb344"
        rel="noreferrer"
        target="_blank"
      >
        자주 묻는 질문
      </NavMenuOuterLink>
      <NavMenuOuterLink
        href="https://choieungi-project.notion.site/Team-Gijol-e5e279e91a0646c2a84b548873601a3f"
        rel="noreferrer"
        target="_blank"
      >
        팀 소개
      </NavMenuOuterLink>
    </NavMenuContainer>
  );
}

export default NavMenu;
