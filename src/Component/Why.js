import React from 'react';
import world from '../Assets/world.png';

function Why() {
  return (
    <div className='w-full relative font-MuseoModerno md:px-40 py-8 lg:px-80 px-10 text-center bg-[#e0f7f9]'>
      <p className='text-[#048392] text-sm   '>QUALITY HOME SERVICES AT THE BEST</p>
      <h1 className='text-black font-bold text-3xl px-10 '>Why Choose Hubbly</h1>
      <div className='px-4  gap-6  lg:px-20   lg:gap-8 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
       <div>
       <ul className="text-justify  px-4  mb-4 md:px-10 lg:px-40 text-black text-md">
        <li>Enjoy Quality Home services at Affordable Prices</li>
            <li> Verified Hubblers</li>
            <li>Transparent & Instant Booking</li>
            <li>24/7 Support </li>
            <li>Always Available to assist You </li>
          </ul>
          </div>

       <div>
          <img className=" md:w-[400px] px-10 lg:px-20 my-4" src={world} alt="/" />
        </div>
    </div>
    </div>
  );
}


export default Why;
