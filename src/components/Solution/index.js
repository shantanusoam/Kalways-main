import React, { useState, useEffect } from 'react';
import client, { builder } from '../../client';
import trucks from '../../images/bg.jpg';
import Containers from '../../images/comtaimer.png';
import Shiping from '../../images/shiping.jpg';
import Inc5000 from '../../images/baI1.png';
import SmartWay from '../../images/baI2.png';
import BestBroker from '../../images/baI3.png';
import YouTube from 'react-youtube';
import PhoneNo from '../phoneno';
import './style.css';
import {
  WWOCArd,
  WWOCardContent,
  WWOCCHeading,
  WWOCCParagraph,
  CardListRow,
  BannerContainer,
  LinkRo,
  NavLink,
  WWOCArd1,
  BannerContainer2,
} from './SolutionElement';
import Fade from 'react-reveal/Fade';

import YoutubeEmbed from './youtubeVideo';
const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    rel: 0,
    showinfo: 0,
    ecver: 2,
  },
};
const urlFor = (source) => builder.image(source);
export default function Solution({ posts, Phoneno }) {
  return (
    <>
      {/* <WWOCArd1>
        <div style={{ flex: 1 }} className="m-8 items-center">
          <YouTube videoId="h-P3khDl29U" opts={opts} />;
          <YoutubeEmbed embedId="h-P3khDl29U" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 className="font-bold text-2xl mb-5">
            Why KALWAY Is The Best 3PL For You
          </h3>
          <div className=" text-gray-800 text-0xl mb-4 lg:text-1xl md:mb-5 2xl:h-56 w-3/4">
            Our centralized marketplace connects you to the people, technology,
            data, and capacity needed to take your supply chain further.
            <br></br> For shippers, we offer a wide network of 13+ Warehouses,
            10,000+ Carriers, 2,500+ Trailers, 800+ Trucks, and 24/7 customer
            service to get your products where they need to be, on time and on
            budget.
            <br></br> For carriers we provide the ability to manage loads and
            drivers with one easy-to-use portal, putting all the information you
            need, including load documents and invoices, at your fingertips.
            <br></br> From environmental responsibility and sustainable supply
            chain solutions to industry insights and partnerships that drive
            innovative thinking – we’re committed to moving towards a greener
            future.
          </div>
        </div>
      </WWOCArd1> */}
      <WWOCArd>
        <WWOCardContent>
          {posts[0] ? (
            <>
              <WWOCCHeading>{posts[0]['content'][1].label}</WWOCCHeading>
              <WWOCCParagraph>{posts[0]['content'][1].heading}</WWOCCParagraph>
            </>
          ) : null}

          <CardListRow>
            <div className=" md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center   ">
              {/* <LinkRo
        key={4}
        to={{
          pathname: "/Product",
          state: { id: "lol" }, // your data array of objects
        }}
        className=" flex-1 "
        key={3}
        id={3}
      > */}
              {/* <Fade bottom key={2}>
        <div
          className="bg-white   m-9 hover:shadow-2xl flex-1 "
          key={2}
          id={5}
        >
          <img
            src={trucks}
            alt="Trailers images"
            className=" h-80 w-full object-cover"
          />

          <div className="p-8"> */}
              {/* <h3 className="font-bold text-2xl mb-5">fine</h3> */}
              {/* <br />
            <h3 className=" text-1xl mb-5 ">
              Tap into a marketplace that matches over 10.000 shipments a
              day
            </h3>
            <NavLink
              key={1}
              to={{
                pathname: "/Product",
                state: { id: "lol" }, // your data array of objects
              }}
            > */}
              {/* <p>date</p> */}
              {/* </NavLink>
          </div>
        </div>
      </Fade> */}
              {/* </LinkRo> */}
              {posts[0]
                ? posts[0]['content'][2]['rows'].map((post) => (
                    <Fade bottom key={post._key}>
                      <div className="bg-white hover:shadow-2xl m-9 flex-1 transition duration-700 ease-in-out delay-150 transition duration-700 ease-in-out delay-150">
                        <img
                          src={urlFor(post.image.asset._ref)}
                          alt="boy with camera"
                          className=" h-80 w-full object-cover"
                        />

                        <div className="p-8">
                          <h3 className="font-bold text-2xl mb-5">
                            {post.heading}
                          </h3>
                          <br />
                          <div className=" text-gray-800 text-0xl mb-4 lg:text-1xl md:mb-5 2xl:h-56">
                            {post.text[0]['children'][0]['text']}
                          </div>
                          <a href="/Contact">
                            <button className="btn">
                              <span className="btn-text">{Phoneno}</span>
                            </button>
                          </a>
                        </div>
                      </div>
                    </Fade>
                  ))
                : null}
              {/* <Fade bottom>
                <div className="bg-white hover:shadow-2xl m-9 flex-1 transition duration-700 ease-in-out delay-150 transition duration-700 ease-in-out delay-150">
                  <img
                    src={trucks}
                    alt="boy with camera"
                    className=" h-80 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="font-bold text-2xl mb-5">Transportation</h3>
                    <br />
                    <div className=" text-gray-800 text-0xl mb-4 lg:text-1xl md:mb-5 2xl:h-56">
                      No matter how you prefer to manage your business, we have
                      you covered. You can call or message a specialist who can
                      access our proprietary technology platform on your behalf,
                      Get the instant access you need to do everything from book
                      loads to submit PODs. Learn more about our tech tracking
                      options for carriers.
                    </div>
                    <a href="/Contact">
                      <button className="btn">
                        <span className="btn-text">1-800-502-7000</span>
                      </button>
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade bottom>
                <div className="bg-white hover:shadow-2xl m-9 flex-1 transition duration-700 ease-in-out delay-150 transition duration-700 ease-in-out delay-150">
                  <img
                    src={Containers}
                    alt="boy with camera"
                    className=" h-80 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="font-bold 2xl:text-2xl text-2xl mb-5">
                      Managed Supply Chain
                    </h3>
                    <br />
                    <div className="text-gray-800 text-1xl mb-5 lg:h-56">
                      As the market fluctuates, your supply chain must adapt
                      instantly, which means you need more than just a
                      transportation management system (TMS). Without a 5PL who
                      can configure a solution to support your needs, you’ll be
                      stuck dealing with cost volatility and service
                      disruptions. We help you achieve end-to-end network
                      execution, real-time
                    </div>
                    <a href="/Contact">
                      <button className="btn">
                        <span className="btn-text">1-800-502-7000</span>
                      </button>
                    </a>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="bg-white hover:shadow-2xl m-9 flex-1 transition duration-700 ease-in-out delay-150 transition duration-700 ease-in-out delay-150">
                  <img
                    src={Shiping}
                    alt="boy with camera"
                    className=" h-80 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="font-bold text-2xl mb-5">
                      Become a Customer
                    </h3>
                    <br />
                    <div className=" text-gray-800 text-1xl mb-5 lg:h-56">
                      Access scalable dedicated fleets that can quickly adapt to
                      short-term market volatility. KALWAY private and dedicated
                      fleet services bring you the dependability of professional
                      drivers on set schedules, without the expense of
                      ownership. Do you have your own fleet? KALWAY can identify
                      back-haul matches to help you eliminate empty miles and
                      turn your deadhead into profit.
                    </div>
                    <a href="/Contact">
                      <button className="btn">
                        <span className="btn-text">1-800-502-7000</span>
                      </button>
                    </a>
                  </div>
                </div>
              </Fade> */}
            </div>
          </CardListRow>
          {/* <CardContainer>
    <FlipCard>
      <FrontFace>
        <img
          src="https://KALWAY.com/wp-content/uploads/2020/02/Markerplace_HP_Flipcard.jpg"
          alt=""
        />
        <HoveringTextContainer>
          Tap into a marketplace that matches over 10,000 shipments a day.
        </HoveringTextContainer>
      </FrontFace>
      <BackFace></BackFace>
    </FlipCard>
    <FlipCard>
      <FrontFace>
        <img
          src="https://KALWAY.com/wp-content/uploads/2020/02/Multi-Modal_hp_Flipcard.jpg"
          alt=""
        />
        <HoveringTextContainer>
          Tap into a marketplace that matches over 10,000 shipments a day.
        </HoveringTextContainer>
      </FrontFace>
      <BackFace></BackFace>
    </FlipCard>
    <FlipCard>
      <FrontFace>
        <img
          src="https://KALWAY.com/wp-content/uploads/2020/02/Multi-Modal_hp_Flipcard.jpg"
          alt=""
        />
        <HoveringTextContainer>
          Tap into a marketplace that matches over 10,000 shipments a day.
        </HoveringTextContainer>
      </FrontFace>
      <BackFace></BackFace>
    </FlipCard>
  </CardContainer> */}
          {/* <CButton>
    <WWOCCButton to="/Contact">Contact Us</WWOCCButton>
    <WWOCCParagraph
      to={{ pathname: "https://kaltrailers.com" }}
      target="_blank"
    >
      or see our portfolio
    </WWOCCParagraph>
  </CButton> */}
          <BannerContainer>
            <BannerContainer2 className="flex lg:flex-row flex-col ">
              {posts[0]
                ? posts[0]['content'][3]['rows'].map((post) => (
                    <Fade left key={post._key}>
                      <div className="flex-1 ">
                        <img
                          src={urlFor(post.image.asset._ref)}
                          alt="America's Fastest Growing Priivate Companies"
                        ></img>
                      </div>
                    </Fade>
                  ))
                : null}
            </BannerContainer2>
          </BannerContainer>
          {/* <WWOCArd1>
            <div style={{ flex: 1 }} className="m-8 items-center">
              <YouTube videoId="h-P3khDl29U" opts={opts} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 className="font-bold text-2xl mb-5">
                Why KALWAY Is The Best 3PL For You
              </h3>
              <div className=" text-gray-800 text-0xl mb-4 lg:text-1xl md:mb-5 2xl:h-56 w-3/4">
                Our centralized marketplace connects you to the people,
                technology, data, and capacity needed to take your supply chain
                further.
                <br></br> For shippers, we offer a wide network of 13+
                Warehouses, 10,000+ Carriers, 2,500+ Trailers, 800+ Trucks, and
                24/7 customer service to get your products where they need to
                be, on time and on budget.
                <br></br> For carriers we provide the ability to manage loads
                and drivers with one easy-to-use portal, putting all the
                information you need, including load documents and invoices, at
                your fingertips.
              </div>
            </div>
          </WWOCArd1> */}
          {posts[0] ? (
            <>
              <WWOCCHeading>
                {posts[0]['content'][4].label} <br></br>
                {Phoneno}
              </WWOCCHeading>
              <WWOCCParagraph>{posts[0]['content'][4].heading}</WWOCCParagraph>
            </>
          ) : null}

          <CardListRow></CardListRow>
        </WWOCardContent>
      </WWOCArd>
    </>
  );
}
