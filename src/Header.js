import React from 'react'
import logo from './Images/logo.svg'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header">
       
        <img src={logo} height={"100px"}/>

        <div className='linkBar'>
          <Link to={"home"} className='linktxt'>OUR HOME</Link>
          <Link to={"about"} className='linktxt'>ABOUT</Link>
          <Link to={"stories"} className='linktxt'>STORIES</Link>
          <Link to={"experience"} className='linktxt'>EXPERIENCES</Link>
          <Link to={"store"} className='linktxt'>STORE</Link>
        </div>
        <button className='Nbtn'>Reserved Now</button>
        
      </div> 
      
    </>
  )
}

export default Header