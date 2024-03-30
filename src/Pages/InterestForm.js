import React from 'react';
import interest from '../Assets/interest.png';
import logo1 from '../Assets/logo1.svg';
import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';

function InterestForm() {
  return (
    <div className='w-full relative text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium px-20  md:px-40 lg:px-60 text-center'>
      <div className='px-4 gap-8  w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div className="text-justify ">
          <Link to="/">
          <img className="w-[100px] lg:w-[100px] mx-4 my-4 " src={logo1} alt="/" />
          </Link>
          <p className="py-4 ">
            Welcome to Hubbly, where sustainability meets convenience for both Hubblees (those seeking services) and Hubblers (service providers). We’re dedicated to transforming household chores into eco-friendly tasks while ensuring hassle-free experiences for all. Hubbly is more than just a platform: it’s a community-driven initiative aimed at fostering sustainability and promoting responsible living. We value your feedback and input as we strive needs. Ready to join the movement? Share your thoughts with us by filling out the form below and be a part of the Hubbly revolution!
          </p>

       <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/apphhUTm6uU3NZcqt/shrfqAoiX3LDmYocR?backgroundColor=green"
        frameBorder="0"
        onWheel=""
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        title="Airtable Form"
      ></iframe>
        </div>

        <div className="md:w-[600px] ">
          <img className="w-full" src={interest} alt="In-house Cooking" />
        </div>
      </div>
      
   
   
   
    </div>
  );
}

export default InterestForm;
