import React from 'react';
import collab from '../Assets/collab.png';

function Collaborators() {
  return (
    <div className='w-full  relative font-MuseoModerno md:px-40 px-20 lg:px-80 text-justify py-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 mx-auto flex-col items-center">
        <div className="text-center py-4 md:py-20  mb-4">
          <p className='text-[#048392] mb-2 text-sm font-Raleway font-bold'>STRONG PARTNERSHIPS</p>
          <h1 className='font-bold md:text-2xl lg:text-3xl text-3xl text-black'>Our Collaborations</h1>
          <div className=''>
            <p className='text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium'>Join Hubbly and our partners on our journey towards a better future</p>
            <div className=''>
              <input
                className='text-black rounded-full font-medium w-full sm:w-[80%] md:w-[200px] ml-0 sm:ml-4 px-4 py-2 mb-4 border border-[#048392] focus:border-white'
                type='email'
                placeholder='Enter Email'
              />
              <button className='p-4 bg-[#048392] text-[#FFFFFF] rounded-full text-md md:text-lg  lg:text-xl xl:text-2xl  font-Raleway  font-medium w-full sm:w-[120px] md:w-[120px] ml-0 sm:ml-4 py-2'>
                Join Us
              </button>
            </div>
          </div>
        </div>
        <div className='items-center lg:px-10 '>
          <img className="w-[600px]  md:w-[280px] lg:w-[400px] my-20" src={collab} alt="Collaborators" />
        </div>
      </div>
    </div>
  );
}

export default Collaborators;
