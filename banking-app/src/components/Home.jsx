import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    const features = [
        { title: 'Easy Budgeting', description: 'Track your expenses and manage your budget effortlessly.' },
        { title: 'Secure Savings', description: 'Save securely with our advanced encryption and security protocols.' },
        { title: 'Instant Transfers', description: 'Transfer money instantly to anyone, anywhere.' },
        { title: 'Detailed Analytics', description: 'Get detailed insights into your spending habits.' }
    ];

    const testimonials = [
        { name: 'Jane Doe', text: 'This app has transformed the way I manage my finances. Highly recommend!' },
        { name: 'John Smith', text: 'User-friendly and secure. It’s my go-to app for all banking needs.' }
    ];

    return (
        <div className="home-container">
            <motion.div 
                className="hero"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Welcome to My Banking App!</h1>
                <p>Manage your finances with ease and security.</p>
                <motion.button
                    className="cta-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </motion.div>

            <motion.div
                className="features"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {features.map((feature, index) => (
                    <motion.div 
                        className="feature" 
                        key={index}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="testimonials"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        className="testimonial" 
                        key={index}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2>{testimonial.name}</h2>
                        <p>{testimonial.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Home;
