import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <section class="hero">

            <div class="hero-left">

                <div class="stats">
                    <div>
                        <h3>+200</h3>
                        <p>Projects completed</p>
                    </div>

                    <div>
                        <h3>+50</h3>
                        <p>Startups raised</p>
                    </div>
                </div>

                <h1 class="title">Hello</h1>

                <p class="subtitle">
                    — It's D.Nove a design wizard.
                </p>

                <p class="scroll">Scroll down ↓</p>

            </div>

            <div class="hero-right">
                <img src="https://day-67.vercel.app/assets/wolf-pixel-D13avuvU.png" alt="" />
            </div>

        </section>
    )
}

export default Hero
