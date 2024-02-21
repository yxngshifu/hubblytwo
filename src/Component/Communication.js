import React from 'react'
import communicate from '../Assets/communicate.png'

function Communication() {
  return (
    <div className='w-full text-center relative font-MuseoModerno bg-[#e0f7f9] '>
        <div className="mx-auto flex flex-col items-center">
            <p className='py-10  text-[#048392] text-sm'>WHERE YOU ARE</p>
            <h1 className='font-bold text-xl text-black'>Convenient Communication</h1>
            <p>Chat or Talk with us your Favorite Messenger Platforms</p>
           <img className="w-[400px]  my-4 py-10 " src={communicate} alt="/" />
        </div>
    </div>
  )
}

export default Communication