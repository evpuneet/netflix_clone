"use client"

import React, { useRef } from 'react'
import ArrowRight from '@/assets/arrow-right.svg'
import springImage from '@/assets/spring.png'
import starImage from '@/assets/star.png'
import Image from 'next/image'
import {motion, useScroll, useTransform} from 'framer-motion'
export default function CallToAction() {
  let callRef = useRef(null)
  let {scrollYProgress} = useScroll({
    target: callRef,
    offset:["start end", "end start"]
  })
  let translateY = useTransform(scrollYProgress, [0,1], [900, -900])
  return (
    <>
      <section ref={callRef} className='bg-gradient-to-b from-white to-[#dedcff] py-24 overflow-x-clip'>
        <div className='container lg:max-w-1320px '>
          <div className='relative section-heading'>
            <h2 className='section-title'>Sign up for free today</h2>
            <p className='section-description mt-5'>Celebrate the joy of accomplishment with an app designed to track your
            progress and motivate your efforts.</p>
            <motion.img src={starImage.src} alt='Star Image' width={360} className='absolute -left-[350px] top-[370px]'
            style={{
              translateY: translateY,
            }}
            />
            <motion.img src={springImage.src} alt='Spring Image' width={360} className='absolute -right-[331px] top-[650px]'
            style={{
              translateY: translateY,
            }}
            />
          </div>
          <div className='flex justify-center gap-2 mt-10'>
            <button className='btn btn-primary'>Get for free</button>
            <button className='btn btn-text gap-1'><span>Learn more</span><ArrowRight className='w-5 h-5'/></button>
          </div>
        </div>
      </section>
    </>
  )
}
