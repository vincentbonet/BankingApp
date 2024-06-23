import React from 'react';
import './Footer.css';

import { ReactComponent as FacebookIcon } from './facebook.svg';
import { ReactComponent as TwitterIcon } from './twitter.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <p>&copy; 2024 Banking App. All rights reserved.</p>
                <FacebookIcon className="social-icon" />
                <TwitterIcon className="social-icon" />
                <InstagramIcon className="social-icon" />
            </div>
        </footer>
    );
}

export default Footer;
