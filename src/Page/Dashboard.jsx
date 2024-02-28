import React from 'react'
import Banner from '../Components/Banner';
import DashList from '../Components/DashList';
import Details from '../Components/Details';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  return (
    <>
    <Banner/>
    <Details/>
    <Navbar action="Go Back"/>
    <DashList/>
    </>
  )
}

export default Dashboard