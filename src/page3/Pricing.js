import React from 'react';
import pricing from '../Assets/pricing.svg';

function Pricing() {
  return (
    <div className='w-full relative font-MuseoModerno md:px-40 py-8 lg:px-60 px-20 text-center'>
     
      <div className='  gap-6    lg:gap-8 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className=" md:w-[400px] px-10 lg:px-10 my-4" src={pricing} alt="/" />
        </div>
        <div className="text-justify">
             <p className='text-[#048392] text-sm   '>PRICING</p>
      <h1 className='text-black font-bold text-3xl  '>Transparent Pricing</h1>
  <p className="py-4 md:py-4  mb-4">
   At Hubbly, we believe in transparency. You'll always know exactly what you're paying for upfront, with no hidden fees or surprises.
  </p>
</div>

      </div>
    </div>
  );
}

export default Pricing;
