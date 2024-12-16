import Image from 'next/image'
import React from 'react'
import e1 from "../../../public/e1.png"
import e2 from "../../../public/e2.png"
import e3 from "../../../public/e3.png"

const Essential = () => {
return (
<div>


<div className='mt-12 mb-12'>
<span className='text-xl font-semibold px-10 lg:px-20'>The Essentials</span>
</div>

<div className='flex justify-center items-center mb-16 md:mb-28 ml-11'>

<div className='w-96 h-[400px] overflow-hidden'>
<Image
className='hover:scale-105 duration-300'

src={e1}
alt={"image&amp;apos;"}
width={350}
height={550}/>
</div>
{/* =============2========== */}



<div className='w-96 h-[400px] overflow-hidden my-7 md:my0 '>
<Image
className='hover:scale-105 duration-300'

src={e2}
alt={"image&amp;apos;"}
width={350}
height={550}/>
</div>

{/* ===============3============== */}

<div className='w-96 h-[400px] overflow-hidden mb-14 md:mb-0'>
<Image
className='hover:scale-105 duration-300'

src={e3}
alt={"image&amp;apos;"}
width={350}
height={550}/>
</div>


</div>


<div className="flex justify-center items-start px-36 pb-20">
  {/* Main Container */}
  <div className="flex flex-col w-full">
    
    
    {/* Row with 4 Columns */}
    <div className="flex justify-between ">
      
      {/* Left Column */}
      <div className="flex flex-col gap-3 w-1/4">
        <p className="font-semibold text-black">Icons</p>
        <p className='text-gray-500 font-semibold'>Air Force 1</p>
        <p className='text-gray-500 font-semibold'>Huarache</p>
        <p className='text-gray-500 font-semibold'>Air Max 90</p>
        <p className='text-gray-500 font-semibold'>Air Max 95</p>
      </div>

      {/* Second Column */}
      <div className="flex flex-col gap-3 w-1/4">
        <p className="font-semibold text-black">Shoes</p>
        <p className='text-gray-500 font-semibold'>All Shoes</p>
        <p className='text-gray-500 font-semibold'>Custom Shoes</p>
        <p className='text-gray-500 font-semibold'>Jordan Shoes</p>
        <p className='text-gray-500 font-semibold'>Running Shoes</p>
      </div>

      {/* Third Column */}
      <div className="flex flex-col gap-3 w-1/4">
        <p className="font-semibold text-black">Clothing</p>
        <p className='text-gray-500 font-semibold'>All Clothing</p>
        <p className='text-gray-500 font-semibold'>Modest Clothing</p>
        <p className='text-gray-500 font-semibold'>Hoodies & Pullovers</p>
        <p className='text-gray-500 font-semibold'>Shirts & Tops</p>
      </div>

      {/* Fourth Column */}
      <div className="flex flex-col gap-3 w-1/4">
        <p className="font-semibold text-black">Kids</p>
        <p className='text-gray-500 font-semibold'>Infant & Toddler Shoes</p>
        <p className='text-gray-500 font-semibold'>Kids Shoes</p>
        <p className='text-gray-500 font-semibold'>Kids Jordan Shoes</p>
        <p className='text-gray-500 font-semibold'>Kids Basketball Shoes</p>
      </div>

    </div>

  </div>
</div>
</div>
)
}

export default Essential