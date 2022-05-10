import YouTube from 'react-youtube';
const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = url.split('be/')[1];
      return <YouTube videoId={id} />;
    },
  },
};
export default serializers;
