import React from 'react';
import car from '../Assets/car.svg';

function Greenmaker() {
  return (
    <div className='w-full relative font-MuseoModerno md:px-20 py-8 lg:px-60 px-10 text-center'>
      <p className='text-[#048392] text-sm  font-Raleway font-bold '>BUILDING A SUSTAINABLE FUTURE</p>
      <h1 className='text-black font-bold text-3xl px-10 '>How Hubbly is Green</h1>
      <div className='px-10  gap-2    text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className=" md:w-[400px] w-[600px]  lg:w-[400px] px-10  my-4" src={car} alt="/" />
        </div>
        <div className="text-justify">
  <p className="py-4 md:py-20 lg:px-10 px-4 md:px-10 mb-4 text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium">
    Start with Hubbly's eco-friendly approach from electric vehicles to optimized routes,
    we're committed to reducing our environmental impact.
  </p>
</div>

      </div>
    </div>
  );
}

export default Greenmaker;
