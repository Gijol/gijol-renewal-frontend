import React from "react";
import styled from "styled-components";

const ListCardWrapper = styled.div`
  width: 500px;
  height: calc(100% - 20px);
  padding: 10px;
  border: 1px solid black;
`;

function CreditListCardResult() {
  return (
    <ListCardWrapper>
      수강한 강의 리스트수강한 강의 리스트수강한 강의 리스트수강한 강의
      리스트수강한 강의 리스트수강한 강의 리스트수강한 강의 리스트수강한 강의
      리스트수강한 강의 리스트수강한 강의 리스트수강한 강의 리스트수강한 강의
      리스트수강한 강의 리스트수강한 강의 리스트수강한 강의 리스트수강한 강의
      리스트
    </ListCardWrapper>
  );
}

export default CreditListCardResult;
