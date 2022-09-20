import React, { useContext } from "react";
import { GradStatusValueContext } from "../../Provider/GradProvider";

function useGradStatusValue() {
  const value = useContext(GradStatusValueContext);
  // if (value === undefined) {
  //   throw new Error(
  //     "useGradStatusValue should be used within GradStatusValueContext"
  //   );
  // }
  return value;
}

export default useGradStatusValue;
