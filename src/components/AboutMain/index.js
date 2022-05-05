import React, { useRef, useState, useEffect } from 'react';
import client, { builder } from '../../client';
import {
  AboutContainer,
  TextContaner,
  TextContanerS,
} from './AboutMainElements';
import whitetruck from '../../images/AP.jpeg';
const urlFor = (source) => builder.image(source);
export default function AboutMain({ isOpen, toggle }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == "About Us"] {
          content[],
         
         }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
}
