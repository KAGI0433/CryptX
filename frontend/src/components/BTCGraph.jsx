// src/components/BTCGraph.jsx
import React, { useEffect, useState } from 'react';
import './Statistic.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BTCGraph = () => {
  const [btcData, setBtcData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBTCData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180'
        );
        setBtcData(response.data);
      } catch (error) {
        setError('Error fetching Bitcoin data');
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBTCData();
  }, []);

  if (error) {
    return <div>{error}</div>; // Show error message if the data fetch fails
  }

  if (!btcData) {
    return <div>Loading...</div>; // Show loading message while the data is being fetched
  }

  const prices = btcData.prices.map((price) => price[1]);
  const labels = btcData.prices.map((price) => new Date(price[0]).toLocaleDateString());

  const data = {
    labels: labels,
    datasets: [
      {
        data: prices,
        borderColor: '#2196f3',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return '$' + tooltipItem.raw.toLocaleString(); // Format the tooltip data with a dollar sign
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price (USD)',
        },
        ticks: {
          beginAtZero: false,
          stepSize: 5000,
          min: 0,
          max: Math.max(...prices) + 5000, // Dynamic max value based on the data
        },
      },
    },
  };

  return (
    <div className="statistic">
      <div className="heading">BTC Prices (Last 6 Months)</div>
      <div className="chart-container">
        <Line data={data} options={options} height={300} />
      </div>
    </div>
  );
};

export default BTCGraph;





