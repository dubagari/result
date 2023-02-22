import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import {RiUser3Fill} from 'react-icons/ri'

const Header = () => {

  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    header.classList('active', window.scrollY > 50)
  })

  const [mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
                <div className="logo">
                  <Link to='/'>
                  <h2>logo</h2>
                  </Link>
                </div>

               

            <nav className={mobile ? 'nav-mobile' : "navbar-list"} onClick={() => setMobile(false)}>
                  <ul>
                  
                    <Link to='/'><li>Home</li></Link>
                  
                    <Link to='/about'><li>About</li></Link>
                
                    <Link to='/service'><li>Service</li></Link>
                
                    <Link to='/technology'><li>technology</li></Link>
                
                    <Link to='/how'><li>how to</li></Link>
                
                    
                  </ul>
                </nav>
                
                <div className= "header-btn">
                    <div className='header-btn-login capitalize'><Link to='/sign'><li><RiUser3Fill/> sign in</li></Link></div> 
                    <div className='header-btn-register capitalize'><Link to='/register'><li>register</li></Link></div> 
                </div>
                
                <div className="togole" onClick={()=> setMobile(!mobile)}>
                  {mobile ? <FaTimes/> : <FaBars/>}
                </div>
              
          </div>

        </div>
      </header>
    </>
  )
}

export default Header
