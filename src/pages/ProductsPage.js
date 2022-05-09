import React, { useState, useEffect } from 'react';
import TrailerList from '../components/TrailersList';

export const ProductsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  function disabeled() {
    const path = window.location.pathname;

    if (path === '/') {
      return true;
    }
    return false;
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ paddingTop: '70px' }}>
      <TrailerList></TrailerList>
    </div>
  );
};
