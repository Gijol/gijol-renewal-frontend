import React from "react";
import ServiceIntroSection from "../Sections/LandingPage/ServiceIntroSection";
import FuncIntroSection from "../Sections/LandingPage/FuncIntroSection";
import PageContainer from "../../Layout/Container/PageContainer";

function LandingPage() {
  return (
    <PageContainer>
      <ServiceIntroSection />
      <FuncIntroSection />
    </PageContainer>
  );
}

export default LandingPage;
