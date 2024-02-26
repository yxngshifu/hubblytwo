import React from 'react';
import goals1 from '../Assets/goals1.png';

function Goals() {
  return (
    <div className='w-full text-center px-10  md:px-40 relative font-MuseoModerno bg-[#e0f7f9] '>
      <div className="mx-auto flex flex-col items-center">
        <p className='py-4 md:py-8 text-[#048392] text-sm'>OUR COMMITMENT TO SUSTAINABILITY</p>
        <h1 className='font-bold text-3xl md:text-2xl  text-black'>Goals We Support</h1>
        <p className='py-4 md:py-4 px-8 text-justify '>
          Join Hubbly in achieving UN Sustainable Development Goals. Our Commitment to Sustainability. At Hubbly, we believe that every action, no matter how small, contributes to a larger impact on the environment and community. Our commitment to sustainability is woven into the fabric of our operations, reflecting in every service we offer and every connection we make.
        </p>
        <img className="w-full md:w-[300px] my-4 py-10" src={goals1} alt="/" />
      </div>
    </div>
  );
}

export default Goals;
