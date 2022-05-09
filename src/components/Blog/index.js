import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import client, { builder } from '../../client';
import FeaturedPosts from './FeaturedPosts';
import moment from 'moment';
import PostWidget from './PostWidget';
import {
  HeroContainer,
  ContainerMain,
  HeroContent,
  HeroP,
  PCENTER,
} from '../Careers/CareersElement';
const urlFor = (source) => builder.image(source);
export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
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
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  useEffect(() => {
    client
      .fetch(
        `*[ title == "Blogs"] {
          content[0],
            }`
      )
      .then((data) => setPage(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <HeroContainer
        id="Carrers"
        bgImage={
          page[0] ? urlFor(page[0].content.backgroundImage.asset._ref) : null
        }
      >
        <HeroContent className="flex flex-col 	justify-items-end lg:w-1/2">
          <ContainerMain>
            <HeroP>{page[0] ? page[0]['content'].heading : null}</HeroP>
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
            {/* <p>
                Being part of the KALWAY family means surrounding yourself with
                a sense of openness and inclusivity,a group of different people
                who’ve created an environment where everyone is willing to help
                everyone. It means challenging yourself and your peers to take
                the road less traveled, to stay fearless and innovative, while
                having fun too.
              </p> */}
          </PCENTER>
        </HeroContent>
      </HeroContainer>
      <FeaturedPosts />
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* <h1 className="font-bold text-4xl pt-28 mb-10 tracking-widest text-center md:text-5xl lg:text-6xl">
          Blog page
        </h1> */}

        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <div
              className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8"
              key={post.slug.current}
            >
              {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                alt={post.title}
                className="shadow-lg rounded-t-lg lg:rounded-lg"
                layout="fill"
                src={post.featuredImage.url}
              />
            </div> */}
              <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img
                  src={post.mainImage.asset.url}
                  alt=""
                  className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
                />
              </div>

              <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-green-500 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
              </h1>
              <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
                {/* <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
                <Image
                  unoptimized
                  loader={grpahCMSImageLoader}
                  alt={post.author.name}
                  height="30px"
                  width="30px"
                  className="align-middle rounded-full"
                  src={post.author.photo.url}
                />
                <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
              </div> */}
                <div className="font-medium text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline mr-2 text-Site-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="align-middle">
                    {moment(post.publishedAt).format('MMM DD, YYYY')}
                  </span>
                </div>
              </div>
              <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
                {post.excerpt}
              </p>
              <div className="text-center">
                <Link to={`/blog/${post.slug.current}`}>
                  <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-black text-lg font-medium rounded-full text-Site-green px-8 py-3 cursor-pointer">
                    Continue Reading
                  </span>
                </Link>
              </div>
            </div>
            // <article key={post.slug.current}>

            //   <img src={post.mainImage.asset.url} alt={post.title} />
            //   <h4 className="text-xl mt-2">{post.title}</h4>
            //   <button className="mt-5 mb-10">
            //     <Link
            //       to={`/blog/${post.slug.current}`}
            //       className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
            //     >
            //       Read Full Article
            //     </Link>
            //   </button>
            // </article>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-20">
            <PostWidget />
          </div>
        </div>
      </section>
    </>
  );
}
