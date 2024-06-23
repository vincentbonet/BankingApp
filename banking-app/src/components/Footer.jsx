import React from 'react';
import './Footer.css';

import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <p>&copy; 2024 Banking App. All rights reserved.</p>
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
                <img src={instagramIcon} alt="Instagram" className="social-icon" />
            </div>
        </footer>
    );
}

export default Footer;
