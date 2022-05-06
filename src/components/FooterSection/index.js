import { useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import client from '../../client';
// import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import {
  FooterContainer,
  // SocialMediaActions,
  FooterLogo,
  FotterNav,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  // SocialMediaActionsContainer,
  footerMobileContainer,
  FotterHName,
} from './FooterSectionElements';

export default function FooterSection() {
  const [posts, setPosts] = useState([]);
  // const data = {
  //   _createdAt: '2022-05-02T19:49:14Z',
  //   _id: '8b5585e6-4051-4388-81c8-e1bce0fa643a',
  //   _rev: 'uXu54HNF3y7MjHA6MXNq3D',
  //   _type: 'footer',
  //   _updatedAt: '2022-05-02T20:56:32Z',
  //   content: [
  //     {
  //       _key: '9e34c3ce6028',
  //       _type: 'textSection',
  //       heading: 'Help line Number',
  //       label: '1-800-303-0076',
  //     },
  //     {
  //       _key: 'd8e606f5add7',
  //       _type: 'textSection',
  //       heading: 'Email',
  //       label: 'info@KALWAY.com',
  //     },
  //     {
  //       _key: '635e98425b8a',
  //       _type: 'textSection',
  //       heading: 'Address',
  //       label: '10156 Live Oak Ave, Fontana, CA 92335',
  //     },
  //     {
  //       _key: '7d3d825ba9b2',
  //       _type: 'textSection',
  //       heading: 'We are open',
  //       label: 'Monday - Friday 24Hrs Saturday & Sunday 7AM -5PM',
  //     },
  //   ],
  //   title: 'FooterText',
  // };
  useEffect(() => {
    client
      .fetch(
        `*[title == 'FooterText' ]{
          title,
          content[]
          
          }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
    console.log(posts[0]);
  }, []);

  return (
    <FooterContainer id="Footertag">
      <FooterLogo>
        <div className="mt-10">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h1 className="pt-10 font-bold text-xl   text-white">
              © KALWAY Inc, 2022 All rights reserved.
            </h1>
          </div>
        </div>
        <FotterHName>Get in touch with us for your service</FotterHName>

        {/* <SocialMediaActionsContainer>
        <SocialMediaActions>
             <FaFacebook/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaTwitter/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaInstagram/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaLinkedin/>
            </SocialMediaActions>
          </SocialMediaActionsContainer> */}
      </FooterLogo>
      <footerMobileContainer>
        <FotterNav>
          {posts[0]
            ? posts[0]['content'].map((post) => (
                <FotterContact key={post._key}>
                  <FotterContactlist>
                    <FotterContactName>{post.heading}</FotterContactName>
                    <FotterContactNo>{post.label}</FotterContactNo>
                  </FotterContactlist>
                </FotterContact>
              ))
            : null}

          {/* <FotterContact>
            <FotterContactlist>
              <FotterContactName>Email</FotterContactName>
              <FotterContactNo>info@KALWAY.com</FotterContactNo>
            
            </FotterContactlist>
          </FotterContact> */}

          {/* <hr align="left" width="100%"></hr> */}
          {/* <FotterContact>
            <FotterContactlist>
              <FotterContactName>Address</FotterContactName>
              <FotterContactNo>
                10156 Live Oak Ave, Fontana, CA 92335
              </FotterContactNo>
            </FotterContactlist>
          </FotterContact> */}

          {/* <hr align="left" width="100%"></hr> */}
          {/* <FotterContact>
            <FotterContactlist>
              <FotterContactName>We are open</FotterContactName>
              <FotterContactNo>Monday - Friday 24Hrs</FotterContactNo>

              <FotterContactNo>Saturday & Sunday 7AM -5PM</FotterContactNo>
            </FotterContactlist>
          </FotterContact> */}
          {/* <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions> */}
          {/* <FotterNavH>Email</FotterNavH> */}
          {/* <FotterNavH>Company</FotterNavH>
                <FotterNavH>Advantages</FotterNavH>
                <FotterNavH>Products</FotterNavH>
                <FotterNavH>Contact</FotterNavH> */}
        </FotterNav>
      </footerMobileContainer>

      {/* <FotterSocialMedia>
            <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaTwitter/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaInstagram/>
            </SocialMediaActions>
          </FotterSocialMedia> */}
      {/* <FotterContactN>
        © Kal Tires Inc, 2021 All rights reserved.{" "}
      </FotterContactN> */}
    </FooterContainer>
  );
}
