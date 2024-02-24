import React from "react";
import { Link } from 'react-router-dom';
import Asset1 from '../Assets/Asset1.svg';
import Vector from '../Assets/Vector.png';

function Footer() {
  const VectorStyle = {
    backgroundImage: `url(${Vector})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    backgroundSize: 'cover'
  };

  return (
    <div className='w-full relative font-MuseoModerno text-center bg-[#048392]' style={VectorStyle}>
      <div className="h-1/2 flex flex-col md:flex-row justify-around items-start p-4 md:p-20">
        <div className="p-5">
          <Link to="/" className="mt-4 md:mt-0">
            <img className="w-[120px] mx-auto md:mx-8 flex items-center" src={Asset1} alt="/" />
            <p className="text-white mt-2">contact@hubbly.me</p>
          </Link>
        </div>
        <div className="p-5 text-white text-md pb-2 font-semibold">
          <ul>
            <li className="hover:text-black cursor-pointer">
              Current State
            </li>
            <li className="hover:text-black cursor-pointer">
              Our Green Formula
            </li>
            <li className="hover:text-black cursor-pointer">
              Why Book With Us
            </li>
            <li className="hover:text-black cursor-pointer">
              How It Works
            </li>
          </ul>
        </div>
        <div className="p-5 text-white text-md pb-2 font-semibold">
          <ul>
            <li className="hover:text-black cursor-pointer">
              Our Services
            </li>
            <li className="hover:text-black cursor-pointer">
              Our Philosophy
            </li>
            <li className="hover:text-black cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-black cursor-pointer">
              Sustainable Goals
            </li>
          </ul>
        </div>
        <div className="p-5 text-white text-md pb-2 font-semibold">
          <ul>
            <li className="hover:text-black cursor-pointer">
              Careers
            </li>
            <li className="hover:text-black cursor-pointer">
              Tradesmen
            </li>
            <li className="hover:text-black cursor-pointer">
              Testimonials
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-4">
        <h1 className="text-white font-semibold my-4">
          ©2024 Hubbly. All rights reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;
