import React from "react";
import LoginButton from "../Button/LoginButton";
import SignUpButton from "../Button/SignUpButton";

function AuthBox() {
  return (
    <div
      style={{
        width: "fit-content",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "24px",
        gap: "0.75rem",
      }}
    >
      <LoginButton />
      <SignUpButton />
    </div>
  );
}

export default AuthBox;
