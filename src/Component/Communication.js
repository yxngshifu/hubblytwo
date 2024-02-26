import React from 'react';
import communicate1 from '../Assets/communicate1.png';

function Communication() {
  return (
    <div className='w-full text-center relative font-MuseoModerno bg-[#e0f7f9] '>
      <div className="mx-auto flex flex-col items-center px-10 sm:px-8 md:px-16 lg:px-40 xl:px-24">
        <p className='py-4 mb-0 text-[#048392] text-sm'>WHERE YOU ARE</p>
        <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-black'>Convenient Communication</h1>
        <p className='text-md lg:text-lg'>Chat or Talk with us on your favorite messenger platforms</p>
        <img className="w-full md:w-[50%] lg:w-[70%] xl:w-[60%] my-4 py-10" src={communicate1} alt="Communication" />
      </div>
    </div>
  );
}

export default Communication;
