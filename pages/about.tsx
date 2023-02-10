import React from "react";
import Topbar from "../components/Topbar";
import TradeForm from "../components/TestForm";
import NavLayout from "../layouts/NavLayout";

const test = () => {
  return (
    <NavLayout className="">
    
     <div className=" bg-while h-screen ">
        <TradeForm/>
        
      </div>
  </NavLayout>
  );
};

export default test;