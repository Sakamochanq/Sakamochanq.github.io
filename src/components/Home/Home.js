import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div className="home-container">
        <img className='logo' src={process.env.PUBLIC_URL + './assets/images/Deer.png'}/>
        <br /><br />
        <h2>Hello World.</h2>
        <br /><br />
        <hr className='hr'/>
    </div>
  )
}
export default Home