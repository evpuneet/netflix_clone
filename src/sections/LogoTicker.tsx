"use client"

import React from 'react'
import acmeLogo from '@/assets/logo-acme.png'
import celestiaLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-pulse.png'
import Image from 'next/image'
import {motion} from 'framer-motion'
export default function LogoTicker() {
  return (
    <>
      <div className='py-8 md:py-12 bg-white'>
        <div className='container lg:min-w-[1320px]'>
          <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <motion.div className='flex gap-14 flex-none pr-14' 
            animate={{translateX:"-50%",}}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType:"loop",
              ease:"linear"
            }}
            >
              <Image src={acmeLogo} alt='Aceme Logo' className='logo-ticker-image'/>
              <Image src={celestiaLogo} alt='Celestia Logo' className='logo-ticker-image'/>
              <Image src={pulseLogo} alt='Pluse Logo' className='logo-ticker-image'/>
              <Image src={apexLogo} alt='Apex Logo' className='logo-ticker-image'/>

              {/* second set of logos */}

              <Image src={acmeLogo} alt='Aceme Logo' className='logo-ticker-image'/>
              <Image src={celestiaLogo} alt='Celestia Logo' className='logo-ticker-image'/>
              <Image src={pulseLogo} alt='Pluse Logo' className='logo-ticker-image'/>
              <Image src={apexLogo} alt='Apex Logo' className='logo-ticker-image'/>

            </motion.div>
            </div>
        </div>
      </div>
    </>
  )
}
