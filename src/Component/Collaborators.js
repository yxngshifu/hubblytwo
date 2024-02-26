import React from 'react';
import man from '../Assets/man.png';
import Oval from '../Assets/oval.png';
import arrow from '../Assets/arrow.png';

function Collaborators() {
  const OvalStyle = {
    backgroundImage: `url(${Oval})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100% 80%',
    marginLeft: '20%', // Adjusted the left margin for responsiveness
  };
   const arrowStyle = {
    backgroundImage: `url(${arrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: '100% 100%',
    marginLeft: '10%', // Adjusted the left margin for responsiveness
  };

  return (
    <div className='w-full text-center relative font-MuseoModerno  md:px-40'>
      <div className="grid grid-cols-1 px-10 md:grid-cols-2 gap-4 lg:gap-0 mx-auto flex-col items-center">
        <div className=" "> 
          <p className='text-[#048392]  mb-2 text-sm'>STRONG PARTNERSHIPS</p>
          <h1 className='font-bold md:text-2xl lg:text-3xl text-3xl text-black'>Our Collaborations</h1>
          <div className='text-justify '>
          <p className='py-4 md:py-10  px-10 '>Join Hubbly and our partners on our journey towards a better future</p>
               <div className='px-10'>
          <input
            className=' text-black rounded-full font-medium w-[70%] sm:w-[80%] md:w-[300px] ml-4 px-4 py-2 mb-4 border border-[#048392] focus:border-white'
            type='email'
            placeholder='Enter Email'
          />
          <button className='p-4 bg-[#048392] text-[#FFFFFF] rounded-full font-medium w-[120px] ml-4 py-2'>
            Join Us
          </button>
          </div>
          </div>
        </div>
        <div className='items-center' style={OvalStyle} >
          <img className= "w-[60%] sm:w-[60%] md:w-[280px] my-20 py-4" src={man} alt="Collaborators" style={arrowStyle}/>
          
        </div>
      </div>
    </div>
  );
}

export default Collaborators;
