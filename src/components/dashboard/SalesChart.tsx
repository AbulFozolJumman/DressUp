"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Helper function to generate the last 7 days' dates
const getLast7Days = () => {
  const daysArray = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    daysArray.push(
      date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    );
  }
  return daysArray;
};

const SalesChart = () => {
  // Dynamically generate the last 7 days' dates
  const last7Days = getLast7Days();

  // Static sales data for the last 7 days
  const data = {
    labels: last7Days, // Use dynamically generated labels
    datasets: [
      {
        label: "Sales (in USD)",
        data: [150, 200, 170, 220, 300, 280, 250], // Example static sales data
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Color of the bars
        borderColor: "rgba(75, 192, 192, 1)", // Border color of the bars
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Over the Last 7 Days",
        font: {
          size: 30,
        },
        color: "#093045",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts from zero
        ticks: {
          callback: (value: string | number) => {
            if (typeof value === "number") {
              return `$${value}`; // Format Y-axis as currency for numbers
            }
            return value; // Return as is for strings
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesChart;
