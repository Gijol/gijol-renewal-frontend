import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface LProps {
  bgColor: string;
  color: string;
}

export const DefaultLinkStyles = styled(Link)`
  height: fit-content;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: gray;
  &:hover {
    background-color: #f2f4f6;
  }
`;

function SignUpButton() {
  return <DefaultLinkStyles to="/">회원가입</DefaultLinkStyles>;
}

export default SignUpButton;
