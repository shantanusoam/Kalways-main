import React, { useState, useEffect } from 'react';
import client, { builder } from '../client';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

import Bounce from 'react-reveal/Bounce';
import './shipFleight.css';
import serializers from '../serializers';
import PortableText from '@sanity/block-content-to-react';
import useLocalStorageState, { localstorageCleaner } from '../localStorageHook';
import {
  Card,
  Formcontainer,
  FormButton,
  AboutContainer,
} from '../components/shipfreight/shipfreight';

const urlFor = (source) => builder.image(source);

export default function ShipFlightPage() {
  // componentDidMount() {
  //   document.title = 'KALWAY - 5PL Logistics & Brokerage';
  // }
  var page = 'CARRIER';
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
    if (!window.localStorage.getItem('CARRIER')) {
      client
        .fetch(
          `*[title == 'CARRIER' ]{
    
          content[]
          
          }`
        )
        .then((data) => [
          window.localStorage.setItem('CARRIER', JSON.stringify(data)),
          setPosts(data),
        ])
        .catch(console.error);
    }
  }, []);
  return (
    <div className="lg:pt-28 flex flex-col pb-10 bg-slate-500">
      <div className="lg:flex lg:flex-row hidden">
        {posts[0]
          ? posts[0]['content'][0]['rows'][0]['rows'].map((post) => (
              <img
                key={post.asset._ref}
                src={urlFor(post.asset._ref)}
                className="flex-1 h-64 2xl:h-80"
                alt=""
              ></img>
            ))
          : null}
        {/* <img src={image1} className="flex-1 h-64 2xl:h-80 " alt=""></img>
        <img src={image2} className="flex-1 h-64 2xl:h-80 " alt=""></img>
        <img src={image4} className="flex-1 h-64 2xl:h-80 " alt=""></img> */}
      </div>
      <div className=" lg:hidden block pt-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {posts[0]
            ? posts[0]['content'][0]['rows'][0]['rows'].map((post) => (
                <SwiperSlide key={post._key}>
                  <img src={urlFor(post.asset._ref)} alt=""></img>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
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
      <AboutContainer id="Products">
        <h1 className="text-center text-black  2xl:text-5xl text-4xl pb-0  2xl:mt-28 xl:mt-28 mt-8 md:pb-3">
          {posts[0] ? posts[0]['content'][2].heading : null}
          <div className="w-40 h-2  hover:w-10 transition duration-700 ease-in-out delay-150"></div>
        </h1>

        <div className="flex flex-row lg:pl-16  pl-8 2xl:pt-16 pt-8">
          {posts[0] ? (
            <img
              src={urlFor(posts[0]['content'][2].image.asset._ref)}
              className="flex-1 h-64 lg:block hidden"
              alt=""
            ></img>
          ) : null}

          <div className="self-end 2xl:pl-32 p-2">
            {posts[0] ? (
              <PortableText
                blocks={posts[0]['content'][2]['text']}
                projectId="y10nshsc"
                dataset="production"
                serializers={serializers}
              />
            ) : null}
          </div>
        </div>
      </AboutContainer>
    </div>
  );
}
