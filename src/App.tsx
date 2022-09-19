import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Routes/LandingPage";
import GradRequirementResultPage from "./Pages/Routes/GradRequirementResultPage";
import CourseSearchPage from "./Pages/Routes/CourseSearchPage";
import CourseInfoPage from "./Pages/Routes/CourseInfoPage";
import TeamInfo from "./Pages/Routes/TeamInfo";
import GradRequirementUploadPage from "./Pages/Routes/GradRequirementUploadPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/grad-result" element={<GradRequirementResultPage />} />
      <Route path="/grad-upload" element={<GradRequirementUploadPage />} />
      <Route path="/course-search" element={<CourseSearchPage />} />
      <Route path="/course-info" element={<CourseInfoPage />} />
      <Route path="/gijol-team-info" element={<TeamInfo />} />
      {/*Course Rating Page 랑 Login Page 와 같은 페이지들 추가해야함 */}
    </Routes>
  );
};

export default App;
