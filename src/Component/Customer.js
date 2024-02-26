import React from 'react';
import comment from '../Assets/comment.png';

function Customer() {
  const commentStyle = {
    backgroundImage: `url(${comment})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundSize: '80% 60%',
    marginLeft: '5%', // Adjusted the left margin for responsiveness
  };

  return (
    <div className='w-full text-center relative font-MuseoModerno bg-[#e0f7f9]'>
      <p className='px-10 text-[#048392] text-sm py-4 '>CUSTOMER TESTIMONIALS</p>
      <h1 className='font-bold text-black text-3xl'>Why our customers love us</h1>
      <p className='text-md'>Hear from Hubbly users about their positive experiences</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0 mx-auto px-4'>
        <div className='my-4 md:my-0' style={commentStyle}>
          <p className='px-4 py-4 md:py-20'>
            My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!
          </p>
        </div>
        <div className='my-4 md:my-0' style={commentStyle}>
          <p className='px-4 py-4 md:py-20'>
            My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!
          </p>
        </div>
        <div className='my-4 md:my-0' style={commentStyle}>
          <p className='px-4 py-4 md:py-20'>
            My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Customer;
