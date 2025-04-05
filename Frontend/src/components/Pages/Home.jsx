import React from 'react'
import SearchPage from './SearchPage'
import ResultPage from './ResultPage'
import '../../css/Home.css'
import NavbarTop from '../Layouts/NavbarTop'

const Home = () => {
  return (<>
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src="/Videos/Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <div className="content-overlay">
        <NavbarTop />

        <div className="centered-content">
          <h1>Welcome to <span className="echomist">EchoMist</span></h1>
           <h5>Let the lyrics echo through the mist</h5>
          <SearchPage />
        </div>

      </div>
    </div>
        <ResultPage />
  
  </>
  )
}

export default Home
