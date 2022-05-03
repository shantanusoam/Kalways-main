import client from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const builder = imageUrlBuilder({
  baseUrl: 'https://cdn.sanity.io',
  projectId: 'cjv2tdo2', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production',
});
export default client({
  projectId: 'cjv2tdo2', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
});
