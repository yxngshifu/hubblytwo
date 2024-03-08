import React from 'react';
import interest from '../Assets/interest.png';
import logo1 from '../Assets/logo1.svg';

function InterestForm() {
  return (
    <div className='w-full relative font-MuseoModerno px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 2xl:px-80 text-center'>
      <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div className="text-justify py-10 md:py-20">
          <img className="w-[300px] mx-4 my-4 px-10 md:px-20" src={logo1} alt="/" />
          <h1 className='text-black font-bold text-2xl px-10 md:px-20'>Hubbly Expression of Interest Form.</h1>
          <p className="px-10 py-4 md:px-20">
            Welcome to Hubbly, where sustainability meets convenience for both Hubblees (those seeking services) and Hubblers (service providers). We’re dedicated to transforming household chores into eco-friendly tasks while ensuring hassle-free experiences for all. Hubbly is more than just a platform: it’s a community-driven initiative aimed at fostering sustainability and promoting responsible living. We value your feedback and input as we strive needs. Ready to join the movement? Share your thoughts with us by filling out the form below and be a part of the Hubbly revolution!
          </p>

          <form className="mb-4 px-10 md:px-20">
            <div className="mb-4 flex">
              <div className="flex-1 mr-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]"
                 
                />
              </div>
              <div className="flex-1 ml-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]"
                  
                />
              </div>
              
            </div>
            <div className="flex-1 mr-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Burrows Interested in Working:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]"
                  
                />
              </div>
              <div className="flex-1 mr-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                 Are you interested in working in these cities?:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]"
                 
                />
              </div>
              <div className="flex-1 mr-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Categories you are interested in:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]"
               
                />
              </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="md:w-[400px] px-4 md:px-10">
          <img className="w-full" src={interest} alt="In-house Cooking" />
        </div>
      </div>
    </div>
  );
}

export default InterestForm;
