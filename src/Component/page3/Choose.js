import React from 'react';
import categories from '/Users/shifu/hubblytwo/src/Assets/categories.png';

function Choose() {
  return (
   <div className='w-full relative font-MuseoModerno md:px-40 py-8 lg:px-80 px-10 text-center bg-[#e0f7f9]'>
      <p className='text-[#048392] text-sm   '>EXPLORE SERVICES</p>
      <h1 className='text-black font-bold text-3xl px-10 '>Choose from a VAriety of Services</h1>
      <div className='px-4  gap-6  lg:px-20   lg:gap-8 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div className="text-justify">
  <p className="py-4 md:py-20 lg:px-20 px-4 md:px-10 mb-4">
   Hubbly offers a wide range of at-home services to meet your needs. Whether you need a cleaner, a beautician, or a pet sitter, we've got you covered.
  </p>
</div>

       <div>
          <img className=" md:w-[400px] px-10 lg:px-20 my-4" src={categories} alt="/" />
        </div>
    </div>
    </div>
  );
}


export default Choose;
