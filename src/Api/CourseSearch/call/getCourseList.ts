import axios from "axios";

const getCourseList = async () => {
  const BASE_URL = "https://dev-api.gijol.im";
  try {
    const { data, status } = await axios.get(`${BASE_URL}/courses/dummy`, {
      headers: {
        Accept: "application/json",
      },
    });
    // console.log("Response status: ", status);
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log("error message : ", err.message);
    } else {
      console.log("unexpected error : ", err);
      return "An unexpected error occurred";
    }
  }
};

export default getCourseList;
