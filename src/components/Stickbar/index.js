import React from "react";
import { SticNav, NavLink, NavMenu } from "./StickbarElements";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll"; 

const Stickbar = () => {
  return (
    <>
      <SticNav id="mithai">
        <NavMenu>
          <NavLink to="/Abut">
            <a href="/About">ABOUT US</a>
            {/* <Link to="/About" smooth={true} duration={1000} >ABOUT US</Link> */}  
          </NavLink>

          <NavLink to="/Ecommerce">
            <a href="/Ecommerce">E-COMMERCE</a>
          </NavLink>

          <NavLink to="/KalPower">
            <a href="/KalPower">KALPOWER</a>
          </NavLink>
          <NavLink to="/Careers">
            <a href="/Careers">CAREERS</a>
          </NavLink>
          <NavLink to="/Contact">
            <a href="/Contact">CONTACT US</a>
          </NavLink>  
        </NavMenu>
      </SticNav>
    </>
  );
};

export default Stickbar;
