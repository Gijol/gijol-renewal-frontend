import React, { useState } from "react";
import ResultContainer from "../../../Layout/Container/ResultContainer";
import styled from "styled-components";
import SpecificResultMenuBar from "../../../Component/MenuBar/SpecificResultMenuBar";
import SpecificCardResult from "../../../Component/Card/SpecificCardResult";

const SpecificResultContainer = styled.div`
  box-sizing: border-box;
  width: 960px;
  height: 400px;
  border-radius: 6px;
  background-color: #fff;
  margin: 40px 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function SpecificResult() {
  const [category, setCategory] = useState("");

  const onMenuTabClick = (item: string) => {
    setCategory(() => {
      return item;
    });
  };

  const onOutsideClick = () => {
    setCategory(() => {
      return "";
    });
  };
  return (
    <ResultContainer>
      <SpecificResultContainer>
        <SpecificResultMenuBar
          onMenuTabClick={onMenuTabClick}
          onOutsideClick={onOutsideClick}
        />
        <SpecificCardResult currentTab={category} />
      </SpecificResultContainer>
    </ResultContainer>
  );
}

export default SpecificResult;
