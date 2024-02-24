import React from 'react';
import Ellipse from '../Assets/Ellipse.png'
import laugh from '../Assets/laugh.png'
import Navbar from './Navbar';

const Hero = () => {
  const ellipseStyle = {
    backgroundImage: `url(${Ellipse})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: '50% 75%'
  };
  return (
    <div>
      <Navbar/>
  
    <div className='w-full relative font-MuseoModerno ' style={ellipseStyle}>
     
      <div className='px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mx-auto flex-col items-center  text-black'>
      <div className=''>
          <div className=" px-20  ">
        <h2 className='text-xl md:text-xl text-black font-bold'>All Your Home needs in One Place</h2>
        <p className='text-xl pb-4 md:text-2xl text-[#048392] font-bold'>Green and Convenient</p>
        <p className='text-sm sm:text-sm mb-4 text-black'>Eco-friendly solutions at Your fingertips  </p>
         <button className='bg-[#048392] text-[#FFFFFF] rounded-full  font-medium w-[200px] ml-8 py-2  '>
            Join the community 
        </button>
        </div>
       
        </div>
          <div>
          <img className="w-[600px]  my-4 py-10 " src={laugh} alt="/" />

        </div>
      </div>
    </div>
      </div>
  );
};

export default Hero;
