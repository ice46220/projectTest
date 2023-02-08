import React from "react";
import Topbar from "../components/Topbar";
import TradeForm from "../components/TradeForm";
import NavLayout from "../layouts/NavLayout";

const test = () => {
  return (
    <NavLayout className="">
    
     <div className=" bg-lightbg h-screen ">
        <TradeForm/>
        
      </div>
  </NavLayout>
  );
};

export default test;