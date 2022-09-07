import React from "react";
import NavMenu from "./NavMenu";
import AuthBox from "./AuthBox";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: "1",
        position: "fixed",
        backgroundColor: "white",
        height: "60px",
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "1.75rem",
          textDecoration: "none",
          color: "black",
          marginLeft: "24px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Gijol
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          gap: "48px",
        }}
      >
        <NavMenu />
        <AuthBox />
      </div>
    </div>
  );
}

export default NavBar;
