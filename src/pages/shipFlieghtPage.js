import { render } from '@testing-library/react';
import React, { useRef, useState, useEffect } from 'react';
import client, { builder } from '../client';
import { shipfreight } from '../components/waystoship/shipfreight';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import Styled from 'styled-components';
import './shipFleight.css';
import image1 from '../images/dv01.jpg';
import image2 from '../images/3t.jpeg';
import image3 from '../images/Ut02.jpg';
import image4 from '../images/bt.jpeg';
import BlockContent from '@sanity/block-content-to-react';
const urlFor = (source) => builder.image(source);
const Card = Styled.div`

h1 {
  div {
    background: #00e700;
    width: 10%;
    transition: all 0.5s ease;
  }
  :hover {
    cursor: pointer;
    div {
      width: 100%;
    }
  }
}
`;

export default function ShipFlightPage() {
  // componentDidMount() {
  //   document.title = 'KALWAY - 5PL Logistics & Brokerage';
  // }
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == 'CARRIER' ]{
    
          content[]
          
          }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  return (
    <div className="lg:pt-28 flex flex-col pb-10 bg-slate-500">
      <div className="lg:flex lg:flex-row hidden">
        {posts[0]
          ? posts[0]['content'][1]['rows'][0]['rows'].map((post) => (
              <img
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
            ? posts[0]['content'][1]['rows'][0]['rows'].map((post) => (
                <SwiperSlide>
                  <img src={urlFor(post.asset._ref)} alt=""></img>
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      </div>
      <Card className=" self-center ">
        <h1 className=" self-center pt-10 text-gray-800 text-3xl 2xl:text-5xl">
          {posts[0] ? posts[0]['content'][0].heading : null}
          <p className="h-4"></p>
          <div className="w-40 h-2  hover:w-10 transition duration-700 ease-in-out delay-150"></div>
        </h1>
      </Card>

      <div className="flex flex-row lg:pl-16  pl-8 2xl:pt-16 pt-8">
        {posts[0] ? (
          <img
            src={urlFor(posts[0]['content'][0].image.asset._ref)}
            className="flex-1 h-64 lg:block hidden"
            alt=""
          ></img>
        ) : null}

        <div className="self-end 2xl:pl-32 p-2">
          {posts[0] ? (
            <BlockContent
              blocks={posts[0]['content'][0]['text']}
              projectId="cjv2tdo2"
              dataset="production"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
