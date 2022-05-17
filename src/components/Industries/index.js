import React, { useState, useEffect } from "react";
import client, { builder } from "../../client";
// import { TiArrowRightThick } from 'react-icons/ti';
import Pulse from "react-reveal/Pulse";

import Fade from "react-reveal/Fade";
// import bankground from "../../images";
// import { animateScroll as scroll, Link } from 'react-scroll';
import {
  HeroContainer,
  // WWOCCButtonM,
  PCENTER,
  Container,
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
  Card,
} from "./Industries";
import serializers from "../../serializers";
import useLocalStorageState from "../../localStorageHook";
import PortableText from "@sanity/block-content-to-react";
const urlFor = (source) => builder.image(source);
export function Industrie() {
  const [posts, setPosts] = useLocalStorageState("INDUSTRIES");
  useEffect(() => {
    if (!window.localStorage.getItem('INDUSTRIES')) {
      client
        .fetch(
          `*[title == 'INDUSTRIES' ]{
     
          content[]
          
          }`
        )
        .then((data) => [
          window.localStorage.setItem('INDUSTRIES', JSON.stringify(data)),
          setPosts(data),
        ])
        .catch(console.error);
    }
  }, [setPosts]);

 

  return (
    <>
      {posts[0] ? (
        <HeroContainer
          id="Home"
          bgImage={urlFor(posts[0]["content"][0].backgroundImage.asset._ref)}
        >
          <HeroContent className="flex flex-col 	justify-items-end lg:w-1/2">
            <ContainerMain className="absolute bottom-0 left-20 pb-0 2xl:pl-32 pl-20 ">
              <h1 className="text-white  font-normal pt-8 text-xl w-auto">
                {posts[0]["content"][0].heading}
              </h1>

              <PortableText
                className=" font-normal pt-2 xl:mb-2 mb-0 2xl:text-2xl  text-1xl text-white 2xl:mb-10 mb:-10 w-4/5 "
                blocks={posts[0]["content"][0].tagline}
                projectId="y10nshsc"
                dataset="production"
                serializers={serializers}
              />
            </ContainerMain>

            <PCENTER className="text-white text-left 2xl:p-8 p-2 pl-8">
              Bring simplicity to an intricate supply chain process with our
              reliable cross-border solutions.
            </PCENTER>
          </HeroContent>
        </HeroContainer>
      ) : null}
      <div className=" flex flex-col  bg-slate-800   2xl:ml-40 m-8">
        <h2 className="  pt-2 2xl:text-5xl  text-4xl  heading2_cardContent">
          {posts[0] ? posts[0]["content"][1].title : null}
        </h2>

        <div className="flex flex-row 2xl:pt-16 pt-8">
          <div className="lg:pr-40">
            <p className="text-gray-800 font-normal 2xl:pt-8 pt-2 text-2xl w-auto ">
              {posts[0] ? (
                <PortableText
                  className="w-10/12"
                  blocks={posts[0]["content"][1].text}
                  projectId="y10nshsc"
                  dataset="production"
                  serializers={serializers}
                />
              ) : null}
            </p>
          </div>
          <div className="w-2/2 drop-shadow-md pr-20 hidden lg:block ">
            {posts[0] ? (
              <img
                src={urlFor(posts[0]["content"][1].image.asset._ref)}
                className="w-auto "
                alt="truck"
              ></img>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:pr-16 pt-0 2xl:pt-12 p-8">
        <div className="self-end lg:pl-32 lg:pr-32">
          {/* <h3 className="font-bold pt-10 text-xl">Additional Information</h3> */}
          <div className="flex flex-col 2xl:items-center items-start justify-items-start">
            <Container className="pb-8">
              <h3 className="text-gray-800  2xl:text-5xl text-4xl">
                {posts[0] ? posts[0]["content"][2].title : null}
                <br></br>
                <p className="text-gray-800 w-40 h-5 pt-2 hover:w-10 bg-white transition duration-700 ease-in-out delay-150"></p>
                <div className="text-gray-800 w-40 h-2 pt-2 hover:w-10 transition duration-700 ease-in-out delay-150"></div>
              </h3>
            </Container>

            <p className="text-gray-800 font-normal pt-2 text-2xl w-auto 2xl:text-center text-left ">
              {posts[0] ? posts[0]["content"][2].label : null}
            </p>
          </div>

          <div className=" pt-10 grid gap-10 lg:grid-cols-2 grid-cols-1">
            {posts[0]
              ? posts[0]["content"][2]["rows"].map((post) => (
                  <div className="flex flex-col items-start" key={post._key}>
                    <img
                      key={post.image.asset._ref}
                      src={urlFor(post.image.asset._ref)}
                      width="150px"
                      alt="truck "
                    ></img>
                    <h4 className="text-2xl">{post.heading}</h4>
                    <p className="text-gray-800 font-normal pt-2 text-xl w-auto">
                      <PortableText
                        className="w-10/12"
                        blocks={post.text}
                        projectId="y10nshsc"
                        dataset="production"
                        serializers={serializers}
                      />
                    </p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className="xl:px-14 pb-10 bg-white flex 2xl:flex-row lg:flex-row flex-col flex-wrap justify-center items-center ">
        {posts[0]
          ? posts[0]["content"][3]["rows"].map((post) => (
              <Fade bottom key={post._key}>
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
                    <p className="text-gray-800 text-1xl mb-0 h-42  About_blockCardContent">
                      <PortableText
                        className="w-10/12"
                        blocks={post.text}
                        projectId="y10nshsc"
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
      <div className="flex flex-col bg-gray-200">
        <h4 className=" self-center font-bold pt-16 lg:text-4xl text-2xl p-8">
          {posts[0] ? posts[0]["content"][4].title : null}
        </h4>

        <div className="pb-10 m-8 pt-2 grid gap-10 lg:grid-cols-4 grid-cols-1 self-center justify-center justify-items-center ">
          {posts[0]
            ? posts[0]["content"][4]["rows"].map((post) => (
                <Pulse key={post._key}>
                  <Card className="flex flex-col items-center 	align-content:center place-items-center bg-white w-80 h-72 p-8 ">
                    <img
                      src={urlFor(post.image.asset._ref)}
                      className="w-32"
                      alt="truck"
                    ></img>
                    <h4 className="text-1xl font-bold self-center">
                      {post.heading}
                    </h4>
                  </Card>
                </Pulse>
              ))
            : null}
        </div>

        <h2 className=" self-center font-bold pt-4 lg:text-4xl text-2xl ">
          {posts[0] ? posts[0]["content"][5].title : null}
        </h2>

        <div className=" pt-10 grid gap-10 lg:grid-cols-4 grid-cols-1 self-center justify-center justify-items-center ">
          {posts[0]
            ? posts[0]["content"][5]["rows"].map((post) => (
                <Pulse key={post._key}>
                  <Card className="flex flex-col items-center 	align-content:center place-items-center bg-white w-80 h-72 p-8 ">
                    <img
                      src={urlFor(post.image.asset._ref)}
                      className="w-32"
                      alt="truck"
                    ></img>
                    <h4 className="text-1xl font-bold self-center">
                      {post.heading}
                    </h4>
                  </Card>
                </Pulse>
              ))
            : null}
        </div>
        <div className="self-center pt-8 pb-10"></div>
      </div>

      <div className="flex flex-col m-2">
        <h3 className="flex justify-center items-center  2xl:self-center  lg:pt-12 text-2xl m-2">
          {posts[0] ? posts[0]["content"][6].label : null}
        </h3>
        <p className=" self-center font-bold pt-8   2xl:text-4xl">
          {posts[0] ? posts[0]["content"][6].title : null}
        </p>
        <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center     ">
          {posts[0]
            ? posts[0]["content"][6]["rows"].map((post) => (
                <Fade bottom key={post._key}>
                  <div className="bg-white hover:shadow-2xl m-4 flex-1 transition duration-700 ease-in-out delay-150 h-full">
                    <img
                      src={urlFor(post.image.asset._ref)}
                      alt="boy with camera"
                      className=" h-80 w-full object-cover"
                    />

                    <div className="p-8">
                      <h3 className="  font-bold 2xl:text-2xl text-xl  mb-5">
                        {post.heading}
                      </h3>

                      <p className="text-gray-800 text-1xl mb-9 h-42 About_blockCardContent">
                        <PortableText
                          className="w-10/12  "
                          blocks={post.text}
                          projectId="y10nshsc"
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
      </div>
    </>
  );
}
class Industries extends React.Component {
  componentDidMount() {}

  render() {
    return <Industrie />;
  }
}

export default Industries;
