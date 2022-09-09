import styled from "styled-components";
import { SubTitle } from "../Typography/Title";
import { MainDetail } from "../Typography/Detail";

const FnExpContainer = styled.div`
  padding: 120px 0 0 0;
  margin: 0 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FnExpDetailContainer = styled(SubTitle)`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function FnExplanation(props: any) {
  return (
    <FnExpContainer>
      <SubTitle>{props.children}</SubTitle>
    </FnExpContainer>
  );
}

function FnExplanationDetail(props: any) {
  return (
    <FnExpDetailContainer>
      <MainDetail>{props.children}</MainDetail>
    </FnExpDetailContainer>
  );
}

export { FnExplanation, FnExplanationDetail };
