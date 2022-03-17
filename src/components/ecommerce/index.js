import React, { useEffect } from 'react';
import image1 from '../../images/e-commerce1.png';
import image2 from '../../images/e-commerce2.png';
import image3 from '../../images/e-commerce3.png';

// import image3 from '../../images/ut0010.jpg';
import image4 from '../../images/eci1.png';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import ecb from '../../images/ecb.png';
import Bounce from 'react-reveal/Bounce';
import EmployeeReferral from '../../images/Employee-Referral.png';
import MaternityPaternity from '../../images/Maternity-Paternity.png';
import Philanthropy from '../../images/Philanthropy.png';
import PetInsurance from '../../images/Pet-Insurance-01.png';
import HealthWellness from '../../images/Health-Wellness-01.png';
import MedicalVisionDental from '../../images/Medical-Vision-Dental-01.png';
import AdditionalBenefits from '../../images/Additional-Benefits-01.png';
import Four from '../../images/401k-01.png';
import CareerGrowth from '../../images/Career-Growth-01.png';
import PTO01 from '../../images/PTO-01.png';
import grid1 from '../../images/fleet.png';
import grid2 from '../../images/grid2.png';
import grid3 from '../../images/grid3.png';
import grid4 from '../../images/grid4.png';
import grid5 from '../../images/grid5.png';
import grid6 from '../../images/grid6.png';
import grid7 from '../../images/grid7.png';
import grid8 from '../../images/grid8.png';
import grid9 from '../../images/grid9.png';
import mgrid1 from '../../images/mgrid1.png';
import mgrid2 from '../../images/mgrid2.png';
import mgrid4 from '../../images/intermodal.png';
import mgrid5 from '../../images/mgrid5.png';
import mgrid6 from '../../images/mgrid6.png';
import grid12 from '../../images/sustain.png';
import grid13 from '../../images/shipper.png';
import Pulse from 'react-reveal/Pulse';
import moreleaves from '../../images/more-leaves.png';
import Fade from 'react-reveal/Fade';

