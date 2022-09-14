import React from "react";
import styled from "styled-components";

interface MProps {
  onMenuTabClick: (item: string) => void;
  onOutsideClick: () => void;
}

const MenuBarContainer = styled.div`
  box-sizing: border-box;
  width: 130px;
  height: 380px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const MenuTab = styled.button`
  border: unset;
  border-radius: 6px 0 0 6px;
  background-color: unset;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 12px 12px 12px 20px;
  &:hover,
  &:active,
  &:focus {
    padding: 12px 4px 12px 28px;
    background-color: palevioletred;
    transition-duration: 0.2s;
    color: white;
  }
`;

function SpecificResultMenuBar({ onMenuTabClick, onOutsideClick }: MProps) {
  return (
    <MenuBarContainer>
      <MenuTab
        onClick={() => onMenuTabClick("LanguageAndBasics")}
        // onBlur={() => onOutsideClick()}
      >
        언어와 기초
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("BasicScience")}
        // onBlur={() => onOutsideClick()}
      >
        기초과학
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("HumanityAndSociety")}
        // onBlur={() => onOutsideClick()}
      >
        인문사회
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("Major")}
        // onBlur={() => onOutsideClick()}
      >
        전공
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("ResearchAndExtra")}
        // onBlur={() => onOutsideClick()}
      >
        연구 및 기타
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("ElseCredits")}
        // onBlur={() => onOutsideClick()}
      >
        자유학점
      </MenuTab>
    </MenuBarContainer>
  );
}

export default SpecificResultMenuBar;
