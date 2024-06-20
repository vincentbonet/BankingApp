import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Stocks from './components/Stocks';
import Crypto from './components/Crypto';
import Login from './components/Login';
import Register from './components/Register';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';


import './App.css';

const App = () => {
    const suggestions = ['Apple', 'Microsoft', 'Google'];

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
                <Footer />
            </div>
        </Router>
    );
};

export default App;
