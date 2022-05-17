import React, { useEffect } from 'react';
import client, { builder } from '../../client';
// import VanillaTilt from 'vanilla-tilt';
import {
  AboutContainer,
  CardListRow,
  // NavLink,
  // LinkRo,
} from './TrailerListElement';
// import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import EmblaCarousel from './EmblaCarousel';
// import { animateScroll as scroll, Link } from 'react-scroll';
// import { Trailers } from '../../trailer.js';
import useLocalStorageState from '../../localStorageHook';
const SLIDE_COUNT = 3;

const slides = Array.from(Array(SLIDE_COUNT).keys());
const urlFor = (source) => builder.image(source);
export function TrailerList() {
  console.log(`inside  services`);
  // const [name, setname] = useState([]);

  // useEffect(() => {
  //   client
  //     .fetch(
  //       `*[title == 'services' ]{
  //         title,
  //         content[]

  //         }`
  //     )
  //     .then((data) => setname(data))
  //     .catch(console.error);
  // }, []);
  const [name, setName] = useLocalStorageState('services');
  
  useEffect(() => {
    console.log(`inside useEffect services`);
    if (!window.localStorage.getItem('services')) {
      console.log(`inside useEffect fetch call services`);
      client
        .fetch(
          `*[title == 'services' ]{
          title,
          content[]
          
          }`
        )
        .then((data) => [
          window.localStorage.setItem('services', JSON.stringify(data)),
          setName(data),
        ])
        .catch(console.error);
    }
    
  }, [setName]);

  return (
    <AboutContainer id="Products">
      <h1 className="text-center text-black  2xl:text-5xl text-4xl pb-0  2xl:mt-28 xl:mt-28 mt-8 md:pb-3">
        {name[0] ? name[0].title.toUpperCase() : null}
        <div className="w-40 h-2  hover:w-10 transition duration-700 ease-in-out delay-150"></div>
      </h1>

      <CardListRow>
        <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center   ">
          {name[0]
            ? name[0]['content'][0]['rows'].map((post) => (
                <Fade bottom key={post._key}>
                  <div
                    className="bg-white rounded-xl  m-9 hover:shadow-2xl flex-1 transition duration-700 ease-in-out delay-150"
                    key={post._key}
                    id={post._key}
                  >
                    <EmblaCarousel
                      slides={slides}
                      id={post._key}
                      rows={post.rows}
                    />

                    <div className="p-8 heading_cardContent">
                      <h2 className="font-bold text-2xl mb-5 ">
                        {post.heading}
                      </h2>
                      <br />
                      <div className=" text-1xl mb-5 lg:h-48 ">
                        {post.label}
                      </div>
                    </div>
                  </div>
                </Fade>
              ))
            : null}
        </div>
      </CardListRow>
    </AboutContainer>
  );
}
// const TrailerLists = ({ isOpen, toggle }) => {
//   const tiltRef = useRef();
//   React.useEffect(() => {
//     const tiltNode = tiltRef.current;
//     VanillaTilt.init(tiltNode, {
//       max: 25,

//       speed: 400,
//       glare: true,
//       'max-glare': 0.5,
//     });
//   });
//   return (
//     <AboutContainer id="About">
//       <h3 className="text-center text-black font-bold text-3xl pb-8 md:pb-3">
//         Trailer
//       </h3>
//       <CardListRow>
//         <div className="xl:px-14 xl:py-10 md:py-0 md:px-0 bg-white flex flex-row flex-wrap justify-center items-center   ">
//           {this.state.Trailers.map((trailer) => (
//             <Roll left key={trailer.img}>
//               <div className="bg-white rounded-xl  m-9 hover:shadow-2xl transition duration-700 ease-in-out delay-150">
//                 <img
//                   src={trailer.img}
//                   alt="boy with camera"
//                   className="rounded-t-xl h-80 w-full object-cover"
//                 />

//                 <div className="p-8">
//                   <h3 className="font-bold text-2xl mb-5">{trailer.title}</h3>
//                   <br />
//                   <p>{trailer.date}</p>
//                 </div>
//               </div>
//             </Roll>
//           ))}

//           {/* <Fade bottom>
//    <div className="bg-white rounded-xl hover:shadow-2xl m-9">
//                  <img src={tr2} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>

//             <div className="p-8">
//                 <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
//                 <br />
//             <p>20 jan 2020</p>

//     </div>

//    </div>
//    </Fade>

//    <Roll right>
//    <div className="bg-white rounded-xl hover:shadow-2xl m-9">
//                  <img src={tr3} alt="boy with camera" className="rounded-t-xl h-80 w-full object-cover"/>

//             <div className="p-8">
//                 <h3 className="font-bold text-2xl mb-5">Build a Card</h3>
//                 <br />
//             <p>20 jan 2020</p>

//     </div>

//    </div>
//    </Roll> */}
//         </div>
//       </CardListRow>
//     </AboutContainer>
//   );
// };
export default TrailerList;
