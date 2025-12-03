import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
         <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between  ">
        <h2 className="bg-white text-2xl h-12 w-12 rounded-full flex justify-center items-center font-semibold">
            {props.id}</h2>
        <div>
          <p className="text-shadow-2xs text-xl leading-relaxed text-white mb-14 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            libero repellendus doloremque aliquam laborum.
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white rounded-full px-8 py-2 font-medium">{props.tags}</button>
            <button style={{backgroundColor:props.color}} className=" text-white rounded-full px-4 py-2 font-medium"><i className="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent