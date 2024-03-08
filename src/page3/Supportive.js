import React from 'react';
import supportive from '../Assets/supportive.svg';

function Supportive() {
  return (
    <div className='w-full relative font-MuseoModerno md:px-40 py-8 lg:px-80 px-10 text-center bg-[#e0f7f9] '>
     
      <div className='px-4  gap-6  lg:px-20   lg:gap-8 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>

        <div className="text-justify">
           <p className='text-[#048392] text-sm px-4 lg:px-20 '>SUPPORT</p>
      <h1 className='text-black font-bold text-3xl px-4  lg:px-20'>Dedicated Support Team</h1>
  <p className="py-4 md:py-4 lg:px-20 px-4 md:px-4 mb-4">
    Our friendly support team is available 24/7 to assist you with any questions or concerns you may have. Your satisfaction is our top priority.
  </p>
</div>
 <div>
          <img className=" md:w-[400px] px-10 lg:px-10 my-4" src={supportive} alt="/" />
        </div>

      </div>
    </div>
  );
}

export default Supportive;
