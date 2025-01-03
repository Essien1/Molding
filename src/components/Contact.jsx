import React from 'react'

const Contact = () => {
    return (
        <div className='w-full py-11 text-black px-4 flex flex-col bg-gray-300'>
          <div className='max-w-[1240px] mx-auto '>
            <div className='lg:col-span-2 my-4 items-center justify-center'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                Ready to Build a Sustainable Future?
    
              </h1>
              <p className='md:text-4xl sm:text-3xl text-2xl font-semi-bold'>Let's build responsibly, together</p>
              {/* <p>Sign up to our newsletter and stay up to date.</p> */}
              
            </div>
            <div className='flex justify-center items-center'>
            <button className='bg-[#00df9a] text-black  rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                  Contact Us
                </button>
            </div>
           
            {/* <div className='my-4'>
              <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input
                  className='p-3 flex w-full rounded-md text-black'
                  type='email'
                  placeholder='Enter Email'
                />
                
              </div>
              <p>
                We care bout the protection of your data. Read our{' '}
                <span className='text-[#00df9a]'>Privacy Policy.</span>
              </p>
            </div> */}
          </div>
        </div>
      );
}

export default Contact
