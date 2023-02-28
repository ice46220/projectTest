import React from "react";
import Topbar from "../components/Topbar";
import ScoreSumForm2 from "../components/ScoreSumForm2";
import NavLayout from "../layouts/NavLayout";

const scoreSum8Q = () => {
  return (
    <NavLayout className="">
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Itim&family=Poppins:wght@200&family=Roboto:wght@100&display=swap" rel="stylesheet"/>
      </div>
     <div className=" bg-lightbg h-screen font-['Itim']">
      
        <ScoreSumForm2/>
        
      </div>
  </NavLayout>
  );
};

export default scoreSum8Q;