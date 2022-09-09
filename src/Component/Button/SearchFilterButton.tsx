import React from "react";
import styled from "styled-components";

const SearchFilterButtonContainer = styled.button`
  height: fit-content;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

function SearchFilterButton() {
  return (
    <SearchFilterButtonContainer type="button">
      검색 필터
    </SearchFilterButtonContainer>
  );
}

export default SearchFilterButton;
