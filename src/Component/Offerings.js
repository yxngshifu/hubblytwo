import React from 'react';
import cleaning from '../Assets/cleaning.svg';
import dogwalking from '../Assets/dogwalking.svg';
import cooking from '../Assets/cooking.svg';

function Offerings() {
  return (
    <div className='w-full text-center relative font-MuseoModerno'>
      <p className='px-4 md:px-10 py-8 md:py-10 text-[#048392] text-sm'>ONE STOP HOME SERVICES</p>
      <h1 className='font-bold text-black text-3xl'>Our Offerings</h1>
      <p className='text-md py-4 md:py-10 px-4 md:px-40 text-justify'>Our team of experts is committed to delivering excellence in every service we offer. Whether you need help with house cleaning, dog walking, or in-house cooking, you can trust Hubbly to provide reliable and eco-friendly solutions tailored to your needs.</p>
      
   
     <div className='flex items-center overflow-x-auto py-4 md:py-20 px-4 md:px-10 mb-4'>
  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify '>
    <img className='w-80 md:w-80 lg:w-68 xl:w-56 my-5' src={cleaning} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>House Cleaning</h1>
    </div>
  </div>

  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify '>
    <img className='w-60 md:w-79 lg:w-68 xl:w-56 my-2' src={dogwalking} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>Dog walking</h1>
    </div>
  </div>

  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify'>
    <img className='w-60 md:w-79 lg:w-68 xl:w-56 my-2' src={cooking} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>In-house cooking</h1>
    </div>
  </div>
      </div>
      
    </div>
  );
}

export default Offerings;
