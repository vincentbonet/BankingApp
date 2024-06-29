// Portfolio.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Portfolio = () => {
  const [holdings, setHoldings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await fetch('https://api.example.com/holdings');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setHoldings(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>Error loading data: {error.message}</Error>;

  return (
    <PortfolioContainer>
      <Header>Your Portfolio</Header>
      <HoldingsTable>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Shares</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding, index) => (
            <tr key={index}>
              <td>{holding.asset}</td>
              <td>{holding.shares}</td>
              <td>${holding.currentValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </HoldingsTable>
    </PortfolioContainer>
  );
};

export default Portfolio;

// Styled components
const PortfolioContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const HoldingsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
  }
`;

const Loading = styled.div`
  text-align: center;
  padding: 20px;
`;

const Error = styled.div`
  text-align: center;
  padding: 20px;
  color: red;
`;
