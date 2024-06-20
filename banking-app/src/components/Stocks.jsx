import React, { useState, useEffect } from 'react';

const Stocks = () => {
    const [stocks, setStocks] = useState([]); // Initialize stocks state as an empty array

    useEffect(() => {
        // Fetch stocks data from an API
        const fetchStocks = async () => {
            try {
                const response = await fetch('some/api/endpoint/stocks');
                const data = await response.json();
                setStocks(data);
            } catch (error) {
                console.error('Error fetching stocks:', error);
            }
        };

        fetchStocks();
    }, []);

    return (
        <div>
            <h1>Stocks</h1>
            {stocks.map((stock) => (
                <div key={stock.id}>
                    <h2>{stock.name}</h2>
                    <p>Price: {stock.price}</p>
                    <p>Change: {stock.change}</p>
                </div>
            ))}
        </div>
    );
};

export default Stocks;