import React from 'react';
import trucks from '../../images/bg.jpg';
import Containers from '../../images/comtaimer.png';
import Shiping from '../../images/shiping.jpg';
import Inc5000 from '../../images/baI1.png';
import SmartWay from '../../images/baI2.png';
import BestBroker from '../../images/baI3.png';

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
  BannerContainer2,
} from './SolutionElement';
import Fade from 'react-reveal/Fade';
const Solution = ({ isOpen, toggle }) => {
  return (
    <WWOCArd>
      <WWOCardContent>
        <WWOCCHeading>FREIGHT AT FULL SPEED</WWOCCHeading>
        <WWOCCParagraph>
          Work with a trusted global third-party logistics provider that has
          been empowering business growth. Our centralized marketplace connects
          you to the people, technology, data and capacity – full truckload,
          less than truckload (LTL), intermodal and other capacity or asset
          solutions – needed to take your supply chain further, faster.
        </WWOCCParagraph>
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
            <Fade bottom>
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
                    <button class="btn">
                      <span class="btn-text">1-800-502-7000</span>
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
                    stuck dealing with cost volatility and service disruptions.
                    We help you achieve end-to-end network execution, real-time
                  </div>
                  <a href="/Contact">
                    <button class="btn">
                      <span class="btn-text">1-800-502-7000</span>
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
                  <h3 className="font-bold text-2xl mb-5">Become a Customer</h3>
                  <br />
                  <div className=" text-gray-800 text-1xl mb-5 lg:h-56">
                    Access scalable dedicated fleets that can quickly adapt to
                    short-term market volatility. KALWAY private and dedicated
                    fleet services bring you the dependability of professional
                    drivers on set schedules, without the expense of ownership.
                    Do you have your own fleet? KALWAY can identify back-haul
                    matches to help you eliminate empty miles and turn your
                    deadhead into profit.
                  </div>
                  <a href="/Contact">
                    <button class="btn">
                      <span class="btn-text">1-800-502-7000</span>
                    </button>
                  </a>
                </div>
              </div>
            </Fade>
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
            <Fade left>
              <div className="flex-1 ">
                <img
                  src={Inc5000}
                  alt="America's Fastest Growing Priivate Companies"
                ></img>
              </div>
            </Fade>
            <Fade bottom>
              <div className="flex-1">
                <img src={SmartWay} alt="Smart Way Transport Partner"></img>
              </div>
            </Fade>
            <Fade right>
              <div className="flex-1 pt-6">
                <img
                  className="w-3/4"
                  src={BestBroker}
                  alt="Nastc Bsest Broker"
                ></img>
              </div>
            </Fade>
          </BannerContainer2>
        </BannerContainer>

        <WWOCCHeading>
          CARRIER PACKET - JOIN TEAM AT KALWAY <br></br>1-800-502-7000
        </WWOCCHeading>
        <WWOCCParagraph>
          Quickly browse, negotiate, book, track and invoice loads on any of our
          easy-to-use technology channels. Plus, when you need to talk to a
          KALWAY logistics specialist, we’re just a phone call away. Life on the
          road is tough; let us make it easier. Rely on our specialist to know
          the loads you want, find opportunities that fit your network and stand
          by you when things get tough. We’re here to help you grow with a
          variety of dedicated opportunities.
        </WWOCCParagraph>
        <CardListRow></CardListRow>
      </WWOCardContent>
    </WWOCArd>
  );
};

export default Solution;
