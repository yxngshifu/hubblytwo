import React from 'react';
import Navbar from '../Component/Navbar';
import cooking from '../Assets/cooking.svg';
import dogwalking from '../Assets/dogwalking.svg';
import cleaning  from '../Assets/cleaning.svg';
import dishcleaning  from '../Assets/dishcleaning.png';
import hairmaking from '../Assets/hairmaking.png';
import Footer from '../Component/Footer';


function OurOfferings() {
  return (
    <div className='font-MuseoModerno'>
      <Navbar />
      <div className="w-full py-14 md:py-20 lg:py-30 px-20 md:px-40 lg:px-60 ">
        <div className="items-center py-10 md:py-16">
          <h1 className='text-black font-bold text-4xl text-center'>Our Offerings</h1>
          <p className='py-2  text-justify text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium '>
            Our team of experts is committed to delivering excellence in every service we offer. Whether you need help with house cleaning, dog walking, or in-house cooking, you can trust Hubbly to provide reliable and eco-friendly solutions tailored to your needs.
          </p>
        </div>
      </div>

      <div className='w-full relative font-MuseoModerno px-20 md:px-40 lg:px-40 text-center'>
        <div className='lg:gap-0 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="md:w-full lg:w-[400px] ">
            <img className="w-full" src={dogwalking} alt="Dog Walking" />
          </div>
          <div className="text-justify">
            <h1 className='text-black font-bold text-xl  '>Dog Walking</h1>
            <p className="py-4  mb-4 text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium">
              Ensure your furry friend gets the exercise they need with our trusted dog walking service. Our experienced dog walkers will keep your pet happy, healthy, and entertained with regular walks tailored to their needs.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full relative font-MuseoModerno px-20 md:px-40 lg:px-60  text-center'>
        <div className=' gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify ">
            <h1 className='text-black font-bold text-xl '>In-house Cooking</h1>
            <p className=" py-4 text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium">
              Experience the luxury of having a professional chef prepare delicious meals in the comfort of your own home. Our talented chefs will create mouthwatering dishes to suit your tastes and dietary preferences.
            </p>
          </div>
          <div className="md:w-[340px] px-4 ">
            <img className="w-full" src={cooking} alt="In-house Cooking" />
          </div>
        </div>
      </div>
       <div className='w-full relative font-MuseoModerno px-20 md:px-40 lg:px-40  text-center py-12'>
        <div className='lg:gap-0 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="md:w-full lg:w-[400px] ">
            <img className="w-full" src={cleaning} alt="Dog Walking" />
          </div>
          <div className="text-justify lg:px-20">
            <h1 className='text-black font-bold text-xl '>Home Cleaning</h1>
            <p className="py-4 mb-4 text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium">
            Relax and let us take care of the cleaning chores. Our dedicated cleaners will leave your home sparkling clean, allowing you to enjoy more free time for the things that matter most.
            </p>
          </div>
        </div>
      </div>
       <div className='w-full relative font-MuseoModerno px-20 md:px-40 lg:px-60  text-center'>
        <div className=' gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify ">
            <h1 className='text-black font-bold text-xl '>Dish Cleaning</h1>
            <p className="py-4  text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium">
              Say goodbye to dirty dishes piling up in the sink. Our reliable dishwashing service will ensure your kitchen remains spotless, with sparkling clean dishes ready for your next meal.
            </p>
          </div>
          <div className="md:w-[340px]">
            <img className="w-full" src={dishcleaning} alt="In-house Cooking" />
          </div>
        </div>
      </div>
      <div className='w-full relative font-MuseoModerno px-20 md:px-40 lg:px-00  text-center py-12'>
        <div className='lg:gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="md:w-full lg:w-[400px] ">
            <img className="w-full" src={hairmaking} alt="Dog Walking" />
          </div>
          <div className="text-justify lg:px-20">
            <h1 className='text-black font-bold text-xl '>Hair Making</h1>
            <p className="py-4 mb-4 text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium">
            Look and feel your best with our expert hairstyling services. Whether you need a trim, a blowout, or a complete style overhaul, our talented hairstylists will help you achieve the perfect look without ever leaving your home.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default OurOfferings;
