import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import './NavBar.css';
import Searchbar from './Searchbar';

const NavBar = ({ openLoginModal, openRegisterModal }) => {
    const items = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' }, // put in footer
        { name: 'News', link: '/news' }, // delete and put into other components
        { name: 'Stocks', link: '/stocks' },
        { name: 'Crypto', link: '/crypto' },
        { name: 'Account', link: '/account'},
        { name: 'Retirement', link: '/retirement' },
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
            <div className="searchbar">
                <Searchbar suggestions={suggestions} />
            </div>
            <ul className="user-items">
                <li>
                    <Button
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan' }}
                        size="md"
                        radius="xl"
                        style={{ marginRight: '10px' }}
                        onClick={openLoginModal}
                    >
                        Login
                    </Button>
                    <Button
                        variant="gradient"
                        gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                        size="md"
                        radius="xl"
                        onClick={openRegisterModal}
                    >
                        Register
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
