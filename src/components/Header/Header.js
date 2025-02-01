import React, { useState } from 'react'
import './Header.css'

export const Header = () => {
  const [MenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }
  const closeMenu = (e) => {
    if (!e.target.closest('.menu-item') && !e.target.closest('.menu-button')) {
      setMenuOpen(false)
    }
  }
  React.useEffect(() => {
    document.addEventListener('click', closeMenu)
    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [])

  return (
    <header>
        <h1 className='nav-logo'>Note.</h1>
        <button onClick={toggleMenu} className="menu-button">
          <span></span><span></span><span></span>
        </button>
        <nav className={`menu-modal ${MenuOpen ? 'open' : ''}`}>
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