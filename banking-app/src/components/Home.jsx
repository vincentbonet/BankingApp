import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home.css';

const Feature = ({ title, description }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div 
            ref={ref}
            className="feature"
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5 }}
        >
            <h2>{title}</h2>
            <p>{description}</p>
        </motion.div>
    );
};

const Testimonial = ({ name, text }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div 
            ref={ref}
            className="testimonial"
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 }
            }}
            transition={{ duration: 0.5 }}
        >
            <h2>{name}</h2>
            <p>{text}</p>
        </motion.div>
    );
};

const Home = () => {
    const features = [
        { title: 'Easy Budgeting', description: 'Track your expenses and manage your budget effortlessly.' },
        { title: 'Secure Savings', description: 'Save securely with our advanced encryption and security protocols.' },
        { title: 'Instant Transfers', description: 'Transfer money instantly to anyone, anywhere.' },
        { title: 'Detailed Analytics', description: 'Get detailed insights into your spending habits.' }
    ];

    const testimonials = [
        { name: 'Jane Doe', text: 'This app has transformed the way I manage my finances. Highly recommend! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit.' },
        { name: 'John Smith', text: 'User-friendly and secure. It’s my go-to app for all banking needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.' },
        { name: 'Alice Johnson', text: 'Great experience overall. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula.' },
        { name: 'Bob Brown', text: 'Highly efficient and secure. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.' }
    ];

    return (
        <div className="home-container">
            <div className="section hero">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to My Banking App!
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Manage your finances with ease and security.
                </motion.p>
                <motion.button
                    className="cta-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </div>

            <div className="section features">
                {features.map((feature, index) => (
                    <Feature key={index} title={feature.title} description={feature.description} />
                ))}
            </div>

            <div className="section testimonials">
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} name={testimonial.name} text={testimonial.text} />
                ))}
            </div>
        </div>
    );
};

export default Home;
