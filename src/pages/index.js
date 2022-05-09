import React, { useState, useEffect } from 'react';

import HeroSection from '../components/HeroSection';

import ForSandC from '../components/ForSandC';
import client from '../client';

import Solution from '../components/Solution';
import useLocalStorageState from '../localStorageHook';
const Lol = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useLocalStorageState('Home');
  useEffect(() => {
    client
      .fetch(
        `*[title == 'Home' ]{
          title,
          content[]
          
          }`
      )
      .then((data) => setName(data))
      .catch(console.error);
  }, []);

  return (
    <>
      {/* <EmblaCarousel slides={slides} /> */}
      {/* <Herosection></Herosection> */}
      <HeroSection posts={name}></HeroSection>
      {/* <CenterSection></CenterSection> */}
      {/* <UAboutSection></UAboutSection> */}
      <Solution posts={name}></Solution>
      <ForSandC posts={name}></ForSandC>
      {/* <DAboutSection></DAboutSection>
      <ProvideExpertService></ProvideExpertService> */}
      {/* <TestimonialSection></TestimonialSection> */}
      {/* <WWOSection></WWOSection> */}
      {/* <WCUSection></WCUSection> */}
      {/* <QuoteAtEnd></QuoteAtEnd>
      <TrailerList></TrailerList> */}
      {/* <ContactSection></ContactSection> */}
      {/* <MapSection></MapSection> */}
    </>
  );
};

class Home extends React.Component {
  componentDidMount() {
    document.title = 'KALWAY - 5PL Logistics & Brokerage';
  }

  render() {
    return <Lol />;
  }
}
export default Home;
