interface TakenCourseType {
  year: number;
  semester: string;
  courseType: string;
  courseName: string;
  courseCode: string;
  credit: number;
}

interface UserTakenCourseListType {
  takenCourses: Array<TakenCourseType>;
}

interface SingleCategoryType {
  userTakenCoursesList: UserTakenCourseListType;
  singleTotalCredits: number;
  min: number;
  max: number;
  satisfied: boolean;
  messages: string[];
}

interface GradStatusType {
  graduationCategory: {
    languageBasic: SingleCategoryType;
    scienceBasic: SingleCategoryType;
    major: SingleCategoryType;
    humanities: SingleCategoryType;
    etcMandatory: SingleCategoryType;
    otherUncheckedClass: SingleCategoryType;
  };
  totalCredits: number;
  totalSatisfied: boolean;
}
