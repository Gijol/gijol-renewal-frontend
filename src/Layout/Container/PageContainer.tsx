import React from "react";
import NavBar from "../../Component/Navigator/NavBar";
import Footer from "../../Component/Footer/Footer";

function PageContainer(props: any) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}

export default PageContainer;
