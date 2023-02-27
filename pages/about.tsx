import React from "react";
import Topbar from "../components/Topbar";
import TradeForm from "../components/TestForm";
import NavLayout from "../layouts/NavLayout";
import About from "../components/About";

const test = () => {
  return (
    <NavLayout className="font-['Itim']">
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Itim&family=Poppins:wght@200&family=Roboto:wght@100&display=swap" rel="stylesheet"/>
      </div>
     <div className=" bg-while h-screen ">
        <About/>
        
      </div>
  </NavLayout>
  );
};

export default test;