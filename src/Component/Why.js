import React from 'react';
import world from '../Assets/world.png';

function Why() {
  return (
    <div className='w-full relative font-MuseoModerno text-center bg-[#e0f7f9]'>
       <p className='text-[#048392] text-sm md:py-8 py-4 '>QUALITY HOME SERVICES AT THE BEST PRICE</p>
          <h1 className='text-black font-bold text-3xl md:py-2'>Why Choose Hubbly </h1>
      <div className='px-10 md:px-10 lg:px-40 py-4 md:py-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 text-black mx-auto flex-col '>
        <div className='text-justify'>
          <p className=' px-4 md:px-10 '>Enjoy Quality Home Services at Affordable Prices</p>
          <ul className="text-justify  py-4   md:py-4 px-4  mb-4 md:px-10 text-black text-md">
            <li> Verified Hubblers</li>
            <li>Transparent & Instant Booking</li>
            <li>24/7 Support </li>
            <li>Always Available to assist You </li>
          </ul>
        </div>
        <div>
          <img className="w-full md:w-[200px] my-4 md:my-4 px-4" src={world} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Why;
