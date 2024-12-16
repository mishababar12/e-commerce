import React from 'react'
import Image from 'next/image';
import Ferame from "../../../public/ferame.png"

export default function Hero() {
  return (

    <div className="w-full h-[800px] bg-myWhite flex justify-center items-start">
    <div className=' w-[90%] h-[500px]'>
    <Image src={Ferame} alt={"image&amp;apos;"} width={1344} height={700}/>
    </div>
  </div>
  
    );
  }
 