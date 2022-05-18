import React, { useEffect } from 'react';

function Redirect() {
  useEffect(() => {
    if ((this.props.location.state = 'http://localhost:3000/')) {
      window.location.href = 'https://kalwaycms.sanity.studio/';
    }
  }, []);

  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default Redirect;
