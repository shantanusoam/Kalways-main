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
  //   _id: 'drafts.8b5585e6-4051-4388-81c8-e1bce0fa643a',
  //   _rev: '1f795m-cxt-t1e-nus-8guqpfazj',
  //   _type: 'footer',
  //   _updatedAt: '2022-05-02T20:52:37.348Z',
  //   content: [
  //     {
  //       _key: '9e34c3ce6028',
  //       _type: 'textSection',
  //       heading: 'Help line Number',
  //       label: '1-800-303-0076',
  //       text: [
  //         {
  //           _key: '606ec0a1a83d',
  //           _type: 'block',
  //           children: [
  //             {
  //               _key: '47fc72c05fbd0',
  //               _type: 'span',
  //               marks: ['d95ecd00fce7'],
  //               text: '1-800-303-0076',
  //             },
  //           ],
  //           markDefs: [
  //             {
  //               _key: 'd95ecd00fce7',
  //               _type: 'link',
  //             },
  //           ],
  //           style: 'normal',
  //         },
  //       ],
  //     },
  //     {
  //       _key: 'd8e606f5add7',
  //       _type: 'textSection',
  //       heading: 'Email',
  //       label: 'info@KALWAY.com',
  //       text: [
  //         {
  //           _key: '5b0a91fc3df2',
  //           _type: 'block',
  //           children: [
  //             {
  //               _key: '986a2341fb260',
  //               _type: 'span',
  //               marks: [],
  //               text: 'info@KALWAY.com',
  //             },
  //           ],
  //           markDefs: [],
  //           style: 'normal',
  //         },
  //       ],
  //     },
  //     {
  //       _key: '635e98425b8a',
  //       _type: 'textSection',
  //       heading: 'Address',
  //       label: '10156 Live Oak Ave, Fontana, CA 92335',
  //       text: [
  //         {
  //           _key: '4bb210e3bc80',
  //           _type: 'block',
  //           children: [
  //             {
  //               _key: '7e4d9d0f9b2f0',
  //               _type: 'span',
  //               marks: [],
  //               text: '10156 Live Oak Ave, Fontana, CA 92335',
  //             },
  //           ],
  //           markDefs: [],
  //           style: 'normal',
  //         },
  //       ],
  //     },
  //     {
  //       _key: '7d3d825ba9b2',
  //       _type: 'textSection',
  //       heading: 'We are open',
  //       label: 'Monday - Friday 24Hrs Saturday & Sunday 7AM -5PM',
  //       text: [
  //         {
  //           _key: 'f246de62de8f',
  //           _type: 'block',
  //           children: [
  //             {
  //               _key: 'b69aa0803ce80',
  //               _type: 'span',
  //               marks: [],
  //               text: 'Monday - Friday 24Hrs\nSaturday & Sunday 7AM -5PM',
  //             },
  //           ],
  //           markDefs: [],
  //           style: 'normal',
  //         },
  //       ],
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
    console.log(posts);
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
          {posts[0]['content'].map((post) => (
            <FotterContact>
              <FotterContactlist>
                <FotterContactName>{post.heading}</FotterContactName>
                <FotterContactNo>{post.label}</FotterContactNo>
                {/* //todo */}
              </FotterContactlist>
            </FotterContact>
          ))}

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
