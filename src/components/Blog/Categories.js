import React, { useState, useEffect } from 'react';
import { sanityClient } from '@sanity/client';

import Category from './Categories';

const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"]{
      title,
      slug,
      description,
      image{
        asset->{
          _id,
          url
        },
      },
      hexCode,
    }`
      )
      .then((data) => setCategories(data))
      .catch(console.error);
  }, []);

  return (
    <div className="">
      <h3 className="text-3xl font-bold text-center my-10 lg:my-5">
        All Categories🥘
      </h3>

      <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full gap-10 my-10">
        {categories &&
          categories.map((category) => (
            <Category key={category._key} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
