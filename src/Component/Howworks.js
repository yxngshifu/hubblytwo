import React from 'react';
import search from '../Assets/search.png';
import drive from '../Assets/drive.png';
import sit from '../Assets/sit.png';

function Howworks() {
  return (
    <div className='w-full text-center items-center font-MuseoModerno'>
      <p className='py-4 text-[#048392] text-sm'>QUICK, TRUSTED, AVAILABLE</p>
      <h1 className='font-bold text-black text-3xl'>How Hubbly Works</h1>
      <p className='text-md mb-8'>Seamless Booking and Reliable Services From Booking to Fulfillment We Keep You Informed Every Step of the Way</p>
      
      <div className='flex items-center overflow-x-auto'>
        <div className='flex flex-col items-center px-4'>
          <img className='w-60 md:w-80 lg:w-68 xl:w-56 my-2' src={search} alt="/" />
          <div className='text-center'>
            <h1 className='font-bold'>Find A Service</h1>
            <ul className="list-disc px-4 text-md">
              <li>Download the app</li>
              <li>Browse through verified Hubblers available</li> 
            </ul>
          </div>
        </div>

        <div className='flex flex-col items-center px-4'>
          <img className='w-60 md:w-80 lg:w-68 xl:w-56 my-2' src={drive} alt="/" />
          <div className='text-center'>
            <h1 className='font-bold'>On Booking</h1>
            <ul className="list-disc px-4 text-md">
              <li>Seamless Booking</li>
              <li>Transparent and Instant payment methods</li> 
            </ul>
          </div>
        </div>

        <div className='flex flex-col items-center px-4'>
          <img className='w-60 md:w-80 lg:w-68 xl:w-56 my-2' src={sit} alt="/" />
          <div className='text-center'>
            <h1 className='font-bold'>On Service Day</h1>
            <ul className="list-disc px-4 text-md">
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
