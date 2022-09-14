import React from "react";
import styled from "styled-components";

const SearchFilterButtonContainer = styled.button`
  height: fit-content;
  padding: 14px 20px;
  border: unset;
  border-radius: 6px;
  //border: 1px solid #b0b8c1;
  background-color: #333d4b;
  color: white;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function SearchFilterButton() {
  return (
    <SearchFilterButtonContainer type="button">
      검색 필터
    </SearchFilterButtonContainer>
  );
}

export default SearchFilterButton;
