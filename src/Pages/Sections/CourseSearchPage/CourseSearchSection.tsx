import React from "react";
import CourseSearchBar from "../../../Component/Search/CourseSearchBar";
import SearchFilterButton from "../../../Component/Button/SearchFilterButton";

function CourseSearchSection() {
  return (
    <div
      style={{
        width: "100%",
        margin: "40px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <CourseSearchBar />
      <SearchFilterButton />
    </div>
  );
}

export default CourseSearchSection;
