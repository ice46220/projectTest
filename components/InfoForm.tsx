


const infoform = () =>{
  return (
    <div className="w-full  justify-center flex flex-col  p-5 bg-white  cursor-default font-['Itim']">
        <div>
          <h3 className="lg:text-4xl sm:text-2xl font-bold text-center mb-7 ">แบบฟอร์มขอความช่วยเหลือ</h3>
          <h4 className="lg:text-2xl sm:text-2xl font-bold text-center mb-7 ">กรอกข้อมูลของท่านเพื่อให้เราติดต่อช่วยเหลือ</h4>
        </div>
      <div className="container rounded-lg shadow-lg w-full relative bg-darkbg  lg:p-12  sm:mx-auto p-6 text-center ">
        <form>

          <label className="text-xl">ชื่อ : </label>
          <input type="Name" className="rounded bg-white text-black px-10 py-2 mx-4 "
            id="exampleFormControlInputName"  placeholder="ชื่้อ" />

            <label className="text-xl">นามสกุล: </label>
          <input type="LName" className="rounded bg-white text-black px-10 py-2 mx-4"
            id="exampleFormControlInputLName"  placeholder="นามสกุล" /><br/><br/>

          <label className="text-xl">เบอร์ติดต่อ : </label>
          <input type="phone number" className="rounded bg-white text-black px-10 py-2 mx-4 "
            id="exampleFormControlInputNumber"  placeholder="เบอร์ติดต่อ" />
          <label className="text-xl">E-mail : </label>

          <input type="email" className="rounded bg-white text-black px-10 py-2 mx-4 "
            id="exampleFormControlInputNumber"  placeholder="เมล์ติดต่อ" /><br/><br/>

            <label className="text-xl">ที่อยู่ปัจจุบัน: </label>
          <input type="address" className="rounded bg-white text-black px-10 py-2 mx-3"
            id="exampleFormControlInputaddress"  placeholder="ที่อยู่ปัจจุบัน" />

            <label className="text-xl">ถนน: </label>
          <input type="address" className="rounded bg-white text-black px-10 py-2 mx-3"
            id="exampleFormControlInputaddress"  placeholder="ถนน" /><br/><br/>

            <label className="text-xl">รหัสไปรษณีย์: </label>
          <input type="address" className="rounded bg-white text-black px-10 py-2 mx-3"
            id="exampleFormControlInputaddress"  placeholder="รหัสไปรษณีย์" />

            <label className="text-xl">อำเภอ/เขต: </label>
          <input type="address" className="rounded bg-white text-black px-10 py-2 mx-3"
            id="exampleFormControlInputaddress"  placeholder="อำเภอ/เขต" /><br/><br/>

            <label className="text-xl">จังหวัด</label>
          <input type="address" className="rounded bg-white text-black px-10 py-2 mx-3"
            id="exampleFormControlInputaddress"  placeholder="จังหวัด" /><br/><br/>

            <div className="flex justify-center">
          <button className="rounded bg-white text-black px-12 py-4 mx-5" type="submit" value="Fetch" >ส่งแบบฟอร์ม</button>
        </div>
        </form>

      </div>

    </div>
  );
}

export default infoform;