import React from "react";
import CourseListProvider from "../../../Provider/CourseListProvider";
import { Outlet } from "react-router-dom";

function CourseListContextLayout() {
  return (
    <CourseListProvider>
      <Outlet />
    </CourseListProvider>
  );
}

export default CourseListContextLayout;
