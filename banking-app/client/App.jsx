import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Portfolio from './components/Portfolio'
import Retirement from './components/Retirement';
import LandingRetire from './components/LandingRetire';
import Stocks from './components/Stocks';
import Crypto from './components/Crypto';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

import './App.css';

const App = () => {
    const [loginModalOpened, setLoginModalOpened] = useState(false);
    const [registerModalOpened, setRegisterModalOpened] = useState(false);

    const openRegisterModal = () => setRegisterModalOpened(true);
    const closeRegisterModal = () => setRegisterModalOpened(false);

    const openLoginModal = () => setLoginModalOpened(true);
    const closeLoginModal = () => setLoginModalOpened(false);

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Router>
                <div className="app-container">
                    <NavBar openLoginModal={openLoginModal} openRegisterModal={openRegisterModal} />
                    <div className="content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/news' element={<News />} />
                            <Route path='/stocks' element={<Stocks />} />
                            <Route path='/crypto' element={<Crypto />} />
                            <Route path='/account' element={<Portfolio />}/>
                            <Route path='/retirement' element={<LandingRetire />} />
                            <Route path="/retirement/signup" element={<Retirement />} />
                        </Routes>
                    </div>
                    <Footer />
                    <LoginModal opened={loginModalOpened} onClose={closeLoginModal} />
                    <RegisterModal opened={registerModalOpened} onClose={closeRegisterModal} />
                </div>
            </Router>
        </MantineProvider>
    );
};

export default App;
