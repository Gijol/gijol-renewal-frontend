import React from "react";
import LoginButton from "../Button/LoginButton";
import SignUpButton from "../Button/SignUpButton";
import styled from "styled-components";

const AuthWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  gap: 4px;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

function AuthBox() {
  return (
    <AuthWrapper>
      <LoginButton />
      <SignUpButton />
    </AuthWrapper>
  );
}

export default AuthBox;
