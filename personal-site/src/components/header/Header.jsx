import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {BsArrowDown} from 'react-icons/bs'

const Header = () => {
  return (
    <header >
      <div className="container header__container">
        <h2>Hi there!</h2>
        <h2 >I'm Keila Braden — a recent computer science graduate eager to design and develop exceptional, human-centered digital products.</h2>
        
        {/* <h5 className="text-light">Computer Science Student</h5> */}
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src="" alt="" />
        </div>

        {/* <a href="#about" className='scroll__down'><BsArrowDown size={40}/></a> */}
      </div>
          
    </header>
  )
}

export default Header