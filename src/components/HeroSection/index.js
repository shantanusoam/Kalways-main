import React, { useState, useEffect } from 'react';
import Video from './media/Bgvideo2.mp4';
import client from '../../client';
import bg from '../../images/bg.jpg';
// import bankground from "../../images";
import './style.css';
import {
  HeroContainer,
  WWOCCButtonM,
  PCENTER,
  HeroP,
  HeroContent,
  WWOCCButton,
  HeroBg,
  HeroPromoContainer,
  HeroPromo,
  SocialMediaActions,
  HomeContactContent,
  Info,
  NavLinks,
  VideoBg,
  ContainerMain,
  Callinfo,
  BgImage,
} from './HeroElements';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { animateScroll as scroll, Link } from 'react-scroll';

import EmblaCarousel from './EmblaCarousel';

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
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 99;
  bottom: 0;

  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
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

const data = {
  _createdAt: '2022-04-28T20:32:11Z',
  _id: '95cafa94-d4a2-494b-9a50-724d5bbcdd8d',
  _rev: 'aTniA0oG6Ad61gsvEjxZdS',
  _type: 'page',
  content: [
    {
      _key: 'edae7ce77a3d',
      _type: 'hero',
      ctas: [
        {
          _key: 'f5173c8e86c3',
          _type: 'cta',
          link: 'http://kalway.com/Contact',
          title: 'Contact Us',
        },
      ],
      heading: 'Drive your business forward',
      tagline: [
        {
          _key: 'b16949fe36b8',
          _type: 'block',
          children: [
            {
              _key: 'e0659e98ccdd0',
              _type: 'span',
              marks: [],
              text: 'KALWAY',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
      ],
    },
    {
      _key: 'd2516e1dcfbe',
      _type: 'textSection',
      heading:
        'Work with a trusted global third-party logistics provider that has been empowering business growth. Our centralized marketplace connects you to the people, technology, data and capacity – full truckload, less than truckload (LTL), intermodal and other capacity or asset solutions – needed to take your supply chain further, faster.',
      label: 'FREIGHT AT FULL SPEED',
    },
    {
      _key: '5e89753875a5',
      _type: 'infoRows',
      rows: [
        {
          _key: '87d59b0a33b1',
          _type: 'imageSection',
          cta: {
            _type: 'cta',
            title: '1-800-303-0076',
          },
          heading: 'Transportation',
          image: {
            _type: 'figure',
            asset: {
              _ref: 'image-904e1196292395602c2d90872e6b1d360cc6136d-3931x2620-jpg',
              _type: 'reference',
            },
          },
          label: 'card',
          text: [
            {
              _key: '3dc959142e68',
              _type: 'block',
              children: [
                {
                  _key: '201aa9b667dc0',
                  _type: 'span',
                  marks: [],
                  text: 'No matter how you prefer to manage your business, we have you covered. You can call or message a specialist who can access our proprietary technology platform on your behalf, Get the instant access you need to do everything from book loads to submit PODs. Learn more about our tech tracking options for carriers.',
                },
              ],
              markDefs: [],
              style: 'normal',
            },
          ],
        },
        {
          _key: '60484acf5ff3',
          _type: 'imageSection',
          cta: {
            _type: 'cta',
            title: '1-800-303-0076',
          },
          heading: 'Managed Supply Chain',
          image: {
            _type: 'figure',
            asset: {
              _ref: 'image-23c2f3f6dff8ac834d9c56004ba5fcf7f489474a-1256x837-png',
              _type: 'reference',
            },
          },
          label: 'card',
          text: [
            {
              _key: '53e611fa0a8c',
              _type: 'block',
              children: [
                {
                  _key: 'c568743e63170',
                  _type: 'span',
                  marks: [],
                  text: 'As the market fluctuates, your supply chain must adapt instantly, which means you need more than just a transportation management system (TMS). Without a 5PL who can configure a solution to support your needs, you’ll be stuck dealing with cost volatility and service disruptions. We help you achieve end-to-end network execution, real-time',
                },
              ],
              markDefs: [],
              style: 'normal',
            },
          ],
        },
        {
          _key: '60a78e654f03',
          _type: 'imageSection',
          cta: {
            _type: 'cta',
            title: '1-800-303-0076',
          },
          heading: 'Become a Customer',
          image: {
            _type: 'figure',
            asset: {
              _ref: 'image-e77d2ce97158534d2825f480ca16c3523d5f372c-4096x2726-jpg',
              _type: 'reference',
            },
          },
          label: 'card',
          text: [
            {
              _key: 'dd6799b205ba',
              _type: 'block',
              children: [
                {
                  _key: 'fa9a73bfa3be0',
                  _type: 'span',
                  marks: [],
                  text: 'Access scalable dedicated fleets that can quickly adapt to short-term market volatility. KALWAY private and dedicated fleet services bring you the dependability of professional drivers on set schedules, without the expense of ownership. Do you have your own fleet? KALWAY can identify back-haul matches to help you eliminate empty miles and turn your deadhead into profit.',
                },
              ],
              markDefs: [],
              style: 'normal',
            },
          ],
        },
      ],
      title: 'Home',
    },
    {
      _key: '23a09dfcccc1',
      _type: 'infoRows',
      rows: [
        {
          _key: '5108e6655e3f',
          _type: 'imageSection',
          image: {
            _type: 'figure',
            asset: {
              _ref: 'image-a8a9bc423281b9e13074f16f4d12b1f62b8ac48c-447x277-png',
              _type: 'reference',
            },
          },
        },
        {
          _key: 'ae82563b6fd9',
          _type: 'imageSection',
          image: {
            _type: 'figure',
            asset: {
              _ref: 'image-f9f6a928acdeba0be09b0e69c0ea117e2cadc437-672x371-png',
              _type: 'reference',
            },
          },
        },
        {
          _key: 'a58f3b0a9233',
          _type: 'imageSection',
          image: {
            _type: 'figure',
            asset: {
              _ref: 'image-988276eed65b5e1000073b730b2a1adab0d11484-659x378-png',
              _type: 'reference',
            },
          },
        },
      ],
      title: 'Sponsers',
    },
    {
      _key: '3d3dfc2a6de1',
      _type: 'textSection',
      heading:
        'Quickly browse, negotiate, book, track and invoice loads on any of our easy-to-use technology channels. Plus, when you need to talk to a KALWAY logistics specialist, we’re just a phone call away. Life on the road is tough; let us make it easier. Rely on our specialist to know the loads you want, find opportunities that fit your network and stand by you when things get tough. We’re here to help you grow with a variety of dedicated opportunities.',
      label: 'CARRIER PACKET - JOIN TEAM AT KALWAY ',
    },
    {
      _key: '943560b588dd',
      _type: 'infoRows',
      rows: [
        {
          _key: 'b7f25a232636',
          _type: 'imageSection',
          heading: 'For Shippers',
          image: {
            _type: 'figure',
            asset: {
              _ref: 'image-30aff57112ccd41736aa16f94b38bc0473e8f6bc-4822x3215-jpg',
              _type: 'reference',
            },
          },
          label:
            'Get access to capacity and equipment solutions, regardless of market conditions.',
        },
        {
          _key: '5db272b74122',
          _type: 'imageSection',
          heading: 'For Carriers',
          image: {
            _type: 'figure',
            asset: {
              _ref: 'image-39e99095d3127cd45bb5fa2a836495336c1bd163-4032x3024-jpg',
              _type: 'reference',
            },
          },
          label:
            'Instantly book your preferred loads and consistent lanes to keep your fleet hauling.',
        },
      ],
      title: 'ForSandC',
    },
  ],
  title: 'Home',
  _updatedAt: '2022-05-02T22:26:33.934Z',
};
export default function HeroSectio() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == 'Home' ]{
          title,
          content[]
          
          }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
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
              <button class="btn">
                <span class="btn-text">
                  {posts[0]['content'][0]['ctas'][0].title}
                </span>
              </button>
            </a>
          ) : null}
        </ContainerMain>

        <PCENTER class="text-gray-600 p-8">
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
