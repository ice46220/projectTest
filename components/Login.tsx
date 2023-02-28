


const Login = () =>{
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
            id="exampleFormControlInputName"  placeholder="ID ผู้ใช่" /><br/><br/>

            <label className="text-xl">Password: </label>
          <input type="password" className="rounded bg-white text-black px-10 py-2 mx-4"
            id="exampleFormControlInputPassword"  placeholder="รหัสผ่าน" /><br/><br/>

            <div className="flex justify-center">
          <button className="rounded bg-white text-black px-12 py-4 mx-5" type="submit" value="Fetch" >Login</button>
        </div>
        </form>

      </div>

    </div>
  );
}

export default Login;