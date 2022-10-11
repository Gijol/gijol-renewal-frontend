export interface TakenCourseType {
  year: number;
  semester: string;
  courseType: string;
  courseName: string;
  courseCode: string;
  credit: number;
}

export interface UserTakenCourseListType {
  takenCourses: Array<TakenCourseType>;
}

export interface SingleCategoryType {
  messages: string[];
  minConditionCredits: number;
  satisfied: boolean;
  totalCredits: number;
  userTakenCoursesList: UserTakenCourseListType;
}

export interface GradStatusType {
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
