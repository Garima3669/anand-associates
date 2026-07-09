import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import Process from '../components/Process/Process'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import FAQ from '../components/FAQ/FAQ'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'
import Awards from '../components/Awards/Awards'
import Leadership from '../components/Leadership/Leadership'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyChoose />
      <Awards />
      <Leadership />
      <Process />
      <Testimonials />
      <CTA />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
