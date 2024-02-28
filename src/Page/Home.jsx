import React from 'react'
import Banner from '../Components/Banner'
import Collectionlist from '../Components/Collectionlist'
import Details from '../Components/Details'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Details/>
        <Navbar action="Logout"/>
        <Collectionlist/>
    </div>
  )
}

export default Home