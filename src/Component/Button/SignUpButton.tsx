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
  color: #6b7684;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f2f4f6;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function SignUpButton() {
  return <DefaultLinkStyles to="/">회원가입</DefaultLinkStyles>;
}

export default SignUpButton;
