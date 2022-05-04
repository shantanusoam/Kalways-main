import React, { useState, useEffect } from 'react';
import client, { builder } from '../../client';
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
import BlockContent from '@sanity/block-content-to-react';
const urlFor = (source) => builder.image(source);
export function Shipfreight() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == 'SHIPFREIGHT' ]{
     
          content[]
          
          }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  return (
    <>
      {posts[0] ? (
        <HeroContainer ontainer id="Home">
          <HeroContent className="flex flex-col 	justify-items-end lg:w-1/2">
            <ContainerMain className="absolute bottom-0 left-20 pb-8 pl-32">
              <h1 className="text-white  font-normal pt-8 text-xl w-auto">
                {posts[0]['content'][0].heading}
              </h1>
              <h2 className="text-white   pt-3 2xl:text-5xl text-4xl w-5/6">
                <BlockContent
                  className="w-10/12"
                  blocks={posts[0]['content'][0].tagline}
                  projectId="cjv2tdo2"
                  dataset="production"
                />
              </h2>
            </ContainerMain>

            <PCENTER class="text-gray-600 lg:p-10 text-left ">
              We will help you get your products where they need to go fast,
              efficiently and without interruption. Join the more than 3,500 CPG
              companies who trust us with their freight.
            </PCENTER>
          </HeroContent>
        </HeroContainer>
      ) : null}

      <Bounce right>
        <Formcontainer className="flex flex-col justify-center lg:items-center items-start bg-black p-8">
          <h3 className="self-center pb-8 pt-4 lg:text-4xl text-2xl text-white">
            {posts[0] ? posts[0]['content'][1].heading : null}
          </h3>
          <FormButton className="self-center">
            <a href={posts[0] ? posts[0]['content'][1]['ctas'][0].link : null}>
              {posts[0] ? posts[0]['content'][1]['ctas'][0].title : null}
            </a>
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
              {posts[0] ? posts[0]['content'][2].title : null}
            </h3>
            <p className="text-gray-800 font-normal pt-8 text-xl w-auto">
              {posts[0] ? posts[0]['content'][2].label : null}
            </p>
            {/* <p className="text-gray-800 font-normal pt-9 text-xl w-auto">
              We will help you get your products where they need to go fast,
              efficiently and without interruption. Join the more than 3,500 CPG
              companies who trust us with their freight.
            </p> */}
            <div className=" pt-10 grid gap-10 lg:grid-cols-2 grid-cols-1">
              {posts[0]
                ? posts[0]['content'][2]['rows'].map((post) => (
                    <div className="flex flex-col items-start">
                      <img
                        src={urlFor(post.image.asset._ref)}
                        className=""
                        width="150px"
                      ></img>
                      <h4 className="text-3xl">{post.heading}</h4>
                      <p className="text-gray-800 font-normal pt-5 text-xl w-auto">
                        <BlockContent
                          className="w-10/12"
                          blocks={post.text}
                          projectId="cjv2tdo2"
                          dataset="production"
                        />
                      </p>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="flex-1 h-64 drop-shadow-lg z-10">
            <h3 className="font-bold pt-10 text-xl">Learn More</h3>
            <p className="text-gray-800 font-normal pt-8 text-xl 2xl:w-96 pb-8 ">
              {posts[0] ? posts[0]['content'][2]['cta'].title : null}
            </p>
            <button class="btn">
              <span class="btn-text ">1-800-502-7000</span>
            </button>
          </div>
        </div>
        <h2 className=" self-center font-bold 2xl:pt-10 pt-4 2xl:text-6xl text-4xl pl-4  ">
          {posts[0] ? posts[0]['content'][3].title : null}
        </h2>
      </div>

      <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex 2xl:flex-row lg:flex-row flex-wrap justify-center items-center flex-col ">
        {posts[0]
          ? posts[0]['content'][3]['rows'].map((post) => (
              <Fade bottom>
                <div className="bg-white hover:shadow-2xl 2xl:m-2 m-2 flex-1 transition duration-700 ease-in-out delay-150">
                  <img
                    src={urlFor(post.image.asset._ref)}
                    alt="boy with camera"
                    className=" h-80 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="font-bold 2xl:text-3xl text-2xl ">
                      {post.heading}
                    </h3>
                    <br />
                    <p className="text-gray-800 text-1xl mb-0 h-42  ">
                      <BlockContent
                        className="w-10/12"
                        blocks={post.text}
                        projectId="cjv2tdo2"
                        dataset="production"
                      />
                    </p>
                  </div>
                </div>
              </Fade>
            ))
          : null}
      </div>
      <div className="lg:ml-20 lg:mr-40 m-0">
        <h3 className="font-bold  text-5xl pl-4">
          {posts[0] ? posts[0]['content'][4].title : null}
        </h3>
        <div className="flex flex-row p-4">
          <div className="lg:pr-40">
            <p className="text-gray-800 font-normal pt-2 text-xl w-auto ">
              {posts[0] ? posts[0]['content'][4].label : null}
            </p>
            {/* <p className=" text-gray-800 font-normal pt-9 pb-10 text-xl w-auto">
              We will help you get your products where they need to go fast,
              efficiently and without interruption. Join the more than 3,500 CPG
              companies who trust us with their freight.
            </p> */}
          </div>
          <div className="w-2/2 drop-shadow-md hidden lg:block">
            <img
              src={
                posts[0]
                  ? urlFor(posts[0]['content'][4].image.asset._ref)
                  : null
              }
              className="w-auto"
              width="150px"
            ></img>
          </div>
        </div>

        <div className=" pt-10 pb-10 grid gap-10 lg:grid-cols-2 grid-cols-1 p-4">
          {posts[0]
            ? posts[0]['content'][4]['rows'].map((post) => (
                <div className="flex flex-col items-start">
                  <img
                    src={urlFor(post.image.asset._ref)}
                    className=""
                    width="150px"
                  ></img>
                  <h3 className="text-3xl">{post.heading}</h3>
                  <p className=" text-gray-800 font-normal pt-5 text-xl w-auto">
                    <BlockContent
                      className="w-10/12"
                      blocks={post.text}
                      projectId="cjv2tdo2"
                      dataset="production"
                    />
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="flex flex-col bg-gray-200">
        <h3 className=" self-center font-bold pt-16 text-4xl p-8">
          {posts[0] ? posts[0]['content'][5].title : null}
        </h3>
        <p className=" text-gray-800 self-center  pt-4 text-3xl p-8">
          {posts[0] ? posts[0]['content'][5].label : null}
        </p>
        <div className="pb-10 pt-10 grid gap-10 lg:grid-cols-4 grid-cols-1 self-center justify-center justify-items-center ">
          {posts[0]
            ? posts[0]['content'][5]['rows'].map((post) => (
                <Pulse>
                  <Card className="flex flex-col items-center 	align-content:center place-items-center bg-white w-80 p-8 ">
                    <img
                      src={urlFor(post.image.asset._ref)}
                      className="w-32"
                    ></img>
                    <h4 className="text-2xl font-bold self-center">
                      {post.heading}
                    </h4>
                  </Card>
                </Pulse>
              ))
            : null}
        </div>
        {/* <div className="self-center pt-8 pb-10">
          <Card className="flex flex-col items-center bg-white w-80 p-8 ">
            <img src={grid1} className="w-32"></img>
            <h4 className="text-2xl font-bold ">Primary Truckload Capacity</h4>
          </Card>
        </div> */}
      </div>
    </>
  );
}
