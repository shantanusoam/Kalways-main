import client from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const builder = imageUrlBuilder({
  baseUrl: 'https://cdn.sanity.io',
  projectId: 'y10nshsc', // find this at manage.sanity.io or in your sanity.json
  apiVersion: '2021-10-21', // use a UTC date string
  dataset: 'production',
  token: process.env.Sanity_token,
  useCdn: true,
});
export default client({
  projectId: 'y10nshsc', // find this at manage.sanity.io or in your sanity.json
  apiVersion: '2021-10-21', // use a UTC date string
  token: process.env.Sanity_token,
  dataset: 'production',
  useCdn: true, // this is from those question during 'sanity init'
});
