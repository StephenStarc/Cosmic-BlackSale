import React, {useContext} from 'react'
import Layout from '../../components/layout/Layout'
import context from '../../context/data/MyContext'
import HeroSection from '../../components/herosection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productcard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'

function Home() {
    const comp = useContext(context)
    console.log(comp)
  return (
    <div className='font-playfair'>
      <Layout>
        <HeroSection />
        <Filter />
        <ProductCard/>
        <Track />
        <Testimonial />
        </Layout>
    </div>
  )
}

export default Home
