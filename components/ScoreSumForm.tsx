import React from "react";
import { useState,useEffect } from "react";
import { Router, useRouter } from 'next/router';
import Link from "next/link";
const ScoreSumForm = () => {
  const router = useRouter();
  const message = () =>{
    let score = Number(router.query.num);
    if(score < 6 )
      return "ไม่มีอาการเสี่ยงเป็นภาวะซึมเศร้าหรือมีน้อยมาก"
    else{
      return "มีความเสี่ยงอยู่ในระดับน้อย ควรให้คำแนะนำหรือปรึกษาแพทย์"
    }
  }
  return (
    <div className="w-full  justify-center flex flex-col  p-5 bg-white  cursor-default font-['Itim']">
        <div>
          <h3 className="lg:text-4xl sm:text-2xl font-bold text-center mb-7 ">แบบทดสอบ 9Q</h3>
          <h4 className="lg:text-2xl sm:text-2xl font-bold text-center mb-7 "></h4>
        </div>
      <div className="container rounded-lg shadow-lg w-full relative bg-darkbg  lg:p-12  sm:mx-auto p-6  ">
        <form>
          <div>
            <h1 className="lg:text-2xl sm:text-2xl font-bold text-left mb-7 ">ผลทดสอบจากแบบทดสอบที่ท่านทำได้คือ </h1>
            <p>
              คุณ{message()}<br/>
            </p>
          </div>
          <br/>
            <div className="flex justify-center">
                  
                  <Link href="/information"><button className="rounded bg-white text-black px-12 py-4 mx-1" type="submit" value="Fetch" >เสร็จสิ้น</button></Link>
            </div>
        </form>
      </div>

    </div>
  );
};

export default ScoreSumForm;