import React from 'react';
import './About.css';

const About = () => {
    const teamMembers = [
        { name: 'Alice Smith', role: 'CEO' },
        { name: 'Bob Johnson', role: 'CTO' },
        { name: 'Charlie Brown', role: 'Lead Developer' }
    ];

    return (
        <div className="about-container">
            <section className="overview">
                <h1>About Our Banking App</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula libero at ligula vehicula, vel egestas nunc pharetra.</p>
            </section>
            <section className="features">
                <h2>Key Features</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Curabitur vehicula libero at ligula vehicula, vel egestas nunc pharetra.</li>
                    <li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</li>
                </ul>
            </section>
            <section className="mission-vision">
                <h2>Our Mission and Vision</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Curabitur vehicula libero at ligula vehicula, vel egestas nunc pharetra. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href="/contact">Reach out to us</a> for more information.</p>
            </section>
        </div>
    );
};

export default About;
