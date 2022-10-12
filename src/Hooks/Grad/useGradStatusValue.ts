import { useContext } from "react";
import { GradStatusValueContext } from "../../Provider/GradProvider";

function useGradStatusValue() {
  return useContext(GradStatusValueContext);
}

export default useGradStatusValue;
