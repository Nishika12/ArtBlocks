import React from 'react'
import Banner from '../Components/Banner';
import CollectionInfo from '../Components/CollectionInfo';
import Details from '../Components/Details';
import Navbar from '../Components/Navbar';

const CollectionPage = (props) => {
  return (
    <>
    <Banner/>
    <Details/>
    <Navbar action="Go Back"/>
    <CollectionInfo/>
    </>
  )
}

export default CollectionPage