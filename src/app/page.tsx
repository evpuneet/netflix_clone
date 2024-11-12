import CallToAction from '@/sections/CallToAction'
import Footer from '@/sections/Footer'
import Navbar from '@/sections/Header'
import Hero from '@/sections/Hero'
import LogoTicker from '@/sections/LogoTicker'
import Pricing from '@/sections/Pricing'
import ProductShowcase from '@/sections/ProductShowcase'
import Testimonials from '@/sections/Testimonials'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  )
}
