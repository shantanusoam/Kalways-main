import React from 'react';
import { WWOCArd1 } from './Solution/SolutionElement';
import YouTube from 'react-youtube';
import PortableText from '@sanity/block-content-to-react';
import serializers from '../serializers';
const splitter = (url) => url.split('be/')[1];
const opts = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    rel: 0,
    showinfo: 0,
    ecver: 2,
  },
};
export const Youtube = ({ posts }) => {
  return (
    <WWOCArd1>
      <div style={{ flex: 1 }} className="m-8 items-center">
        {posts.Youtubeurl ? (
          <YouTube videoId={splitter(posts.Youtubeurl)} opts={opts} />
        ) : null}
      </div>
      {posts.Youtubeurl ? (
        <div style={{ flex: 1 }}>
          <h3 className="font-bold text-2xl mb-5">{posts.heading}</h3>
          <div className=" text-gray-800 text-0xl mb-4 lg:text-1xl md:mb-5 2xl:h-56 w-3/4">
            <PortableText
              className="w-10/12 "
              blocks={posts.text}
              projectId="y10nshsc"
              dataset="production"
              serializers={serializers}
            />
          </div>
        </div>
      ) : null}
    </WWOCArd1>
  );
};
