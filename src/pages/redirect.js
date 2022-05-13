import React, { useEffect } from 'react';

function Redirect() {
  useEffect(() => {
    window.location.href = 'https://kalway.com/backoffice/desk';
  }, []);

  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default Redirect;
