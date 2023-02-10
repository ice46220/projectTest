import React from "react";
import ConTact from "../components/ConTact";
import Topbar from "../components/Topbar";
import TradeForm from "../components/TestForm";
import NavLayout from "../layouts/NavLayout";

const test = () => {
  return (
    <NavLayout className="">
    
     <div className=" bg-lightbg h-screen ">
      <ConTact/>
      </div>
  </NavLayout>
  );
};

export default test;