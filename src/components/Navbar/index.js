import React from 'react';
import { builder } from '../../client';
import { FaBars } from 'react-icons/fa';
// import logo from '../../images/logo.png';
// import logo1 from '../../images/vanguard.png';
import { IconContext } from 'react-icons/lib';
// import { animateScroll as scroll, Link } from 'react-scroll';

import {
  Nav,
  NavMenu,
  // NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  Numbers,
  NavLinks,
} from './NavbarElements';

const urlFor = (source) => builder.image(source);
export default function Navbar({ toggle, logo, Phoneno }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[title == 'Kalway' ]{

  //                   Headlogo,
  //                   phone,
  //                   }`
  //     )
  //     .then((data) => setPosts(data))
  //     .catch(console.error);
  // }, []);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
        <Nav>
          <NavLogo
            to="/"
            className="flex flex-col content-center aligns-center"
          >
            <img src={urlFor(logo)} width="150px" alt="logo" />
            <Numbers className="text-sm items-center pt-2">{Phoneno}</Numbers>
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">HOME</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/services">SERVICES</NavLinks>
            </NavItem>

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

            <MobileIcon onClick={toggle}>
              <FaBars color="#fff" />
            </MobileIcon>
          </NavMenu>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