// import bankground from "../../images";
import { animateScroll as scroll, Link } from 'react-scroll';
import {
  ImageS,
  HeroContainer,
  WWOCCButtonM,
  Percentage,
  PCENTER,
  Card,
  Faq,
  HeroP,
  Fulfillment,
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
  Formcontainer,
  Callinfo,
  BgImage,
  FormButton,
} from './ecommerceElement';
const ecommerce = () => {
  return (
    <>
      {/* <Gradients></Gradients>
        <HeroBg>
          <BgImage></BgImage>
        </HeroBg> */}

      <ContainerMain className="relative">
        <div className=" flex flex-col  bg-slate-500">
          {/* <div className="lg:flex lg:flex-row hidden">
            <img src={image1} className="flex-1 h-64 2xl:h-80 " alt=""></img>
            <img src={image2} className="flex-1 h-64 2xl:h-80 " alt=""></img>
            <img src={image4} className="flex-1 h-64 2xl:h-80 " alt=""></img>
          </div> */}

          <div className="block  z-0">
            <div
              className=" bg-gradient-to-l rounded-lg  
                from-blue-400 via-green-500 to-red-500
                z-20
                "
            ></div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper z-10 w-full"
            >
              <SwiperSlide>
                <ImageS alt="" img={image1}></ImageS>
              </SwiperSlide>
              <SwiperSlide>
                <ImageS alt="" img={image2}></ImageS>
              </SwiperSlide>
              <SwiperSlide>
                <ImageS alt="" img={image3}></ImageS>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="absolute bottom-48 lg:bottom-80 lg:left-40 z-30">
          <div className="hidden lg:block">
            <HeroP>EVER FULFILLING</HeroP>
            <a href="/Contact">
              <button class="btn">
                <span class="btn-text">SPEAK TO AN EXPERT</span>
              </button>
            </a>
          </div>

          <PCENTER class="text-white  self-center m-8">
            <h1 className=" font-bold pt-8 text-5xl pb-2 self-center  w-auto">
              EVER FULFILLING
            </h1>
            {/* <p>
              Being part of the Kalways family means surrounding yourself with a
              sense of openness and inclusivity,a group of different people
              who’ve created an environment where everyone is willing to help
              everyone. It means challenging yourself and your peers to take the
              road less traveled, to stay fearless and innovative, while having
              fun too.
            </p> */}
          </PCENTER>
        </div>
      </ContainerMain>

      <Bounce right>
        <Formcontainer className="flex flex-col justify-center lg:items-center items-start bg-black p-8">
          <h3 className="self-center pb-8 pt-4 lg:text-4xl text-2xl text-white">
            The KALWAY e-commerce fulfillment advantage
          </h3>
          <FormButton className="self-center">
            {' '}
            <a href="/Contact">SPEAK TO A KALWAY EXPERT</a>
          </FormButton>
        </Formcontainer>
      </Bounce>
      {/* <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex 2xl:flex-row lg:flex-row flex-wrap justify-center items-center flex-col ">
        
        <Fade bottom>
          <div className="bg-white hover:shadow-2xl 2xl:m-2 m-2 flex-1">
            <img
              src={image1}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold 2xl:text-3xl text-2xl mb-5">
                Pricing You Can Trust
              </h3>
              <br />
              <p className="text-gray-800 text-1xl mb-5 h-42">
                You can trust the quote you get from us, whether it comes
                through your rep or KALWAYGO. If you are quoting for a spot LTL
                load, a high-volume lane, or anything else, we can get you a
                clear, reliable price.
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="bg-white hover:shadow-2xl 2xl:m-2 m-2 flex-1">
            <img
              src={image2}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold 2xl:text-3xl text-2xl mb-5">
                Network Density
              </h3>
              <br />
              <p className="text-gray-800 text-1xl mb-5 h-42">
                You need quick access to a diverse carrier base to control your
                freight spend and enable consistent service. Leverage our vast,
                centralized network of over 75,000 carriers.
              </p>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="bg-white hover:shadow-2xl 2xl:m-2 m-2 flex-1">
            <img
              src={image3}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold 2xl:text-3xl text-2xl  mb-5">
                Unmatched Support
              </h3>
              <br />
              <p className="text-gray-800 text-1xl mb-5 h-42">
                When moving CPG freight, you need the support of a dedicated
                team that you can count on. Our specialists are here to help
                during the day and after hours to respond to your quoting and
                issue resolution needs.
              </p>
            </div>
          </div>
        </Fade>
      </div> */}

      <div className="lg:ml-40 lg:mr-40  lg:mt-16">
        <div className=" flex lg:flex-row flex-col-reverse ">
          <div className="lg:pr-40 ml-4 mt-4 lg:w-4/5 mr-4">
            <>
              <h3 className="font-bold  lg:text-3xl text-3xl">
                KALWAY Postions
              </h3>
              <p className="font-bold  lg:text-2xl text-xl ">
                Flexible solutions to meets today’s omni-channel demands
              </p>
            </>
            <p className="text-gray-800 font-normal pt-8 text-xl w-auto ">
              At KALWAY, our e-commerce solutions allow you to gain greater
              control of product selection, inventory management, and customer
              service, while maintaining critical speed-to-market. With our
              focus on integration with all e-commerce platforms, fulfillment
              center expertise, and strategically located fulfillment
              warehouses, you benefit from 2-day delivery to 95% of the U.S.;
              streamlined operation stand-up, product personalization, and
              improved customer satisfaction.
            </p>
            <p className=" text-gray-800 font-normal pt-2 pb-10 text-xl w-auto">
              Through our e-commerce fulfillment solution, you get: a
              streamlined on-boarding process to ensure you are operational
              quickly; specially trained teams that provide you with talent
              management; best-in-class fulfillment order and management
              systems; and full reverse logistics capabilities. As a result, you
              overcome the challenges of operating an omni-channel supply chain,
              meet the e-commerce demands of consumers who expect two-day
              delivery, and provide real-time inventory management.
            </p>
          </div>
          <div>
            <img src={image4} className="lg:w-auto w-full" alt=""></img>
          </div>
        </div>
      </div>

      <Fulfillment>
        <h3 className="self-center pb-8 pt-8 text-4xl p-4">
          The KALWAY <br></br> e-commerce fulfillment advantage
        </h3>
        <div className="flex lg:flex-row flex-col w-5/6 pb-16  justify-around">
          <div className="flex-1 ">
            <h4 className="font-bold text-xl pb-4  ">TECHNOLOGY</h4>
            <p className="   text-white">
              With seamless shopping cart integration and top-of-the-line
              Warehouse Management System (WMS), you can easily manage your
              inventory and ship your products
            </p>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-xl pb-4">TWO-DAY DELIVERY</h4>
            <p className=" text-white">
              Our strategically placed fulfillment centers offer two-day
              delivery to 99% of the United States, reduced transit costs, and
              industry-leading accuracy
            </p>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-xl pb-4">TRANSPORTATION</h4>
            <p className="text-white">
              Our carrier-agnostic shipping helps us secure the lowiest costs
              for your order
            </p>
          </div>
        </div>
      </Fulfillment>

      <Bounce top>
        <Percentage>
          <h3 className="self-center p-4 lg:pb-16 lg:pt-16 text-4xl text-black font-normal">
            The KALWAY<br></br> e-commerce fulfillment advantage
          </h3>
          <div className="flex lg:flex-row flex-col w-5/6 lg:pb-16  justify-around">
            <div className="flex-1 ">
              <h4 className="font-bold text-7xl pb-4  ">95%</h4>
              <p className="   text-black">of U.S. reached in two days</p>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-7xl pb-4">99%</h4>
              <p className=" text-black">order accuracy</p>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-7xl pb-4">100%</h4>
              <p className="text-black">API integration</p>
            </div>
          </div>
        </Percentage>
      </Bounce>
      <Bounce left>
        <Formcontainer className=" flex w-screen justify-center justify-items-center items-center">
          <div
            className="flex flex-col justify-center justify-items-center items-center h-80 lg:w-full"
            style={{
              backgroundImage: `radial-gradient(rgba(66, 66, 66, 0.5), rgb(0 0 0 / 50%)) ,url(${ecb})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <h3 className="p-4 self-center pb-8 pt-4 text-4xl text-white">
              The KALWAY <br></br> e-commerce fulfillment advantage
            </h3>
            <FormButton>
              {' '}
              <a href="/Contact">SPEAK TO A KALWAY EXPERT</a>
            </FormButton>
          </div>
        </Formcontainer>
      </Bounce>
    </>
  );
};

export default ecommerce;
