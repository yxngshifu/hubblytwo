import React from 'react';
import collab from '../Assets/collab.png';

function Collaborators() {
  return (
    <div className='w-full text-center relative font-MuseoModerno md:px-8 lg:px-40 py-4'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 mx-auto flex-col items-center">
        <div className="text-center py-4 md:py-20 lg:px-40 px-4 md:px-10 mb-4">
          <p className='text-[#048392] mb-2 text-sm'>STRONG PARTNERSHIPS</p>
          <h1 className='font-bold md:text-2xl lg:text-3xl text-3xl text-black'>Our Collaborations</h1>
          <div className=''>
            <p className=''>Join Hubbly and our partners on our journey towards a better future</p>
            <div className=''>
              <input
                className='text-black rounded-full font-medium w-full sm:w-[80%] md:w-[300px] ml-0 sm:ml-4 px-4 py-2 mb-4 border border-[#048392] focus:border-white'
                type='email'
                placeholder='Enter Email'
              />
              <button className='p-4 bg-[#048392] text-[#FFFFFF] rounded-full font-medium w-full sm:w-[120px] md:w-[120px] ml-0 sm:ml-4 py-2'>
                Join Us
              </button>
            </div>
          </div>
        </div>
        <div className='items-center'>
          <img className="w-[40px] sm:w-[50px] md:w-[280px] my-20" src={collab} alt="Collaborators" />
        </div>
      </div>
    </div>
  );
}

export default Collaborators;
