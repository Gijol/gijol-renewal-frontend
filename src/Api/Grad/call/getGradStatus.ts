import postGradStatusFile from "./postGradStatusFile";

// 의미가 있는 함수인가? --> 일단 없다고 보고 만들어보자.
const getGradStatus = async (courseFile: File, majorValue: string) => {
  const rawResult: GradStatusType = await postGradStatusFile(
    courseFile,
    majorValue
  );
  if (typeof rawResult === "object") {
    return rawResult;
  } else {
    return null;
  }
  // const { totalSatisfied, totalCredits, graduationCategory } = rawResult;
  // const apiResult = [];
  // Object.keys(graduationCategory).forEach((category) => {
  //   const {
  //     userTakenCoursesList,
  //     singleTotalCredits,
  //     minConditionCredits,
  //     maxConditionCredits,
  //     satisfied,
  //     messages,
  //   } = graduationCategory[category];
  //   const { takenCourses } = userTakenCoursesList;
  //   const tempCourseArray: Array<TakenCourse> = [];
  //   takenCourses.forEach((singleCourseData: any) => {
  //     const {
  //       year,
  //       semester,
  //       courseType,
  //       courseName,
  //       courseCode,
  //       courseCredit,
  //     } = singleCourseData;
  //     const tempCourse = new TakenCourse(
  //       year,
  //       semester,
  //       courseType,
  //       courseName,
  //       courseCode,
  //       courseCredit
  //     );
  //     tempCourseArray.push(tempCourse);
  //   });
  // });
  // return;
};

export default getGradStatus;
