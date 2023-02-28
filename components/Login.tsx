import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const Login = () =>{
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [a, setA] = useState('');
  let user = "wa";
  let pass = "1234"
  function checkID(){
    console.log(id);
    console.log(password);
    if(id == user && password == pass ){
      setA('/information')
    }
    else{
      setA('/')
    }
  }
  return (
    <div className="w-full flex flex-col  p-5 bg-white  cursor-default font-['Itim']">
        <div>
          <h3 className="lg:text-4xl sm:text-2xl font-bold text-center mb-7 ">เข้าสู่ระบบ</h3>
          <h4 className="lg:text-2xl sm:text-2xl font-bold text-center mb-7 ">เข้าสู่ระบบเพื่อเข้าหน้าเว็บไซต์</h4>
        </div>
      <div className="container rounded-lg shadow-lg w-full relative bg-darkbg  lg:p-12  sm:mx-auto p-6 text-center ">
        <form>

          <label className="text-xl">ID :</label>
          <input type="Name" className="rounded bg-white text-black px-10 py-2 mx-4 "
            id="exampleFormControlInputName"  placeholder="ID ผู้ใช่" name="id" onChange={e => setID(e.target.value)} /><br/><br/>

            <label className="text-xl">Password: </label>
          <input type="password" className="rounded bg-white text-black px-10 py-2 mx-4"
            id="exampleFormControlInputPassword"  placeholder="รหัสผ่าน" name="password" onChange={e => setPassword(e.target.value)}/><br/><br/>

            <div className="flex justify-center">
          <Link  href={a}><button className="rounded bg-white text-black px-12 py-4 mx-5" onClick={ () =>checkID()} >Login</button></Link>
        </div>
        </form>

      </div>

    </div>
  );
}

export default Login;