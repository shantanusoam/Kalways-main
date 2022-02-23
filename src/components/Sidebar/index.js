import React from 'react';
import {
  CloseIcon,
  Icon,
  SlidebarContainer,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkR,
  SideBtnWrap,
  SidebarRoute,
} from './SlidebarElement';
import { animateScroll as scroll, Link } from 'react-scroll';
const Sidebar = ({ isOpen, toggle }) => {
  function disabel() {
    const path = window.location.pathname;
    console.log(path === '/');
    if (path === '/') {
      return true;
    }
    return false;
  }
  return (
    <SlidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkR to="/">
            <a to="/" onClick={toggle}>
              Home
            </a>
          </SidebarLinkR>

          <SidebarLinkR to="/About">
            <a onClick={toggle} to="/About">
              About
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/services">
            <a
              to="/products"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
            >
              Services
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/Carriers">
            <a
              onClick={toggle}
              to="/Carriers"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
            >
              Carriers
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/Shippers">
            <a
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
              to="/Shipper"
            >
              Shipper
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/Ecommerce">
            <a
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
              to="/Ecommerce"
            >
              Ecommerce
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/Careers">
            <a
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
              to="/Careers"
            >
              Careers
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/Shipfreight">
            <a
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
              to="/Shipfreight"
            >
              Shipfreight
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/Industries">
            <a
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
              to="/Industries"
            >
              Industries
            </a>
          </SidebarLinkR>
          <SidebarLinkR to="/KalPower">
            <a
              onClick={toggle}
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              activeClassName="active"
              to="/KalPower"
            >
              KalPower
            </a>
          </SidebarLinkR>
        </SidebarMenu>
        <SideBtnWrap className="mt-2">
          <SidebarRoute>
            <a href="/Contact">Contact Us</a>
          </SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap className="mt-2">
          <SidebarRoute to="/WorkAtKalway">
            <addEventListener>
              <a href="/WorkAtKalway">Work At KALWAY</a>
            </addEventListener>
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SlidebarContainer>
  );
};

export default Sidebar;
