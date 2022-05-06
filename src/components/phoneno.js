import { useState, useEffect } from 'react';

import client from '../client';
export default function PhoneNo() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[title == 'Kalway' ]{
           
                     
                      phone,
                      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);
  return posts[0] ? posts[0].phone : null;
}
