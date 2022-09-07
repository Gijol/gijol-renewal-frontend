import React from "react";

function MainDetail(props: any) {
  return (
    <p
      style={{
        fontSize: "20px",
        color: "gray",
        whiteSpace: "pre-wrap",
        margin: "0",
      }}
    >
      {props.children}
    </p>
  );
}

function SubDetail(props: any) {
  return <p style={{ fontSize: "0.75rem", color: "gray" }}>{props.children}</p>;
}

export { MainDetail, SubDetail };
