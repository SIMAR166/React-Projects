import React from 'react'
import "./Last.css";
const Last = () => {
    return (
        <div className="last-full-container">
            <div className="card1">
                <button className='services'>Services</button>
                <h2>Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we've got the right program for you.</h2>
                <button className=''>Explore More
                    <i className="ri-arrow-right-up-long-line"></i>
                </button>
            </div>
            <div className="card2">
               <button className='training-programs'>Training Programs</button> 
               <img src="https://i.pinimg.com/1200x/7d/aa/15/7daa15788239c91066d0d88d86e1512f.jpg" alt="" />
               <div className="card2-bottom">
                <div className="pair">
                    <h3>Programs designed for all ages and abilities.</h3>
                        <i className="ri-arrow-right-up-long-line"></i>
                </div>
                
               </div>
            </div>
            <div className="card3">
               <div className="one">
               <img src="https://i.pinimg.com/736x/af/bc/90/afbc904569089c20b6166b00ae73b5f1.jpg" alt="" />
               <button>Court Access</button>
                <h2>Hourly Court Rental</h2>
                </div>
                <div className="two">
                    <h2>Step into a space built for players — to grow, compete, and thrive.</h2>
                    <div className="icons">
                   <i className="ri-arrow-left-long-line"></i> <i class="ri-arrow-right-long-line"></i>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Last
