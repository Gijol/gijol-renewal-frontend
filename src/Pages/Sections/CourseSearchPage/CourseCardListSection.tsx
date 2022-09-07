import React from "react";
import CourseCardSelectable from "../../../Component/Card/CourseCardSelectable";

function CourseCardListSection() {
  return (
    <div
      style={{
        width: "1024px",
        margin: "0 auto",
        padding: "48px 0 96px 0",
        display: "grid",
        gap: "40px",
        justifyItems: "center",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {/* 여기에 강의 정보 받아와서 보여주는 부분 */}
      <CourseCardSelectable />
      <CourseCardSelectable />
      <CourseCardSelectable />
      <CourseCardSelectable />
      <CourseCardSelectable />
    </div>
  );
}

export default CourseCardListSection;
