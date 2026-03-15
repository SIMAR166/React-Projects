import React from 'react'
import "./Secondd.scss"
import three from "../assets/three.jpg"

const Secondd = () => {
  return (
       <div className="middle-container">
        <div className="one">
            <img src="https://i.pinimg.com/1200x/9b/d5/07/9bd50778bce3a4da2bc7865785dee8b4.jpg" alt="" />
            <h2>Creativity that grows</h2>
            <p>Discover tools and experiences designed to inspire ideas and help your creativity flourish in a calm and beautifully crafted environment</p>
        </div>
        <div className="two">
                    <img src="https://i.pinimg.com/1200x/a9/c1/0a/a9c10a339ad73fa9f4583146b49d72a8.jpg" alt="" />
                    <h2>Smooth and seamless</h2>
                    <p>Everything flows effortlessly  fast loading, elegant design and a smooth user experience</p>
        </div>
        <div className="three">
           <img src={three} alt="" />
           <h2>Pure simplicity</h2>
           <p>No distractions. No clutter. Just a clean and aesthetic digital space that lets you focus on what truly matters</p>
        </div>
    </div>
  )
}

export default Secondd
