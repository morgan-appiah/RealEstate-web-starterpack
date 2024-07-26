import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            
            {/* Left Side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Faster <br/>maintenance <br/>
                        all at one place
                    </h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>
                        Streamlined platform for all your maintenance requests
                    </span>
                    <span className='secondaryText'>
                        No more unnecessary calls and long waits
                    </span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color='var(--blue)' size={25}/>
                    <input type='text' />
                    <button className="button">
                        Search
                    </button>
                </div>

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Premium Requests
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Work Orders
                        </span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={128}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Properties
                        </span>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
