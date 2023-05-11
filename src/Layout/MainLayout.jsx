import React from "react";
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer/>
   </>
  )


}

export default MainLayout