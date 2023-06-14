'use client'
import { useState, useEffect } from 'react'

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartDataProps {
  labels: string[];
  datasets: ChartDataset[];
}

interface ChartDataset {
  label: string;
  data: string[];
  borderColor: string;
  backgroundColor: string;
}

export function BarChart() {

  const [chartData, setChartData] = useState<ChartDataProps>({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        borderColor: '',
        backgroundColor: '',
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales $',
          data: ['2739', '2345', '2345', '2345', '2345', '2345', '2345'],
          borderColor: 'rgb(53,162, 235)',
          backgroundColor: 'rgba(53,162, 235,0.4)',
        }
      ]

    })

    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenues',
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    })
  }, [])

  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} options={chartOptions} />
      </div>
  )
}
