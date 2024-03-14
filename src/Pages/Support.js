import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import takeoff from '../Assets/takeoff.png';
import city from '../Assets/cities.png';
import industry from '../Assets/industry.png';
import climate from '../Assets/climate.png';
import car from '../Assets/car.svg';
import trees from '../Assets/trees.png'
import doublephone from '../Assets/doublephone .png';
import appstore from '../Assets/appstore.png';
import playstore from '../Assets/playstore.png';
function Support() {const bgimage = {
    backgroundImage: `url(${trees})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    backgroundSize: 'cover',
  };
 
  return (
    <div className='font-MuseoModerno'>
      <Navbar />
   
<div className='w-full relative font-MuseoModerno text-center items-center' style={bgimage}>
      <div className='py-8 md:py-20 px-4 s text-center items-center lg:py-20'>
        <div className='max-w-screen-lg mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8'>
            <div className='text-black text-md md:text-lg lg:py-12 md:px-40 lg:px-10 lg:text-xl xl:text-2xl'>
              <h1 className='text-black md:text-2xl lg:text-2xl font-bold text-3xl mb-4'>Welcome to Hubbly Sustainable Goals!</h1>
              <p className='text-justify '>
                At Hubbly Sustainable Goals, we are committed to harnessing the power of collective action to create a greener, more sustainable world. Join us in supporting initiatives that prioritise environmental conservation, social equity, and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
       <div className='w-full relative  font-MuseoModerno bg-[#e0f7f9] md:px-20   lg:px-60 px-20 text-center'>
      
      <div className=' gap-2  lg:gap-8 md:py-20 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className=" md:w-[400px]  lg:w-[500px]   my-4" src={car} alt="/" />
        </div>
        <div className="text-justify">
          <h1 className="  text-black font-bold text-4xl ">Our mission</h1>
  <p className="py-4   mb-4">
    At Hubbly, sustainability isn't just a goal—it's a way of life. We're committed to driving positive environmental change in everything we do, from the services we provide to the way we operate our platform. Join us on our journey towards a greener, more sustainable future.
  </p>
</div>

      </div>
    </div>
            <div className="w-full px-20 md:px-40 lg:px-60 lg:py-20 text-justify">
        <div className="py-10  md:py-16  ">
         
          <h1 className='text-black font-bold text-4xl text-center'>Our Sustainable Goals</h1>
          
          </div>

        <div className='  lg:gap-10 text-black w-full  justify-between  gap-8  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
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
<div className='bg-[#e0f7f9]'>
     <div className='w-full flex justify-center items-center text-center  py-14 px-20  md:px-40 lg:px-60  md:flex-row flex-col'>
      <div className='flex flex-col items-center'>
        <p className='text-black font-semibold text-4xl'>UN Sustainable Development Goals(SDGs)</p>
        <h1 className='text-black py-4 text-2xl'>Hubbly aligns its initiatives with several UN SDGs, including:</h1>
      </div>
    </div>

      <div className=' gap-8   px-20 md:px-40 lg:px-60   lg:gap-10 text-black w-full  justify-between  text-justify md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className="w-[80px] my-4" src={takeoff} alt="/" />
          <h1 className='font-bold text-2xl text-[#A01B46]'>
            Decent Work and Economic Growth
          </h1>
          <p>Growth: By creating opportunities for Hubblers and supporting fair trade, Hubbly contributes to economic growth.</p>
        </div>
        <div>
          <img className="w-[80px] my-4" src={city} alt="/" />
          <h1 className='text-[#F9A028] text-2xl font-bold'>
            Sustainable Cities and Communities
          </h1>
          <p>Through our eco-friendly transportation and waste reduction efforts, Hubbly contributes to building sustainable urban communities.</p>
        </div>
        <div>
          <img className="w-[80px] my-4" src={industry} alt="/" />
          <h1 className='font-bold text-2xl text-[#F3642C]'>
            Industry, Innovation, and Infrastructure
          </h1>
          <p>Our commitment to technology-driven solutions and green practices aligns with the goal of fostering innovation.</p>
        </div>
        <div className='mb-8'>
          <img className="w-[80px] my-4" src={climate} alt="/" />
          <h1 className='font-bold text-2xl text-[#3C8347]'>
            Climate Action
          </h1>
          <p>Hubbly's electric fleet and waste reduction strategies directly address the need for climate action. By choosing Hubbly, you're not just getting efficient home services; you're becoming part of a movement towards a sustainable, responsible, and eco-friendly future.</p>
        </div>
      </div>
      </div>
      <div className='w-full relative gap-4 lg:gap-8  font-MuseoModerno  md:px-40 py-8  lg:px-60 px-20 text-center'>
      
      <div className='  md:py-20 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className=" md:w-[400px]  lg:w-[500px]   my-4" src={car} alt="/" />
        </div>
        <div className="text-justify">
          <h1 className=" text-black font-bold text-4xl ">Sustainable Causes we support</h1>
  <p className="py-4  mb-4">
    At Hubbly, sustainability isn't just a goal—it's a way of life. We're committed to driving positive environmental change in everything we do, from the services we provide to the way we operate our platform. Join us on our journey towards a greener, more sustainable future.
  </p>
</div>

      </div>
    </div>
         <div className='bg-[#e0f7f9] '>
          <div className='w-full relative font-MuseoModerno px-20 md:px-40 lg:px-40 text-justify'>
        <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify py-8 lg:px-20 ">
            <h1 className='text-black font-bold text-4xl  '>Get Started Today</h1>
            <p className=" py-2 ">
            Experience the convenience and quality of Hubbly's household services for yourself. Sign up now to browse our selection of services and book your first appointment. With Hubbly, taking care of your home has never been easier.
            </p>
          </div>
          <div className="md:w-[200px]  py-10 ">
            <img className="w-full" src={doublephone} alt="In-house Cooking" />
          </div>
        </div>
      </div>
      </div>
      <div className="w-full px-20 md:px-40 lg:px-60 ">
        <div className="items-center py-10  md:py-16">
          <h1 className='text-black font-bold text-xl md:text-4xl text-center'>Get a Mobile App</h1>
          <p className='py-2   text-justify'>
         Discover the convenience and user-friendly experience of our mobile app, now available for both iOS and Android devices. Download it today and enjoy a seamless and effortless way to access our services and stay connected with us.</p>
        </div>
     
          <div className=' text-black w-full  items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
  <div className="md:w-[200px]  py-4">
    <img className="w-full" src={appstore} alt="In-house Cooking" />
  </div>
  <div className="md:w-[200px]  py-4 ">
    <img className="w-full" src={playstore} alt="In-house Cooking" />

  </div>
      </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default Support;
