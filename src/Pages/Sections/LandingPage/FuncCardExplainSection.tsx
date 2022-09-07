import React from "react";
import SectionContainer from "../../../Layout/Container/SectionContainer";
import { MainDetail } from "../../../Layout/Typography/Detail";

function FuncCardExplainSection() {
  return (
    <>
      <SectionContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div>
            <p style={{ fontSize: "36px", margin: "0 0 40px 0" }}>졸업요건</p>
          </div>
          <MainDetail>
            Gijol에서 졸업요건 현황을 분석하여 충족을 위한 강의를 추천드립니다.
          </MainDetail>
        </div>
      </SectionContainer>
      <SectionContainer reverse="true">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div>
            <p style={{ fontSize: "36px", margin: "0 0 40px 0" }}>강의검색</p>
          </div>
          <MainDetail>
            강의에 대한 다양하고 체계적인 정보들을 보다 간편하게 찾을 수
            있습니다.
          </MainDetail>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            height: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div>
            <p style={{ fontSize: "36px", margin: "0 0 40px 0" }}>강의평가</p>
          </div>
          <MainDetail>
            이수한 강의에 대한 평가를 공유하여 강의에 대한 유용한 정보들을 얻을
            수 있습니다.
          </MainDetail>
        </div>
      </SectionContainer>
    </>
  );
}

export default FuncCardExplainSection;
