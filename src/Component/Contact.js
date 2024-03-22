import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
  return (
    <div>
        <Navbar/>
        <div className='w-full relative font-MuseoModerno px-20 lg:py-40  md:px-40 lg:px-60 text-center'>
      <div className='px-4 gap-8 text-black w-full justify-between items-center md:flex-row flex-col grid grid-cols-1 md:grid-cols-2'>
        <div>
            <p>We would love to hear from you</p>
                      <h1 className='text-black font-bold text-2xl '>Contact Us</h1>
                      <p className="py-4 text-justify ">
                        We value your feedback and are committed to providing you with the best possible service. Don't hesitate to reach out to us with any questions or concerns. We look forward to hearing from you!
                        Fill out the form below with your details and message, and we'll get back to you as soon as possible.
            </p>     
              </div>
               <div>
                        <form className="mb-4 ">
            <div className="mb-4 flex">
              <div className="flex-1 mr-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]"
                />
              </div>
              <div className="flex-1 ml-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]" 
                />
              </div>
              </div>
              <button
              type="Sign up"
              className="bg-[#048392] text-white p-2 mt-4 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Submit
            </button>
              </form>
              </div>
              </div>
              </div>
              <Footer/>
              </div>
  )
}

export default Contact