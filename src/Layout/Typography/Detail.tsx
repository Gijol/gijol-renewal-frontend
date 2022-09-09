import React from "react";

function MainDetail(props: any) {
  return (
    <div
      style={{
        fontSize: "20px",
        color: "gray",
        whiteSpace: "pre-wrap",
        margin: "0",
      }}
    >
      {props.children}
    </div>
  );
}

function SubDetail(props: any) {
  return (
    <div style={{ fontSize: "0.75rem", color: "gray" }}>{props.children}</div>
  );
}

export { MainDetail, SubDetail };
