import React, { useState, useEffect } from 'react';
import client, { builder } from '../../client';

// import PTO01 from '../../images/PTO-01.png';

import Pulse from 'react-reveal/Pulse';

// import bankground from "../../images";
// import { animateScroll as scroll, Link } from 'react-scroll';
import {
  HeroContainer,
  PCENTER,
  Card,
  HeroP,
  HeroContent,
  ContainerMain,
} from './KalPowerElement';
import BlockContent from '@sanity/block-content-to-react';

const urlFor = (source) => builder.image(source);
export default function KalPower() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == 'KALPOWER' ]{
    
          content[]
          
          }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <HeroContainer
        ontainer
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
            <p className="text-white text-xl pb-6">
              {posts[0] ? (
                <BlockContent
                  blocks={posts[0]['content'][0].tagline}
                  projectId="cjv2tdo2"
                  dataset="production"
                />
              ) : null}
            </p>
            <a href="/Contact" target="_blank">
              <button className="btn">
                <span className="btn-text">Contact us</span>
              </button>
            </a>
          </ContainerMain>

          <PCENTER className="text-white lg:p-8 text-left m-8">
            <h1 className=" font-normal pt-8 2xl:text-3xl pb-2 text-2xl w-auto ">
              KalPower
            </h1>
            <p>
              Being part of the Kalways family means surrounding yourself with a
              sense of openness and inclusivity,a group of different people
              who’ve created an environment where everyone is willing to help
              everyone.
            </p>
          </PCENTER>
        </HeroContent>
      </HeroContainer>

      <div className="flex flex-col bg-grey bg-white lg:pt-32">
        <div className="lg:pb-10  lg:pt-10 lg:pl-32 lg:pr-32 grid gap-20 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 self-center justify-center justify-items-center ">
          {posts[0]
            ? posts[0]['content'][1]['rows'].map((post) => (
                <Pulse key={post._key}>
                  <Card className="flex flex-col items-left h-auto bg-white w-auto p-8 lg:h-96">
                    <img
                      src={urlFor(post.image.asset._ref)}
                      className="w-20 self-left"
                      alt="logo"
                    ></img>
                    <h4 className="text-2xl font-bold self-left pt-4">
                      {post.heading}
                    </h4>
                    <p className="font-light self-left pt-4 pb-20 lg:h-40">
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
              className="flex flex-col justify-center justify-items-start items-left  h-auto w-full"
              style={{
                backgroundImage: `url(${urlFor(
                  posts[0]['content'][2].image.asset._ref
                )})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h4 className="text-white text-left  lg:text-5xl text-3xl lg:w-3/5 pt-64 lg:ml-40 ml-4">
                {posts[0]['content'][2].heading}
              </h4>
              <p className="text-white text-left ml-44 pt-4 font-bold">
                {posts[0]['content'][2].label}
              </p>
              <div className="pb-64 lg:ml-40 pt-10 ml-4">
                <a className="pt-10" href="/Contact" target="_blank">
                  <button className="btn">
                    <div className="btn-text">Start now</div>
                  </button>
                </a>
              </div>
            </div>
          ) : null}
        </div>
        <div className="h-4"></div>
        <div className="lg:ml-32 lg:mr-40  lg:mt-20 lg:mb-20 mb-20">
          <div className=" flex lg:flex-row flex-col-reverse ">
            <div className="lg:pr-40 ml-4 mt-20 lg:w-4/5 mr-4">
              <>
                <h3 className="font-bold  2xl:text-6xl lg:text-4xl xl:text-5xl text-3xl leading-10 w-4/5">
                  {posts[0] ? posts[0]['content'][3].heading : null}
                </h3>
                <p className=" lg:text-2xl text-xl lg:pt-10">
                  {posts[0] ? (
                    <BlockContent
                      blocks={posts[0]['content'][3].text}
                      projectId="cjv2tdo2"
                      dataset="production"
                    />
                  ) : null}
                </p>
                <div className="lg:pt-10 pt-10">
                  <a className="pt-10" href="/Contact" target="_blank">
                    <button className="btn">
                      <div className="btn-text">Start now</div>
                    </button>
                  </a>
                </div>
              </>
            </div>
            <div>
              {posts[0] ? (
                <img
                  src={urlFor(posts[0]['content'][3].image.asset._ref)}
                  className="lg:w-auto w-full"
                  alt=""
                ></img>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
