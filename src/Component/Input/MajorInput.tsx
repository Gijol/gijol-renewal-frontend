import React from "react";
import styled from "styled-components";

interface IProps {
  setMajorType: React.Dispatch<React.SetStateAction<string>>;
}

const MajorInputBtnContainer = styled.select`
  box-sizing: border-box;
  width: 200px;
  height: fit-content;
  padding: 12px 16px;
  border: unset;
  background-color: #f2f4f6;
  border-radius: 6px;
  cursor: pointer;
`;

function MajorInput({ setMajorType }: IProps) {
  const onSelectHandler = (event: any) => {
    if (event.target.value !== null) {
      setMajorType(() => event.target.value);
    }
  };
  return (
    <MajorInputBtnContainer onChange={onSelectHandler}>
      <option disabled hidden value="">
        전공을 선택해주세요
      </option>
      <option value="EC">전기전자컴퓨터공학전공</option>
      <option value="MA">신소재공학전공</option>
      <option value="EV">지구환경공학전공</option>
      <option value="BS">생명과학전공</option>
      <option value="CH">화학전공</option>
      <option value="MC">기계공학전공</option>
      <option value="PS">물리광과학전공</option>
    </MajorInputBtnContainer>
  );
}

export default MajorInput;
