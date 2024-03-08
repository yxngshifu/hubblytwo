import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo1 from '../Assets/logo1.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="font-MuseoModerno bg-transparent fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center mx-auto px-4 text-black">
        <ul className="space-x-4 text-black font-bold p-4 flex items-center ml-[-10px]">
          <Link to="/">
            <img className="w-[100px] mx-4 my-4 flex items-center" src={logo1} alt="/" />
          </Link>
          <li className="hidden md:block">
            <Link to="/aboutus">
              About Us
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/support">
              Goals We Support
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/hubblyworks">
              How Hubbly Works
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/ourofferings">
              Our Offerings
            </Link>
          </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            nav
              ? 'fixed left-0 top-16 w-full h-full bg-[#003049] text-white ease-in-out duration-500'
              : 'hidden'
          }
        >
          <Link to='/'>
            <h1 className='w-full font-bold text-3xl m-4 text-[#048392] hidden md:block'>HUBBLY</h1>
          </Link>

          {nav && (
            <ul className='flex-col w-full space-y-12 text-white font-bold p-4 items-center'>
              <li>
                <Link to="/aboutus">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/support">
                  Goals we support
                </Link> 
              </li>
              <li className="">
                <Link to="/hubblyworks">
                  How Hubbly Works
                </Link>
              </li>
              <li className="">
                <Link to="/ourofferings">
                  Our Offerings
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
