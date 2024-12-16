import Image from 'next/image'
import React from 'react'
import boy from "../../../public/boy.png"




const Feature = () => {
  return (
    <div >
        <div className='mt-28 mb-12'>
        <span className='text-2xl font-semibold px-10 lg:px-12 md:px-12 sm:px-'>Featured</span>
        </div>
        <div className='flex justify-center px-10'>
        <Image
               
                src={boy}
                alt={"image&amp;apos;"}
                width={1200}
                height={600}/>
        </div>



        <div className='text-center text-black mt-16'>
        

        <span className=' text-3xl lg:text-5xl font-semibold uppercase '>step into what feels good</span><br /><br />

        <span>Cause everyone should know the feeling of running in that perfect pair.</span><br />

        <button className='w-[180px] h-[48px] bg-black text-white rounded-full mt-8'>Find Your Shoe</button>
        
    </div>








    </div>
  )
}

export default Feature
