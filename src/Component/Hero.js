import React from 'react';
import Ellipse from '../Assets/Ellipse.png'
import laugh from '../Assets/laugh.png'
import Navbar from './Navbar';

const Hero = () => {
  const ellipseStyle = {
    backgroundImage: `url(${Ellipse})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: '80% 90%'
  };
  return (
    <div>
      <Navbar/>
  
    <div className='w-full relative font-MuseoModerno ' >
     
      <div className=' grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4  flex-col text-black'>
     
          <div className=" px-16 md:px-40  py-24 md:py-40 lg:px-40 text-justify ">
        <h2 className='text-xl md:text-4xl lg:text-4xl text-black font-bold pb-4 '>All Your Home needs in One Place</h2>
        <p className='text-4xl pb-4  md:text-4xl lg:text-7xl text-[#048392] font-bold'>Green and Convenient</p>
        <p className='text-2xl sm:text-xl mb-4 text-black'>Eco-friendly solutions at Your fingertips  </p>
         <button className='bg-[#048392] text-[#FFFFFF] rounded-full  font-medium w-[200px]  py-2  '>
            Join the community 
        </button>
        
       
        </div>
         <div className='w-full relative font-MuseoModerno ' style={ellipseStyle}>
          <div>
          <img className="w-[600px]   " src={laugh} alt="/" />

        </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Hero;
