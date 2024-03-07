import React from 'react'
import bgtrust from '/Users/shifu/hubblytwo/src/Assets/bgtrust.png'
function Trusted() {
    const bgimage = {
    backgroundImage: `url(${bgtrust})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    backgroundSize: 'cover'
  };
  return (
    <div className='w-full relative font-MuseoModerno text-center ' style={bgimage}>
         <div className='py-8 md:py-8 px-10 md:px-50 lg:px-80  items-center '>
         <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 '>
      <div className='text-black text-md md:text-lg md:py-4 lg:py-12 px-4 md:px-10 lg:text-xl xl:text-2xl'>
         <p className='text-[#048392] text-sm   '>TRUSTED PROFESSIONALS </p>
         <h1 className='text-black  md:text-2xl lg:text-4xl    font-bold text-3xl'>Trusted Professionals at Your Doorstep</h1>
        <p>
         We carefully vet all our Hubbly professionals to ensure they meet our high standards of quality and reliability. Rest assured that you'll receive top-notch service every time.
        </p>
      </div>
    </div>
    </div>
      

        </div>
  )
}

export default Trusted