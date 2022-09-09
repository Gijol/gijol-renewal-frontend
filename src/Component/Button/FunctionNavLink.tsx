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

export const FunctionNavLinkContainer = styled(Link)`
  width: 180px;
  height: fit-content;
  padding: 16px 24px;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  background-color: #1da447;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`;

function FunctionNavLink({ text, destination }: BProps) {
  return (
    <FunctionNavLinkContainer to={destination}>{text}</FunctionNavLinkContainer>
  );
}

export default FunctionNavLink;
