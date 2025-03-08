import React from 'react'
import Header from './sections/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pricising from './sections/Pricising';
import Faq from './sections/Faq';
import Testimonials from './sections/Testimonials';

const App = () => {
  return (
    <main className='overflow-hidden'>
      <Header/>
      <Hero/>
      <Features/>
      <Pricising/>
      <Faq/>
      <Testimonials/>
        </main>
  )
}

export default App