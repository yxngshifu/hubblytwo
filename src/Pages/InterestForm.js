import React from 'react';
import interest from '../Assets/interest.png';
import logo1 from '../Assets/logo1.svg';
import { Link } from 'react-router-dom';

function InterestForm() {
  return (
    <div className='w-full relative font-MuseoModerno px-20  md:px-40 lg:px-60 text-center'>
      <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div className="text-justify ">
          <Link to="/">
          <img className="w-[100px] lg:w-[100px] mx-4 my-4 " src={logo1} alt="/" />
          </Link>
          <h1 className='text-black font-bold text-2xl '>Hubbly Expression of Interest Form.</h1>
          <p className="py-4 ">
            Welcome to Hubbly, where sustainability meets convenience for both Hubblees (those seeking services) and Hubblers (service providers). We’re dedicated to transforming household chores into eco-friendly tasks while ensuring hassle-free experiences for all. Hubbly is more than just a platform: it’s a community-driven initiative aimed at fostering sustainability and promoting responsible living. We value your feedback and input as we strive needs. Ready to join the movement? Share your thoughts with us by filling out the form below and be a part of the Hubbly revolution!
          </p>

          <form className="mb-4 ">
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
              type="Sign up"
              className="bg-[#048392] text-white p-2 mt-4 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="md:w-[600px] ">
          <img className="w-full" src={interest} alt="In-house Cooking" />
        </div>
      </div>
    </div>
  );
}

export default InterestForm;
