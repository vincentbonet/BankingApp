import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import './NavBar.css';
import Searchbar from './Searchbar';

const NavBar = ({ openLoginModal, openRegisterModal }) => {
    const items = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'News', link: '/news' },
        { name: 'Stocks', link: '/stocks' },
        { name: 'Crypto', link: '/crypto' },
    ];

    const suggestions = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Strawberry'];

    return (
        <nav className="navbar">
            <ul className="items">
                {items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <div className='searchbar'>
                <Searchbar suggestions={suggestions}/>
            </div>
            <ul className="user-items">
                <li>
                    <Button variant="outline" onClick={openLoginModal}>
                        Login
                    </Button>
                    <Button variant="outline" onClick={openRegisterModal}>
                        Register
                    </Button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
