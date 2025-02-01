import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <header>
        <h1 className='nav-logo'>Logo</h1>
        <button className="menu-button">
          <span></span><span></span><span></span>
        </button>
        <nav>
            <ul className='menu'>
                <li className='menu-item'><a href="#">Home</a></li>
                <li className='menu-item'><a href="#">About</a></li>
                <li className='menu-item'><a href="#">Work</a></li>
            </ul>
        </nav>
    </header>
  )

}
export default Header