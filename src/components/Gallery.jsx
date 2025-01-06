import React from 'react'
import caleb1 from "../assets/caleb1.jpg"
import caleb2 from "../assets/caleb2.jpg"
import caleb3 from "../assets/caleb3.jpg"
import caleb4 from "../assets/caleb4.jpg"
import caleb5 from "../assets/caleb5.jpg"
import plant from "../assets/plant.jpg"
import dispatch from "../assets/dispatch.jpg";
import build from "../assets/build.jpg";
import build2 from "../assets/build2.jpg";



const Gallery = () => {
 
const images = [caleb1, dispatch, caleb2,build, caleb3, build2, caleb4, caleb5,plant ];


  return (
    <div className="min-h-screen bg-gray-100 p-6">
       <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1 }`}
            className='w-full object-cover h-[400px] rounded-lg shadow-md'
            />
          ))}
       </div>
    </div>
  )
}

export default Gallery;
