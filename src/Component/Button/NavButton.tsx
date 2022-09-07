import React from "react";
import { useNavigate } from "react-router-dom";

interface BProps {
  text: string;
  destination: string;
}

function NavButton({ text, destination }: BProps) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/${destination}`);
  };
  return (
    <button
      type="button"
      onClick={onClickHandler}
      style={{
        backgroundColor: "#1da447",
        color: "white",
        border: "none",
        padding: "16px 24px",
        fontSize: "1rem",
        borderRadius: "8px",
        width: "180px",
      }}
    >
      {text}
    </button>
  );
}

export default NavButton;
