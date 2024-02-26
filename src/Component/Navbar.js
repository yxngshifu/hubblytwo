
import React, { useState,useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo1 from '../Assets/logo1.svg';
import { Link } from 'react-router-dom';





const Navbar = () => {
    const [nav, setNav] = useState(false);

   

    const handleNav = () => {
        setNav(!nav);
    };

    return (
          
        <div className="  font-MuseoModerno bg-transparent  flex justify-between items-center    mx-auto px-4 text-black ">
             <Link to="/">
                <img className="w-[100px] mx-4 my-4 flex items-center" src={logo1} alt="/" />
               </Link>


            <ul className="space-x-4 text-black font-bold p-4 flex items-center">
              <li>
            <Link to="/support">
              Goals we support
            </Link>
          </li>
    </ul>
         {/* </li>
          <li>
            About Us
          </li>
          <li>
            Our Offerings
          </li>
          <li>
            How Hubbly Works
          </li>
          */}
            <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#f5ebe0] bg-opacity-90 ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <Link to='/'>
          <h1 className='w-full font-bold text-3xl m-4 text-[#048392]'>HUBBLY</h1>
        </Link>

        {/* Reverted back to a vertical list */}
        <ul className='flex-col space-y-4 text-black font-bold p-4 items-center'>
          <li>About Us</li>
          <li>Our Offerings</li>
          <li>How Hubbly Works</li>
          <li>
            <Link to='/support'>Goals we support</Link>
          </li>
        </ul>
      </div>
        </div>
    
    );
};

export default Navbar;