import React from "react";
import { useState,useEffect } from "react";


const TestForm = () => {
  const [convert, setConvert] = useState(true);
  const [allData,setAllData] =useState([{}]);
  const [answer1,setAnswer1] =useState(0);
  const [answer2,setAnswer2] =useState(0);
  const [answer3,setAnswer3] =useState(0);
  const [answer4,setAnswer4] =useState(0);
  const [answer5,setAnswer5] =useState(0);
  const [answer6,setAnswer6] =useState(0);
  const [answer7,setAnswer7] =useState(0);
  const [answer8,setAnswer8] =useState(0);
  const [answer9,setAnswer9] =useState(0);
  const url =`https://script.googleusercontent.com/macros/echo?user_content_key=HUpsAgoYA3yCxP13UOAk_1Qv2ICV8Mg49f1B3Z4swO5ITagNyvjevKDaRok9lQ6kAkZe0KuJqZCZsJ1W-hvd1PwNnSPmLu2Ym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAwvzESfjfjJtOA0fe94XWysBDamm84KJUOiXFvDW57QY8loQO0yqfVIdrXAtgs-_8UZDZ1anjVgEH9ikux9WG8aVN0i6HkeWA&lib=Mc-N59_DWmDBvu7pwVajzqpogFqLoYSAg` ;
  useEffect(() => {
   
  });
  
  const getContract = async () => {
    setConvert(!convert);
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setAllData(data.data)
    });
    
    
  }
  const delData = (a:any,b:any) => {
    console.log("a",typeof(a),a);
     console.log("b",typeof(b),b);
     switch(a) { 
      case 0: { 
        setAnswer1(b);
        break; 
      } 
      case 1: { 
        setAnswer2(b);
        break; 
      }
      case 2: { 
        setAnswer3(b);
        break; 
      }
      case 3: { 
        setAnswer4(b); 
        break; 
      }
      case 4: { 
        setAnswer5(b); 
        break; 
      }
      case 5: { 
        setAnswer6(b); 
        break; 
      }
      case 6: { 
        setAnswer7(b); 
        break; 
      }
      case 7: { 
        setAnswer8(b); 
        break; 
      }
      case 8: { 
        setAnswer9(b); 
        break; 
      }
      default: { 
        alert("กรุณาเลือกคำตอบ");
         break; 
      }
   } 
  
  }
  const getAllSumAnswer = () => { 
    let sum = answer1+answer2+answer3+answer4+answer5+answer6+answer7+answer8+answer9; 
    alert(sum);
  } 
  return (
    <div className="w-full  justify-center flex flex-col  p-5 bg-lightbg  cursor-default">
      <div className="container rounded-lg shadow-lg w-full relative bg-white  lg:p-12  sm:mx-auto p-6   ">
      <form>
      {convert ? (<><h3 className="lg:text-4xl sm:text-2xl font-bold text-center mb-7 ">แบบทดสอบ</h3>
        <div className="flex-row  lg:flex-row sm:flex-col mb-5 justify-around">
          <div className="  ">
            <p className="text-lg font-bold text-black py-2 lg:text-lg sm:text-sm text-center">ประเมินความเสี่ยงภาวะซึมเศร้า</p>
            
          </div>
          <div className="  ">
            <p className="text-lg font-bold text-black py-2 lg:text-lg sm:text-sm">โดยการประเมินแบบทดสอบจะด้วยหลักประเมิน 9Q ซึ่งเป็นแบบทดสอบเบื่องต้นเพื่อประเมิน ความเสี่ยงที่จะเป็นภาวะซึมเศร้า โดยหลังจากทำแบบประเมิน จะทำการแสดงผลประเมิน การทำแบบทดสอบและสามารถรู้ผลการทำแบบทดสอบได้ทันทีามเสี่ยงภาวะซึมเศร้า</p>
            
          </div>
          
        </div>
        <div className="flex justify-center">
          {/* <Link href="/testDocument">
          <button className="rounded bg-darkbg text-white px-12 py-4 ">ทำการทดสอบ</button>
          </Link> */}
           <button className="rounded bg-darkbg text-black px-12 py-4 "
           onClick={() => getContract()}
           >ทำการทดสอบ</button>
        </div>
        </>) : (<>
          <h3 className="lg:text-4xl sm:text-2xl font-bold text-center mb-7 ">แบบทดสอบ 9Q</h3>
        <div className="flex   lg:flex-row sm:flex-col mb-5 justify-around">
        <div className="container     sm:mx-auto py-4  ">
        {allData.map((contest, idx) => (
            <div key={idx} className="py-4">
              <h3 className=" text-3xl font-bold  text-center relative">ข้อที่ {idx+1}</h3>
              <h3 className=" text-3xl font-bold  text-center relative">{contest.QUESTIONNAME}</h3>
              <div className="grid grid-cols-2 grid-rows-2 m-9 text-center">
                <div className="m-9">
                  <div className="rounded bg-darkbg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300 text-white px-12 py-4 "
                   onClick={()=>delData(idx,contest.ASK1SCORE)}>{contest.ASK1}</div>
                </div>
                <div className="m-9">
                  <div className="rounded bg-darkbg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300 text-white px-12 py-4 " 
                  onClick={()=>delData(idx,contest.ASK2SCORE)}>{contest.ASK2}</div>
                </div>
                <div className="m-9">
                  <div className="rounded bg-darkbg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300 text-white px-12 py-4 "
                  onClick={()=>delData(idx,contest.ASK3SCORE)}>{contest.ASK3}</div>
                </div>
                <div className="m-9">
                  <div className="rounded bg-darkbg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-red-300 text-white px-12 py-4 "  
                  onClick={()=>delData(idx,contest.ASK4SCORE)}>{contest.ASK4}</div>
                </div>
              </div>
              <div className="  overflow-x-auto shadow-md rounded border-collapse border border-sky-500 relative ">
              </div>
            </div>
            ))} 
            <div className="flex justify-center">
          <button className="rounded bg-darkbg text-white px-12 py-4 " 
          onClick={()=>getAllSumAnswer()}>ส่งคำตอบ</button>
        </div>
        </div>
        </div>

          </>)} 
      </form>
      </div>

    </div>
  );
};

export default TestForm;