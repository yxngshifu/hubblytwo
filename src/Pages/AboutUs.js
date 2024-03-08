import React from 'react'
import ourmission from '../Assets/ourmission.png';
import Navbar from '../Component/Navbar';
import phones from '../Assets/phones.png';
import Community from '../Assets/community.png';
import Footer from '../Component/Footer';
function AboutUs() {
  return (
     <div className='font-MuseoModerno '>
        <Navbar/>
        <div className='w-full relative font-MuseoModerno px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 2xl:px-80 text-center'>
        <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify ">
            <h1 className='text-black font-bold text-4xl px-16 md:px-32'>About Us</h1>
            <p className="px-16 py-4 md:px-32">
            <p className='font-bold'> Welcome to Hubbly, your go-to platform for convenient and reliable household services. </p>
At Hubbly, we understand the demands of modern life, which is why we're here to make your life easier by connecting you with skilled professionals for a range of home-related tasks.
            </p>
          </div>
          <div className="md:w-[400px] px-4 md:px-10">
            <img className="w-full" src={Community} alt="" />
          </div>
        </div>
      </div>
        <div className='bg-[#e0f7f9]'>
         <div className='w-full relative font-MuseoModerno px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 2xl:px-80 text-center'>
        <div className='px-4 lg:gap-0 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="md:w-full lg:w-[400px] px-4 md:px-10">
            <img className="w-full" src={ourmission} alt="Dog Walking" />
          </div>
          <div className="text-justify">
             <h1 className='text-[#048392]  text-sm px-4 md:px-10'>EXPLORE SERVICES</h1>
            <h1 className='text-black font-bold text-xl px-4 md:px-10'>Our Mission</h1>
            <p className="py-4 px-4 md:px-10 mb-4">
            Our mission at Hubbly is simple: to provide you with seamless access to a variety of essential household services, all in one convenient platform. Whether you need a dog walker, a home chef for in-house cooking, a meticulous cleaner, a dishwasher, or a hairstylist, Hubbly has you covered.
            </p>
          </div>
        </div>
      </div>
      </div>
      <div className="w-full px-10 md:px-20">
        <div className="items-center py-10 w-full md:py-16 md:px-8 lg:px-16 xl:px-32 ">
          
          <h1 className='text-black font-bold text-4xl text-center'>Why Choose Hubbly?</h1>
          
          </div>
           <div className='md:px-20 '>
      <div className=' flex overflow-x-auto py-4 md:py-8 px-4 md:px-10 mb-4  grid-cols-1 md:grid-cols-4 lg:px-40'>
        <div className='flex-shrink-0  flex flex-col items-center px-4 text-justify mx-4'>
           <div className=''>

            <p className='text-black'> <h2 className="font-bold  text-[#020202] ">Convenience:</h2> With Hubbly, booking household services has never been easier. Simply browse our selection of services, choose the one that suits your needs, and schedule an appointment at your convenience.</p>
          </div>
        </div>

        <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify mx-4'>
         <div>
           
            <p className='text-black'><h2 className="font-bold  text-[#020202] ">Quality:</h2> We carefully vet all of our service providers to ensure they meet our high standards of professionalism and expertise. You can trust that you'll receive top-quality service every time.</p>
          </div>
          
        </div>

        <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify mx-4'>
           <div>
     
            <p className='text-black'><h2 className="font-bold  text-[#020202] ">Reliability:</h2> At Hubbly, we understand the importance of reliability. You can count on us to arrive on time, every time, and to complete your service to your satisfaction</p>
          </div>
          
        </div>
         <div className='flex-shrink-0 flex flex-col items-center px-4 text-justify mx-4'>
           <div>
            <p className='text-black'><h2 className="font-bold  text-[#020202] ">Peace of mind:</h2> With Hubbly, you can enjoy peace of mind knowing that your household tasks are in capable hands. Sit back, relax, and let us handle the rest.</p>
          </div>
          
        </div>
      </div>
      </div>
 
      <div className='bg-[#e0f7f9] '>
          <div className='w-full relative font-MuseoModerno px-6 sm:px-8 md:px-10 lg:px-44 xl:px-44 2xl:px-80 text-center'>
        <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify ">
            <h1 className='text-black font-bold text-xl px-4 md:px-10'>Get Started Today</h1>
            <p className="px-4 py-4 md:px-10">
            Experience the convenience and quality of Hubbly's household services for yourself. Sign up now to browse our selection of services and book your first appointment. With Hubbly, taking care of your home has never been easier.
            </p>
          </div>
          <div className="md:w-[400px] px-4 md:px-10 py-10 md:py-20">
            <img className="w-full" src={phones} alt="In-house Cooking" />
          </div>
        </div>
      </div>
      </div>
      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-32 xl:px-64 2xl:px-80">
        <div className="items-center py-10 md:py-16">
          <h1 className='text-black font-bold text-4xl text-center'>Get a Mobile App</h1>
          <p className='py-2 px-4 md:px-10 text-justify'>
         Discover the convenience and user-friendly experience of our mobile app, now available for both iOS and Android devices. Download it today and enjoy a seamless and effortless way to access our services and stay connected with us.</p>
        </div>
      </div>
      <Footer/>
        </div>
        </div>
  )
}

export default AboutUs