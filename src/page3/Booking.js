import React from 'react';
import onebook from '../Assets/onebook.png';
import twobook from '../Assets/twobook.png';
import threebook from '../Assets/threebook.png';

function Howworks() {
  return (
    <div className='w-full text-center items-center px-10  md:px-40 font-MuseoModerno py-8 bg-[#048392]'>
      <div className=''>
      <p className=' text-[#048392] text-sm'>OUR BOOKINGS</p>
      <h1 className='font-bold text-black text-3xl'>Our Booking Process</h1>
      <p className='text-md   items-center  px-4 lg:px-80  '>With Hubbly, booking your desired service is quick and hassle-free. Simply select the service you need, choose a date and time that works for you, and let us handle the rest.</p>
      </div>
      <div className='flex items-center overflow-x-auto py-4 md:py-10 px-4 md:px-20 lg:px-60 mb-4'>
  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify'>
    <img className='w-40 md:w-70 lg:w-68 xl:w-40 my-2' src={onebook} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>1</h1>
      <ul className="px-10 lg:px-80 text-md">
      
        <li>Download mobile app play store/app store & Sign Up. </li> 
      </ul>
    </div>
  </div>

  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify'>
    <img className='w-40 md:w-79 lg:w-68 xl:w-40 my-2' src={twobook} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>2</h1>
      <ul className="px-4 text-md">
       
        <li>Navigate through the available service that meets your needs.</li> 
      </ul>
    </div>
  </div>

  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify'>
    <img className='w-40 md:w-580 lg:w-68 xl:w-40  my-2' src={threebook} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>3</h1>
      <ul className="px-4 text-md">
       
        <li>Streamline your bookings & proceed to payments. Enjoy quality services.</li> 
      </ul>
    </div>
  </div>
      </div>
    </div>
  );
}

export default Howworks;
