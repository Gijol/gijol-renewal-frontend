export interface CourseType {
  id: number;
  courseCode: string;
  courseName: string;
  courseCredit: number;
  prerequisite: string;
  courseTags: Array<string>;
}

export interface CourseListType extends Array<CourseType> {}
