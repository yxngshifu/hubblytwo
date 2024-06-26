import React from 'react';
import HubblyAd from '../Assets/HubblyAd.mp4'
function About() {
  return (
    <div className='font-MuseoModerno'>
      <div className=' bg-[#e0f7f9]'>
        <div className='py-8 md:py-8 px-16 md:px-40 lg:px-40  items-center '>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 '>
      <div className='text-black text-md md:text-lg md:py-4 lg:py-12 px-4  lg:text-xl xl:text-2xl'>
         <p className='text-[#048392] text-sm font-Raleway font-bold   '>PROVIDING HOME SERVICES</p>
         <h1 className='text-black  md:text-2xl lg:text-4xl    font-bold text-3xl'>About Us</h1>
        <p className='text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium'>
          Experience hassle-free home services with Hubbly. Say goodbye to chores and scheduling stress. Your trusted partner for reliable services. We're a vibrant community of like-minded individuals dedicated to promoting responsible living and environmental stewardship.
        </p>
        <p className='text-[#048392] font-Raleway font-bold text-sm'>Empowering Users, Empowering Communities</p>
        <p className='text-[#048392] font-Raleway font-bold text-lg cursor-pointer '>Learn more</p>
      </div>

      <div className="w-full h-full flex items-center justify-center order-first lg:order-last">
        {/* You can replace the video source with your actual video file */}
        <video controls className="max-w-full max-h-full">
            <source src={HubblyAd} type="video/mp4" />

          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </div>
      
    </div>
      </div>
  );
}

export default About;
