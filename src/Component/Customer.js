import React from 'react';
import commentbox from '../Assets/commentbox.svg';

function Customer() {
  const commentboxStyle = {
    backgroundImage: `url(${commentbox})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundSize: '200% 800%',
    marginLeft: '5%', // Adjusted the left margin for responsiveness
  };

  return (
    <div className='w-full text-center relative font-MuseoModerno bg-[#e0f7f9]'>
      <p className='px-10 text-[#048392] text-sm py-4 '>CUSTOMER TESTIMONIALS</p>
      <h1 className='font-bold text-black text-3xl'>Why our customers love us</h1>
      <p className='text-md'>Hear from Hubbly users about their positive experiences</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 px-40 gap-4">
       
        <div className='items-center' style={commentboxStyle}>
          <p className="">
            My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!
          </p>
        </div>

        <div className='items-center' style={commentboxStyle}>
          <p className="">
            My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!
          </p>
        </div>

         <div className='items-center' style={commentboxStyle}>
          <p className="">
            My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!
          </p>
        </div>

         <div className='items-center' style={commentboxStyle}>
          <p className="">
            My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!
          </p>
        </div>

        <div className='items-center' style={commentboxStyle}>
          <p className="">
            My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!
          </p>
        </div>

        <div className='items-center' style={commentboxStyle}>
          <p className="">
            My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Customer;
