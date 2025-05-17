import React from 'react';
import Stars from '../images/stars.png';
import LinkContainer from './LinkContainer';


function Footer() {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer">
      <img src={Stars} alt="" />
      <p>{currentDate} Ro Sharp</p>
      <LinkContainer />
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
