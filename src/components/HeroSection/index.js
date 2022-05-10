import React, { useState } from 'react';
import Video from './media/Bgvideo2.mp4';
// import client from '../../client';
// import bg from '../../images/bg.jpg';
// import bankground from "../../images";
import './style.css';
import {
  HeroContainer,
  // WWOCCButtonM,
  PCENTER,
  HeroP,
  HeroContent,
  // WWOCCButton,
  HeroBg,
  HeroPromoContainer,
  // HeroPromo,
  // SocialMediaActions,
  // HomeContactContent,
  // Info,
  // NavLinks,
  VideoBg,
  ContainerMain,
  // Callinfo,
  // BgImage,
} from './HeroElements';
// import { FiPhoneCall } from 'react-icons/fi';
// import { AiOutlineMail } from 'react-icons/ai';
// import { GoLocation } from 'react-icons/go';
// import { animateScroll as scroll, Link } from 'react-scroll';

// import EmblaCarousel from './EmblaCarousel';

import styled from 'styled-components';
// import { sliderItems } from './media/data';
// import { mobile } from './media/responsive';
// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   overflow: hidden;
//   position: relative;
//   ${mobile({ display: 'none' })}
// `;
const Gradients = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 20%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 100%;
  height: 100%;
  transform: rotate(-180deg);
  min-height: 600px;
  object-fit: cover;
  position: absolute;
  z-index: 2;
`;
const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());
// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #f0f0f0;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   z-index: 99;
//   bottom: 0;

//   margin: auto;
//   left: ${(props) => props.direction === 'left' && '10px'};
//   right: ${(props) => props.direction === 'right' && '10px'};
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;
// const Wrapper = styled.div`
//   height: 100%;
//   display: flex;
//   transition: all 1.5s ease-in-out;
//   transform: translateX(${(props) => props.slideIndex * -100}vw);
// `;

// const Slide = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   position: relative;
//   background-color: #${(props) => props.bg};
// `;
// const ImgContainer = styled.div`
//   flex: 1;
// `;
// const Image = styled.img`
//   height: 80%;
// `;
// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 50px;
// `;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.div`
  margin: 0px 0px;
  font-size: 20px;
  font-weight: 500px;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function HeroSectio({ posts }) {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <HeroContainer id="Home">
      <Gradients></Gradients>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <ContainerMain>
          <h1 className="text-white">KALWAY</h1>
          {posts[0] ? <HeroP>{posts[0]['content'][0].heading}</HeroP> : null}
          {posts[0] ? (
            <a href={posts[0]['content'][0]['ctas'][0].link}>
              <button className="btn">
                <span className="btn-text">
                  {posts[0]['content'][0]['ctas'][0].title}
                </span>
              </button>
            </a>
          ) : null}
        </ContainerMain>

        <PCENTER className="text-gray-600 p-8">
          Work with a trusted global third-party logistics provider that has
          been empowering business growth for over 15 years. Our centralized
          marketplace connects you to the people, technology, data and capacity
        </PCENTER>
        <button className="btn block lg:hidden">
          <span className="btn-text">Contact us</span>
        </button>
        {/* <WWOCCButtonM className="p-8">
          <Link
            to="Footertag"
            smooth={true}
            duration={500}
            spy={true}
            exact={true}
            offset={-80}
          >
            Contact Us
          </Link>
        </WWOCCButtonM> */}

        {/* <div class="pl-4 w-90  md:max-w-9  ">
          <div class="p-8 bg-white  rounded shadow-md bg-opacity-75 ">
            <h2 class="text-3xl font-bold text-gray-800 p-4 md:">
              TRUCKS, DRY VANS, REEFERS AND MORE
            </h2>
            <p class="text-gray-600 p-4 text-1xl">
              One-stop-shop for all your trucking needs. We are an authorized
              dealer for Vanguard trailers servicing in British Columbia,
              Canada. We are an established retailer of pre-owned trucks and
              trailers as well.
            </p>

            <WWOCCButton className="m-4" to="/Contact">
              Contact Us
            </WWOCCButton>
          </div>
        </div> */}
      </HeroContent>
      <HeroPromoContainer>
        {/* <HeroPromo>
          <SocialMediaActions>
            <FiPhoneCall></FiPhoneCall>
          </SocialMediaActions>
          <HomeContactContent>
            <Info>(604)&nbsp;864&nbsp;3100</Info>
            <Callinfo>Call Us</Callinfo>
          </HomeContactContent>
        </HeroPromo>
        <HeroPromo onclick="sendEmail();">
          <SocialMediaActions>
            <AiOutlineMail></AiOutlineMail>
          </SocialMediaActions>
          <HomeContactContent>
            <Info>trailers@KALWAY.com</Info>
            <Callinfo>Email</Callinfo>
          </HomeContactContent>
        </HeroPromo>
        <HeroPromo>
          <NavLinks>
            <Link
              to="Map"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
            >
              <SocialMediaActions>
                <GoLocation></GoLocation>
              </SocialMediaActions>
            </Link>
          </NavLinks>

          <HomeContactContent>
            <Info>Canada</Info>
            <Callinfo>Location</Callinfo>
          </HomeContactContent>
        </HeroPromo> */}
      </HeroPromoContainer>
    </HeroContainer>
  );
}
