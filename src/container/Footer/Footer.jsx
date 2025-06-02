import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';

const Footer = () => (
  <div className="app__footer section__padding">
    {/* <h1>Test Footer</h1> */}
    {/* <FooterOverlay /> */}
    <Newsletter />
  </div>
);

export default Footer;
