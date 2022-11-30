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
  imgLink: string;
  alt: string;
}

const FnTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const ImgContainer = styled.img`
  box-sizing: border-box;
  width: 400px;
  height: 400px;
`;

function FuncCardExplainSection() {
  const explanationContents = fnList.map((item: IProps) => {
    return (
      <SectionContainer key={item.key}>
        <FnTextContainer>
          <div>
            <p style={{ fontSize: "28px", margin: "0 0 28px 0" }}>
              {item.name}
            </p>
          </div>
          <MainDetail>{item.explanation}</MainDetail>
        </FnTextContainer>
        <ImgContainer
          src={item.imgLink}
          alt={item.alt}
          style={{ objectFit: "cover" }}
        />
      </SectionContainer>
    );
  });
  return <>{explanationContents}</>;
}

export default FuncCardExplainSection;
