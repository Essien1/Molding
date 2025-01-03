import React from 'react'
import dispatch from '../assets/dispatch.jpg'
import build from '../assets/build.jpg'
import build2 from '../assets/build2.jpg'
import house from '../assets/house.jpg'




const Photo = () => {
    return (
        <div className="max-w-[1400px] mx-auto py-[10px] md:py-[40px] px-4 text-white">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl text-center">
              <span className="italic text-[#00df9a]">Experience</span> The magic
            </h1>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 py-11">
            <div>
              <img
                className="object-cover rounded-lg"
                src={build}
                alt=""
              />
              {/* <h3 className="font-bold text-xl py-2">Drive-Thru</h3> */}
              {/* <p className="pb-2">
                Get up-close to elusive animals while <br /> driving through the
                park.
              </p> */}
            </div>
            <div>
              <img
                className="object-cover rounded-lg w-full h-[15.7rem "
                src={dispatch}
                // src="https://images.unsplash.com/photo-1627981440910-552a0b1d7450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2FsayUyMHRocnUlMjBpbiUyMGElMjB6b298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              {/* <h3 className="font-bold text-xl py-2">Walk-Thru</h3>
              <p className="pb-2">
                Stroll through our park exhibits with <br /> hands-on experiences.
              </p> */}
            </div>
            <div>
              <img
                className="object-cover rounded-lg"
                src={build2}
                alt=""
              />
              {/* <h3 className="font-bold text-xl py-2">Animal Encounter</h3>
              <p className="pb-2">
                Enjoy unique experiences with animal ambassadors in our Walk-Thru
                Fort.
              </p> */}
            </div>
            <div>
              <img
                className="object-cover rounded-lg"
                src={house}
                alt=""
              />
              {/* <h3 className="font-bold text-xl py-2">Dining</h3>
              <p className="pb-2">Dine in our themed restaurant, ZIMS Restaurant.</p> */}
            </div>
          </div>
         
        </div>
      );
}

export default Photo
