import React from "react";
import styled from "styled-components";
import SectionContainer from "../../../Layout/Container/SectionContainer";
import { MainDetail } from "../../../Layout/Typography/Detail";
import { fnList } from "../../../storage/fnList";

interface IProps {
  key: string;
  explanation: string;
  name: string;
  reversed: boolean;
}

const FnTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

function FuncCardExplainSection() {
  const explanationContents = fnList.map((item: IProps) => {
    return (
      <SectionContainer reversed={item.reversed} key={item.key}>
        <FnTextContainer>
          <div>
            <p style={{ fontSize: "36px", margin: "0 0 40px 0" }}>
              {item.name}
            </p>
          </div>
          <MainDetail>{item.explanation}</MainDetail>
        </FnTextContainer>
      </SectionContainer>
    );
  });
  return <>{explanationContents}</>;
}

export default FuncCardExplainSection;
