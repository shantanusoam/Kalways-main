import React, { useRef, useState, useEffect } from 'react';
import client, { builder } from '../../client';
import image1 from '../../images/ut008.jpg';
import image2 from '../../images/ut009.jpg';
import image3 from '../../images/ut0010.jpg';
import image4 from '../../images/ut0011.jpg';
import PTO01 from '../../images/Kalway-Icon2.png';
import bgcf from '../../images/CarrearD.png';
import map from '../../images/Cmap.png';
import EmployeeReferral from '../../images/Employee-Referral.png';
import MaternityPaternity from '../../images/MP-Care-Icon.png';
import Philanthropy from '../../images/Philanthropy.png';
import PetInsurance from '../../images/Pet-Insurance-01.png';
import HealthWellness from '../../images/Health-Wellness-01.png';
import MedicalVisionDental from '../../images/Medical-Vision-Dental-01.png';
import AdditionalBenefits from '../../images/Additional-Benefits-01.png';
import Four from '../../images/401k-01.png';
import CareerGrowth from '../../images/Career-Growth-01.png';
// import PTO01 from '../../images/PTO-01.png';

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
import Zoom from 'react-reveal/Zoom';
import BlockContent from '@sanity/block-content-to-react';
// import bankground from "../../images";
import { animateScroll as scroll, Link } from 'react-scroll';
import {
  HeroContainer,
  WWOCCButtonM,
  PCENTER,
  Card,
  Faq,
  Line,
  FormC,
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
  Head,
  ContainerMain,
  Callinfo,
  BgImage,
} from './CareersElement';
import { render } from '@testing-library/react';
const urlFor = (source) => builder.image(source);

