import React from 'react';
import cleaning from '../Assets/cleaning.png';
import dogwalking from '../Assets/dogwalking.png';
import cooking from '../Assets/cooking.png';

function Offerings() {
  return (
    <div className='w-full text-center relative font-MuseoModerno'>
      <p className='px-4 md:px-10 py-8 md:py-10 text-[#048392] text-sm'>ONE STOP HOME SERVICES</p>
      <h1 className='font-bold text-black text-3xl'>Our Offerings</h1>
      <p className='text-md py-4 md:py-10 px-4 md:px-40'>Our team of experts is committed to delivering excellence in every service we offer. Whether you need help with house cleaning, dog walking, or in-house cooking, you can trust Hubbly to provide reliable and eco-friendly solutions tailored to your needs.</p>
      
   
      <div className=' flex justify-center items-center md:mr-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3  mx-auto'>
          <div className=' '>
            <img className='w-60 md:w-80 lg:w-68 xl:w-56 my-2' src={cleaning} alt="/" />
            <h1 className='font-bold text-sm md:text-base'>House Cleaning</h1>
          </div>
          <div className=' '>
            <img className='w-60 md:w-70 lg:w-68 xl:w-56 my-2'src={dogwalking} alt="/" />
            <h1 className='font-bold text-sm md:text-base'>Dog walking</h1>
          </div>
          <div className=' '>
            <img className='w-60 md:w-70 lg:w-68 xl:w-56 my-2' src={cooking} alt="/" />
            <h1 className='font-bold text-sm md:text-base'>In-house cooking</h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Offerings;
