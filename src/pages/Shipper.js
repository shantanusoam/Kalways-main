// import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import client, { builder } from '../client';
import './shipFleight.css';
import Bounce from 'react-reveal/Bounce';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// import PhoneNo from '../components/phoneno';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import {
  Card,
  Formcontainer,
  FormButton,
} from '../components/shipfreight/shipfreight';

import YouTube from 'react-youtube';
import PortableText from '@sanity/block-content-to-react';
import useLocalStorageState from '../localStorageHook';
const urlFor = (source) => builder.image(source);
const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = url.split('be/')[1];
      return <YouTube videoId={id} />;
    },
  },
};
export default function Shipper({ Phoneno }) {
  const [posts, setPosts] = useLocalStorageState('SHIPPERS');

  useEffect(() => {
    if (!window.localStorage.getItem('SHIPPERS')) {
      client
        .fetch(
          `*[title == 'SHIPPERS' ]{
    
          content[]
          
          }`
        )
        .then((data) => [
          window.localStorage.setItem('SHIPPERS', JSON.stringify(data)),
          setPosts(data),
        ])
        .catch(console.error);
    }
  }, [setPosts]);

  return (
    <div className="lg:pt-28 flex flex-col bg-slate-800">
      <div className="lg:flex lg:flex-row hidden ">
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

      <Card>
        <h2 className=" self-left lg:pt-10 lg:pl-40  2xl:text-5xl text-4xl 2xl:p-8 pt-8 pl-8">
          {posts[0] ? posts[0]['content'][2].heading : null}
          <p className="h-4"></p>
          <div className="w-40 h-2   hover:w-10 transition duration-700 ease-in-out delay-150"></div>
        </h2>
      </Card>
      <div className="flex lg:flex-row pt-0  content-between  justify-between flex-col p-8 heading_cardContent ">
        {posts[0] ? (
          <PortableText
            className="w-10/12"
            blocks={posts[0]['content'][2].text}
            projectId="y10nshsc"
            dataset="production"
            serializers={serializers}
          />
        ) : null}

        <div className="flex-1 h-64 2xl:pl-28 pl-0 xl:pl-18 lg:p-20 flex flex-col flex-end ">
          <h3 className="font-bold pt-10 text-xl">Learn More</h3>

          <p className="font-normal pt-10 text-xl 2xl:w-96 pb-8">
            {posts[0] ? posts[0]['content'][2]['cta'].title : null}
          </p>
          <button class="btn" style={{ padding: '20px 0px 20px 0px' }}>
            <span className="btn-text">{Phoneno}</span>
          </button>
          <img
            style={{ marginTop: '8vh' }}
            src={
              posts[0]
                ? urlFor(posts[0]['content'][2]['image']['asset']._ref)
                : null
            }
            className="flex-1 h-64 hidden lg:block"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
}
