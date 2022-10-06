import { useContext } from "react";
import { GradStatusActionContext } from "../../Provider/GradProvider";

function useGradStatusAction() {
  const action = useContext(GradStatusActionContext);
  if (action === undefined) {
    throw new Error(
      "useGradStatusAction should be used within GradStatusActionContext"
    );
  }
  return action;
}

export default useGradStatusAction;
