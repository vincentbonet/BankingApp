import React from 'react';

const NavBar = () => {
    const items = [ // Array of links
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'News', link: '/news' },
        { name: 'Stocks', link: '/stocks' },
        { name: 'Crypto', link: '/crypto' },
        { name: 'Login', link: '/login' },
        { name: 'Register', link: '/register' }
    ];

    return ( // Displaying the links
        <> 
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
        </ul>
        </>
    );
}

export default NavBar;

