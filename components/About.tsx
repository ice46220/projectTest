import React from "react";
import { useState,useEffect } from "react";
import Link from "next/link";

const ConTact = () =>{
  return (
    <div className="w-full  justify-center flex flex-col  p-5 bg-white  cursor-default font-['Itim']">
        <div>
          <h3 className="lg:text-4xl sm:text-2xl font-bold text-center mb-7 ">เกี่ยวกับ</h3>
          <h4 className="lg:text-2xl sm:text-2xl font-bold text-center mb-7 ">หน้าอธิบายเกี่ยวกับเว็บไซต์</h4>
        </div>
      <div className="container rounded-lg shadow-lg w-full relative bg-darkbg  lg:p-12  sm:mx-auto p-6  ">
        <form>
          <div>
            <h1 className="lg:text-2xl sm:text-2xl font-bold text-left mb-7 ">ความเป็นมาของเว็บไซต์</h1>
            <p>
              เว็บไซต์ "Let us help you" จัดทำขึ้นเพื่อให้ความรู้ของภาวะโรคซึมเศร้า โดยอ้างอิงข้อมูลจากที่ต่างๆ <br/>
              และยังมีแบบทดสอบเพื่อประเมินความเสี่ยง ว่าผู้ประเมินนั้นมีความเสี่ยงมากน้อยเพียงใด พร้อมสามารถให้ความช่วยเหลือแก่ผู้ต้องการความช่วยเหลือด้วยเช่นกัน<br/>
            </p>
          </div>
          <br/>
            <div className="flex justify-center">
                  <Link href="/test"><button className="rounded bg-white text-black px-12 py-4 mx-1" type="submit" value="Fetch" >เริ่มทำแบบทดสอบ</button></Link>
                  <Link href="/"><button className="rounded bg-white text-black px-12 py-4 mx-1" type="submit" value="Fetch" >อยากทราบความรู้พิ้นฐาน</button></Link>
            </div>
        </form>
      </div>

    </div>
  );
}


export default ConTact;