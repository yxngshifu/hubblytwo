import React from 'react';
import discover from '../Assets/discover.png';
import Vector from '../Assets/Vector.png';
import Navbar from '../Component/Navbar';

const Discover = () => {
  const VectorStyle = {
    backgroundImage: `url(${Vector})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    backgroundSize: 'cover',
  };

  return (
    <div>
      <Navbar />
      <div className='w-full relative font-MuseoModerno bg-[#048392]' style={VectorStyle}>
        <div className='flex items-center justify-center py-20 lg:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2   flex-row text-white lg:px-10 xl:px-22 2xl:px-20'>
            <div className='mx-auto'>
              <div className="px-20 md:px-40 lg:px-40  text-center lg:text-left py-8 lg:py-20 xl:py-40">
                <h2 className='text-xl md:text-2xl lg:text-3xl text-white font-bold'>Discover How Hubbly Works.</h2>
                <p className='text-sm pb-4 md:text-md lg:text-lg text-white font-bold'>Booking Quality Services Has Never Been Easier.</p>
                <button className='bg-[#ffb703] text-black rounded-full font-medium w-[160px] md:w-[200px] py-2'>
                  Get Started
                </button>
              </div>
            </div>
            <div className='md:py-10 md:px-40 lg:px-10 lg:py-20 items-center'>
              <img className="w-[400px] md:w-[600px] lg:w-[600px]  " src={discover} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
