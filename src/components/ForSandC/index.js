import React, { useState, useEffect } from 'react';
import client, { builder } from '../../client';
import containers from '../../images/Ccontainers.jpg';
import Hcontainers from '../../images/Hcontainers.jpg';

import './style.css';
import {
  WWOCArd,
  ImageContainer,
  ImageContainers,
  SandCcontainer,
  Contanier,
} from './SolutionElement';
import Fade from 'react-reveal/Fade';
import { CardContainer } from '../Solution/SolutionElement';
const urlFor = (source) => builder.image(source);
export function ForSandC({ isOpen, toggle }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == 'Home' ]{
          title,
          content[]
          
          }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <WWOCArd>
      <ImageContainers>
        {posts[0]
          ? posts[0]['content'][5]['rows'].map((post) => (
              <ImageContainers>
                <Contanier>
                  <ImageContainer>
                    <img src={urlFor(post.image.asset._ref)} alt=""></img>
                  </ImageContainer>
                  <Contanier>
                    <h4>{post.heading}</h4>
                    <p>{post.label}</p>
                  </Contanier>
                </Contanier>
              </ImageContainers>
            ))
          : null}
      </ImageContainers>
    </WWOCArd>
  );
}

export default ForSandC;
