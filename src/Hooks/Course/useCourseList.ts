import React, { useContext } from "react";
import { CourseListContext } from "../../Provider/CourseListProvider";

function useCourseList() {
  return useContext(CourseListContext);
}

export default useCourseList;
