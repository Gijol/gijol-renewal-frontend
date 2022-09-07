import React from "react";
import { Link } from "react-router-dom";

function NavMenu() {
  // styled-component 사용해야됨
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      <Link
        to="/grad"
        style={{
          fontSize: "1rem",
          textDecoration: "none",
          color: "gray",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        졸업요건
      </Link>
      <Link
        to="/course-search"
        style={{
          fontSize: "1rem",
          textDecoration: "none",
          color: "gray",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // hover 시 animation 적용 필요
        }}
      >
        강의검색
      </Link>
      {/* <Link to="/">강의평가</Link> 강의 평가 들어가면 추가하셈*/}
      <a
        href="https://choieungi-project.notion.site/Q-A-9e325eabef4e479a8f47e95eb90bb344"
        style={{
          fontSize: "1rem",
          textDecoration: "none",
          color: "gray",
          padding: "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        rel="noreferrer"
      >
        팀 소개
      </a>
    </div>
  );
}

export default NavMenu;
