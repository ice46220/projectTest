import React from "react";
import { useState,useEffect } from "react";
import { Router, useRouter } from 'next/router';
import Link from "next/link";
const ScoreSumForm2 = () => {
  const router = useRouter();
  const message = () =>{
    let score1 = Number(router.query.num9Q);
    let score2 = Number(router.query.num8Q);
  }
  return (
    <div className="w-full  justify-center flex flex-col  p-5 bg-white  cursor-default font-['Itim']">
        <div>
          <h3 className="lg:text-4xl sm:text-2xl font-bold text-center mb-7 ">แบบทดสอบ</h3>
          <h4 className="lg:text-2xl sm:text-2xl font-bold text-center mb-7 "></h4>
        </div>
      <div className="container rounded-lg shadow-lg w-full relative bg-darkbg  lg:p-12  sm:mx-auto p-6  ">
        <form>
          <div>
            <h1 className="lg:text-2xl sm:text-2xl font-bold text-left mb-7 ">จากการทำแบบทดสอบ คุณอยู่ในความเสี่ยงภาวะซึมเศร้าระดับกลาง ควรไปพบแพทย์ทันที เพื่อ รับคำแนะนำจากแพทย์ </h1>
            <p><br/>
            </p>
          </div>
          <br/>
            <div className="flex justify-center">
                  
                  <Link href="/information"><button className="rounded bg-white text-black px-12 py-4 mx-1" type="submit" value="Fetch" >เสร็จสิ้น</button></Link>
                  <Link href="/infoform"><button className="rounded bg-white text-black px-12 py-4 mx-1" type="submit" value="Fetch" >กรอกแบบฟอร์มขอความช่วยเหลือ</button></Link>
            </div>
        </form>
      </div>

    </div>
  );
};

export default ScoreSumForm2;