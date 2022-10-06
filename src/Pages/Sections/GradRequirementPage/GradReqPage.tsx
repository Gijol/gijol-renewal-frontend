import React, { useContext, useState } from "react";
import GradRequirementUploadPage from "../../Routes/GradRequirementUploadPage";
import GradRequirementResultPage from "../../Routes/GradRequirementResultPage";
import GradProvider, {
  GradStatusValueContext,
} from "../../../Provider/GradProvider";

function GradReqPage() {
  const [loaded, setLoaded] = useState(false);
  const context = useContext(GradStatusValueContext);
  if (!context) {
    setLoaded(false);
  } else {
    setLoaded(true);
  }
  return (
    <GradProvider>
      <GradRequirementUploadPage />
      <GradRequirementResultPage />
    </GradProvider>
  );
}

export default GradReqPage;
