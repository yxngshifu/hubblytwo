import React from 'react';
import Ellipse from '../Assets/Ellipse.png'
import laugh from '../Assets/laugh.png'

const Hero = () => {
  const ellipseStyle = {
    backgroundImage: `url(${Ellipse})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: '50% 75%'
  };
  return (
    <div>

  
    <div className='w-full relative font-MuseoModerno ' style={ellipseStyle}>
     
      <div className='py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mx-auto  text-black'>
      <div className='mx-auto flex flex-col items-center '>
          <div className="bg-[white] p-6 py-24 w-120 h-80  text-center   ">
        <h2 className='text-xl md:text-xl text-black font-bold'>All Your Home needs in One Place</h2>
        <p className='text-xl pb-4 md:text-2xl text-[#048392] font-bold'>Green and Convenient</p>
        <p className='text-sm sm:text-sm text-black'>Eco-friendly solutions at Your fingertips  </p>
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
