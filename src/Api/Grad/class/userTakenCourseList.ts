import TakenCourse from "./takenCourse";

class UserTakenCourseList {
  readonly #takenCourses: Array<TakenCourse>;

  constructor(takenCourses: Array<TakenCourse>) {
    this.#takenCourses = takenCourses;
  }

  public getTakenCourses(): Array<TakenCourse> {
    return this.#takenCourses;
  }
}

export default UserTakenCourseList;
