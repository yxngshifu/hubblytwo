import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import mail from '../Assets/mail.png'
import x from '../Assets/x.png'
import phone from '../Assets/phone.png'
import ig from '../Assets/ig.png'

function Contact() {
  const [status, setStatus] = useState("Submit");


  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  // Access form elements by their IDs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  let details = { 
    name: name,
    email: email,
    message: message,
  };

  try {
    let response = await fetch("https://api.hubbly.me/index.php/api/v1/web/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    setStatus("Sent");
    let result = await response.json();
    alert("Form successfully submitted");
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    setStatus("Submit");
    alert("Failed to submit the form. Please try again.");
  }
  };
  return (
    <div>
      <Navbar />
      <div className=' px-20 py-20 lg:py-20  md:px-20 lg:px-40 text-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-black justify-between items-center'>
          <div>
            <p className='text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium'>We would love to hear from you</p>
            <h1 className='text-black font-bold text-2xl'>Contact Us</h1>
            <p className="py-4 text-justify text-md md:text-lg  lg:text-xl xl:text-2xl text-[#494D4D] font-Raleway font-medium">
              We value your feedback and are committed to providing you with the best possible service. Don't hesitate to reach out to us with any questions or concerns. We look forward to hearing from you! Fill out the form below with your details and message, and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className='py-6 lg:py-20'>
            <form  onSubmit={handleSubmit} className="mb-4 ">
              <div className="mb-4 flex">
                <div className="flex-1 mr-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]"
                  />
                </div>
                <div className="flex-1 ml-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md bg-[#e0f7f9]" 
                  />
                </div>
              </div>
              <div className="flex-1 ml-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message:
                </label>
                <textarea
                id='message'
                  cols='8'
                  rows='10'
                  placeholder='Type something'
                  className='resize-none border rounded w-full h-[150px] border-[#C3BDBD] focus:border-gray-400 outline-none p-2 bg-[#e0f7f9]'
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#048392] text-white p-2 mt-4 rounded-md hover:bg-blue-700 cursor-pointer w-full"
              >
                     {status}
              </button>
            </form>
          </div>
          
        </div>
      </div>
     
       <div className=" flex flex-wrap justify-center items-center font-black">
      <a href="mailto:Hubbly.me@gmail.com" className="flex flex-col items-center hover:text-blue-700 mr-20 mb-4">
        <img className="w-20 h-20 mr-2" src={mail} alt="/" /> <span>Hubbly.me@gmail.com</span>
      </a>
      <a href="tel:+447364758602" className="flex flex-col items-center  hover:text-blue-700 mr-20 mb-4">
        <img className="w-20 h-20  mr-2" src={phone} alt="/" /> <span> +447364758602</span>
      </a>
      <a href="https://www.instagram.com/hubbly.me?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex flex-col  items-center  hover:text-blue-700 mr-20 mb-4">
        <img className="w-20 h-20  mr-2" src={ig} alt="/" /><span> @hubbly.me</span>
      </a>
      <a href="https://x.com/hubbly_me" target="_blank" rel="noopener noreferrer" className="flex flex-col  items-center  hover:text-blue-700 mr-20 mb-4">
        <img className="w-20 h-20 mr-2" src={x} alt="/" /> <span>X</span>
      </a>
     
    </div>
      <Footer />
    </div>
  );
}

export default Contact;
