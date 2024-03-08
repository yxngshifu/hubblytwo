import React from 'react';
import communicate1 from '../Assets/communicate1.png';

function Communication() {
  return (
    <div className='w-full text-center relative font-MuseoModerno bg-[#e0f7f9]  py-8'>
      <div className="mx-auto flex flex-col items-center px-10 sm:px-8 md:px-16 lg:px-40 ">
        <p className='mb-0 text-[#048392] text-sm'>WHERE YOU ARE</p>
        <h1 className='font-bold text-3xl md:text-2xl lg:text-3xl text-black'>Convenient Communication</h1>
        <p className='text-md lg:text-lg'>Chat or Talk with us on your favorite messenger platforms</p>
        <img className=" lg:w-[400px] my-4 py-10 md:w-[300px] w-[200px]" src={communicate1} alt="Communication" />
      </div>
    </div>
  );
}

export default Communication;
