import React from 'react'
import Image from 'next/image'

export default function HowItWorks() {
  return (
    <div className="w-full h-auto py-24 bg-green-50/20 flex flex-col justify-start items-center gap-12">
      <div className="w-full flex justify-start items-center gap-24">
        <div className="w-[533px]">
          <span className="text-zinc-950 text-5xl font-semibold font-poppins leading-[57.60px]">How </span>
          <span className="text-zinc-950 text-5xl font-semibold font-poppins lowercase leading-[57.60px]">It Works</span>
        </div>
        <div className="flex-1 text-black text-base font-normal font-poppins leading-7">
          Follow a few easy steps, and we&apos;ll surprise you with the perfect sports trip all planned for you!
        </div>
      </div>

      <div className="w-full relative flex justify-between items-center">
        {/* Step 1 */}
        <div className="w-72 flex flex-col justify-center items-center gap-4">
          <div className="w-36 h-36 p-10 bg-white rounded-[75px] outline outline-1 outline-offset-[-1px] outline-lime-900 flex justify-center items-center">
            <Image
              src="/homepage/icon/calender.svg"
              alt="Calendar Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <div className="text-center text-lime-900 text-lg font-semibold font-poppins leading-loose">
              Customize your adventure
            </div>
            <div className="text-center text-neutral-600 text-base font-normal font-poppins leading-7">
              Tell us your favorite sport, where you&apos;re flying from, and your<br/>travel dates.
            </div>
          </div>
        </div>

        {/* Connector 1 */}
        <Image
          src="/homepage/icon/connector.svg"
          alt="Connector"
          width={158}
          height={20}
          className="absolute left-[217px] top-[69px]"
        />

        {/* Step 2 */}
        <div className="w-72 flex flex-col justify-center items-center gap-6">
          <div className="w-36 h-36 p-10 bg-white rounded-[75px] outline outline-1 outline-offset-[-1px] outline-lime-900 flex justify-center items-center">
            <Image
              src="/homepage/icon/pointer.svg"
              alt="Pointer Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <div className="text-center text-lime-900 text-lg font-semibold font-poppins leading-loose">
              We plan the surprise
            </div>
            <div className="text-center text-neutral-600 text-base font-normal font-poppins leading-7">
              We&apos;ll book your flights, hotel, and game tickets all you have to do is wait for the big reveal.
            </div>
          </div>
        </div>

        {/* Connector 2 */}
        <Image
          src="/homepage/icon/connector.svg"
          alt="Connector"
          width={160}
          height={20}
          className="absolute left-[520px] top-[63px]"
        />

        {/* Step 3 */}
        <div className="w-72 flex flex-col justify-center items-center gap-6">
          <div className="w-36 h-36 p-10 bg-white rounded-[75px] outline outline-1 outline-offset-[-1px] outline-lime-900 flex justify-center items-center">
            <Image
              src="/homepage/icon/go.svg"
              alt="Go Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <div className="text-center text-lime-900 text-lg font-semibold font-poppins leading-loose">
              Get ready to go
            </div>
            <div className="text-center text-neutral-600 text-base font-normal font-poppins leading-7">
              Receive your secret travel plan. Pack your bags and get excited! You will know where 48 hours before!
            </div>
          </div>
        </div>

        {/* Connector 3 */}
        <Image
          src="/homepage/icon/connector.svg"
          alt="Connector"
          width={160}
          height={20}
          className="absolute left-[825px] top-[63px]"
        />

        {/* Step 4 */}
        <div className="w-72 flex flex-col justify-center items-center gap-6">
          <div className="w-36 h-36 p-10 bg-white rounded-[75px] outline outline-1 outline-offset-[-1px] outline-lime-900 flex justify-center items-center">
            <Image
              src="/homepage/icon/map.svg"
              alt="Map Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <div className="text-center text-lime-900 text-lg font-semibold font-poppins leading-loose">
              Live the experience
            </div>
            <div className="text-center text-neutral-600 text-base font-normal font-poppins leading-7">
              Enjoy the game, explore a new city, and make unforgettable memories.
            </div>
          </div>
        </div>
      </div>

      <button className="px-4 py-2.5 bg-lime-500 rounded-[999px] flex justify-center items-center gap-2.5">
        <span className="text-center text-white text-lg font-normal font-inter leading-7">
          Start the game
        </span>
      </button>
    </div>
  )
}
