import React from "react";
import Topbar from "../components/Topbar";
import TestForm from "../components/TestForm";
import NavLayout from "../layouts/NavLayout";

const test = () => {
  return (
    <NavLayout className="">
    
     <div className=" bg-lightbg h-screen ">
        <TestForm/>
        
      </div>
  </NavLayout>
  );
};

export default test;