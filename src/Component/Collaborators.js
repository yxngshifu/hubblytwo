import React from 'react';
import man from '../Assets/man.png';
import Oval from '../Assets/oval.png';

function Collaborators() {
  const OvalStyle = {
    backgroundImage: `url(${Oval})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundSize: '85% 70%',
    marginLeft: '15%', // Adjusted the left margin for responsiveness
  };

  return (
    <div className='w-full text-center relative font-MuseoModerno'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 mx-auto flex-col items-center">
        <div className=" py-4"> 
          <p className='text-[#048392] py-4 mb-2 text-sm'>STRONG PARTNERSHIPS</p>
          <h1 className='font-bold text-xl md:text-2xl lg:text-3xl text-black'>Our Collaborations</h1>
          <div className='text-justify px-4'>
          <p className='py-4 md:py-10 px-4 md:px-10 '>Join Hubbly and our partners on our journey towards a better future</p>

          <input
            className=' text-black rounded-full font-medium w-[80%] sm:w-[60%] md:w-[300px] ml-4 px-4 py-2 mb-4 border border-[#048392] focus:border-white'
            type='email'
            placeholder='Enter Email'
          />
          <button className='p-2 bg-[#048392] text-[#FFFFFF] rounded-full font-medium w-[120px] ml-3 py-2'>
            Join Us
          </button>
          </div>
        </div>
        <div style={OvalStyle}>
          <img className="w-[80%] sm:w-[60%] md:w-[280px] my-20 py-20" src={man} alt="Collaborators" />
        </div>
      </div>
    </div>
  );
}

export default Collaborators;
