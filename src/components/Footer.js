import React from 'react';

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className='footer-copyright'>
        <p>&#169; {year}</p>
      </div>
      <div className='footer-additionalInfo'>
        <p>3029 North Prospect, Peoria, IL</p>
      </div>
    </div>
  )
};

export default Footer;
