import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import takeoff from '../Assets/takeoff.png';
import city from '../Assets/cities.png';
import industry from '../Assets/industry.png';
import climate from '../Assets/climate.png';

function Support() {
  return (
    <div className='font-MuseoModerno'>
      <Navbar />
            <div className="w-full">
        <div className="items-center py-10 w-full md:py-16 md:px-8 lg:px-16 xl:px-32 ">
          <p className='text-[#048392] text-sm text-center'>OUR COMMITMENT TO SUSTAINABILITY</p>
          <h1 className='text-black font-bold text-4xl text-center'>Goals We Support</h1>
          <p className='py-2 px-20  text-justify'>
            Join Hubbly in achieving UN Sustainable Development Goals. Our Commitment to Sustainability At Hubbly, we believe that every action, no matter how small, contributes to a larger impact on the environment and community. Our commitment to sustainability is woven into the fabric of our operations, reflecting in every service we offer and every connection we make.
          </p>
          </div>

        <div className='px-8 md:px-10 gap-6  lg:px-20   lg:gap-0 text-black w-full  justify-between   md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <h2 className="text-2xl font-bold mb-4 text-[#048392] ">Eco-Friendly Hubblers</h2>
            <p className='text-black'>We've curated a community of Hubblers who share our commitment to sustainable practices. From using eco-friendly cleaning products to adopting green technologies, our Hubblers contribute to a healthier and more sustainable lifestyle for our users.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#048392]">Green Transportation</h2>
            <p className='text-black'>Hubbly is proud to lead the way in green mobility. We reward our Hubblers and Hubblee that adopt the use of electric bikes or electric vehicles, not only reducing carbon emissions but also setting the standard for environmentally conscious transportation in the home services industry. By choosing Hubbly, you're contributing to cleaner air and a greener future.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#048392]">Waste Reduction Strategies</h2>
            <p className='text-black'>We actively discourage single-use packing materials and implement strategies to minimize waste. Hubbly diverts waste away from landfills whenever possible, opting for recycling centres and sustainable disposal methods. It's a step towards a cleaner and less wasteful community.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#048392]">Community Empowerment</h2>
            <p className='text-black'>Our commitment extends beyond the individual to the community at large. Hubbly's sustainable practices empower local communities by creating job opportunities and supporting fair trade principles. We aim to uplift the neighbourhoods we serve, fostering economic growth and social cohesion.</p>
          </div>
        </div>
      </div>

     <div className='w-full flex justify-center items-center text-center py-8 md:flex-row flex-col'>
      <div className='flex flex-col items-center'>
        <p className='text-black font-semibold text-4xl'>UN Sustainable Development Goals(SDGs)</p>
        <h1 className='text-black text-2xl'>Hubbly aligns its initiatives with several UN SDGs, including:</h1>
      </div>
    </div>

      <div className='px-8 md:px-10 gap-6 py-4  lg:px-20   lg:gap-0 text-black w-full  justify-between   md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className="w-[80px] my-8" src={takeoff} alt="/" />
          <h1 className='font-bold text-2xl text-[#A01B46]'>
            Decent Work and Economic Growth
          </h1>
          <p>Growth: By creating opportunities for Hubblers and supporting fair trade, Hubbly contributes to economic growth.</p>
        </div>
        <div>
          <img className="w-[80px] my-8" src={city} alt="/" />
          <h1 className='text-[#F9A028] text-2xl font-bold'>
            Sustainable Cities and Communities
          </h1>
          <p>Through our eco-friendly transportation and waste reduction efforts, Hubbly contributes to building sustainable urban communities.</p>
        </div>
        <div>
          <img className="w-[80px] my-8" src={industry} alt="/" />
          <h1 className='font-bold text-2xl text-[#F3642C]'>
            Industry, Innovation, and Infrastructure
          </h1>
          <p>Our commitment to technology-driven solutions and green practices aligns with the goal of fostering innovation.</p>
        </div>
        <div>
          <img className="w-[80px] my-8" src={climate} alt="/" />
          <h1 className='font-bold text-2xl text-[#3C8347]'>
            Climate Action
          </h1>
          <p>Hubbly's electric fleet and waste reduction strategies directly address the need for climate action. By choosing Hubbly, you're not just getting efficient home services; you're becoming part of a movement towards a sustainable, responsible, and eco-friendly future.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Support;
