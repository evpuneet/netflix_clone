<<<<<<< HEAD
"use client"

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow, FaSquareXTwitter } from 'react-icons/fa6'
=======
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
>>>>>>> 547724d8405c79a41f18dd9b248d106afd251952
import { socialMedia } from '@/data'

export default function Footer() {
  return (
    <>
        <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:checkout206@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 GeNerX
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
<<<<<<< HEAD
              onClick={() => window.open(info.link, "_blank")}
            >
              {info.id===2?<FaSquareXTwitter />:<img src={info.img} alt="icons" width={20} height={20} />}
              
=======
            >
              <img src={info.img} alt="icons" width={20} height={20} />
>>>>>>> 547724d8405c79a41f18dd9b248d106afd251952
            </div>
          ))}
        </div>
      </div>
    </footer>
    </>
  )
}
