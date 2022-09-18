import UserTakenCourseList from "./userTakenCourseList";
import TakenCourse from "./takenCourse";

class SingleCategory {
  readonly #userTakenCourseList: UserTakenCourseList;
  readonly #totalCredits: number;
  readonly #minConditionCredits: number;
  readonly #maxConditionCredits: number;
  readonly #satisfied: boolean;
  readonly #messages: string[];

  constructor(
    userTakenCoursesList: UserTakenCourseList,
    totalCredits: number,
    min: number,
    max: number,
    satisfied: boolean,
    messages: string[]
  ) {
    this.#userTakenCourseList = userTakenCoursesList;
    this.#totalCredits = totalCredits;
    this.#minConditionCredits = min;
    this.#maxConditionCredits = max;
    this.#satisfied = satisfied;
    this.#messages = messages;
  }

  public get getTakenCoursesList(): Array<TakenCourse> {
    return this.#userTakenCourseList.getTakenCourses();
  }

  public get getTotalCredits(): number {
    return this.#totalCredits;
  }

  public get getMessages(): Array<string> {
    return this.#messages;
  }

  public get getMaxCredit(): number {
    return this.#maxConditionCredits;
  }

  public get getMinCredit(): number {
    return this.#minConditionCredits;
  }

  public get isSatisfied(): boolean {
    return this.#satisfied;
  }
}

export default SingleCategory;
