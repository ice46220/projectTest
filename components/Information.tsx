import React from "react";
import Link from "next/link";

const Information = () =>{
  return (
    <div className="w-full  justify-center flex flex-col  p-5 bg-white  cursor-default ">
      <div>
        <h3 className="lg:text-4xl sm:text-2xl font-bold text-center mb-7 ">ยินดีต้อนรับ</h3>
        <h4 className="lg:text-2xl sm:text-2xl font-bold text-center mb-7 ">
          เว็บไซต์นี้ เป็นเว็บไซต์ที่ให้ความรู้และข้อมูลที่เกี่ยวกับโรคซึมเศร้า  พร้อมทั้งมีแบบทดสอบเพื่อประเมินว่า <br/>  
          ผู้ทดสอบมีความเสี่ยงหรือไม่ 
        </h4>
      </div>
      <div className="container rounded-lg shadow-lg w-full relative bg-darkbg  lg:p-12  sm:mx-auto p-6 mb-2 ">
        <form>
          <div>
            <h2 className="lg:text-2xl sm:text-2xl font-bold text-left mb-7 ">"โรคซึมเศร้า"คืออะไร?</h2>
            <p>
              Depression หรือในภาษาไทยคือ ภาวะซึมเศร้า หรือ โรคซึมเศร้า  เป็นอาการผิดปกติของอารมณ์ ซึ่งส่งผลกระทบต่อผู้ป่วยทั้งด้านความคิด <br/>
              ความรู้สึก และพฤติกรรม โดยเป็นภาวะอารมณ์เศร้าหมองที่เกิดขึ้นอย่างต่อเนื่อง ความรู้สึกเฉยชา ไม่สนใจสิ่งต่าง ๆ ส่งผลต่อความสามารถ <br/>
              ในการทำงานในแต่ละวัน ซึ่งก่อให้เกิดอาการทางจิตได้มากมาย 
            </p>
          </div>
        </form>
      </div>

      <div className="container rounded-lg shadow-lg w-full relative bg-darkbg  lg:p-12  sm:mx-auto p-6  mb-2">
        <form>
          <h2 className="lg:text-2xl sm:text-2xl font-bold text-right mb-7 ">ประเภทของโรคซึมเศร้า</h2>
          <h3 className="lg:text-1xl sm:text-2xl font-bold">ในปัจจุบันที่เราได้พบโรคซึมเศร้านั้นจะเจออยู่โดยปกติคือ 6 ประเภคได้แก่</h3>

            <p className="font-bold">โรคซึมเศร้าแบบเมเจอร์ ดีเพรสชัน (Major Depression)</p>
              <p>
                เป็นโรคซึมเศร้าประเภทหนึ่งที่จะมีอาการต่างๆ ของโรคเกิดขึ้นบ่อยครั้งใน 1 วัน และติดต่อกันหลายวัน อย่างน้อย 2 สัปดาห์ขึ้นไป <br/>
                ผู้ป่วยจะมีอาการซึมเศร้า อยากร้องไห้ หรือหงุดหงิดง่าย ส่งผลกระทบเรื่องการกินอาหาร การนอน และปฏิสัมพันธ์กับผู้อื่น
              </p>

            <p className="font-bold text-right">โรคซึมเศร้าแบบดิสทีเมีย (Dysthymia Depression)</p>
              <p className="text-right">
                สำหรับผู้ป่วยโรคซึมเศร้าแบบดิสทีเมีย จะมีอาการซึมเศร้าแบบเรื้อรัง เป็นๆ หายๆ ติดต่อกันประมาณ 2-5 ปี มีอาการเบื่อ เศร้า <br/>
                แต่จะไม่รุนแรงเท่าแบบเมเจอร์ ดีเพรสชัน และผู้ป่วยยังสามารถทำกิจกรรมอื่นๆ ในชีวิตได้
              </p>

            <p className="font-bold">โรคซึมเศร้าแบบไบโพลาร์ ดิสออร์เดอร์ (Bipolar disorder)</p>
              <p>
                ผู้ป่วยที่เป็นโรคซึมเศร้าชนิดนี้ จะมีอารมณ์เศร้า เบื่อหน่ายชีวิต (ระยะซึมเศร้า) สลับกับมีอาการคึกคัก และหงุดหงิด (ระยะแมเนีย) <br/> 
                เรียกอีกอย่างว่าโรคอารมณ์สองขั้วหรือ โรคไบโพลาร์ (Bipolar Disorder)
              </p>

            <p className="font-bold text-right">โรคซึมเศร้าหลังคลอด (Postnatal Depression)</p>
              <p className="text-right">
                โรคซึมเศร้าหลังคลอด หรือ Baby Blues มักเกิดขึ้นกับคุณแม่หลังคลอด ในช่วง 6 สัปดาห์แรกหรือจนกว่าลูกจะเริ่มโต และมีโอกาสเกิดขึ้นได้กับ <br/>
                คุณแม่ที่คนในครอบครัวมีประวัติป่วยทางจิตมากกว่าคุณแม่กลุ่มอื่น เกิดจากกิจวัตรประจำวันและสภาพแวดล้อมของคุณแม่ที่เปลี่ยนไป <br/>
                รวมถึงการเปลี่ยนแปลงของระดับฮอร์โมนก็เป็นอีกหนึ่งปัจจัยที่ทำให้เกิดโรค
              </p>

            <p className="font-bold">โรคซึมเศร้าในผู้สูงอายุ (Late-Life Depression)</p>
              <p>
                เป็นโรคซึมเศร้าที่เกิดกับผู้สูงวัยที่มีอายุประมาณ 60 ปีขึ้นไป พบได้ 10-20% และมักเกิดในผู้หญิงมากกว่าผู้ชาย <br/>
                อาการของโรคมีตั้งแต่ไม่รุนแรงจนถึงขั้นมีอาการจิตหลอนและฆ่าตัวตายได้ เกิดจากสารสื่อประสาท สภาพแวดล้อม และเหตุการณ์ที่กระทบจิตใจ
              </p>

            <p className="font-bold text-right">โรคซึมเศร้าตามฤดูกาล ( Seasonal Affective Disorder: SAD)</p>
              <p className="text-right">
               ในประเทศที่มีฤดูหนาวทำให้ระยะเวลาของกลางวันสั้นกว่ากลางคืน เป็นสาเหตุหนึ่งให้เกิดความเศร้า ความเบื่อหน่าย สิ้นหวัง <br/>
                และนำไปสู่การเป็นโรคซึมเศร้าได้ แต่เมื่อฤดูใบไม้ผลิและฤดูร้อนมาถึงอาการของผู้ป่วยก็จะค่อยๆ ดีขึ้น
              </p>

        </form>
      </div>

      <div className="container rounded-lg shadow-lg w-full relative bg-darkbg  lg:p-12  sm:mx-auto p-6 mb-2 ">
        <form>
          <h2 className="lg:text-2xl sm:text-2xl font-bold text-left mb-7 ">สาเหตุของโรคซึมเศร้า</h2>
          <h3 className="lg:text-2xl sm:text-2xl font-bold text-left mb-7">
            สาเหตุที่ทำให้เกิดโรคซึมเศร้า ไม่สามารถระบุได้ชัดเจนว่าเกิดจากสาเหตุใดอย่างชัดเจนใน <br/>
            ผู้ป่วยแต่ละราย แต่จะพบเจอจากสาเหตุหลักได้จากต่อไปนี้
          </h3>

          <p className="text-right">
            <a className="font-bold text-right" >สารเคมีในสมอง :</a> โรคซึมเศร้าเกิดจากการขาดสมดุลของสารเคมีในสมอง ซึ่งประกอบด้วย 3 ชนิด <br/>
            คือ ซีโรโทนิน (Serotonin) โดพามีน (Dopamine) และนอร์เอพิเนฟริน (Norepinephrine)
          </p>

          <p>
            <a className="font-bold">กรรมพันธุ์ :</a> โรคซึมเศร้าสามารถเกิดจากการถ่ายทอดลักษณะทางพันธุกรรม หากครอบครัวไหนที่มีผู้ป่วยเป็นโรคซึมเศร้า <br/>
            คนในครอบครัวก็มีโอกาสเป็นได้เช่นกัน เช่น ฝาแฝดที่คนหนึ่งเป็นโรคซึมเศร้า อีกคนจะมีโอกาสเป็นถึง 60 - 80% หรือหากพ่อแม่พี่น้องแท้ๆ เป็น <br/>
            เราก็มีโอกาสเป็นได้ 20% แต่ยังไม่มีการยืนยันว่า โรคซึมเศร้าเกิดจากยีนส่วนไหนที่ส่งผลให้เกิดโรค
          </p>

          <p className="text-right">
            <a className="font-bold text-right" >นิสัยส่วนตัว :</a>  ผู้ที่มีความไม่มั่นใจหรือคิดว่าตัวเองไม่มีคุณค่า (Low Self-esteem) <br/>
            รวมถึงมองโลกในแง่ลบ คิดในแง่ร้าย มีโอกาสสูงที่จะเป็นโรคซึมเศร้า
          </p>

          <p>
            <a className="font-bold">สภาพแวดล้อมหรือสถานการณ ์:</a>
            คนที่เคยเจอเหตุการณ์การเปลี่ยนแปลงต่างๆ ไม่ว่าจะเป็น การหย่าร้าง การแยกจากพ่อแม่ตั้งแต่เด็ก <br/>
            การถูกทำร้าย หรือการตกงาน เหตุการณ์ที่สะเทือนทางด้านจิตใจ รวมถึงแรงกดดันอื่นๆ มีแนวโน้มเป็นโรคซึมเศร้า
          </p>
        </form>
      </div>
      
      <div className="container rounded-lg shadow-lg w-full relative bg-darkbg  lg:p-12  sm:mx-auto p-6  ">
        <form>
          <div>
            <h2 className="lg:text-2xl sm:text-2xl font-bold text-right mb-7 ">อาการของโรคซึมเศร้า</h2>
            <p className="font-bold">
              ผู้ที่เป็นโรคซึมเศร้ามีอาการที่บ่งบอกหลายอย่าง ซึ่งรวมถึงอาการที่คล้ายกับโรคจิตเวชอื่นๆ บางอาการก็เกิดขึ้นเพียงระยะเวลาสั้นๆ เป็นภาวะซึมเศร้าที่สามารถหายได้เอง <br/> 
              คนเป็นโรคซึมเศร้าจะมีอาการอย่างไร และเงื่อนไขของอาการต่างๆ มีอะไรบ้าง ซึ่งผู้ป่วยจะมีอาการดังต่อไปนี้เกิดขึ้นอย่างน้อย 5 ข้อ
            </p>
              <p>
                - รู้สึกเศร้า อยากร้องไห้ เคว้งคว้าง หรือไร้ความหวัง อาการเกิดขึ้นบ่อยๆ ใน 1 วัน <br/>
                - รู้สึกหงุดหงิด ไม่พอใจ หรือโกรธกับเรื่องเล็กๆ น้อยๆ <br/>
                - รู้สึกขาดความสนใจ ไม่อยากทำหรือไม่สนุกกับกิจกรรมที่ชอบ หรือกิจวัตรปกติที่เคยทำ <br/>
                - มีอาการเบื่ออาหาร หรือต้องการทานอาหารมากขึ้น ส่งผลให้น้ำหนักเพิ่มและลดลงจากปกติ <br/>
                - รู้สึกนอนหลับยาก นอนน้อย หรืออยากนอนมากกว่าปกติ <br/>
                - รู้สึกร้อนรน วิตกกังวล และกระสับกระส่าย <br/>
                - รู้สึกเหนื่อยล้า หรือไม่มีพลังทำกิจกรรมต่างๆ ในชีวิตประจำวัน <br/>
                - รู้สึกไร้ค่าและรู้สึกผิดกับตัวเองหรือสิ่งที่ทำ ทั้งๆ ที่ก่อนหน้านี้ไม่เคยรู้สึกแบบนี้มาก่อน <br/>
                - ความสามารถในการจดจ่อ การคิด การตัดสินใจ และความจำลดลง <br/>
                - คิดอยากทำร้ายร่างกายตัวเอง หรืออาจรุนแรงถึงขั้นคิดฆ่าตัวเอง 
            </p>
            <p className="font-bold">
              ซึ่งอาการเหล่านี้จะแสดงให้เห็นได้อย่างชัดเจน และปรากฏในชีวิตประจำวัน ส่งผลกระทบต่อการทำกิจกรรม การเรียน <br/>
              การทำงาน และการเข้าสังคมหรือความสัมพันธ์กับผู้อื่น รวมถึงรู้สึกผิดหวัง เศร้า หรือไม่มีความสุขโดยไม่ทราบสาเหตุ
            </p>
          </div>
          <div>
               <h4 className="lg:text-2xl sm:text-2xl font-bold text-center mb-7 ">อยากทราบว่ามีความเสี่ยงมั้ย หรือให้เราช่วยเหลือท่าน</h4>
                <div className="flex justify-center">
                  <Link href="/test"><button className="rounded bg-white text-black px-12 py-4 mx-1" type="submit" value="Fetch" >ทำแบบทดสอบ</button></Link>
                  <Link href="/infoform"><button className="rounded bg-white text-black px-12 py-4 mx-1" type="submit" value="Fetch" >กรอกแบบฟอร์มขอความช่วยเหลือ</button></Link>
                </div>  
            </div>
        </form>
      </div>

    </div>
  );
}


export default Information;