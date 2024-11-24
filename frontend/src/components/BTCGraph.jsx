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

  const rawPrices = btcData.prices.map((price) => price[1]);
  const maxPrice = Math.max(...rawPrices);
  const minPrice = Math.min(...rawPrices);

  // Normalize prices to fit within the range of 0 to 800
  const normalizedPrices = rawPrices.map((price) =>
    ((price - minPrice) / (maxPrice - minPrice)) * 800
  );

  const rawLabels = btcData.prices.map((price) => new Date(price[0]));

  // Filter data to show only the first day of each month
  const filteredData = rawLabels.reduce(
    (acc, date, index) => {
      if (date.getDate() === 1) {
        acc.labels.push(
          date.toLocaleDateString('en-US', { month: 'short' })
        );
        acc.prices.push(normalizedPrices[index]);
      }
      return acc;
    },
    { labels: [], prices: [] }
  );

  const data = {
    labels: filteredData.labels,
    datasets: [
      {
        label: 'BTC Price',
        data: filteredData.prices,
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
            // Recalculate original price from normalized value
            const originalPrice =
              (tooltipItem.raw / 800) * (maxPrice - minPrice) + minPrice;
            return `$${originalPrice.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          
        },
      },
      y: {
        title: {
          display: true,
          
        },
        ticks: {
          callback: function (value) {
            const allowedTicks = [800, 600, 400, 200, 0];
            if (allowedTicks.includes(value)) {
              return `$${value}`;
            }
            return null; // Hide other ticks
          },
          stepSize: 200, // Step size for guidance
          min: 0, // Minimum value on the y-axis
          max: 800, // Maximum value on the y-axis
        },
      },
    },
  };

  return (
    <div className="statistic">
      <div className="heading">BTC Prices</div>
      <div className="chart-container">
        <Line data={data} options={options} height={300} />
      </div>
    </div>
  );
};

export default BTCGraph;










