import React from 'react';
import './Home.css';



const Home = () => {
    const features = [
        { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    ];

    const testimonials = [
        { name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut gravida mauris.' },
        { name: 'Lorem Ipsum', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut gravida mauris.' }
    ];

    return (
        <div className="home-container">
            <div className="hero">
                <h1>Welcome to My Banking App!</h1>
                <p>Manage your finances with ease and security.</p>
                <button className="cta-button">Get Started</button>
            </div>
        </div>
    );
};

export default Home;
