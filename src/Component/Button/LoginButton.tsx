import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link
      to="/"
      style={{
        backgroundColor: "#f2f4f6",
        border: "none",
        padding: "10px 16px",
        borderRadius: "6px",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "14px",
        color: "black",
      }}
    >
      로그인
    </Link>
  );
}

export default LoginButton;
