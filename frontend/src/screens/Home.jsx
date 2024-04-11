import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

import CarouselItem from '../components/CarouselItem'


function Home() {
  return (
    <div>
      <div><NavBar/></div>
      <div><CarouselItem/></div>
      <div className='m-3'>
        <Cards/>
    </div>
      <div><Footer/></div>
    </div>
  )
}

export default Home
