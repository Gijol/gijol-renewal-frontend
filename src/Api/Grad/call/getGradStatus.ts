import GradStatus from "../schema/gradStatus";
import postGradStatusFile from "./postGradStatusFile";
import SingleCategory from "../schema/singleCategory";
import gradStatus from "../schema/gradStatus";

const getGradStatus = async (
  courseFile: File,
  majorValue: string
): Promise<GradStatus> => {
  const rawResult = await postGradStatusFile(courseFile, majorValue);
  const { totalSatisfied, totalCredits, graduationCategory } = rawResult;
  const tempCategories =
  const apiResult =
  return;
};
