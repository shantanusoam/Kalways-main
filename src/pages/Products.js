// import { render } from '@testing-library/react';
import React from 'react';
import ContactSection from '../components/ContactSection';

// import ProductBottom from '../components/ProductBottom';
import ProductTop from '../components/ProductTop';
// import Contact from './contact';

export default class Products extends React.Component {
  componentDidMount() {
    document.title = 'KALWAY - 5PL Logistics & Brokerage';
  }

  render() {
    return (
      <>
        <ProductTop id={this.props.location.state.id}></ProductTop>
        <ContactSection></ContactSection>
      </>
    );
  }
}
