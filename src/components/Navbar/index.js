import React, { useEffect, useState } from 'react';
import client, { builder } from '../../client';
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
const urlFor = (source) => builder.image(source);
export default function Navbar({ toggle }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == 'Kalway' ]{
         
                    Headlogo,
                    phone,
                    }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
        <Nav>
          <NavLogo
            to="/"
            className="flex flex-col content-center aligns-center"
          >
            <img
              src={posts[0] ? urlFor(posts[0].Headlogo.asset._ref) : null}
              width="150px"
              alt="logo"
            />
            <Numbers className="text-sm items-center pt-2">
              {posts[0] ? posts[0].phone : null}
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
              <NavLinks to="/">
                <a href="/">HOME</a>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/services">SERVICES</NavLinks>
            </NavItem>

            {/* <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                <a to="/Contact">Request To Quote</a>
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="/Carriers">CARRIERS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Shippers">SHIPPERS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Shipfreight">SHIPFREIGHT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Industries">INDUSTRIES</NavLinks>
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
}
