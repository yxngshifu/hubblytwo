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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='w-full relative px-10 md:px-30  font-MuseoModerno text-center bg-[#048392]' style={VectorStyle}>
      <div className="h-1/2 flex flex-col md:flex-row justify-around items-start  p-4 md:p-10">
        <div className="p-5">
          <Link to="/" className="mt-4 md:mt-0" onClick={scrollToTop}>
            <img className="w-[120px] mx-auto md:mx-8 flex items-center" src={Asset1} alt="/" />
            <p className="text-white mt-2">contact@hubbly.me</p>
          </Link>
        </div>
        <div className="p-5 text-white text-md pb-2 font-semibold text-justify">
          <ul>
            <li className="hover:text-black cursor-pointer">
               <Link to="/aboutus"onClick={scrollToTop}>
              About Us
               </Link>
            </li>
            <Link to="/greenmaker"onClick={scrollToTop}>
            <li className="hover:text-black cursor-pointer">
             What makes Us Green?
            </li>
            </Link>
            <Link to="/choose"onClick={scrollToTop}>
            <li className="hover:text-black cursor-pointer">
              Why Choose Us
            </li>
            </Link>

              <Link to="/hubblyworks"onClick={scrollToTop}>
            <li className="hover:text-black cursor-pointer">
              How It Works
            </li>
            </Link>
          </ul>
        </div>
        <div className="p-5 text-white text-md pb-2 font-semibold text-justify">
          <ul>
            <li className="hover:text-black cursor-pointer">
               <Link to="/ourofferings">
              Our Offerings
              </Link>
            </li>
            <li className="hover:text-black cursor-pointer">
                 <Link to="/contact"onClick={scrollToTop}>
              Contact Us
              </Link>
            </li>
            <li className="hover:text-black cursor-pointer">
               <Link to="/support"onClick={scrollToTop}>
              Sustainable Goals
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5 text-white text-md pb-2 font-semibold text-justify">
          <ul>
            <li className="hover:text-black cursor-pointer">
              Testimonials
            </li>
            <li className="hover:text-black cursor-pointer">
               <Link to="/interestform"onClick={scrollToTop}>
              Join Hubbly Community
              </Link>
            </li>
             <li className="hover:text-black cursor-pointer">
               <Link to="/privacy"onClick={scrollToTop}>
              Privacy Policy
              </Link>
            </li>
            <li className="hover:text-black cursor-pointer">
              <Link to="/terms"onClick={scrollToTop}>
              Terms & Condtions
              </Link>
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
