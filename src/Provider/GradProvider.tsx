import React, { createContext, useMemo, useState } from "react";
import { GradStatusType } from "../Api/Grad/types/gradApiResultTypes";
import postGradStatusFile from "../Api/Grad/call/postGradStatusFile";

interface Props {
  children: React.ReactNode;
}

interface AProps {
  updateGradStatus(gradStatusFile: File, majorType: string): void;
}

export const GradStatusValueContext = createContext<GradStatusType | null>(
  null
);
export const GradStatusActionContext = createContext<AProps | null>(null);

function GradProvider({ children }: Props): JSX.Element {
  const [gradStatus, setGradStatus] = useState<GradStatusType | null>(null);

  const action = useMemo(
    () => ({
      updateGradStatus(gradStatusFile: File, majorType: string) {
        postGradStatusFile(gradStatusFile, majorType).then(
          (response: GradStatusType) => {
            console.log(response);
            setGradStatus(() => ({ ...response }));
          }
        );
      },
    }),
    []
  );
  return (
    <GradStatusActionContext.Provider value={action}>
      <GradStatusValueContext.Provider value={gradStatus}>
        {children}
      </GradStatusValueContext.Provider>
    </GradStatusActionContext.Provider>
  );
}

export default GradProvider;
