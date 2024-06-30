// LandingRetire.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background: black;
  color: white;
`;

const TextSection = styled(motion.div)`
  max-width: 600px;
  text-align: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 10px;
  background: black;
  color: white;
`;

const Navigation = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const LinkButton = styled(Link)`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  &:hover {
    background-color: #218838;
  }
`;

const sections = [
  { id: 1, text: 'Welcome to Our Retirement Planning Service' },
  { id: 2, text: 'Build Your Future with Expert Guidance' },
  { id: 3, text: 'Secure Your Retirement with Us' },
];

const LandingRetire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? sections.length - 1 : prevIndex - 1));

  return (
    <Container>
      <AnimatePresence mode="wait">
        <TextSection
          key={sections[currentIndex].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {sections[currentIndex].text}
        </TextSection>
      </AnimatePresence>
      <Navigation>
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </Navigation>
      <LinkButton to="/retirement/signup">Get Started</LinkButton>
    </Container>
  );
};

export default LandingRetire;
