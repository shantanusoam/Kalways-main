import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  HeroContainer,
  ContainerMain,
  HeroContent,
  HeroP,
  PCENTER,
} from '../Careers/CareersElement';
import client from '../../client';
import PortableText from '@sanity/block-content-to-react';
import serializers from '../../serializers';
export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      
      }`
      )
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl flex items-center justify-center h-screen">
          Loading...
        </h1>
      ) : (
        <>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <HeroContainer
              id="Carrers"
              bgImage={singlePost.mainImage.asset.url}
            >
              <HeroContent className="flex flex-col 	justify-items-end lg:w-1/2">
                <ContainerMain>
                  <HeroP>{singlePost.title}</HeroP>
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
          )}

          <section className="px-5 xl:max-w-6xl xl:mx-auto pb-20">
            <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-8xl text-center pt-28">
              {singlePost.title}
            </h1>
            {/* {singlePost.mainImage && singlePost.mainImage.asset && (
              <img
                src={singlePost.mainImage.asset.url}
                alt={singlePost.title}
                title={singlePost.title}
                className="blog__image rounded-t"
              />
            )} */}

            <div className="block__content mb-8">
              <PortableText
                blocks={singlePost.body}
                projectId="cjv2tdo2"
                dataset="production"
                serializers={serializers}
              />
            </div>

            <button>
              <Link
                to="/blog"
                className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
              >
                Read more articles
              </Link>
            </button>
          </section>
        </>
      )}
    </>
  );
}
