import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className="about-full-container">
      <div className="about-top">
        <div className="top-left-element">
          <h2> About Horizon</h2>
        </div>
        <div className="top-right-element">
          <p>At Horizon, we don't just play tennis — we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.</p>
        </div>
      </div>
      <div className="about-center">
        <div className="elem1">
      <img src="https://i.pinimg.com/736x/6f/ef/a4/6fefa4cb333fd2eb746693155b746a2d.jpg" alt="" />
        </div>
         <div className="elem2">
          <img src="https://i.pinimg.com/736x/73/21/25/7321259f86e9dc1bd27d947ff3d7bde3.jpg" alt="" />
        </div>
         <div className="elem3">
        <img src="https://i.pinimg.com/736x/d7/e4/14/d7e4149a6d9a9ebe64be2f2f05ec3d07.jpg" alt="" />
        </div>
        
      </div>
      <div className="about-bottom">
        <div className="one-textline">
          <h2>A few more facts about us in numbers</h2>
        </div>
        <div className="about-bottom-data">

  <div className="stat">
    <h2 className="data">12000+</h2>
    <h5 className="content">Hours of play annually</h5>
  </div>

  <div className="stat">
    <h2 className="data">89%</h2>
    <h5 className="content">Player Retention Rate</h5>
  </div>

  <div className="stat">
    <h2 className="data">1,200+</h2>
    <h5 className="content">Active Members</h5>
  </div>

  <div className="stat">
    <h2 className="data">125+</h2>
    <h5 className="content">Annual Tournaments</h5>
  </div>

</div>
      </div>
    </div>
  )
}

export default About
