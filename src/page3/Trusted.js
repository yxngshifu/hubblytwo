import React from 'react';
import bgtrust from '../Assets/bgtrust.png';

function Trusted() {
  const bgimage = {
    backgroundImage: `url(${bgtrust})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    backgroundSize: 'cover',
  };

  return (
    <div className='w-full relative font-MuseoModerno text-center items-center' style={bgimage}>
      <div className='py-8 md:py-8 px-4 lg:px-20 text-center items-center'>
        <div className='max-w-screen-lg mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8'>
            <div className='text-black lg:py-12 md:px-40 text-md md:text-lg  lg:px-20 lg:text-xl xl:text-2xl'>
              <p className='text-[#048392] text-sm mb-2  font-Raleway font-bold'>TRUSTED PROFESSIONALS</p>
              <h1 className='text-black md:text-2xl lg:text-4xl font-bold text-3xl mb-4'>Trusted Professionals at Your Doorstep</h1>
              <p className='text-justify px-10 text-[#494D4D] font-Raleway font-medium'>
                We carefully vet all our Hubbly professionals to ensure they meet our high standards of quality and reliability. Rest assured that you'll receive top-notch service every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
