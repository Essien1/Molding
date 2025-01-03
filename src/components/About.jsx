import React from 'react'
import plant from '../assets/plant.jpg';


const About = () => {
    return (
        <div className='w-full bg-white py-16 px-6'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 object-cover' src={plant} alt='/' />
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold px-3 '>OUR STORY</p>
              <h1 className='md:text-[25px] sm:text-3xl text-2xl font-bold p-2'>Build Better,Build Greener</h1>
              <p className='px-3'>
                We are at the forefront of the constructon industry, Pioneering the development of carbon-negative concrete solutions,
                our commiment is not just to build structures but build a cleaner, greener future for generations to come
              </p>
              {/* <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button> */}
            </div>
          </div>
        </div>
      );
}

export default About
