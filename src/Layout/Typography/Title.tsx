import React from "react";

function MainTitle(props: any) {
  return (
    <div
      style={{
        fontSize: "3rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0",
        padding: "3rem 0",
      }}
    >
      {props.children}
    </div>
  );
}

function SubTitle(props: any) {
  return (
    <div
      style={{
        fontSize: "2rem",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
        padding: "2.25rem 0",
        textAlign: "center",
      }}
    >
      {props.children}
    </div>
  );
}

export { MainTitle, SubTitle };
