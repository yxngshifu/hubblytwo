import React from 'react';
import Navbar from '../Component/Navbar';
import cooking from '/Users/shifu/hubblytwo/src/Assets/cooking.svg';
import dogwalking from '/Users/shifu/hubblytwo/src/Assets/dogwalking.svg';
import cleaning  from '/Users/shifu/hubblytwo/src/Assets/cleaning.svg';
import dishcleaning  from '/Users/shifu/hubblytwo/src/Assets/dishcleaning.png';
import hairmaking from '/Users/shifu/hubblytwo/src/Assets/hairmaking.png';
import Footer from '../Component/Footer';


function OurOfferings() {
  return (
    <div className='font-MuseoModerno'>
      <Navbar />
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 2xl:px-80">
        <div className="items-center py-10 md:py-16">
          <h1 className='text-black font-bold text-4xl text-center'>Our Offerings</h1>
          <p className='py-2 px-4 md:px-10 text-justify'>
            Our team of experts is committed to delivering excellence in every service we offer. Whether you need help with house cleaning, dog walking, or in-house cooking, you can trust Hubbly to provide reliable and eco-friendly solutions tailored to your needs.
          </p>
        </div>
      </div>

      <div className='w-full relative font-MuseoModerno px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 2xl:px-80 text-center'>
        <div className='px-4 lg:gap-0 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="md:w-full lg:w-[400px] px-4 md:px-10">
            <img className="w-full" src={dogwalking} alt="Dog Walking" />
          </div>
          <div className="text-justify">
            <h1 className='text-black font-bold text-xl px-4 md:px-10'>Dog Walking</h1>
            <p className="py-4 px-4 md:px-10 mb-4">
              Ensure your furry friend gets the exercise they need with our trusted dog walking service. Our experienced dog walkers will keep your pet happy, healthy, and entertained with regular walks tailored to their needs.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full relative font-MuseoModerno px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 2xl:px-80 text-center'>
        <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify ">
            <h1 className='text-black font-bold text-xl px-4 md:px-10'>In-house Cooking</h1>
            <p className="px-4 py-4 md:px-10">
              Experience the luxury of having a professional chef prepare delicious meals in the comfort of your own home. Our talented chefs will create mouthwatering dishes to suit your tastes and dietary preferences.
            </p>
          </div>
          <div className="md:w-[340px] px-4 md:px-10">
            <img className="w-full" src={cooking} alt="In-house Cooking" />
          </div>
        </div>
      </div>
       <div className='w-full relative font-MuseoModerno px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 2xl:px-80 text-center py-12'>
        <div className='px-4 lg:gap-0 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="md:w-full lg:w-[400px] px-4 md:px-10">
            <img className="w-full" src={cleaning} alt="Dog Walking" />
          </div>
          <div className="text-justify">
            <h1 className='text-black font-bold text-xl px-4 md:px-10'>Home Cleaning</h1>
            <p className="py-4 px-4 md:px-10 mb-4">
            Relax and let us take care of the cleaning chores. Our dedicated cleaners will leave your home sparkling clean, allowing you to enjoy more free time for the things that matter most.
            </p>
          </div>
        </div>
      </div>
       <div className='w-full relative font-MuseoModerno px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 2xl:px-80 text-center'>
        <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="text-justify ">
            <h1 className='text-black font-bold text-xl px-4 md:px-10'>Dish Cleaning</h1>
            <p className="px-4 py-4 md:px-10">
              Say goodbye to dirty dishes piling up in the sink. Our reliable dishwashing service will ensure your kitchen remains spotless, with sparkling clean dishes ready for your next meal.
            </p>
          </div>
          <div className="md:w-[340px] px-4 md:px-10">
            <img className="w-full" src={dishcleaning} alt="In-house Cooking" />
          </div>
        </div>
      </div>
      <div className='w-full relative font-MuseoModerno px-4 sm:px-6 md:px-8 lg:px-40 xl:px-40 2xl:px-80 text-center py-12'>
        <div className='px-4 lg:gap-0 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
          <div className="md:w-full lg:w-[400px] px-4 md:px-10">
            <img className="w-full" src={hairmaking} alt="Dog Walking" />
          </div>
          <div className="text-justify">
            <h1 className='text-black font-bold text-xl px-4 md:px-10'>Hair Making</h1>
            <p className="py-4 px-4 md:px-10 mb-4">
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
