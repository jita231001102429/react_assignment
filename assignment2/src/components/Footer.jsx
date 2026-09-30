import React from 'react';

function Footer({ copyrightText }) {
  return (
    <footer className="app-footer">
      <p>{copyrightText}</p>
    </footer>
  );
}

export default Footer;