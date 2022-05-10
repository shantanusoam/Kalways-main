import React from 'react';
import ContactSection from '../components/ContactSection';
// import MapSection from '../components/MapSection';

const Contac = () => {
  return (
    <>
      <div style={{ PaddingTop: '200px' }}>
        <ContactSection></ContactSection>
        {/* <MapSection></MapSection> */}
      </div>
    </>
  );
};
class Contact extends React.Component {
  componentDidMount() {
    document.title = 'KALWAY Contact';
    window.scrollTo(0, 0);
  }

  render() {
    return <Contac />;
  }
}

export default Contact;
