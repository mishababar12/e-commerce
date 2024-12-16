import React from 'react'
import Image from 'next/image'
import b from "../../../public/b.png"

export default function Dnt() {
  return (

    <div className="w-full min-h-screen bg-myWhite flex justify-center items-start">
    <div className='w-[90%] lg:mt-16 md:mt-16'>
    
    <p className="text-2xl font-semibold mb-8 text-black">Dont Miss</p>
    
    {/* Image div */}
    <div className="w-full h-[700px]">
    <Image src={b} alt={"image&amp;apos;"} width={1344} height={700} className="object-cover w-full h-full" />
    </div>
    <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
            <h2 className=" text-6xl font-medium uppercase"> FLIGHT ESSENTIALS</h2>
            <p className="text-md leading-5 w-[60%] pt-3 pb-2 text-center">
            Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </p>
            
          </div>
    {/* Button below the new div */}
<div className="flex justify-center mb-12 items-center">
<button className="w-[180px] h-[48px] bg-black text-white rounded-full">
Shop
</button>
</div>
</div>
</div>
  )
}
