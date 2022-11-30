import React from "react";
import styled from "styled-components";

interface MProps {
  onMenuTabClick: (item: string, color: string) => void;
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
  gap: 14px;
`;

const MenuTab = styled.button`
  border: unset;
  background-color: unset;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 12px 12px 12px 20px;
  &:hover,
  &:active,
  &:focus {
    padding: 12px 4px 12px 28px;
    background-color: ${(props) => props.color};
    transition-duration: 0.2s;
    color: white;
  }
`;

function SpecificResultMenuBar({ onMenuTabClick }: MProps) {
  return (
    <MenuBarContainer>
      <MenuTab
        onClick={() => onMenuTabClick("languageBasic", "#6BCB77")}
        color="#6BCB77"
        // onBlur={() => onOutsideClick()}
      >
        언어와 기초
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("scienceBasic", "#4D96FF")}
        color="#4D96FF"
        // onBlur={() => onOutsideClick()}
      >
        기초과학
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("humanities", "#F0CA33")}
        color="#F0CA33"
        // onBlur={() => onOutsideClick()}
      >
        인문사회
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("major", "#FF6B6B")}
        color="#FF6B6B"
        // onBlur={() => onOutsideClick()}
      >
        전공
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("major", "#ffbd51")}
        color="#ffbd51"
        // onBlur={() => onOutsideClick()}
      >
        부전공
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("etcMandatory", "#9772FB")}
        color="#9772FB"
        // onBlur={() => onOutsideClick()}
      >
        연구 및 기타
      </MenuTab>
      <MenuTab
        onClick={() => onMenuTabClick("otherUncheckedClass", "#B0B8C1")}
        color="#B0B8C1"
        // onBlur={() => onOutsideClick()}
      >
        자유학점
      </MenuTab>
    </MenuBarContainer>
  );
}

export default SpecificResultMenuBar;
