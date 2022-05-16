import React, { useState, useEffect } from 'react';
import client, { builder } from '../client';

// import whitetruck from '../../images/AP.jpeg';
import {
  AboutContainer,
  TextContaner,
  TextContanerS,
} from '../components/AboutMain/AboutMainElements';
import serializers from '../serializers';
import './shipFleight.css';
import useLocalStorageState from '../localStorageHook';
import PortableText from '@sanity/block-content-to-react';
import Fade from 'react-reveal/Fade';
const urlFor = (source) => builder.image(source);

export default function About() {
  const [posts, setPosts] = useLocalStorageState('About Us');
  useEffect(() => {
    client
      .fetch(
        `*[title == 'About Us' ]{
     
          content[]
          
          }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, [setPosts]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutContainer id="About">
        {posts[0] ? (
          <img
            src={urlFor(posts[0]['content'][0]['backgroundImage'].asset._ref)}
            className="flex-1 h-64 2xl:h-80"
            alt=""
          ></img>
        ) : null}

        <TextContaner className="align-left">
          <h1 className="md:text-4xl text-left text-white lg:text-7xl p-8 ">
            {posts[0] ? posts[0]['content'][0]['heading'] : null}
          </h1>
        </TextContaner>

        <TextContanerS>
          <h1 className="text-left text-black  text-4xl pb-8 ">
            {' '}
            {posts[0] ? posts[0]['content'][1].title : null}
          </h1>
          <p className="text-left text-gray-800 text-2xl   ">
            {posts[0] ? posts[0]['content'][1].label : null}
          </p>
        </TextContanerS>
      </AboutContainer>
      <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center   ">
        {posts[0]
          ? posts[0]['content'][1]['rows'].map((post) => (
              <Fade bottom key={post._key}>
                <div className="bg-white hover:shadow-2xl m-9 flex-1 transition duration-700 ease-in-out delay-150">
                  <img
                    src={urlFor(post.image.asset._ref)}
                    alt="boy with camera"
                    className=" h-80 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="font-bold text-2xl mb-5">{post.heading}</h3>
                    <br />
                    <h3 className=" text-1xl mb-5  h-56 lg:h-48 About_blockContent">
                      <PortableText
                        blocks={post.text}
                        projectId="cjv2tdo2"
                        dataset="production"
                        serializers={serializers}
                      />
                    </h3>
                    <button className="btn">
                      <span className="btn-text">{post.cta.title}</span>
                    </button>
                  </div>
                </div>
              </Fade>
            ))
          : null}
      </div>
    </>
  );
}
