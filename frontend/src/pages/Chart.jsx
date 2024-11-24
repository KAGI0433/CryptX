import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBitcoinData = async () => {
            try {
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180'
                );
                const data = await response.json();

                const dates = data.prices.map((price) => 
                    new Date(price[0]).toLocaleDateString('en-US')
                );
                const prices = data.prices.map((price) => price[1]);

                setChartData({
                    labels: dates,
                    datasets: [
                        {
                            label: 'BTC Price (USD)',
                            data: prices,
                            borderColor: '#007bff',
                            backgroundColor: 'rgba(0, 123, 255, 0.1)',
                            tension: 0.4,
                        },
                    ],
                });

                setLoading(false);
            } catch (error) {
                console.error('Error fetching Bitcoin data:', error);
            }
        };

        fetchBitcoinData();
    }, []);

    if (loading) {
        return <p>Loading chart...</p>;
    }

    return (
        <div>
            <h1>Bitcoin Price Chart (Last 6 Months)</h1>
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                        },
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Date',
                            },
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Price (USD)',
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default Chart;
