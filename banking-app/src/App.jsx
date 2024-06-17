import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { Routes as Switch } from 'react-router-dom';
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
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/news' component={News} />
                <Route path='/stocks' component={Stocks} />
                <Route path='/crypto' component={Crypto} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </Switch>
        </Router>
    );
};

export default App;