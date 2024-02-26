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
    <div className="font-MuseoModerno bg-transparent flex justify-between items-center mx-auto px-4 text-black">

      <ul className="space-x-4 text-black font-bold p-4 flex items-center ml-[-10px]">
        <Link to="/">
          <img className="w-[100px] mx-4 my-4 flex items-center" src={logo1} alt="/" />
        </Link>

        {/* Render "Goals we support" link only on larger screens */}
        <li className="hidden md:block">
          <Link to="/support">
            Goals we support
          </Link>
        </li>
      </ul>

      {/* Render toggle button */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Render toggle menu only on smaller screens */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#f5ebe0] bg-opacity-100 ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <Link to='/'>
          <h1 className='w-full font-bold text-3xl m-4 text-[#048392]'>HUBBLY</h1>
        </Link>

        {/* Reverted back to a vertical list */}
        {nav && (
          <ul className='flex-col space-y-4 text-black font-bold p-4 items-center'>
            {/* Render "Goals we support" link only inside the toggle menu */}
            <li>
              <Link to="/support">
            Goals we support
          </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
