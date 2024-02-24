import React from 'react';
import goals from '../Assets/goals.png';

function Goals() {
  return (
    <div className='w-full text-center relative font-MuseoModerno bg-[#e0f7f9] '>
      <div className="mx-auto flex flex-col items-center">
        <p className='py-6 md:py-10 text-[#048392] text-sm'>OUR COMMITMENT TO SUSTAINABILITY</p>
        <h1 className='font-bold text-xl md:text-2xl text-black'>Goals We Support</h1>
        <p className='py-2 px-4 md:px-12 lg:px-24 xl:px-40'>
          Join Hubbly in achieving UN Sustainable Development Goals. Our Commitment to Sustainability. At Hubbly, we believe that every action, no matter how small, contributes to a larger impact on the environment and community. Our commitment to sustainability is woven into the fabric of our operations, reflecting in every service we offer and every connection we make.
        </p>
        <img className="w-full md:w-[300px] my-4 py-10" src={goals} alt="/" />
      </div>
    </div>
  );
}

export default Goals;
