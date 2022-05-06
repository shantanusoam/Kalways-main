import client from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const builder = imageUrlBuilder({
  baseUrl: 'https://cdn.sanity.io',
  projectId: 'cjv2tdo2', // find this at manage.sanity.io or in your sanity.json
  apiVersion: '2021-10-21', // use a UTC date string
  dataset: 'production',
  useCdn: true,
});
export default client({
  projectId: 'cjv2tdo2', // find this at manage.sanity.io or in your sanity.json
  apiVersion: '2021-10-21', // use a UTC date string

  dataset: 'production',
  useCdn: true, // this is from those question during 'sanity init'
});
