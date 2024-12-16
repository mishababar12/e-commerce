import React from 'react'

import Hero from "./components/hero"
import Pic from "./components/pics"
import Feature from "./components/feature"
import Essential from "./components/essential"
import Dnt from "./components/dnt"
import Gear from './components/gear'


export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Pic/>
      <Feature/>
      <Gear/>
      <Dnt/>
      <Essential/>
     
     
    </div>
  )
}