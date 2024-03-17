import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo1 from '../Assets/logo1.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      if (!isTop) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`font-MuseoModerno bg-transparent fixed top-0 left-0 right-0 z-10 ${nav ? 'hidden' : ''}`}>
      <div className="flex justify-between items-center mx-auto px-4 text-black">
        <ul className="space-x-4 text-black font-bold p-4 flex items-center ml-[-10px]">
          <Link to="/" onClick={scrollToTop}>
            <img className="w-[100px] mx-4 my-4 flex items-center" src={logo1} alt="/" />
          </Link>
          <li className="hidden md:block hover:text-[#2a9d8f] cursor-pointer">
            <Link to="/aboutus" onClick={scrollToTop}>
              About Us
            </Link>
          </li>
          <li className="hidden md:block hover:text-[#2a9d8f] cursor-pointer">
            <Link to="/support" onClick={scrollToTop}>
              Goals We Support
            </Link>
          </li>
          <li className="hidden md:block hover:text-[#2a9d8f] cursor-pointer">
            <Link to="/hubblyworks" onClick={scrollToTop}>
              How Hubbly Works
            </Link>
          </li>
          <li className="hidden md:block hover:text-[#2a9d8f] cursor-pointer">
            <Link to="/ourofferings" onClick={scrollToTop}>
              Our Offerings
            </Link>
          </li>
        </ul>

        <div onClick={handleMobileNav} className="block md:hidden" style={{ color: 'black', cursor: 'pointer' }}>
          {mobileNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {mobileNav && (
          <div className="fixed left-0 top-16 w-full h-full bg-[#003049] text-white ease-in-out duration-500">
            <Link to='/' onClick={scrollToTop}>
              <h1 className='w-full font-bold text-3xl m-4 text-[#048392]'>HUBBLY</h1>
            </Link>

            <ul className='flex-col w-full space-y-12 text-white font-bold p-4 items-center'>
              <li>
                <Link to="/aboutus" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/support" onClick={scrollToTop}>
                  Goals we support
                </Link> 
              </li>
              <li>
                <Link to="/hubblyworks" onClick={scrollToTop}>
                  How Hubbly Works
                </Link>
              </li>
              <li>
                <Link to="/ourofferings" onClick={scrollToTop}>
                  Our Offerings
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
