import React from 'react'
import Navbar from './Navbar'
import car from '../Assets/car.png'
import Footer from './Footer'
import ecofriendly from '../Assets/ecofriendly.svg'
import ladder from '../Assets/ladder.svg'
import recycle from '../Assets/recycle.svg'
import fan from '../Assets/fan.svg'
import initiatehero from '../Assets/initiatehero.jpeg'
function Initiative() {
     const bgimage = {
    backgroundImage: `url(${initiatehero})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    backgroundSize: 'cover',
  };
  return (
    <div>
        <Navbar/>
        <div className='w-full relative font-MuseoModerno text-center items-center' style={bgimage}>
      <div className='py-20 md:py-20 px-20 text-center items-center lg:py-20'>
        <div className='max-w-screen-lg mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8'>
            <div className='text-black text-md md:text-lg lg:py-12 md:px-40 lg:px-10 lg:text-xl xl:text-2xl'>
                <p className='text-[#048392] text-sm'>Building a Sustainable Future</p>
              <h1 className='text-black md:text-2xl lg:text-2xl font-bold text-3xl mb-4'>Hubbly's Green Initiatives</h1>
              <p className='text-justify '>
               Welcome to Hubbly, where sustainability is at the heart of everything we do. We're dedicated to creating a greener, healthier planet through our commitment to sustainable practices. Explore how Hubbly is leading the way in promoting environmental responsibility across all our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
         <div className='w-full relative font-MuseoModerno md:px-20 py-8 lg:px-60 px-10 text-center'>
      <div className='px-10  gap-2    text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className=" md:w-[400px] w-[600px]  lg:w-[400px] px-10  my-4" src={ecofriendly} alt="/" />
        </div>
        <div className="text-justify">
            <h1 className='text-black font-bold text-3xl px-10 '>Eco-Friendly Cleaning Services</h1>
              <p className='text-[#048392] text-sm  px-10  '>Cleaner Homes,Healthier Planet</p>
      
  <p className="py-2 md:py-6 lg:px-10 px-4 md:px-10 mb-4">
   We use environmentally friendly cleaning products that are free from harmful chemicals. Our green cleaning practices ensure a safe and healthy environment for our customers while minimizing our ecological footprint.
  </p>
</div>

      </div>
    </div>
    <div className='w-full text-justify relative font-MuseoModerno md:px-40 py-8 lg:px-60 px-10  bg-[#e0f7f9]'>
     
      <div className='px-4  gap-6  lg:px-20   lg:gap-8 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
       <div>
    
      <h1 className='text-black font-bold text-3xl px-10 '>Green transportation Solutions</h1>
           <p className='text-[#048392] text-sm   '>Delivering Sustainaibility, One Ride At A Time</p>
      <p className="py-2 md:py-6 lg:px-10 px-4 md:px-10 mb-4">
       Hubbly prioritizes eco-friendly transportation options for our services. From electric vehicles for house cleaning appointments to bike couriers for deliveries, we're reducing emissions and promoting sustainable mobility.
     </p>
          </div>

       <div>
          <img className=" md:w-[400px] lg:w-[400px] px-10  my-4" src={car} alt="/" />
        </div>
    </div>
    </div>


       <div className='w-full relative  font-MuseoModerno md:px-20 py-8 lg:px-60 px-10 text-center'>
      <div className='px-10  gap-2    text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className=" md:w-[400px] w-[600px]  lg:w-[400px] px-10  my-4" src={ladder} alt="/" />
        </div>
        <div className="text-justify">
            <h1 className='text-black font-bold text-3xl px-10 '>Energy-Efficient Home Repairs</h1>
              <p className='text-[#048392] text-sm px-10  '>Building homes that conserve energy</p>
      
  <p className="py-2 md:py-6  lg:px-10 px-4 md:px-10 mb-4">
  When it comes to home repairs and maintenance, we emphasize energy efficiency. Our technicians are trained to install energy-saving appliances and implement energy-efficient solutions, helping homeowners reduce their energy consumption and lower their carbon footprint.
  </p>
</div>

      </div>
    </div>

     <div className='w-full relative font-MuseoModerno md:px-40 py-8 lg:px-60 px-10 text-center bg-[#e0f7f9]'>
     
      <div className='px-4  gap-6  lg:px-20   lg:gap-8 text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
       <div>
    
      <h1 className='text-black font-bold text-3xl px-10 '>Recycling and Waste Management</h1>
           <p className='text-[#048392] text-sm   '>Turning waste into a resource.</p>
      <p className="py-2 md:py-6 lg:px-10 px-4 md:px-10 mb-4">
      We're committed to responsible waste management practices. Whether it's recycling materials from renovation projects or disposing of waste in an environmentally friendly manner, Hubbly ensures that every effort is made to minimize waste and promote recycling.
     </p>
          </div>

       <div>
          <img className=" md:w-[400px] lg:w-[400px] px-10  my-4" src={recycle} alt="/" />
        </div>
    </div>
    </div>


       <div className='w-full relative font-MuseoModerno md:px-20 py-8 lg:px-60 px-10 text-center'>
      <div className='px-10  gap-2    text-black w-full  justify-between items-center  md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
          <img className=" md:w-[400px] w-[600px]  lg:w-[400px] px-10  my-4" src={fan} alt="/" />
        </div>
        <div className="text-justify">
            <h1 className='text-black font-bold text-3xl px-10 '>Our Green Commitment</h1>
              <p className='text-[#048392] text-sm px-10  '>Building homes that conserve energy</p>
      
  <p className="py-2 md:py-6 lg:px-10 px-4 md:px-10 mb-4">
  At Hubbly, sustainability isn't just a buzzword—it's a way of life. We're dedicated to integrating eco-friendly practices into every aspect of our business, from service delivery to customer satisfaction. By choosing Hubbly, you're not just getting exceptional service; you're also supporting a company that cares deeply about the planet.
  </p>
</div>

      </div>
    </div>
        <Footer/>
    </div>
  )
}

export default Initiative