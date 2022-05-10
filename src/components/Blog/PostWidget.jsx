import React, { useState, useEffect } from 'react';

import moment from 'moment';
import { Link } from 'react-router-dom';
import client from '../../client';
// import { grpahCMSImageLoader } from '../util';
// import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
    title,
    slug,
    publishedAt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    }
  }`
      )
      .then((data) => setRelatedPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div className="flex items-center w-full mb-4" key={post._key}>
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
              src={post.mainImage.asset.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.publishedAt).format('MMM DD, YYYY')}
            </p>
            <Link
              href={`/blog/${post.slug.current}`}
              className="text-md"
              key={index}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
