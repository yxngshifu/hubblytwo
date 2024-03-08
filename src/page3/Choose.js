import React from 'react';
import categories from '../Assets/categories.png';

function Choose() {
  return (
   <div className='w-full relative font-MuseoModerno md:px-40 py-8 lg:px-60 xl:px-80 px-10 text-center bg-[#e0f7f9]'>
      <p className='text-[#048392] text-sm   '>EXPLORE SERVICES</p>
      <h1 className='text-black font-bold text-3xl px-10 '>Choose from a Variety of Services</h1>
      <div className='px-4  gap-6  lg:gap-8 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div className="text-justify">
  <p className="py-4 md:py-10 lg:px-40  mb-8">
   Hubbly offers a wide range of at-home services to meet your needs. Whether you need a cleaner, a beautician, or a pet sitter, we've got you covered.
  </p>
</div>

       <div>
          <img className=" px-20 justify-center md:px-2 md:w-[800px] lg:w-[200px] my-4" src={categories} alt="/" />
        </div>
    </div>
    </div>
  );
}


export default Choose;
