import React from 'react';

function About() {
  return (
    <div className='font-MuseoModerno'>
      <div className=' bg-[#e0f7f9]'>
        <p className='text-[#048392] text-sm md:py-4 py-4  text-center'>PROVIDING HOME SERVICES</p>
         <h1 className='text-black text-xl md:text-2xl lg:text-3xl  md:py-4 px-4 md:px-10 text-center font-bold'>About Us</h1>
        <div className='py-8 md:py-10 px-4 md:px-10 lg:px-20 items-center '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mx-auto'>
          <p className='text-black text-md md:text-lg md:py-4 px-4 md:px-10  lg:text-xl xl:text-2xl'>
            Experience hassle-free home services with Hubbly. Say goodbye to chores and scheduling stress. Your trusted partner for reliable services. We're a vibrant community of like-minded individuals dedicated to promoting responsible living and environmental stewardship.
          </p>
        </div>
         <p className='text-[#048392] text-sm  px-4 md:px-10 '>Empowering Users, Empowering Communities</p>
          <p className='text-[#048392] text-lg  px-4 md:px-10  md:text-xl lg:text-2xl cursor-pointer underline'>Learn more</p>
        </div>
      
    </div>
      </div>
  );
}

export default About;
