import axios from "axios";
import { GradStatusType } from "../types/gradApiResultTypes";

// 요 부분은 설명 듣고 싶다!
// custom Error Handling 이라고 보면 되려나?
class HTTPError extends Error {
  constructor(messages?: string) {
    super(messages);
    this.name = "HTTP Error";
  }
}

// const API = axios.create({
//   baseURL: "https;//dev-api.gijol.im",
// });

const postGradStatusFile = async (
  gradeStatusFile: File,
  majorType: string,
  subMajorType: string
): Promise<GradStatusType> => {
  const BASE_URL = "https://dev-api.gijol.im";
  const formData = new FormData();

  formData.append("majorType", majorType);
  formData.append("minorType", subMajorType);
  formData.append("multipartFile", gradeStatusFile);

  const gradResultResponse = await axios.post(
    `${BASE_URL}/graduation/demo`,
    formData
  );
  if (gradResultResponse.status === 405) {
    throw new HTTPError("지원하지 않는 학번입니다.");
  }
  if (gradResultResponse.status === 500) {
    throw new HTTPError("파일 입력 오류.");
  }
  return gradResultResponse.data;
};

export default postGradStatusFile;
