import React from 'react'

const RightCardContent = () => {
  return (
    <div>
              <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between  ">
        <h2 className="bg-white text-2xl h-14 w-14 rounded-full flex justify-center items-center font-semibold">1</h2>
        <div>
          <p className="text-xl leading-normal text-black mb-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            libero repellendus doloremque aliquam laborum.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white rounded-full px-8 py-2 font-medium">Satisfied</button>
            <button className="bg-blue-500 text-white rounded-full px-4 py-2 font-medium"><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent