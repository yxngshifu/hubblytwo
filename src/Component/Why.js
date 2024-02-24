import React from 'react';
import world from '../Assets/world.png';

function Why() {
  return (
    <div className='w-full relative font-MuseoModerno text-center bg-[#e0f7f9]'>
      <div className='px-4 md:px-10 lg:px-20 py-4 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 text-black mx-auto flex-col items-center'>
        <div>
          <p className='py-4 md:py-10 text-[#048392] text-sm '>QUALITY HOME SERVICES AT THE BEST PRICE</p>
          <h1 className='font-bold text-3xl text-black'>Why Choose Hubbly </h1>
          <p>Enjoy Quality Home Services at Affordable Prices</p>
          <ul className="list-disc pl-10 py-4 px-4 md:px-10 text-black text-md">
            <li> Verified Hubblers</li>
            <li>Transparent & Instant Booking</li>
            <li>24/7 Support </li>
            <li>Always Available to assist You </li>
          </ul>
        </div>
        <div>
          <img className="w-full md:w-[200px] my-4 md:my-20 px-4" src={world} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Why;
