import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.png';
import logo1 from '../../images/vanguard.png';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll, Link } from 'react-scroll';

import {
  Nav,
  NavMenu,
  NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  Numbers,
  NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    // if (Speed) {
    //   setScrollNav(false);
    // }
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
        <Nav scrollNav={scrollNav}>
          <NavLogo
            to="/"
            onClick={toggleHome}
            className="flex flex-col content-center aligns-center"
          >
            <img src={logo} width="150px" alt="logo" />
            <Numbers className="text-sm items-center pt-2">
              1-800-502-7000
            </Numbers>
          </NavLogo>

          {/* <Bars onClick={toggle}/> */}
          <NavMenu>
            {/* <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                <a to="/">Home</a>
              </NavLinks>
            </NavItem> */}

            <NavItem>
              <NavLinks
                to="/About"
                activeClassName="active"
                onClick={toggleHome}
              >
                ABOUT
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="/services"
                onClick={toggleHome}
                activeClassName="active"
              >
                SERVICES
              </NavLinks>
            </NavItem>

            {/* <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                <a to="/Contact">Request To Quote</a>
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                to="/Carriers"
                onClick={toggleHome}
                activeClassName="active"
              >
                CARRIERS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/Shippers"
                onClick={toggleHome}
                activeClassName="active"
              >
                SHIPPERS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/Shipfreight"
                onClick={toggleHome}
                activeClassName="active"
              >
                SHIPFREIGHT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/Industries"
                onClick={toggleHome}
                activeClassName="active"
              >
                INDUSTRIES
              </NavLinks>
            </NavItem>
            {/* <NavItem>
            
          <NavLinks >
          <Link to='ContactUs' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link>
          </NavLinks>
          </NavItem> */}

            <MobileIcon onClick={toggle}>
              <FaBars color="#fff" />
            </MobileIcon>

            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          {/* <NavBtn>
            <h3 className=" text-white font-bold text-1xl">Signup</h3>
          </NavBtn> */}
          {/* <NavBtn>
            <h3 className=" text-white font-bold border-2 p-3 text-1xl">
              Login
            </h3>
          </NavBtn> */}
          {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
