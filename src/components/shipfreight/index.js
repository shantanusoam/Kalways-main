import React, { useEffect } from 'react';
import image1 from '../../images/ut008.jpg';
import image2 from '../../images/NetworkD.png';
import image3 from '../../images/ut0010.jpg';
import image4 from '../../images/ut0011.jpg';
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
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
// import bankground from "../../images";
import { animateScroll as scroll, Link } from 'react-scroll';
import {
  HeroContainer,
  WWOCCButtonM,
  PCENTER,
  FormButton,
  Card,
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
  Formcontainer,
} from './shipfreight';
const shipfreight = ({}) => {
  return (
    <>
      <HeroContainer ontainer id="Home">
        <HeroContent className="flex flex-col 	justify-items-end lg:w-1/2">
          <ContainerMain className="absolute bottom-0 left-20 pb-8 pl-32">
            <h1 className="text-white  font-normal pt-8 text-xl w-auto">
              CONSUMER PACKAGED GOODS LOGISTICS
            </h1>
            <h2 className="text-white   pt-3 2xl:text-5xl text-4xl w-5/6">
              Make it, Package it, and We'll Take it From There
            </h2>
          </ContainerMain>

          <PCENTER class="text-gray-600 lg:p-10 text-left ">
            We will help you get your products where they need to go fast,
            efficiently and without interruption. Join the more than 3,500 CPG
            companies who trust us with their freight.
          </PCENTER>
        </HeroContent>
      </HeroContainer>
      <Bounce right>
        <Formcontainer className="flex flex-col justify-center lg:items-center items-start bg-black p-8">
          <h3 className="self-center pb-8 pt-4 lg:text-4xl text-2xl text-white">
            The KALWAY CREDIT AGREEMENT
          </h3>
          <FormButton className="self-center">
            {' '}
            <a href="/CreditApplication">CREDIT AGREEMENT</a>
          </FormButton>
        </Formcontainer>
      </Bounce>
      <div className=" flex flex-col  lg:pb-2 bg-slate-800">
        {/* <div className="flex flex-row">
          <img src={image2} className="flex-1 h-96" alt=""></img>
          <img src={image3} className="flex-1 h-96" alt=""></img>
          <img src={image1} className="flex-1 h-96" alt=""></img>
        </div> */}

        <div className="flex lg:flex-row flex-col lg:pr-16 2xl:pt-16 pt-2 p-8">
          <div className="self-end lg:pl-40 lg:pr-32">
            {/* <h3 className="font-bold pt-10 text-xl">Additional Information</h3> */}
            <h3 className="font-bold pt-8 2xl:text-3xl text-2xl">
              Ways to Ship
            </h3>
            <p className="text-gray-800 font-normal pt-8 text-xl w-auto">
              Your products are going to fly off the shelf. But first, they have
              to get there on time. Whether you ship tissues or toothpaste,
              sunscreen or salty snacks, your supply chain is feeling the
              pressure. Consumer expectations are rising, delivery times are
              shortening and excuses won’t cut it.
            </p>
            <p className="text-gray-800 font-normal pt-9 text-xl w-auto">
              We will help you get your products where they need to go fast,
              efficiently and without interruption. Join the more than 3,500 CPG
              companies who trust us with their freight.
            </p>
            <div className=" pt-10 grid gap-10 lg:grid-cols-2 grid-cols-1">
              <div className="flex flex-col items-start">
                <img src={grid1} className="" width="150px"></img>
                <h4 className="text-3xl">Ship freight</h4>
                <p className="text-gray-800 font-normal pt-5 text-xl w-auto">
                  Every day, increasingly complex shipping demands put pressure
                  on your business. The ability to succeed requires a shift in
                  focus—from short-term capacity to long-term agility. Work with
                  a global 5PL provider that can build a supply chain solution
                  for your business, no matter the size or complexity.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img src={mgrid1} className="" width="150px"></img>
                <h4 className="text-3xl">Full truckload</h4>
                <p className="text-gray-800 font-normal pt-5 text-xl w-auto">
                  At KALWAY, we consolidate an extremely fragmented market by
                  maintaining relationships with over 70,000 carriers to get you
                  access across all equipment types and shipment needs. By
                  maximizing truckload freight capacity, we help you achieve
                  superior efficiency, wider reach and increased buying power.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img src={mgrid2} className="" width="150px"></img>
                <h4 className="text-3xl">Less than Truckload</h4>
                <p className="font-normal pt-5 text-xl w-auto">
                  Choose Less Than Truckload (LTL) to ship your goods
                  efficiently, even when you don’t have a full truck to fill.
                  KALWAY will help you identify modal conversion opportunities
                  to maximize savings.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img src={mgrid4} className="" width="150px"></img>
                <h4 className="text-3xl">Intermodal Freight</h4>
                <p className="text-gray-800 font-normal pt-5 text-xl w-auto">
                  Save money and contribute to your sustainability initiatives
                  by shipping your goods through a combination of truckload and
                  railway transport. Intermodal can add capacity, cut
                  transportation costs and reduce your CO2 emissions by over 30%
                  compared to over-the-road shipping alone. It’s a smart way to
                  create an intermodal freight solution that keeps your business
                  running more efficiently.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img src={grid5} className="" width="150px"></img>
                <h4 className="text-3xl">Air & Ocean</h4>
                <p className="text-gray-800 font-normal pt-5 text-xl w-auto">
                  KALWAY is an authorized reseller of UPS air services, with
                  access to ocean services through UPS. This global footprint,
                  combined with our massive centralized marketplace of carriers
                  in North America, gives you the freedom to move freight
                  anywhere your business demands—all with the same dedication,
                  visibility and expertise you get from KALWAY.
                </p>
              </div>
              <div className="flex flex-col items-start">
                <img src={grid6} className="" width="150px"></img>
                <h4 className="text-3xl">Cross-Border Freight</h4>
                <p className="text-gray-800 font-normal pt-5 text-xl w-auto">
                  Whether shipping northbound or southbound, KALWAY leverages a
                  dense North American carrier network to bring you capacity
                  when and where you need it. We source the right carrier for
                  each opportunity, facilitate the crossing logistics and
                  monitor your freight throughout the process.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 h-64 drop-shadow-lg z-10">
            <h3 className="font-bold pt-10 text-xl">Learn More</h3>
            <p className="text-gray-800 font-normal pt-8 text-xl 2xl:w-96 pb-8 ">
              We measure success by the results we generate for our clients.
              With every solution, KALWAY Logistics simplifies transportation
              management—so you can focus on what you do best.
            </p>
            <button class="btn">
              <span class="btn-text ">1-800-502-7000</span>
            </button>
          </div>
        </div>
        <h2 className=" self-center font-bold 2xl:pt-10 pt-4 2xl:text-6xl text-4xl pl-4  ">
          What Makes Us Different
        </h2>
      </div>

      <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex 2xl:flex-row lg:flex-row flex-wrap justify-center items-center flex-col ">
        <Fade bottom>
          <div className="bg-white hover:shadow-2xl 2xl:m-2 m-2 flex-1 transition duration-700 ease-in-out delay-150">
            <img
              src={image1}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold 2xl:text-3xl text-2xl ">
                Pricing You Can Trust
              </h3>
              <br />
              <p className="text-gray-800 text-1xl mb-0 h-42  ">
                You can trust the quote you get from us, whether it comes
                through your rep or KALWAYGO. If you are quoting for a spot LTL
                load, a high-volume lane, or anything else, we can get you a
                clear, reliable price.
              </p>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="bg-white hover:shadow-2xl 2xl:m-2 m-2 flex-1 transition duration-700 ease-in-out delay-150">
            <img
              src={image2}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold 2xl:text-3xl text-2xl ">
                Network Density
              </h3>
              <br />
              <p className="text-gray-800 text-1xl mb-0 h-42 ">
                You need quick access to a diverse carrier base to control your
                freight spend and enable consistent service. Leverage our vast,
                centralized network of over 75,000 carriers.
              </p>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="bg-white hover:shadow-2xl 2xl:m-2 m-2 flex-1 transition duration-700 ease-in-out delay-150">
            <img
              src={image3}
              alt="boy with camera"
              className=" h-80 w-full object-cover"
            />

            <div className="p-8">
              <h3 className="font-bold 2xl:text-3xl text-2xl  mb-0">
                Unmatched Support
              </h3>
              <br />
              <p className="text-gray-800 text-1xl mb-0 h-42">
                When moving CPG freight, you need the support of a dedicated
                team that you can count on. Our specialists are here to help
                during the day and after hours to respond to your quoting and
                issue resolution needs.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="lg:ml-40 lg:mr-40 m-0">
        <h3 className="font-bold  text-5xl pl-4">Business Solutions</h3>
        <div className="flex flex-row p-4">
          <div className="lg:pr-40">
            <p className="text-gray-800 font-normal pt-2 text-xl w-auto ">
              Your products are going to fly off the shelf. But first, they have
              to get there on time. Whether you ship tissues or toothpaste,
              sunscreen or salty snacks, your supply chain is feeling the
              pressure. Consumer expectations are rising, delivery times are
              shortening and excuses won’t cut it.
            </p>
            <p className=" text-gray-800 font-normal pt-9 pb-10 text-xl w-auto">
              We will help you get your products where they need to go fast,
              efficiently and without interruption. Join the more than 3,500 CPG
              companies who trust us with their freight.
            </p>
          </div>
          <div className="w-2/2 drop-shadow-md hidden lg:block">
            <img src={image4} className="w-auto" width="150px"></img>
          </div>
        </div>

        <div className=" pt-10 pb-10 grid gap-10 lg:grid-cols-2 grid-cols-1 p-4">
          <div className="flex flex-col items-start">
            <img src={grid1} className="" width="150px"></img>
            <h3 className="text-3xl">Flex Solution</h3>
            <p className=" text-gray-800 font-normal pt-5 text-xl w-auto">
              Customer expectations are changing by the minute. To keep up, your
              business needs custom asset-based solutions to fit your
              high-volume capacity projects. We can help you leverage multiple
              networks—including access to over 75,000 UPS assets and one of the
              largest, most efficient procurement networks in the world.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <img src={grid3} className="" width="150px"></img>
            <h3 className="text-3xl">Transportation Management</h3>
            <p className="text-gray-800 font-normal pt-5 text-xl w-auto">
              Drive cost savings across your network through a combination of a
              dedicated operations team, proprietary cloud-based TMS technology
              and carrier agnostic capacity solutions. KALWAY Transportation
              Management (CTM) provides professional logistics services that can
              help you achieve end-to-end network execution, visibility,
              reporting, optimization and management at a competitive cost.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src={grid4} className="" width="150px"></img>
            <h3 className="text-3xl">Primary Capicity</h3>
            <p className=" text-gray-800 font-normal pt-5 text-xl w-auto">
              Give your business the ability to navigate the market with
              primary, backup and spot capacity from KALWAY. Our dedicated team
              of transportation specialists tap into one of the largest
              centralized supply chain networks to customize your contract
              commitment based on your business needs
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src={grid13} className="" width="150px"></img>
            <h3 className="text-3xl">Sustainability</h3>
            <p className=" text-gray-800 font-normal pt-5 text-xl w-auto">
              KALWAY’s mission is to move business forward with expertise and
              integrity. That’s why we’re committed to creating smarter, less
              environmentally impactful solutions for our network. Between 2019
              and 2020, we reduced network CO2 emissions by 18% and improved our
              SmartWay rankings. From environmental responsibility and
              sustainable supply chain solutions, to industry insights and
              partnerships that drive innovative thinking – we’re committed to
              moving towards a greener future.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <img src={grid12} className="" width="150px"></img>
            <h3 className="text-3xl">ShipperTechnlogy</h3>
            <p className="text-gray-800 font-normal pt-5 text-xl w-auto">
              At KALWAY, we know there isn’t a one-size-fits-all solution for
              your business. Use our digital solutions for connectivity at your
              fingertips—including on-demand quoting, tendering, tracking and
              settlement through KALWAYGO®. Or make real-time data exchange
              easier by automating manual tasks through EDI or API integration
              for full truckload and LTL. Plus, with TMS-enabled transportation
              management services and over 500,000 unique facility reviews,
              optimizing your operations has never been easier.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-gray-200">
        <h3 className=" self-center font-bold pt-16 text-4xl p-8">
          Reliable Solutions to Keep Your Products Stocked
        </h3>
        <p className=" text-gray-800 self-center  pt-4 text-3xl p-8">
          We can help buffer your supply chain against market volatility with a
          variety of dependable freight solutions.
        </p>
        <div className=" pt-10 grid gap-10 lg:grid-cols-4 grid-cols-1 self-center justify-center justify-items-center ">
          <Pulse>
            <Card className="flex flex-col items-center 	align-content:center place-items-center bg-white w-80 p-8 ">
              <img src={grid2} className="w-32"></img>
              <h4 className="text-2xl font-bold self-center">Wholesale</h4>
            </Card>
          </Pulse>
          <Pulse>
            <Card className="flex flex-col items-center bg-white w-80 p-8 ">
              <img src={grid3} className="w-32"></img>
              <h4 className="text-2xl font-bold ">Drayage</h4>
            </Card>
          </Pulse>
          <Pulse>
            <Card className="flex flex-col items-center bg-white w-80 p-8 ">
              <img src={grid4} className="w-32"></img>
              <h4 className="text-2xl font-bold ">Cross-Border</h4>
            </Card>
          </Pulse>
          <Pulse>
            <Card className="flex flex-col items-center bg-white w-80 p-8 ">
              <img src={grid5} className="w-32"></img>
              <h4 className="text-2xl font-bold ">Refrigerated</h4>
            </Card>
          </Pulse>

          <Card className="flex flex-col items-center bg-white w-80 p-8 ">
            <img src={grid6} className="w-32"></img>
            <h4 className="text-2xl font-bold ">Carload</h4>
          </Card>

          <Pulse>
            <Card className="flex flex-col items-center bg-white w-80 p-8 ">
              <img src={grid7} className="w-32"></img>
              <h4 className="text-2xl font-bold ">Carrier & Modal Solutions</h4>
            </Card>
          </Pulse>
          <Pulse>
            <Card className="flex flex-col items-center bg-white w-80 p-8 ">
              <img src={grid8} className="w-32"></img>
              <h4 className="text-2xl font-bold ">Tendering & Management</h4>
            </Card>
          </Pulse>
          <Pulse>
            <Card className="flex flex-col items-center bg-white w-80 p-8 ">
              <img src={grid9} className="w-32"></img>
              <h4 className="text-2xl font-bold ">Dedicated Execution Team</h4>
            </Card>
          </Pulse>
        </div>
        <div className="self-center pt-8 pb-10">
          <Card className="flex flex-col items-center bg-white w-80 p-8 ">
            <img src={grid1} className="w-32"></img>
            <h4 className="text-2xl font-bold ">Primary Truckload Capacity</h4>
          </Card>
        </div>
      </div>
    </>
  );
};

export default shipfreight;
