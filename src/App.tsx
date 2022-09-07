import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Routes/LandingPage";
import GradRequirementPage from "./Pages/Routes/GradRequirementPage";
import CourseSearchPage from "./Pages/Routes/CourseSearchPage";
import CourseInfoPage from "./Pages/Routes/CourseInfoPage";
import TeamInfo from "./Pages/Routes/TeamInfo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/grad" element={<GradRequirementPage />} />
      <Route path="/course-search" element={<CourseSearchPage />} />
      <Route path="/course-info" element={<CourseInfoPage />} />
      <Route path="/gijol-team-info" element={<TeamInfo />} />
      {/*Course Rating Page 랑 Login Page 와 같은 페이지들 추가해야함 */}
    </Routes>
  );
};

export default App;
