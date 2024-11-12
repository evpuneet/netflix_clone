"use client"

import React, { useRef } from 'react'
import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import Image from 'next/image'
import {motion, useScroll, useTransform } from 'framer-motion'

export default function ProductShowcase() {
  let sectionRef = useRef(null)
  let {scrollYProgress} = useScroll({
    target: sectionRef,
    offset:["start end", "end start"]
  })
  let translateY = useTransform(scrollYProgress, [0,1], [900, -900])

  return (
    <>
      <section>
        <div className='container lg:min-w-[1320px] py-24 overflow-x-clip lg:overflow-visible'>
          <div className='section-heading'>
            <div className='flex justify-center'>
              <div className='tag'>Boost your Productivity</div>
            </div>
            <h2 className='section-title mt-5'>A more effective way to <span>Progress</span></h2>
            <p className='section-desciption mt-5 text-center'>
            Effortlessly turn your ideas into a fully functional, responsive, SaaS
            website in just minutes with this template.
            </p>
          </div>
          <div className='relative'>
            <Image src={productImage} alt='Product Image' className='mt-10'/>
            <motion.img src={pyramidImage.src} alt='Pyramid Image' className=' hidden md:block absolute -right-[6.5rem] -top-[450px] h-[300px] w-[300px]'
            style={{
              translateY,
            }}
            />
            <motion.img src={tubeImage.src} alt='Tube Image' className='w-[300px] h-[300px] hidden md:block absolute bottom-[400px] -left-36'
            style={{
              translateY,
            }}
            />
          </div>
        </div>
      </section>
    </>
  )
}
