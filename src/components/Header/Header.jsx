import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
     <div className="flexCenter paddings innerWidth h-container">
        <img src="./mend4-8.png" alt="logo" width={170} height={30}/>

        <div className="flexCenter h-menu">
          <a href="">Get Started</a>
          <a href="">Sign Up</a>
          <a href="">Pricing</a>
          <a href="">About Us</a>
          <button className="button">
          <a href="">Contact</a>
          </button>
        </div>
     </div>
</section>
  );
};

export default Header
