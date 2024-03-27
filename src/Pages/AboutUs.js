import React from 'react'
import ourmission1 from '../Assets/ourmission1.svg';
import Navbar from '../Component/Navbar';
import doublephone from '../Assets/doublephone .png';
import hubbleegroup from '../Assets/hubbleegroup.png';
import appstore from '../Assets/appstore.png';
import playstore from '../Assets/playstore.png';
import Footer from '../Component/Footer';
function AboutUs() {
  return (
     <div className='font-MuseoModerno w-full'>
        <Navbar/>
        <div className='w-full relative py-20 font-MuseoModerno px-20  md:px-40 lg:px-60 xl:px-40 2xl:px-80 text-center'>
        <div className=' gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify lg:py-40 ">
            <p className='font-bold font-Raleway text-[#048392]'>PROVIDING HOME SERVICES</p>
            <h1 className='text-black font-bold text-4xl '>About Us</h1>
            
            <p className='font-bold font-Raleway py-4 text-md md:text-lg   lg:text-xl xl:text-2xl'> Welcome to Hubbly, your go-to platform for convenient and reliable household services. </p>
<p className="  text-[#494D4D] font-Raleway text-md md:text-lg  lg:text-xl xl:text-2xl">At Hubbly, we understand the demands of modern life, which is why we're here to make your life easier by connecting you with skilled professionals for a range of home-related tasks.
            </p>
          </div>
          <div className="md:w-[250px] lg:w-[400px] ">
            <img className="w-full" src={hubbleegroup} alt="" />
          </div>
        </div>
      </div>
        <div className='bg-[#e0f7f9] w-full'>
         <div className=' relative font-MuseoModerno py-10  text-center px-20 md:px-40 lg:px-40'>
        <div className='  text-black  justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="md:w-[200px] lg:w-[400px]  ">
            <img className="w-full" src={ourmission1} alt="Dog Walking" />
          </div>
          <div className="text-justify lg:px-20">
             <h1 className='text-[#048392] font-bold font-Raleway text-sm '>EXPLORE SERVICES</h1>
            <h1 className='text-black font-bold text-xl '>Our Mission</h1>
            <p className="py-4 mb-2  text-[#494D4D] font-medium font-Raleway text-md md:text-lg  lg:text-xl xl:text-2xl">
            Our mission at Hubbly is simple: to provide you with seamless access to a variety of essential household services, all in one convenient platform. Whether you need a dog walker, a home chef for in-house cooking, a meticulous cleaner, a dishwasher, or a hairstylist, Hubbly has you covered.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="w-full px-20 md:px-20">
        <div className="items-center py-10 w-full md:py-16  ">
          
          <h1 className='text-black font-bold text-4xl text-center'>Why Choose Hubbly?</h1>
          
          </div>
  <div className=' flex overflow-x-auto  md:py-8  md:px-32 mb-4  grid-cols-1 md:grid-cols-3 lg:px-40'>
        <div className='    lg:gap-10 text-black w-full  justify-between  gap-8  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2 ' >
          <div className=''>

            <p className='text-[#494D4D] text-md md:text-lg  lg:text-xl xl:text-2xl font-Raleway font-medium '> <h2 className="font-bold  text-[#020202] ">Convenience:</h2> With Hubbly, booking household services has never been easier. Simply browse our selection of services, choose the one that suits your needs, and schedule an appointment at your convenience.</p>
          </div>
          <div>
           
            <p className='text-[#494D4D] text-md md:text-lg  lg:text-xl xl:text-2xl font-Raleway font-medium  '><h2 className="font-bold  text-[#020202] ">Quality:</h2> We carefully vet all of our service providers to ensure they meet our high standards of professionalism and expertise. You can trust that you'll receive top-quality service every time.</p>
          </div>
          <div>
     
            <p className='text-[#494D4D] text-md md:text-lg  lg:text-xl xl:text-2xl font-Raleway font-medium '><h2 className="font-bold  text-[#020202] ">Reliability:</h2> At Hubbly, we understand the importance of reliability. You can count on us to arrive on time, every time, and to complete your service to your satisfaction</p>
          </div>
          <div>
            <p className='text-[#494D4D] text-md md:text-lg  lg:text-xl xl:text-2xl font-Raleway font-medium '><h2 className="font-bold  text-[#020202] ">Peace of mind:</h2> With Hubbly, you can enjoy peace of mind knowing that your household tasks are in capable hands. Sit back, relax, and let us handle the rest.</p>
          </div>
          </div>
         <div className='py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10'></div>
        </div>
      </div>
      <div className='bg-[#e0f7f9] '>
          <div className='w-full relative font-MuseoModerno px-20 md:px-40 lg:px-40 text-justify'>
        <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify py-8 lg:px-20 ">
            <h1 className='text-black font-bold text-4xl  '>Get Started Today</h1>
            <p className=" py-2 text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium ">
            Experience the convenience and quality of Hubbly's household services for yourself. Sign up now to browse our selection of services and book your first appointment. With Hubbly, taking care of your home has never been easier.
            </p>
          </div>
          <div className="md:w-[200px]  py-10 ">
            <img className="w-full" src={doublephone} alt="In-house Cooking" />
          </div>
        </div>
      </div>
      </div>
     <div className="w-full px-20 md:px-40 lg:px-60">
  <div className="items-center py-10 md:py-16">
    <h1 className='text-black font-bold text-xl md:text-4xl text-center'>Get a Mobile App</h1>
    <p className='py-2 text-justify text-[#494D4D] font-Raleway font-medium text-md md:text-lg  lg:text-xl xl:text-2xl '>
      Discover the convenience and user-friendly experience of our mobile app, now available for both iOS and Android devices. Download it today and enjoy a seamless and effortless way to access our services and stay connected with us.
    </p>
  </div>

  <div className='text-black w-full flex justify-center'>
    <div className="md:w-[200px] py-4 mx-2">
      <img className="w-full" src={appstore} alt="In-house Cooking" />
    </div>
    <div className="md:w-[200px] py-4 mx-2">
      <img className="w-full" src={playstore} alt="In-house Cooking" />
    </div>
  </div>
</div>
      <Footer/>
        </div>
  )
}

export default AboutUs