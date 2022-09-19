import React, { useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

// dropzone 의 활성화 여부에 따라 색을 결정하는 함수이다.
const getColors = (props: any) => {
  if (props.isDragAccept) {
    return "#6BCB77";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "gray";
};

const DragAndDropContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  margin: 40px 0 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UploadContainer = styled.div`
  box-sizing: border-box;
  width: 800px;
  height: 100%;
  border: 1px dashed ${(props) => getColors(props)};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const DndUploadButton = styled.button`
  border: unset;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 6px;
  &:hover {
    background-color: gray;
    color: white;
    transition: 0.2s;
  }
`;

const DndRemoveButton = styled.button`
  border: unset;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 6px;
  &:hover {
    background-color: gray;
    color: white;
    transition: 0.2s;
  }
`;

//react-dropzone 의 공식문서를 참고하길 바란다.
function DragAndDropZone() {
  const [uploaded, setUploaded] = useState(false);
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    maxFiles: 1,
    accept: {
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    onDropAccepted: () => {
      setUploaded(() => {
        return true;
      });
    },
  });

  // 업로드 된 파일 명을 나열하는 함수, 사실 map 을 사용할 필요는 없긴하다.
  let fileUploaded: JSX.Element[] = acceptedFiles.map((file) => (
    <li key={file.name} style={{ listStyle: "none", margin: "16px 0" }}>
      {file.name} - {file.size}kb
    </li>
  ));

  // upload 되었을 때 파일 명이 보이도록 하는 함수
  const contents = !uploaded ? (
    <>
      <p>다운받은 성적 파일을 드래그하거나 아래 버튼을 눌러 업로드하세요</p>
      <p style={{ color: "gray", fontSize: "12px" }}>
        xls, xlsx 파일만 업로드 가능합니다.
      </p>
    </>
  ) : (
    <aside>
      <ul style={{ margin: "0", padding: "0" }}>{fileUploaded}</ul>
    </aside>
  );
  return (
    <DragAndDropContainer>
      <UploadContainer
        {...getRootProps({ isDragAccept, isDragReject, isDragActive })}
      >
        <input {...getInputProps()} />
        {contents}
        <div>
          <DndUploadButton type="button">
            {!uploaded ? "파일 선택하기" : "다른 파일로 바꾸기"}
          </DndUploadButton>
        </div>
      </UploadContainer>
    </DragAndDropContainer>
  );
}

export default DragAndDropZone;
