import React from 'react';
import search from '../Assets/search.svg';
import drive from '../Assets/drive.svg';
import sit from '../Assets/sit.svg';

function Howworks() {
  return (
    <div className='w-full text-center items-center px-20  md:px-40 lg:px-60 font-MuseoModerno py-8'>
      <div className=''>
      <p className=' text-[#048392] text-sm'>QUICK, TRUSTED, AVAILABLE</p>
      <h1 className='font-bold text-black text-3xl'>How Hubbly Works</h1>
      <p className='text-md   items-center  px-4   '>Seamless Booking and Reliable Services From Booking to Fulfillment We Keep You Informed Every Step of the Way</p>
      </div>
      <div className='flex items-center overflow-x-auto py-4 md:py-20 px-4 md:px-20 lg:px-60 mb-4'>
  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify'>
    <img className='w-60 md:w-80 lg:w-68 xl:w-56 my-2' src={search} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>Find A Service</h1>
      <ul className="px-4 text-md">
        <li>Download the app</li>
        <li>Browse through verified Hubblers available</li> 
      </ul>
    </div>
  </div>

  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify'>
    <img className='w-60 md:w-79 lg:w-68 xl:w-56 my-2' src={drive} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>On Booking</h1>
      <ul className="px-4 text-md">
        <li>Seamless Booking</li>
        <li>Transparent and Instant payment methods</li> 
      </ul>
    </div>
  </div>

  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify'>
    <img className='w-60 md:w-80 lg:w-68 xl:w-56 my-2' src={sit} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>On Service Day</h1>
      <ul className="px-4 text-md">
        <li>Hubbler Arrival Tracking</li>
        <li>Efficient Communication</li> 
      </ul>
    </div>
  </div>
      </div>
    </div>
  );
}

export default Howworks;
