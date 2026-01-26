import React from 'react'
import Header from '../../components/landing/Header'
import Hero from '../../components/landing/Hero'
import ProductShowcase from '../../components/landing/ProductShowcase'
import Interactive from '../../components/landing/Interactive'
import Features from '../../components/landing/Features'
import Testimonials from '../../components/landing/Testimonials'
import CTA from '../../components/landing/CTA'
import Footer from '../../components/landing/Footer'

function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductShowcase />
      <Interactive />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default Landing
