import React, { createContext, useEffect, useState } from "react";
import { CourseListType } from "../Api/CourseSearch/types/courseListTypes";
import getCourseList from "../Api/CourseSearch/call/getCourseList";

interface Props {
  children: React.ReactNode;
}

export const CourseListContext = createContext<CourseListType | undefined>(
  undefined
);

function CourseListProvider({ children }: Props) {
  const [courseList, setCourseList] = useState<CourseListType | undefined>(
    undefined
  );

  useEffect(() => {
    getCourseList().then((data: CourseListType) => {
      console.log(data);
      setCourseList(() => data);
    });
  }, []);

  return (
    <CourseListContext.Provider value={courseList}>
      {children}
    </CourseListContext.Provider>
  );
}

export default CourseListProvider;
