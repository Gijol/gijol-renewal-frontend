import React from "react";

function CourseSearchBar() {
  return (
    <input
      type="search"
      placeholder="강의 명이나 코드를 적어보세요"
      style={{
        width: "500px",
        border: "1px solid gray",
        padding: "0 16px",
        borderRadius: "8px",
      }}
    />
  );
}

export default CourseSearchBar;
