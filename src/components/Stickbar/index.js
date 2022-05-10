import React from 'react';
import { SticNav, NavLink,  NavMenu } from './StickbarElements';

const Stickbar = () => {
  return (
    <>
      <SticNav>
        <NavMenu>
          {/* <NavLink to="/"  ></NavLink> */}

          {/* <NavLink to="/"  >
            Track Your Shipment
          </NavLink> */}
          {/* <NavLink to="/Abut"  >
            <a href="/About">About Us</a>
          </NavLink> */}

          <NavLink to="/Abut">
            <a href="/About">ABOUT US</a>
          </NavLink>

          {/* <NavLink to="/WorkAtKalway"  >
            <a href="/WorkAtKalway">Work at KALWAY</a>
          </NavLink> */}
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
          {/* <NavLink to="/"  >
            Contact
          </NavLink>
          <NavLink to="/"  >
            Georgia
          </NavLink>
          <NavLink to="/"  >
            New Jersey
          </NavLink>
          <NavLink to="/"  >
            Canada
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </SticNav>
    </>
  );
};

export default Stickbar;
