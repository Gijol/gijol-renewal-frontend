import React, { useState } from "react";
import DragAndDropZone from "../../../Component/File/DragAndDropZone";
import MajorInput from "../../../Component/Input/MajorInput";
import styled from "styled-components";
import HelpToggleModal from "../../../Component/Modal/HelpToggleModal";
import useGradStatusAction from "../../../Hooks/Grad/useGradStatusAction";
import useGradStatusValue from "../../../Hooks/Grad/useGradStatusValue";

const InputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 40px 0 80px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const FileUploadButtonContainer = styled.button`
  border: unset;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 6px;
  background-color: #1da447;
  color: #fff;
  cursor: pointer;
`;

function FileUploadSections() {
  const [majorType, setMajorType] = useState<string>("EC");
  const [gradFile, setGradFile] = useState<File | null>(null);

  const updateAction = useGradStatusAction();
  const gradStatusValue = useGradStatusValue();
  console.log(gradStatusValue);
  return (
    <>
      <DragAndDropZone setGradFile={setGradFile} />
      <InputContainer>
        <HelpToggleModal />
        <MajorInput setMajorType={setMajorType} />
        <FileUploadButtonContainer
          onClick={() =>
            updateAction?.updateGradStatus(gradFile as File, majorType)
          }
        >
          결과 확인하기
        </FileUploadButtonContainer>
      </InputContainer>
    </>
  );
}

export default FileUploadSections;
