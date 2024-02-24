import React from 'react';
import car from '../Assets/car.png';

function Greenmaker() {
  return (
    <div className='w-full relative font-MuseoModerno text-center'>
      <p className='text-[#048392] text-sm md:py-8'>SUSTAINABLE HOME SERVICES</p>
      <h1 className='text-black font-semibold text-2xl py-2 md:py-2'>What makes US Green</h1>
      <div className='px-4 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 text-black mx-auto flex-col items-center'>
        <div>
          <img className="w-full md:w-[400px] my-4" src={car} alt="/" />
        </div>
        <div>
          <p className='py-4 md:py-20 px-4 md:px-10'>
            Start with Hubbly's eco-friendly approach - from electric vehicles to optimized routes,
            we're committed to reducing our environmental impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Greenmaker;
