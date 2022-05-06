import React from 'react';
import {
  CloseIcon,
  Icon,
  SlidebarContainer,
  SidebarWrapper,
  SidebarMenu,
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
          <SidebarLinkR to="/">Home</SidebarLinkR>

          <SidebarLinkR to="/About">About</SidebarLinkR>
          <SidebarLinkR to="/services">Services</SidebarLinkR>
          <SidebarLinkR to="/Carriers">Carriers</SidebarLinkR>
          <SidebarLinkR to="/Shippers">Shipper</SidebarLinkR>
          <SidebarLinkR to="/Ecommerce">Ecommerce</SidebarLinkR>
          <SidebarLinkR to="/Careers">Careers</SidebarLinkR>
          <SidebarLinkR to="/Shipfreight">Shipfreight</SidebarLinkR>
          <SidebarLinkR to="/Industries">Industries</SidebarLinkR>
          <SidebarLinkR to="/KalPower">KalPower</SidebarLinkR>
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
