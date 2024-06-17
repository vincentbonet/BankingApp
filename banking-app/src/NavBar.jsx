import React from 'react';
import './NavBar.css';

const NavBar = () => {
    const items = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'News', link: '/news' },
        { name: 'Stocks', link: '/stocks' },
        { name: 'Crypto', link: '/crypto' },
        { name: 'Login', link: '/login' },
        { name: 'Register', link: '/register' }
    ];

    return (
        <nav className="navbar">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
