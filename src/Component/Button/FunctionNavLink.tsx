import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface BProps {
  text: string;
  destination: string;
}

interface LProps {
  bgColor: string;
  color: string;
}

const FunctionNavLinkContainer = styled(Link)`
  width: 180px;
  height: fit-content;
  padding: 16px 24px;
  border: 1px solid #1da447;
  border-radius: 6px;
  text-decoration: none;
  background-color: white;
  color: #1da447;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #1da447;
    color: white;
    box-shadow: 0 12px 20px lightgrey;
  }
`;

function FunctionNavLink({ text, destination }: BProps) {
  return (
    <FunctionNavLinkContainer to={destination}>{text}</FunctionNavLinkContainer>
  );
}

export default FunctionNavLink;
