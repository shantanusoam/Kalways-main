import client from '@sanity/client';

export default client({
  projectId: 'cjv2tdo2', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
});
