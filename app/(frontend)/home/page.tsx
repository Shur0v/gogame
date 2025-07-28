import React from 'react'
import HeroSection from './components/Hero/herosection'
import HowItWorks from './components/howitworks/howitworks'

export default function HomePage() {
  return (
    <div className=" w-full ">
      <div className="">
        <HeroSection />
        <HowItWorks />
      </div>
    </div>
  )
}
