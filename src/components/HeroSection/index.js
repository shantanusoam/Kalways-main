import React, { useState } from 'react';
import Video from './media/Bgvideo2.mp4'; 
import './style.css';
import {
  HeroContainer,
  PCENTER,
  HeroP,
  HeroContent,
  HeroBg,
  HeroPromoContainer,

  VideoBg,
  ContainerMain,
 
} from './HeroElements';


import styled from 'styled-components';

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
      
      </HeroContent>
      <HeroPromoContainer> 
      </HeroPromoContainer>
    </HeroContainer>
  );
}
