import React from 'react';
import cleaning from '../Assets/cleaning.svg';
import dogwalking from '../Assets/dogwalking.svg';
import cooking from '../Assets/cooking.svg';

function Offerings() {
  return (
    <div className='w-full px-20 md:px-40 text-center relative font-MuseoModerno lg:px-80'>
      <p className=' md:py-4 text-[#048392] text-sm'>ONE STOP HOME SERVICES</p>
      <h1 className='font-bold text-black text-3xl'>Our Offerings</h1>
      <p className=' text-justify'>Our team of experts is committed to delivering excellence in every service we offer. Whether you need help with house cleaning, dog walking, or in-house cooking, you can trust Hubbly to provide reliable and eco-friendly solutions tailored to your needs.</p>
      <div className=' '>
      <div className=' flex overflow-x-auto py-4 md:py-8 px-4 mb-4  grid-cols-1 md:grid-cols-3 lg:px-40'>
        <div className='flex-shrink-0  flex flex-col items-center px-4 text-justify mx-4'>
          <img className='w-80 md:w-80 lg:w-80 xl:w-100 my-5' src={cleaning} alt="/" />
          <div className='text-center'>
            <h1 className='font-bold'>House Cleaning</h1>
          </div>
        </div>

        <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify mx-4'>
          <img className='w-60 md:w-79 lg:w-68 xl:w-56 my-2' src={dogwalking} alt="/" />
          <div className='text-center'>
            <h1 className='font-bold'>Dog walking</h1>
          </div>
        </div>

        <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify mx-4'>
          <img className='w-60 md:w-79 lg:w-68 xl:w-56 my-2' src={cooking} alt="/" />
          <div className='text-center'>
            <h1 className='font-bold'>In-house cooking</h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Offerings;
