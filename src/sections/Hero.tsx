"use client"

import React, { useRef } from 'react'
import ArrowIcon from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"

export default function Hero() {
  let heroRef = useRef(null)
  let {scrollYProgress} = useScroll({
    target: heroRef,
    offset:["start end", "end start"]
  })
  let translateY = useTransform(scrollYProgress, [0,1], [150, -150])
  return (
    <>
      <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip '>
        <div className='ps-4 mx-auto lg:max-w-[1320px]'>
          <div className='md:flex justify-between items-center'>
            <div className='md:min-w-[478px] md:max-w-[490px] lg:max-w-[600px]'>
              <div className='tag'>Version 2.0 is here</div>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Pathway to Productivity</h1>
              <p className='text-xl text-[#010d3e] tracking-tight mt-6'>
                Celebrate the joy of accomplishment with an app designed to track your progress,
                motivate your efforts, and celebrate your successes.
              </p>
              <div className='flex gap-1 items-center mt-[30px]'>
                <button className='btn btn-primary'>Get for free</button>
                <button className='btn btn-text gap-1'><span>Learn more</span><ArrowIcon className='h-5 w-5'/></button>
              </div>
            </div>
            <div className='mt-20 md:mt-0 md:h-[648px] md:max-w-[648px]  ld:max-w-[748px] lg:h-[748px] md:flex-1 relative lg:me-4'>
              <motion.img src={cogImage.src} alt='Cog image' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg-left-0 translate-y-[30px]' 
              animate={{translateY:[-30,30]}}
              transition={{
                repeat: Infinity,
                repeatType:'mirror',
                duration:3,
                ease:"easeInOut",
              }}
              />
              <motion.img src={cylinderImage.src} alt='Cylinder Image' className='w-[220px] h-[220px] hidden md:block -top-8 -left-32 absolute'
              style={{
                translateY: translateY,
              }}
              />
              <motion.img src={noodleImage.src} alt='Noodle Image' className='w-[200px] h-[200px] hidden md:block absolute top-[654px] left-[528px] rotate-[30deg]'
              style={{
                translateY:translateY,
              }}
              />
            </div>
          </div>  
        </div>
      </section>
    </>
  )
}
