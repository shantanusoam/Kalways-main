import React, { useState, useEffect } from "react";
import client, { builder } from "../../client";

import Pulse from "react-reveal/Pulse";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";



import {
  HeroContainer,
  // WWOCCButtonM,
  PCENTER,
  FormButton,
  Card,
  // HeroP,
  HeroContent,
  // WWOCCButton,
  // HeroBg,
  // HeroPromoContainer,
  // HeroPromo,
  // SocialMediaActions,
  // HomeContactContent,
  // Info,
  // NavLinks,
  // VideoBg,
  ContainerMain,
  // Callinfo,
  // BgImage,
  Formcontainer,
} from "./shipfreight";
import useLocalStorageState from "../../localStorageHook";
import PortableText from "@sanity/block-content-to-react";
import serializers from "../../serializers";
const urlFor = (source) => builder.image(source);
export function Shipfreight({ Phoneno }) {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[title == 'SHIPFREIGHT' ]{

  //         content[]

  //         }`
  //     )
  //     .then((data) => setPosts(data))
  //     .catch(console.error);
  // }, []);
  const [posts, setPosts] = useLocalStorageState("SHIPFREIGHT");
  useEffect(() => {
    if (!window.localStorage.getItem('SHIPFREIGHT')) {
      client
        .fetch(
          `*[title == 'SHIPFREIGHT' ]{
     
          content[],
          
          }`
        )
        .then((data) => [
          window.localStorage.setItem('SHIPFREIGHT', JSON.stringify(data)),
          setPosts(data),
        ])
        .catch(console.error);
    }
  }, [setPosts]);



  return (
    <>
      {posts[0] ? (
        <HeroContainer
          ontainer
          id="Home"
          bgImage={urlFor(posts[0]["content"][0].backgroundImage.asset._ref)}
        >
          <HeroContent className="flex flex-col 	justify-items-end lg:w-1/2">
            <ContainerMain className="absolute bottom-0 left-20 pb-8 pl-32">
              <h1 className="text-white  font-normal pt-8 text-xl w-auto">
                {posts[0]["content"][0].heading}
              </h1>

              <PortableText
                className="w-10/12"
                blocks={posts[0]["content"][0].tagline}
                projectId="cjv2tdo2"
                dataset="production"
                serializers={serializers}
              />
            </ContainerMain>

            <PCENTER className="text-gray-600 lg:p-10 text-left ">
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
            {posts[0] ? posts[0]["content"][1].heading : null}
          </h3>
          <FormButton className="self-center">
            <a href={posts[0] ? posts[0]["content"][1]["ctas"][0].link : null}>
              {posts[0] ? posts[0]["content"][1]["ctas"][0].title : null}
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
              {posts[0] ? posts[0]["content"][2].title : null}
            </h3>
            <p className="text-gray-800 font-normal pt-8 text-xl w-auto">
              {posts[0] ? posts[0]["content"][2].label : null}
            </p>
            {/* <p className="text-gray-800 font-normal pt-9 text-xl w-auto">
              We will help you get your products where they need to go fast,
              efficiently and without interruption. Join the more than 3,500 CPG
              companies who trust us with their freight.
            </p> */}
            <div className=" pt-10 grid gap-10 lg:grid-cols-2 grid-cols-1">
              {posts[0]
                ? posts[0]["content"][2]["rows"].map((post) => (
                    <div className="flex flex-col items-start" key={post._key}>
                      <img
                        src={urlFor(post.image.asset._ref)}
                        className="w-32"
                        alt="truck"
                      ></img>
                      <h4 className="text-3xl">{post.heading}</h4>
                      <p className="text-gray-800 font-normal pt-5 text-xl w-auto">
                        <PortableText
                          className="w-10/12"
                          blocks={post.text}
                          projectId="cjv2tdo2"
                          dataset="production"
                          serializers={serializers}
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
              {posts[0] ? posts[0]["content"][2]["cta"].title : null}
            </p>
            <button className="btn">
              <span className="btn-text ">{Phoneno}</span>
            </button>
          </div>
        </div>
        <h2 className=" self-center font-bold 2xl:pt-10 pt-4 2xl:text-6xl text-4xl pl-4  ">
          {posts[0] ? posts[0]["content"][3].title : null}
        </h2>
      </div>

      <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center flex-col ">
        {posts[0]
          ? posts[0]["content"][3]["rows"].map((post) => (
              <Fade bottom key={post._key}>
                <div className="bg-white hover:shadow-2xl 2xl:m-2 m-2 flex-1 transition duration-700 ease-in-out delay-150 h-full">
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
                      <PortableText
                        className="w-10/12"
                        blocks={post.text}
                        projectId="cjv2tdo2"
                        dataset="production"
                        serializers={serializers}
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
          {posts[0] ? posts[0]["content"][4].title : null}
        </h3>
        <div className="flex flex-row p-4">
          <div className="lg:pr-40">
            <p className="text-gray-800 font-normal pt-2 text-xl w-auto ">
              {posts[0] ? posts[0]["content"][4].label : null}
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
                  ? urlFor(posts[0]["content"][4].image.asset._ref)
                  : null
              }
              className="w-auto"
              width="150px"
              alt="truck"
            ></img>
          </div>
        </div>

        <div className=" pt-10 pb-10 grid gap-10 lg:grid-cols-2 grid-cols-1 p-4">
          {posts[0]
            ? posts[0]["content"][4]["rows"].map((post) => (
                <div className="flex flex-col items-start" key={post._key}>
                  <img
                    src={urlFor(post.image.asset._ref)}
                    className=""
                    width="150px"
                    alt="truck"
                  ></img>
                  <h3 className="text-3xl">{post.heading}</h3>
                  <p className=" text-gray-800 font-normal pt-5 text-xl w-auto">
                    <PortableText
                      className="w-10/12"
                      blocks={post.text}
                      projectId="cjv2tdo2"
                      dataset="production"
                      serializers={serializers}
                    />
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>

      <div className="flex flex-col bg-gray-200">
        <h3 className=" self-center  font-bold pt-16  p-8 sm:text-4xl text-3xl pb-0">
          {posts[0] ? posts[0]["content"][5].title : null}
        </h3>
        <p className=" text-gray-800 self-center  pt-4  p-8 sm:text-3xl text-2xl">
          {posts[0] ? posts[0]["content"][5].label : null}
        </p>
        <div className="pb-10 pt-10 grid gap-10 lg:grid-cols-4 grid-cols-1 self-center justify-center justify-items-center ">
          {posts[0]
            ? posts[0]["content"][5]["rows"].map((post) => (
                <Pulse key={post._key}>
                  <Card className="flex flex-col items-center 	align-content:center place-items-center bg-white w-80 h-72 p-8 ">
                    <img
                      src={urlFor(post.image.asset._ref)}
                      className="w-32"
                      alt="truck"
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
