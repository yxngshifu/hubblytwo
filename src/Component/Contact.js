import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='font-MuseoModerno px-20 py-20 lg:py-20 py-10 md:px-20 lg:px-40 text-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-black justify-between items-center'>
          <div>
            <p>We would love to hear from you</p>
            <h1 className='text-black font-bold text-2xl'>Contact Us</h1>
            <p className="py-4 text-justify">
              We value your feedback and are committed to providing you with the best possible service. Don't hesitate to reach out to us with any questions or concerns. We look forward to hearing from you! Fill out the form below with your details and message, and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className='py-6 lg:py-20'>
            <form className="mb-4 ">
              <div className="mb-4 flex">
                <div className="flex-1 mr-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Name:
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
                    Email:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]" 
                  />
                </div>
              </div>
              <div className="flex-1 ml-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                  cols='8'
                  rows='10'
                  placeholder='Type something'
                  className='resize-none border rounded w-full h-[150px] border-[#C3BDBD] focus:border-gray-400 outline-none p-2 bg-[#e0f7f9]'
                ></textarea>
              </div>
              <button
                type="Sign up"
                className="bg-[#048392] text-white p-2 mt-4 rounded-md hover:bg-blue-700 cursor-pointer w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
