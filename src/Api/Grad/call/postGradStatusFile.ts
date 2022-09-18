import axios from "axios";

// 요 부분은 설명 듣고 싶다!
// custom Error Handling 이라고 보면 되려나?
class HTTPError extends Error {
  constructor(messages?: string) {
    super(messages);
    this.name = "HTTP Error";
  }
}

const postGradStatusFile = async (gradeStatusFile: File, majorType: string) => {
  const BASE_URL = process.env.REACT_APP_DEV_API;
  const formData = new FormData();

  formData.append("majorType", majorType);
  formData.append("gradeFile", gradeStatusFile);

  const response = await axios.post(`${BASE_URL}/graduation`, formData);
  if (response.status === 405) {
    throw new HTTPError("지원하지 않는 학번입니다.");
  }
  if (response.status === 500) {
    throw new HTTPError("파일 입력 오류.");
  }
  return response.data;
};

export default postGradStatusFile;
