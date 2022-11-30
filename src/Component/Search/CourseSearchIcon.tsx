import React from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const SearchButton = styled.button`
  position: absolute;
  border: unset;
  top: 50%;
  right: 20px;
  background-color: transparent;
  transform: translateY(-50%);
  cursor: pointer;
`;

function CourseSearchIcon() {
  return (
    <SearchButton>
      <BsSearch size="16px" color="#6b7684" />
    </SearchButton>
  );
}

export default CourseSearchIcon;
