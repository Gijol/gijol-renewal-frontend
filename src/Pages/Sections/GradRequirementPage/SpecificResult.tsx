import React, { useState } from "react";
import ResultContainer from "../../../Layout/Container/ResultContainer";
import styled from "styled-components";
import SpecificResultMenuBar from "../../../Component/MenuBar/SpecificResultMenuBar";
import SpecificCardResult from "../../../Component/Card/Results/SpecificCardResult";

const SpecificResultContainer = styled.div`
  box-sizing: border-box;
  width: 960px;
  height: 400px;
  border-radius: 16px;
  background-color: #fff;
  margin: 40px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 40%);
`;

function SpecificResult() {
  const [category, setCategory] = useState("");
  const [cntColor, setCntColor] = useState("");

  const onMenuTabClick = (item: string, color: string) => {
    setCategory(() => {
      return item;
    });
    setCntColor(() => {
      return color;
    });
  };

  return (
    <ResultContainer>
      <SpecificResultContainer>
        <SpecificResultMenuBar onMenuTabClick={onMenuTabClick} />
        <SpecificCardResult currentTab={category} cntColor={cntColor} />
      </SpecificResultContainer>
    </ResultContainer>
  );
}

export default SpecificResult;
