import React, { useState, useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';

const Contac = () => {
  const [isOpen, setIsOpen] = useState(false);

  function disabeled() {
    const path = window.location.pathname;
    console.log(path === '/');
    if (path === '/') {
      return true;
    }
    return false;
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="bg-white pt-24"
        data-aidaform-widget="form-2019-12"
        data-url="https://shantanu.aidaform.com/kalway-credit-application"
        data-width="100%"
        data-height="500px"
        data-do-resize
      ></div>
    </>
  );
};
class CreditApllication extends React.Component {
  componentDidMount() {
    document.title = 'KALWAY Contact';
    window.scrollTo(0, 0);
  }

  render() {
    const PageComponent = this.props.component;

    return <Contac />;
  }
}

export default CreditApllication;
