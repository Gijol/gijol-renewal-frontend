import React from "react";
import DragAndDropZone from "../../../Component/File/DragAndDropZone";
import MajorInput from "../../../Component/Input/MajorInput";
import FileUploadButton from "../../../Component/Button/FileUploadButton";

function FileUploadSections() {
  return (
    <>
      <DragAndDropZone />
      <div>
        <MajorInput />
        <FileUploadButton />
      </div>
    </>
  );
}

export default FileUploadSections;
