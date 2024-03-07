import React from 'react'
import interest from '../Assets/interest.png';
import logo1 from '../Assets/logo1.svg'

function InterestForm() {
  return (
    <div>
         <div className='w-full relative font-MuseoModerno px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 2xl:px-80 text-center'>
        <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify py-10 md:py-20 ">
            <img className="w-[300px] mx-4 my-4 px-10  md:px-20 flex items-center" src={logo1} alt="/" />
            <h1 className='text-black font-bold text-2xl px-10 md:px-20'>Hubbly Expression of Interest Form.</h1>
            <p className="px-10 py-4 md:px-20">
            <p className=''> Welcome to Hubbly, where sustainability meets convenience for both Hubblees (those seeking services) and Hubblers (service providers). We’re dedicated to transforming household chores into eco-friendly tasks while ensuring hassle free experiences for all. Hubbly is more than just a platform: it’s a community-driven initiative aimed at fostering sustainability and promoting responsible living. We value your feedback and input as we strive needs. Ready to join the movement? Share your thoughts with us by filling out the form below and be a part of the Hubbly revolution!
           </p>
            </p>
          </div>
          <div className="md:w-[400px] px-4 md:px-10">
            <img className="w-full" src={interest} alt="In-house Cooking" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterestForm