import React from 'react';
import {
  AboutContainer,
  SpaceContainer,
  AboutContainerContent,
  AboutContainerTextContent,
  AboutContainerSubHeading,
  AboutContainerPara,
  AboutContainerButton,
  AboutContainerImageContent,
} from './DAboutSectionElement';
import whitetruck from '../../images/whitetruck.png';
const DAboutSection = ({ isOpen, toggle }) => {
  return (
    <AboutContainer id="About">
      <AboutContainerImageContent>
        <img
          src={whitetruck}
          alt="Our services Truck (White Truck with Trailer running on black road)"
        />
      </AboutContainerImageContent>

      <AboutContainerContent>
        <SpaceContainer> </SpaceContainer>

        <AboutContainerTextContent>
          {/* <AboutContainerHeading>KAL TIRES</AboutContainerHeading> */}
          <AboutContainerSubHeading>Our services</AboutContainerSubHeading>
          <AboutContainerPara>
            KALWAY Trailers & Leasing is a large and continually-growing
            trucking company that starts in California as Kal Freight Inc, with
            over 800 trucks and 2,000 trailers and has over 800 employees. As a
            dynamic modern transportation company with a strategic corporate
            location based in Ontario, California, Kal Freight extended its
            reach to Canada opening a new location in Abbotsford, as KALWAY
            Canada.
          </AboutContainerPara>
          <AboutContainerButton to="/About">
            <a href="/About">See more</a>
          </AboutContainerButton>
        </AboutContainerTextContent>
      </AboutContainerContent>
      {/* <AboutContainerImageContent2>
          <img src={bgimage} alt="" height="460px"/>
            </AboutContainerImageContent2> */}
    </AboutContainer>
  );
};

export default DAboutSection;
