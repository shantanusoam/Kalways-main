import React, { useEffect } from 'react';
import image1 from '../../images/ut008.jpg';
import image2 from '../../images/ut009.jpg';
import image3 from '../../images/ut0010.jpg';
import image4 from '../../images/kalPower.png';
import PTO01 from '../../images/Kalway-Icon2.png';
import bgcf from '../../images/Kalp.png';
import MoreTime from '../../images/MoreTime.png';
import map from '../../images/Cmap.png';
import acessTime from '../../images/access_time.png';
import NewBusiness from '../../images/NewBusiness.png';
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
} from './KalPowerElement';
import { render } from '@testing-library/react';
class KalPower extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <>
        <HeroContainer ontainer id="Carrers ">
          {/* <Gradients></Gradients>
          <HeroBg>
            <BgImage></BgImage>
          </HeroBg> */}

          <HeroContent className="flex flex-col 	justify-items-end lg:w-1/2">
            <ContainerMain>
              <HeroP>KALPOWER</HeroP>
              <p className="text-white text-xl pb-6">Keep You running</p>
              <a href="/Contact" target="_blank">
                <button class="btn">
                  <span class="btn-text">Contact us</span>
                </button>
              </a>
            </ContainerMain>

            <PCENTER class="text-white lg:p-8 text-left m-8">
              <h1 className=" font-normal pt-8 2xl:text-3xl pb-2 text-2xl w-auto ">
                KalPower
              </h1>
              <p>
                Being part of the Kalways family means surrounding yourself with
                a sense of openness and inclusivity,a group of different people
                who’ve created an environment where everyone is willing to help
                everyone.
              </p>
            </PCENTER>
          </HeroContent>
        </HeroContainer>

        <div className="flex flex-col bg-grey bg-white lg:pt-32">
          {/* <Head className="  self-start pl-16">
            <h2 className=" self-start pt-10 text-black  text-2xl 2xl:text-4xl">
              Perks & Benefits
              <p className="h-2"></p>
              <div className="w-40 h-1  hover:w-10"></div>
            </h2>
          </Head> */}

          <div className="lg:pb-10  lg:pt-10 lg:pl-32 lg:pr-32 grid gap-20 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 self-center justify-center justify-items-center ">
            <Pulse>
              <Card className="flex flex-col items-left h-auto bg-white w-auto p-8 lg:h-96">
                <img src={acessTime} className="w-20 self-left"></img>
                <h4 className="text-2xl font-bold self-left pt-4">
                  Short Detentions
                </h4>
                <p className="font-light self-left pt-4 pb-20 lg:h-40">
                  At KALWAY, carriers may access preloaded trailers to turn down
                  the load time significantly. Due to this free carriers avoid
                  unplanned delays which shortens detention durations.
                </p>
              </Card>
            </Pulse>
            <Pulse>
              <Card className="flex flex-col items-left h-auto bg-white w-auto p-8 lg:h-96">
                <img src={MoreTime} className="w-20 self-left"></img>
                <h4 className="text-2xl font-bold self-left pt-4 ">
                  Maximize On-road <br></br> hours
                </h4>
                <p className="font-light self-left pt-4 pb-20 lg:h-40">
                  Ease in searching next loads in queue. KALWAY has made
                  backhauling so easy .
                </p>
              </Card>
            </Pulse>
            <Pulse>
              <Card className="flex flex-col items-left h-auto bg-white w-auto p-8 lg:h-96">
                <img src={NewBusiness} className="w-20 self-left"></img>
                <h4 className="text-2xl font-bold self-left pt-4">
                  Entrepreneur <br></br> opportunities
                </h4>
                <p className="font-light self-left pt-4 pb-20 ">
                  Association with KALWAY can bring exciting business
                  opportunities with the leased trailers instead of owning them.
                </p>
              </Card>
            </Pulse>
            {/* <Pulse>
              <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
                <img src={PetInsurance} className="w-32 self-center"></img>
                <h4 className="text-2xl font-bold self-left pt-4">
                  Nationwide Pet Insurance
                </h4>
                <p className="font-light self-left pt-4">
                  We care about your furry friends too! Eligible for exclusive
                  rates for insurance through Nationwide for employees.
                </p>
              </Card>
            </Pulse> */}
          </div>
          <div className="h-24"></div>

          <div className="flex w-screen justify-center justify-items-center items-center">
            <div
              className="flex flex-col justify-center justify-items-start items-left  h-auto w-full"
              style={{
                backgroundImage: `url(${bgcf})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h4 className="text-white text-left  lg:text-5xl text-3xl lg:w-3/5 pt-64 lg:ml-40 ml-4">
                Get back on the road faster
              </h4>
              <p className="text-white text-left ml-44 pt-4 font-bold">
                See how Powerloop is reducing the wait for carriers.
              </p>
              <div className="pb-64 lg:ml-40 pt-10 ml-4">
                <a className="pt-10" href="/Contact" target="_blank">
                  <button class="btn">
                    <div class="btn-text">Start now</div>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="h-4"></div>
          <div className="lg:ml-32 lg:mr-40  lg:mt-20 lg:mb-20 mb-20">
            <div className=" flex lg:flex-row flex-col-reverse ">
              <div className="lg:pr-40 ml-4 mt-20 lg:w-4/5 mr-4">
                <>
                  <h3 className="font-bold  2xl:text-6xl lg:text-4xl xl:text-5xl text-3xl leading-10 w-4/5">
                    Sign up for free and get started today
                  </h3>
                  <p className=" lg:text-2xl text-xl lg:pt-10">
                    Book the loads you want, 24 hours a day
                  </p>
                  <div className="lg:pt-10 pt-10">
                    <a className="pt-10" href="/Contact" target="_blank">
                      <button class="btn">
                        <div class="btn-text">Start now</div>
                      </button>
                    </a>
                  </div>
                </>
                {/* <p className="text-gray-800 font-normal pt-8 text-xl w-auto ">
                  At KALWAY, our e-commerce solutions allow you to gain greater
                  control of product selection, inventory management, and
                  customer service, while maintaining critical speed-to-market.
                  With our focus on integration with all e-commerce platforms,
                  fulfillment center expertise, and strategically located
                  fulfillment warehouses, you benefit from 2-day delivery to 95%
                  of the U.S.; streamlined operation stand-up, product
                  personalization, and improved customer satisfaction.
                </p>
                <p className=" text-gray-800 font-normal pt-2 pb-10 text-xl w-auto">
                  Through our e-commerce fulfillment solution, you get: a
                  streamlined on-boarding process to ensure you are operational
                  quickly; specially trained teams that provide you with talent
                  management; best-in-class fulfillment order and management
                  systems; and full reverse logistics capabilities. As a result,
                  you overcome the challenges of operating an omni-channel
                  supply chain, meet the e-commerce demands of consumers who
                  expect two-day delivery, and provide real-time inventory
                  management.
                </p> */}
              </div>
              <div>
                <img src={image4} className="lg:w-auto w-full" alt=""></img>
              </div>
            </div>
          </div>
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
}

export default KalPower;
