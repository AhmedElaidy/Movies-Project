import React, { useState } from "react"
import "./Header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <React.Fragment>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='#upcomming'>UpComming</a>
              </li>
              <li>
                <a href='#latest'>Latest</a>
              </li>
              <li>
                <a href='#trending'>Trending</a>
              </li>
              <li>
                <a href='#recommended'>Recommended</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i className='fas fa-bell'></i>
            <i className='fas fa-user'></i>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
