import React from 'react'
import communicate from '../Assets/communicate.png'

function Collaborators() {
  return (
    <div className='w-full text-center relative font-MuseoModerno  '>
        <div className="mx-auto flex flex-col items-center">
            <p className='  text-[#048392] text-sm py-10'>STRONG PARTNERSHIPS</p>
            <h1 className='font-bold text-xl text-black'>Our Collaborations</h1>
            <p>Join Hubbly and our partners on our journey towards a better future</p>
           <img className="w-[400px]  my-4 py-10 " src={communicate} alt="/" />
        </div>
    </div>
  )
}

export default Collaborators