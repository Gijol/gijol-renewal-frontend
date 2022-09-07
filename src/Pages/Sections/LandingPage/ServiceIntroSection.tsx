import React from "react";
import { MainTitle, SubTitle } from "../../../Layout/Typography/Title";
import NavButton from "../../../Component/Button/NavButton";

function ServiceIntroSection() {
  const gradRequirementPage = "grad";
  const courseSearchPage = "course-search";
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "740px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "96px",
        }}
      >
        <MainTitle>강의의 모든것, Gijol에서 확인하세요</MainTitle>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <NavButton
            text="졸업요건 확인하기"
            destination={gradRequirementPage}
          />
          <NavButton text="강의 검색하기" destination={courseSearchPage} />
        </div>
      </div>
      <div
        style={{
          padding: "120px 80px",
          backgroundColor: "#f2f4f6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SubTitle>
          Gijol은 사용자 중심의 체계화된 강의 정보를 제공하는 서비스입니다
        </SubTitle>
      </div>
    </>
  );
}

export default ServiceIntroSection;
