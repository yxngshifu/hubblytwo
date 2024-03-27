import React from 'react';
import phone1 from '../Assets/phone1.png';
import phone2 from '../Assets/phone2.png';
import phone3 from '../Assets/phone3.png';

function Howworks() {
  return (
    <div className='w-full text-center items-center px-20  md:px-40 lg:px-60 font-MuseoModerno py-8 bg-[#048392]'>
      <div className=''>
      <p className=' text-[#048392] text-sm'>OUR BOOKINGS</p>
      <h1 className='font-bold text-black text-3xl'>Our Booking Process</h1>
      <p className='text-md  text-[#494D4D] font-Raleway font-medium  items-center text-md md:text-lg  lg:text-xl xl:text-2xl   '>With Hubbly, booking your desired service is quick and hassle-free. Simply select the service you need, choose a date and time that works for you, and let us handle the rest.</p>
      </div>
      <div className='flex items-center overflow-x-auto py-4 md:py-10 mb-4'>
  <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify'>
    <img className='w-40 md:w-60 lg:w-60 my-2' src={phone1} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>1</h1>
      <ul className=" text-md">
      
        <li className='px-10 md:px-20 lg:px-40'>Download mobile app play store/app store & Sign Up. </li> 
      </ul>
    </div>
  </div>

  <div className='flex-shrink-0 flex flex-col items-center text-justify'>
    <img className='w-40 md:w-60 lg:w-60  my-2' src={phone2} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>2</h1>
      <ul className=" text-md">
       
        <li className='px-10 md:px-20 lg:px-40' >Navigate through the available service that meets your needs.</li> 
      </ul>
    </div>
  </div>

  <div className='flex-shrink-0 flex flex-col items-center text-justify'>
    <img className='w-40 md:w-60 lg:w-60 my-2' src={phone3} alt="/" />
    <div className='text-center'>
      <h1 className='font-bold'>3</h1>
      <ul className=" text-md">
       
        <li className='px-10 md:px-20 lg:px-40'>Streamline your bookings & proceed to payments. Enjoy quality services.</li> 
      </ul>
    </div>
  </div>
      </div>
    </div>
  );
}

export default Howworks;
