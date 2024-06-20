import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import News from './News';
import Stocks from './Stocks';
import Crypto from './Crypto';
import Login from './Login';
import Register from './Register';


import './App.css';

const App = () => {
    const suggestions = ['Account Balance', 'Transfer Funds', 'Transaction History', 'Pay Bills', 'Find ATMs'];

    return (
        <Router>
            <div>
                <NavBar />
                <div className="content">
                    <Searchbar suggestions={suggestions} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/stocks' element={<Stocks />} />
                        <Route path='/crypto' element={<Crypto />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
