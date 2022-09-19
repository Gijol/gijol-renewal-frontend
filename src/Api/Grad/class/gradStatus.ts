import SingleCategory from "./singleCategory";

class GradStatus {
  readonly #etcMandatory: SingleCategory;
  readonly #humanities: SingleCategory;
  readonly #languageBasic: SingleCategory;
  readonly #major: SingleCategory;
  readonly #otherUncheckedClass: SingleCategory;
  readonly #scienceBasic: SingleCategory;
  readonly #totalSatisfied: boolean;
  readonly #totalCredits: number;

  constructor(
    languageBasic: SingleCategory,
    scienceBasic: SingleCategory,
    major: SingleCategory,
    humanities: SingleCategory,
    etcMandatory: SingleCategory,
    other: SingleCategory,
    totalCredits: number,
    totalSatisfied: boolean
  ) {
    this.#etcMandatory = etcMandatory;
    this.#humanities = humanities;
    this.#languageBasic = languageBasic;
    this.#major = major;
    this.#otherUncheckedClass = other;
    this.#scienceBasic = scienceBasic;
    this.#totalSatisfied = totalSatisfied;
    this.#totalCredits = totalCredits;
  }

  public get getEtcMandatory(): SingleCategory {
    return this.#etcMandatory;
  }

  public get getHumanities(): SingleCategory {
    return this.#humanities;
  }

  public get getLanguageBasic(): SingleCategory {
    return this.#languageBasic;
  }

  public get getMajor(): SingleCategory {
    return this.#major;
  }

  public get getOtherClass(): SingleCategory {
    return this.#otherUncheckedClass;
  }

  public get getScience(): SingleCategory {
    return this.#scienceBasic;
  }

  public get getTotalCredits(): number {
    return this.#totalCredits;
  }
  public get getTotalSatisfied(): boolean {
    return this.#totalSatisfied;
  }
}

export default GradStatus;
