import React from 'react';
import supportive from '../Assets/supportive.svg';

function Supportive() {
  return (
    <div className='w-full relative text-justify font-MuseoModerno md:px-40 py-8 lg:px-60 px-20  bg-[#e0f7f9] '>
     
      <div className='  gap-6  lg:gap-8 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>

        <div className="">
           <p className='text-[#048392] text-sm font-Raleway font-bold '>SUPPORT</p>
      <h1 className='text-black font-bold text-3xl '>Dedicated Support Team</h1>
  <p className="py-4 md:py-4  mb-4 text-[#494D4D] font-Raleway font-medium text-md md:text-lg  lg:text-xl xl:text-2xl">
    Our friendly support team is available 24/7 to assist you with any questions or concerns you may have. Your satisfaction is our top priority.
  </p>
</div>
 <div>
          <img className=" md:w-[400px]  my-4" src={supportive} alt="/" />
        </div>

      </div>
    </div>
  );
}

export default Supportive;
