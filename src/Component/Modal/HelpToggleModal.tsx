
import { AiOutlineQuestionCircle } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";

const HelpInfo = styled.div`
  box-sizing: border-box;
  border-radius: 6px;
  background-color: #f2f4f6;
  padding: 10px;
  position: absolute;
  z-index: 200;
  font-size: 12px;
  word-break: keep-all;
  top: 48px;
  left: -48px;
  width: 280px;
`;

const InputInfo = styled.div`
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

function HelpToggleModal() {
  const [hoverState, setHoverState] = useState(false);
  return (
    <>
      <InputInfo
        onMouseEnter={() => {
          setHoverState(() => true);
        }}
        onFocus={() => {
          setHoverState(() => true);
        }}
        onMouseLeave={() => setHoverState(() => false)}
      >
        <AiOutlineQuestionCircle size={28} />
        {!hoverState ? (
          <></>
        ) : (
          <HelpInfo>
            만약 기초교육학부 학생이시면, 희망 전공을 골라주세요
          </HelpInfo>
        )}
      </InputInfo>
    </>
  );
}

export default HelpToggleModal;
