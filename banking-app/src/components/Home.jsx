import React from 'react';
import './Home.css';
import { ReactComponent as Icon } from './assets/chart-line-up.svg';


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
                <div className="animated-logo">
                    <Icon className ="logo" />
                </div>
                <h1>Welcome to My Banking App!</h1>
                <p>Manage your finances with ease and security.</p>
                <button className="cta-button">Get Started</button>
            </div>
            <section className="features">
                <h2>Features</h2>
                <div className="features-list">
                    {features.map((feature, index) => (
                        <div key={index} className="feature">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonials-list">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <p>"{testimonial.text}"</p>
                            <h4>- {testimonial.name}</h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
