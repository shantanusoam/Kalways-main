import React, { useEffect } from 'react';

import HeroSection from '../components/HeroSection';

import ForSandC from '../components/ForSandC';
import client from '../client';

import Solution from '../components/Solution';
import useLocalStorageState from '../localStorageHook';
const Lol = ({ Phoneno }) => {
  console.log(`inside Home`);
  const [name, setName] = useLocalStorageState('Home');
  useEffect(() => {
    console.log(`inside useEffect Home`);
    if (!window.localStorage.getItem('Home')) {
      client
        .fetch(
          `*[title == 'Home' ]{
          title,
          content[]
          }`
        )
        .then((data) => setName(data))
        .catch(console.error);
    }
     
  }, [setName]);

   

  return (
    <> 
      {/* <EmblaCarousel slides={slides} /> */}
      {/* <Herosection></Herosection> */},
      <HeroSection posts={name}></HeroSection>
      {/* <CenterSection></CenterSection> */}
      {/* <UAboutSection></UAboutSection> */}
      <Solution posts={name} Phoneno={Phoneno}></Solution>
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
    return <Lol Phoneno={this.props.Phoneno} />;
  }
}
export default Home;
