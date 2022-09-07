import React from "react";

function SectionContainer(props: any) {
  return (
    <div
      style={{
        padding: "40px 0",
        margin: "0 80px",
        backgroundColor: "white",
        height: "400px",
        display: "flex",
        flexDirection: `${props.reverse ? "row-reverse" : "row"}`,
      }}
    >
      {props.children}
    </div>
  );
}

export default SectionContainer;
