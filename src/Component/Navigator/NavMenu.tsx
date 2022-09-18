import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: none;
  } ;
`;

const NavMenuLink = styled(Link)`
  height: fit-content;
  padding: 12px 16px;
  font-size: 16px;
  text-decoration: none;
  color: #6b7684;
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
  color: #6b7684;
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
  return (
    <NavMenuWrapper>
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
    </NavMenuWrapper>
  );
}

export default NavMenu;