export default function Careers() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == "CAREERS"] {
          content[],
         
         }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  return (
    <>
      <HeroContainer
        id="Carrers"
        bgImage={
          posts[0]
            ? urlFor(posts[0]['content'][0].backgroundImage.asset._ref)
            : null
        }
      >
        <HeroContent className="flex flex-col 	justify-items-end lg:w-1/2">
          <ContainerMain>
            <HeroP>{posts[0] ? posts[0]['content'][0].heading : null}</HeroP>
            <a href="/Contact">
              <button class="btn">
                <span class="btn-text">Contact us</span>
              </button>
            </a>
          </ContainerMain>

          <PCENTER class="text-white lg:p-8 text-left m-8">
            <h1 className=" font-normal pt-8 2xl:text-3xl pb-2 text-4xl w-auto ">
              Start your career on KALWAY
            </h1>
            {/* <p>
                Being part of the KALWAY family means surrounding yourself with
                a sense of openness and inclusivity,a group of different people
                who’ve created an environment where everyone is willing to help
                everyone. It means challenging yourself and your peers to take
                the road less traveled, to stay fearless and innovative, while
                having fun too.
              </p> */}
          </PCENTER>
        </HeroContent>
      </HeroContainer>
      <div className=" flex flex-col  lg:pb-2 pb-2 bg-slate-800 ">
        {/* <div className="flex flex-row">
            <img src={image2} className="flex-1 h-96" alt=""></img>
            <img src={image3} className="flex-1 h-96" alt=""></img>
            <img src={image1} className="flex-1 h-96" alt=""></img>
          </div> */}

        <div className="flex lg:flex-row flex-col  lg:pl-16 pl-4 lg:pt-8  ">
          <div className="self-start ">
            {/* <h3 className="font-bold pt-10 text-xl">Additional Information</h3> */}
            <Head className=" lg:self-center self-start ">
              <h2 className=" lg:self-center self-start pt-10 text-black font-bold text-3xl 2xl:text-4xl">
                {posts[0] ? posts[0]['content'][1].heading : null}
                <p className="h-2"></p>
                <div className="w-40 h-1  hover:w-10 transition duration-700 ease-in-out delay-150"></div>
              </h2>
            </Head>

            {/* <p className="text-gray-800 font-normal pt-9 text-xl w-auto">
                We will help you get your products where they need to go fast,
                efficiently and without interruption. Join the more than 3,500 CPG
                companies who trust us with their freight.
              </p> */}
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col lg:pl-16 pl-4 lg:pt-8">
        <div>
          {posts[0] ? (
            <img
              src={urlFor(posts[0]['content'][1].image.asset._ref)}
              alt="Map"
            ></img>
          ) : null}
        </div>
        <div className="flex flex-row lg:ml-28 ml-2">
          <Line className="border-black hidden lg:block"></Line>
          <div className="flex flex-col lg:ml-4 ml-0 mt-24">
            {posts[0]
              ? posts[0]['content'][1]['content'].map((post) => (
                  <>
                    <h4 className="text-3xl lg:mt-8 mt-4 ">{post.title}</h4>
                    <Zoom right cascade>
                      <div className="lg:mt-4 mt-2">
                        {post.rows.map((row) => (
                          <p className="pt-1">{row}</p>
                        ))}
                      </div>
                    </Zoom>
                  </>
                ))
              : null}
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-grey bg-white ">
        <Head className="  self-start pl-16">
          <h2 className="font-bold self-start pt-10 text-black  text-2xl 2xl:text-4xl">
            {posts[0] ? posts[0]['content'][2].title : null}
            <p className="h-2"></p>
            <div className="w-full h-1  hover:w-10 transition duration-700 ease-in-out delay-150"></div>
          </h2>
        </Head>

        <div className="pb-10  pt-10 grid gap-10 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 self-center justify-center justify-items-center ">
          {posts[0]
            ? posts[0]['content'][2]['rows'].map((post) => (
                <Pulse>
                  <Card className="flex flex-col items-left h-96 bg-white w-80 p-8">
                    <img
                      src={urlFor(post.image.asset._ref)}
                      className="w-32 self-center"
                    ></img>
                    <h4 className="text-2xl font-bold self-left pt-4">
                      {post.heading}
                    </h4>
                    <p className="font-light self-left pt-4">
                      <BlockContent
                        blocks={post.text}
                        projectId="cjv2tdo2"
                        dataset="production"
                      />
                    </p>
                  </Card>
                </Pulse>
              ))
            : null}
        </div>
        <div className="h-24"></div>

        <div className="flex w-screen justify-center justify-items-center items-center">
          {posts[0] ? (
            <div
              className="flex flex-col justify-center justify-items-center items-center h-80 lg:w-5/6"
              style={{
                backgroundImage: `radial-gradient(#42424280,#9f9e9e17), url(${urlFor(
                  posts[0]['content'][3].image.asset._ref
                )})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h4 className="text-white text-center lg:text-5xl text-3xl lg:w-3/5">
                {posts[0]['content'][3].heading}
              </h4>
              <WWOCCButtonM>
                <a href={posts[0]['content'][3].cta.link}>
                  {posts[0]['content'][3].cta.title}
                </a>
              </WWOCCButtonM>
            </div>
          ) : null}
        </div>
        <div className="h-4"></div>

        {/* <div className="flex 2xl:flex-col self-center justify-center justify-items-center w-4/5">
            <h4 className=" self-left font-light text-5xl">FAQs</h4>
            <Faq className=" self-left  text-xl">
              <h4 className="text-4xl bg-grey-400 border-2  rounded-xl shadow-lg">
                How do I know if my application was received?
              </h4>
              <div>You will receive a confirmation email!</div>
            </Faq>
            <Faq className=" self-left  text-xl">
              <h4 className="text-4xl bg-grey-400 border-2  rounded-xl shadow-lg">
                Should I complete the application or just upload my resume?
              </h4>
              <div>
                We prefer that you complete our application and upload an updated
                resume. The process will move quicker if we have a completed
                application.
              </div>
            </Faq>
            <Faq className=" self-left  ">
              <h4 className="text-4xl bg-grey-400 border-2  rounded-xl shadow-lg">
                What’s the best way to stay up to date on Redwood’s job openings?
              </h4>
              <div>
                Keep checking our careers page, follow us on LinkedIn, tune into
                podcasts with our leaders and stay connected with our Talent
                Acquisition team!
              </div>
            </Faq>
            <Faq className=" self-left  text-xl">
              <h4 className="text-4xl bg-grey-400 border-2  rounded-xl shadow-lg">
                Do you offer internships?
              </h4>
  
              <div>
                Yes, we offer both summer and year-round internship, dependent on
                current business needs.
              </div>
            </Faq>
            <Faq className=" self-left  text-xl">
              <h4 className="text-4xl bg-grey-400 border-2  rounded-xl shadow-lg">
                I work at Redwood, what steps do I take to apply to another
                position within the company?
              </h4>
              <div>
                We LOVE to hear and see our employees make moves! Reach out to our
                Talent Acquisition or Human Resources team for more information
                about the internal interview process.
              </div>
            </Faq>
          </div> */}
      </div>
    </>
  );
}
