import React from "react";
import GradProvider from "../../Provider/GradProvider";
import { Outlet } from "react-router-dom";

function GradContextLayout() {
  return (
    <GradProvider>
      <Outlet />
    </GradProvider>
  );
}

export default GradContextLayout;
