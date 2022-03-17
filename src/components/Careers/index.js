import React, { useEffect } from 'react';
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
class Careers extends React.Component {
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
        <HeroContainer id="Carrers ">
          {/* <Gradients></Gradients>
          <HeroBg>
            <BgImage></BgImage>
          </HeroBg> */}

          <HeroContent className="flex flex-col 	justify-items-end lg:w-1/2">
            <ContainerMain>
              <HeroP>Start your career at Kalway</HeroP>
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
                  Where we work
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
            <img src={map} alt="Map"></img>
          </div>
          <div className="flex flex-row lg:ml-28 ml-2">
            <Line className="border-black hidden lg:block"></Line>
            <div className="flex flex-col lg:ml-4 ml-0 mt-24">
              <h4 className="text-3xl">Location</h4>
              <div className="lg:mt-4 mt-2">
                <Zoom right cascade>
                  <div>
                    <p className="pt-1"> Fontana, CA</p>
                    <p className="pt-1">Bakersfield, CA</p>
                    <p className="pt-1">San Marcos, CA</p>
                    <p className="pt-1">Lathrop , CA</p>
                    <p className="pt-1">Arlington, TX</p>
                    <p className="pt-1">Kansas City, MO</p>
                    <p className="pt-1">Incianapolis, IN</p>
                    <p className="pt-1">Atlanta, GA</p>
                    <p className="pt-1">Hampton, NJ</p>
                    <p className="pt-1">Abbotsford, BC</p>
                    <p className="pt-1">Edmonton, AL</p>
                  </div>
                </Zoom>
              </div>
              <h4 className="text-3xl lg:mt-8 mt-4 ">COMING SOON</h4>
              <Zoom right cascade>
                <div className="lg:mt-4 mt-2">
                  <p className="pt-1">Chicago, IL</p>
                  <p className="pt-1">Miami, FL</p>
                  <p className="pt-1">Ontatio, CANADA</p>
                </div>
              </Zoom>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-grey bg-white ">
          <Head className="  self-start pl-16">
            <h2 className="font-bold self-start pt-10 text-black  text-2xl 2xl:text-4xl">
              Perks & Benefits
              <p className="h-2"></p>
              <div className="w-full h-1  hover:w-10 transition duration-700 ease-in-out delay-150"></div>
            </h2>
          </Head>

          <div className="pb-10  pt-10 grid gap-10 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 self-center justify-center justify-items-center ">
            <Pulse>
              <Card className="flex flex-col items-left h-96 bg-white w-80 p-8">
                <img src={EmployeeReferral} className="w-32 self-center"></img>
                <h4 className="text-2xl font-bold self-left pt-4">
                  Employee Referral Bonus Program
                </h4>
                <p className="font-light self-left pt-4">
                  Every employee is eligible from day ONE – get paid a bonus for
                  referring your network! Roughly 40% of our new hires are
                  referrals.
                </p>
              </Card>
            </Pulse>
            <Pulse>
              <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
                <img
                  src={MaternityPaternity}
                  className="w-40 self-center"
                ></img>
                <h4 className="text-2xl font-bold self-left">
                  Maternity/Paternity leave
                </h4>
                <p className="font-light self-left pt-4">
                  New parents (yes, dads, too!) get paid leave to care for their
                  newborns.
                </p>
              </Card>
            </Pulse>
            <Pulse>
              <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
                <img src={Philanthropy} className="w-32"></img>
                <h4 className="text-2xl font-bold self-left pt-4">
                  Philanthropy
                </h4>
                <p className="font-light self-left pt-4">
                  We value giving back to our communities just as much as we
                  value the service we provide. Every year we do an annual
                  fundraiser supporting a different, but just as important
                  organization.
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

            <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
              <img src={HealthWellness} className="w-32 self-center"></img>
              <h4 className="text-2xl font-bold self-left pt-4">Wellness</h4>
              <p className="font-light self-left pt-4">
                From physical to mental health, we cover it all. Company
                sponsored meditation, yoga, self-defense, complimentary
                counseling sessions and more.
              </p>
            </Card>

            <Pulse>
              <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
                <img
                  src={MedicalVisionDental}
                  className="w-32 self-center"
                ></img>
                <h4 className="text-2xl font-bold self-left pt-4">
                  Medical, dental, vision
                </h4>
                <p className="font-light self-left pt-4">
                  All full-time employees are eligible for our medical, dental
                  and vision insurance with family plans available.
                </p>
              </Card>
            </Pulse>
            <Pulse>
              <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
                <img
                  src={AdditionalBenefits}
                  className="w-32 self-center "
                ></img>
                <h4 className="text-2xl font-bold self-left pt-4">
                  Additional Benefits
                </h4>
                <p className="font-light self-left pt-4">
                  Telehealth, Verizon preferred pricing, Flexible Spending
                  Accounts, pre-tax options for Dependent care, and more.
                </p>
              </Card>
            </Pulse>
            {/* <Pulse>
              <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
                <img src={Four} className="w-64 self-center"></img>
                <h4 className="text-2xl font-bold self-left pt-4">
                  401k/Roth Program
                </h4>
                <p className="font-light self-left pt-4">
                  Every employee is eligible from day ONE – get paid a bonus for
                  referring your network! Roughly 40% of our new hires are
                  referrals.
                </p>
              </Card>
            </Pulse> */}
            <Pulse>
              <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
                <img src={PTO01} className="w-40 self-center"></img>
                <h4 className="text-2xl font-bold self-left ">Paid Time Off</h4>
                <p className="font-light self-left pt-4">
                  Vacation? Staycation? Get some “you” time to recharge, travel
                  or just chill. On top of 6 company paid holidays, you’ll earn
                  PTO,
                </p>
              </Card>
            </Pulse>
            <Pulse>
              <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
                <img src={CareerGrowth} className="w-32 self-center"></img>
                <h4 className="text-2xl font-bold self-left pt-4">
                  Career Growth Opportunities
                </h4>
                <p className="font-light self-left pt-4">
                  We love seeing our employees learn, collaborate, challenge
                  each other and continue to excel to the next level. At
                  Redwood,
                </p>
              </Card>
            </Pulse>
          </div>
          <div className="h-24"></div>

          <div className="flex w-screen justify-center justify-items-center items-center">
            <div
              className="flex flex-col justify-center justify-items-center items-center h-80 lg:w-5/6"
              style={{
                backgroundImage: `radial-gradient(#42424280,#9f9e9e17), url(${bgcf})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h4 className="text-white text-center lg:text-5xl text-3xl lg:w-3/5">
                We're here to make your career awesome.
              </h4>
              <WWOCCButtonM>
                <a href="/WorkAtKalway">Apply now</a>
              </WWOCCButtonM>
            </div>
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
}

export default Careers;
