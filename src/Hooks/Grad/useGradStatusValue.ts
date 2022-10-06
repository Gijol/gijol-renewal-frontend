import { useContext } from "react";
import { GradStatusValueContext } from "../../Provider/GradProvider";

function useGradStatusValue() {
  const value = useContext(GradStatusValueContext);
  if (value === undefined) {
    throw new Error("useCounterActions should be used within CounterProvider");
  }
  return value;
}

export default useGradStatusValue;
