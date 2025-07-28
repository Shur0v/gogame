'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface LeaguesProps {
  className?: string;
}

interface LeagueData {
  name: string;
  image: string;
}

export default function Leagues({ className }: LeaguesProps) {
  const [isSwitched, setIsSwitched] = useState(false);

  const basketballLeagues: LeagueData[] = [
    { name: "Liga Endesa", image: "/homepage/image/bs1.png" },
    { name: "Basketbol Süper Ligi", image: "/homepage/image/bs2.png" },
    { name: "LNB Pro A", image: "/homepage/image/bs3.png" },
    { name: "Lega Basket Serie A", image: "/homepage/image/bs4.png" },
    { name: "Basketball Bundesliga", image: "/homepage/image/bs5.png" },
    { name: "Lietuvos krepšinio lyga", image: "/homepage/image/bs6.png" },
    { name: "European competition", image: "/homepage/image/bs7.png" },
  ];

  const footballLeagues: LeagueData[] = [
    { name: "Premier League", image: "/homepage/image/fb1.png" },
    { name: "La Liga", image: "/homepage/image/fb3.png" },
    { name: "Bundesliga", image: "/homepage/image/fb4.png" },
    { name: "Serie A", image: "/homepage/image/fb5.png" },
    { name: "Ligue 1", image: "/homepage/image/fb6.png" },
    { name: "Champions League", image: "/homepage/image/fb7.png" },
    { name: "Europa League", image: "/homepage/image/fb8.png" },
  ];

  const currentLeagues = isSwitched ? basketballLeagues : footballLeagues;

  return (
    <div className={`${className} px-28 py-24 inline-flex flex-col justify-start items-center gap-12`}>
      <div className="flex flex-col justify-start items-center gap-6">
        <div className="flex flex-col justify-start items-center gap-12">
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="flex flex-col justify-start items-center gap-3">
              <div className="text-center justify-start text-zinc-950 text-5xl font-semibold font-['Poppins'] leading-[57.60px]">Ready for these leagues?</div>
            </div>
          </div>
        </div>
        <div className="inline-flex justify-start items-center gap-5">
          <div className={`justify-start text-lg font-normal font-['Poppins'] leading-loose ${!isSwitched ? 'text-neutral-800 font-medium' : 'text-zinc-500'}`}>Football</div>
          <div 
            onClick={() => setIsSwitched(!isSwitched)}
            className={`w-11 h-6 p-0.5 bg-lime-500 rounded-xl flex ${isSwitched ? 'justify-end' : 'justify-start'} items-center overflow-hidden cursor-pointer`}
          >
            <div className="w-5 h-5 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06)] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.10)]" />
          </div>
          <div className={`justify-start text-lg font-normal font-['Poppins'] leading-loose ${isSwitched ? 'text-neutral-800 font-medium' : 'text-zinc-500'}`}>Basketball</div>
        </div>
      </div>
      <div className="w-[1200px] inline-flex justify-start items-center gap-6">
        {currentLeagues.map((league, index) => (
          <div key={index} className="flex-1 h-72 px-4 py-6 bg-black/30 rounded inline-flex flex-col justify-center items-center gap-2.5 relative overflow-hidden">
            <Image src={league.image} alt={league.name} fill className="object-cover" />
            <div className="self-stretch text-center justify-start text-white text-lg font-bold font-['Poppins'] leading-loose relative z-10">{league.name}</div>
          </div>
        ))}
      </div>
      <div className="px-4 py-2.5 bg-lime-500 rounded-[999px] inline-flex justify-center items-center gap-2.5">
        <div className="text-center justify-start text-white text-lg font-normal font-['Inter'] leading-7">View packages</div>
      </div>
    </div>
  )
}
