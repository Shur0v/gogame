import React from 'react'
import HeroSection from './components/Hero/herosection'
import HowItWorks from './components/howitworks/howitworks'

export default function HomePage() {
  return (
    <div className=" w-full ">
      <div className="w-[1200px] mx-auto flex flex-col">
        <HeroSection />
        <HowItWorks />
      </div>
    </div>
  )
}
