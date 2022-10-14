import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  color: #6b7684;
  &:hover {
    background-color: #f2f4f6;
  }
  @media only screen and (max-width: 768px) {
    height: 48px;
  }
`;

function LoginButton() {
  return <DefaultLinkStyles to="/">로그인</DefaultLinkStyles>;
}

export default LoginButton;
