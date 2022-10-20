import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
      <>
          <Header />
          <main>
              <Hero />
              <HeroBanner/>
          </main>
      </>
  )
}

export default Home