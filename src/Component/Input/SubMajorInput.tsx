import React from "react";
import styled from "styled-components";

interface IProps {
  setMajorType: (major: string) => void;
}

const SubMajorInputBtnContainer = styled.select`
  box-sizing: border-box;
  width: 200px;
  height: fit-content;
  padding: 12px 16px;
  border: unset;
  background-color: #f2f4f6;
  border-radius: 6px;
  cursor: pointer;
`;

function SubMajorInput({ setMajorType }: IProps) {
  const onSelectHandler = (event: any) => {
    setMajorType(event.target.value);
  };
  return (
    <SubMajorInputBtnContainer onChange={onSelectHandler}>
      <option value="NONE">부전공 없음</option>
      <option value="EC">전기전자컴퓨터공학 부전공</option>
      <option value="MA">신소재공학 부전공</option>
      <option value="EV">지구환경공학 부전공</option>
      <option value="BS">생명과학 부전공</option>
      <option value="CH">화학 부전공</option>
      <option value="MC">기계공학 부전공</option>
      <option value="PS">물리광과학 부전공</option>
    </SubMajorInputBtnContainer>
  );
}

export default SubMajorInput;
