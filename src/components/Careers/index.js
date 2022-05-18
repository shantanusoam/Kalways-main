import React, { useEffect } from 'react';
import client, { builder } from '../../client';

import Pulse from 'react-reveal/Pulse';

import Zoom from 'react-reveal/Zoom';
import PortableText from '@sanity/block-content-to-react';
import serializers from '../../serializers';
import {
  HeroContainer,
  WWOCCButtonM,
  PCENTER,
  Card,
  Line,
  HeroP,
  HeroContent,
  Head,
  ContainerMain,
} from './CareersElement';
import useLocalStorageState, {
  localstorageCleaner,
} from '../../localStorageHook';
import { Youtube } from '../Youtube';

const urlFor = (source) => builder.image(source);

export default function Careers() {
  var page = 'CAREERS';
  const [posts, setPosts] = useLocalStorageState(page);
  useEffect(() => {
    client
      .fetch(
        `*[title == '${page}' ]{

      _rev
      
      }`
      )
      .then((data) => localstorageCleaner(data[0]['_rev'], page))
      .catch(console.error);
    if (!window.localStorage.getItem('CAREERS')) {
      client
        .fetch(
          `*[title == ${page} ]{

      _rev
      
      }`
        )
        .then((data) => localstorageCleaner(data[0]['_rev'], page))
        .catch(console.error);
      if (!window.localStorage.getItem('CAREERS')) {
        client
          .fetch(
            `*[title == 'CAREERS' ]{
     
          content[]
          
          }`
          )
          .then((data) => [
            window.localStorage.setItem('CAREERS', JSON.stringify(data)),
            setPosts(data),
          ])
          .catch(console.error);
      }
    }
  }, [setPosts]);

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
              <button className="btn">
                <span className="btn-text">Contact us</span>
              </button>
            </a>
          </ContainerMain>

          <PCENTER className="text-white lg:p-8 text-left m-8">
            <h1 className=" font-normal pt-8 2xl:text-3xl pb-2 text-4xl w-auto ">
              Start your career on KALWAY
            </h1>
          </PCENTER>
        </HeroContent>
      </HeroContainer>
      <div className=" flex flex-col  lg:pb-2 pb-2 bg-slate-800 ">
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
          <div className="flex flex-col lg:ml-4 ml-0 ">
            {posts[0]
              ? posts[0]['content'][1]['content'].map((post) => (
                  <div className="flex flex-col lg:ml-4 ml-0" key={post._key}>
                    <h4 className="text-3xl lg:mt-8 mt-4 ">{post.title}</h4>
                    <Zoom right cascade>
                      <div className="lg:mt-4 mt-2">
                        {post.rows.map((row) => (
                          <p className="pt-1" key={row}>
                            {row}
                          </p>
                        ))}
                      </div>
                    </Zoom>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      {posts[0] ? <Youtube posts={posts[0]['content'][2]}></Youtube> : null}
      <div className="flex flex-col bg-grey bg-white ">
        <Head className="  self-start pl-16">
          <h2 className="font-bold self-start pt-10 text-black  text-2xl 2xl:text-4xl">
            {posts[0] ? posts[0]['content'][3].title : null}
            <p className="h-2"></p>
            <div className="w-full h-1  hover:w-10 transition duration-700 ease-in-out delay-150"></div>
          </h2>
        </Head>

        <div className="pb-10  pt-10 grid gap-10 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 self-center justify-center justify-items-center ">
          {posts[0]
            ? posts[0]['content'][3]['rows'].map((post) => (
                <Pulse key={post._key}>
                  <Card className="flex flex-col items-left h-96 bg-white w-80 p-8 ">
                    <img
                      src={urlFor(post.image.asset._ref)}
                      className="w-32 self-center"
                      alt="Map"
                    ></img>
                    <h4 className="text-2xl font-bold self-left pt-4">
                      {post.heading}
                    </h4>
                    <p className="font-light self-left pt-4 About_blockContent">
                      <PortableText
                        blocks={post.text}
                        projectId="y10nshsc"
                        dataset="production"
                        serializers={serializers}
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
                  posts[0]['content'][4].image.asset._ref
                )})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h4 className="text-white text-center lg:text-5xl text-3xl lg:w-3/5">
                {posts[0]['content'][4].heading}
              </h4>
              <WWOCCButtonM>
                <a href={posts[0]['content'][4].cta.link}>
                  {posts[0]['content'][4].cta.title}
                </a>
              </WWOCCButtonM>
            </div>
          ) : null}
        </div>
        <div className="h-4"></div>
      </div>
    </>
  );
}
