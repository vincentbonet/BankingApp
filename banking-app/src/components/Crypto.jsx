import React, { useEffect, useState } from 'react';
import './Crypto.css';

const Crypto = () => {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        fetch('BLAHBLAHBLAH')
            .then(response => response.json())
            .then(data => {
                setCryptos(data);
            })
            .catch(error => {
                console.error('Error fetching cryptos:', error);
            });
    }, []);

    return (
        <div>
            <h1>Popular Cryptocurrencies</h1>
            <ul>
                {cryptos.map(crypto => (
                    <li key={crypto.id}>
                        <h3>{crypto.name}</h3>
                        <p>{crypto.price}</p>
                        {/* Add more data fields here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Crypto;