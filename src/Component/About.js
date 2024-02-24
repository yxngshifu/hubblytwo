import React from 'react';

function About() {
  return (
    <div className='font-MuseoModerno'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mx-auto bg-[#e0f7f9]'>
        <div className='py-8 md:py-20 px-4 md:px-10 lg:px-20 items-center'>
          <p className='text-[#048392] text-sm'> PROVIDING HOME SERVICES</p>
          <h1 className='text-black text-xl md:text-2xl lg:text-3xl font-bold'>About Us</h1>
          <p className='text-black text-md md:text-lg lg:text-xl xl:text-2xl'>
            Experience hassle-free home services with Hubbly. Say goodbye to chores and scheduling stress. Your trusted partner for reliable services. We're a vibrant community of like-minded individuals dedicated to promoting responsible living and environmental stewardship.
          </p>
          <p className='text-[#048392] text-sm'>Empowering Users, Empowering Communities</p>
          <p className='text-[#048392] text-lg md:text-xl lg:text-2xl cursor-pointer underline'>Learn more</p>
        </div>
      </div>
    </div>
  );
}

export default About;
