import React, { useRef, useState, useEffect } from 'react';
import client, { builder } from '../../client';
import {
  ContactContainer,
  ContactForm,
  ContactImage,
  FotterNav,
  WWOCCButton,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  Heading,
} from './ContactSEctionElements';

import { animateScroll as scroll, Link } from 'react-scroll';
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
  function refreshPage() {
    hide = 'lol';
    window.location.reload();
  }

  var hide = 'ContactUs';
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
        {/* <WWOCCButton className="" onClick={refreshPage} id={`${hide}`}>
          Contact Us
        </WWOCCButton> */}
      </ContactForm>

      <ContactImage>
        <footerMobileContainer>
          <FotterNav>
            <FotterContact>
              <FotterContactlist>
                {posts[0]
                  ? posts[0]['content'].map((post) => (
                      <>
                        <FotterContactName>{post.heading}</FotterContactName>
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
        </footerMobileContainer>
      </ContactImage>
    </ContactContainer>
  );
}
class ContactSection extends React.Component {
  // componentDidMount() {
  //   window.location.reload(false);
  // }

  render() {
    return <ContactSectio />;
  }
}
