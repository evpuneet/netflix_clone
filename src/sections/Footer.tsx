import React from 'react'
import logo from '@/assets/logosaas.png'
import Image from 'next/image'
import X from '@/assets/social-x.svg'
import Insta from '@/assets/social-insta.svg'
import Linkden from '@/assets/social-linkedin.svg'
import Yt from '@/assets/social-youtube.svg'
export default function Footer() {
  return (
    <>
      <footer className='bg-black text-sm text-[#bcbcbc] py-10 text-center'>
        <div className='container lg:[1320px]'>
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h—full before:w—full before:bg-red-500 before:absolute before:bg-[liner-gradient(to_right,#f87bff,#fbd92cf,#ffdd9b,#c2f0b1)]">
            <Image src={logo} alt='SaaS Logo' height={40} className='relative'/>
          </div>
          <nav className='flex flex-col md:flex-row justify-center gap-6 mt-6'>
            <a href="#">About</a>
            <a href="#">Feature</a>
            <a href="#">Customer</a>
            <a href="#">Pricing</a>
            <a href="#">Help</a>
            <a href="#">Carrers</a>
          </nav>
          <div className='flex justify-center gap-6 mt-6'>
            <X/>
            <Insta/>
            <Linkden/>
            <Yt/>
          </div>
          <p className='mt-6'>&copy; 2024 GeNerX, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
