import React, { createContext, useMemo, useState } from "react";
import { GradStatusType } from "../Api/Grad/types/gradApiResultTypes";
import postGradStatusFile from "../Api/Grad/call/postGradStatusFile";

interface Props {
  children: React.ReactNode;
}

interface AProps {
  updateGradStatus(gradStatusFile: File, majorType: string): void;
}

export const GradStatusValueContext = createContext<GradStatusType | undefined>(
  undefined
);
export const GradStatusActionContext = createContext<AProps | null>(null);

function GradProvider({ children }: Props): JSX.Element {
  const [gradStatus, setGradStatus] = useState<GradStatusType>();

  const action = useMemo(
    () => ({
      updateGradStatus(gradStatusFile: File, majorType: string) {
        postGradStatusFile(gradStatusFile, majorType).then(
          (response: GradStatusType) => {
            setGradStatus(() => response);
          }
        );
      },
    }),
    []
  );
  return (
    <GradStatusValueContext.Provider value={gradStatus}>
      <GradStatusActionContext.Provider value={action}>
        {children}
      </GradStatusActionContext.Provider>
    </GradStatusValueContext.Provider>
  );
}

export default GradProvider;
