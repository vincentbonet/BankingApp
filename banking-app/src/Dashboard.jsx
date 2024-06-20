import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './Dashboard.css'

Chart.register(...registerables);

const Dashboard = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Stock Price',
        data: data.map(item => item.price),
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y.toFixed(2)}`,
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default Dashboard;
