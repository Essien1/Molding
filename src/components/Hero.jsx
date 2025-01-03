import React from 'react'
// import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[1240px] mt-[-96px] w-full h-[600px] mx-auto flex flex-col justify-center px-8'>
        {/* <p className='text-[#00df9a] font-bold p-2'>
          Building a sustainable future
        </p> */}
        <h1 className='md:text-[45px] sm:text-6xl text-[20px] font-bold md:py-4 mt-11'>
        Building a Sustainable Future
        </h1>
        <div className='flex  '>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3'>
            One Block at a Time

          </p>
          {/* <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        <p className='md:text-[10px ] text-sm font-bold text-gray-400 '>At BlockHaven innovatons, we are not just revolutionizing constructon, we are redefining sustability. <br/>
            Our cutting way technology is paving the way for greener , more resilient future with <br/> carbon-negative concrete
        </p>
        <div className='text-start items-start'>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '>Contact Us</button>

        </div>
      </div>
    </div>
  )
}

export default Hero
