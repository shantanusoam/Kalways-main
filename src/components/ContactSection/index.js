import React, { useState, useEffect } from 'react';
import client from '../../client';
import {
  ContactContainer,
  ContactForm,
  ContactImage,
  FotterNav,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FooterMobileContainer,
  FotterContactName,
  Heading,
} from './ContactSEctionElements';

export default function ContactSectio({ isOpen, toggle }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == 'Contact Us' ]{
          label,
          content[]
          
          }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <ContactContainer id="ContactUs">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="pt-20"> </div>
      <ContactForm>
        <Heading style={{ paddingTop: '6rem' }}>Contact Us</Heading>
        <div
          data-aidaform-widget="form-2019-12"
          data-url="https://shantanu.aidaform.com/contact-us-kalways"
          data-width="100%"
          data-height="500px"
          data-do-resize
        ></div>
      </ContactForm>

      <ContactImage>
        <FooterMobileContainer>
          <FotterNav>
            <FotterContact>
              <FotterContactlist>
                {posts[0]
                  ? posts[0]['content'].map((post) => (
                      <>
                        <FotterContactName key={post._key}>
                          {post.heading}
                        </FotterContactName>
                        <FotterContactNo>{post.label}</FotterContactNo>
                      </>
                    ))
                  : null}
              </FotterContactlist>
            </FotterContact>
            {/* <hr align="left" width="100%"></hr> */}

            {/* <hr align="left" width="100%"></hr> */}

            {/* <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions> */}
            {/* <FotterNavH>Email</FotterNavH> */}
            {/* <FotterNavH>Company</FotterNavH>
                <FotterNavH>Advantages</FotterNavH>
                <FotterNavH>Products</FotterNavH>
                <FotterNavH>Contact</FotterNavH> */}
          </FotterNav>
        </FooterMobileContainer>
      </ContactImage>
    </ContactContainer>
  );
}
