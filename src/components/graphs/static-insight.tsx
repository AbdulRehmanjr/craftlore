"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const GenderInsightGraph = () => {
  const labels = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  const data = {
    labels,
    datasets: [
      {
        data: [5000, 10000, 5000, 4700, 200, 8500, 8000, 500, 9500],
        backgroundColor: [
          "rgba(255, 182, 193, 0.7)", // Pink
          "rgba(135, 206, 235, 0.7)", // Light Blue
          "rgba(221, 160, 221, 0.7)", // Purple
          "rgba(255, 218, 185, 0.7)", // Peach
          "rgba(144, 238, 144, 0.7)", // Light Green
          "rgba(255, 218, 185, 0.7)", // Peach
          "rgba(255, 182, 193, 0.7)", // Pink
          "rgba(221, 160, 221, 0.7)", // Purple
          "rgba(135, 206, 235, 0.7)", // Light Blue
        ],
        borderColor: [
          "rgba(255, 182, 193, 1)",
          "rgba(135, 206, 235, 1)",
          "rgba(221, 160, 221, 1)",
          "rgba(255, 218, 185, 1)",
          "rgba(144, 238, 144, 1)",
          "rgba(255, 218, 185, 1)",
          "rgba(255, 182, 193, 1)",
          "rgba(221, 160, 221, 1)",
          "rgba(135, 206, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "CraftLore Gender Economics",
        padding: {
          top: 10,
          bottom: 30,
        },
        font: {
          size: 16,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          stepSize: 1000,
          font: {
            size: 12,
          },
        },
        max: 10000,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return (
    <div className="space-y-8">
      <div className="h-[400px]">
        <Bar data={data} options={options} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-lg bg-gray-50 p-6">
          <h3 className="text-lg font-medium text-gray-800">Categories A-D</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-200 text-sm font-medium text-gray-700">A</span>
              <p className="text-sm text-gray-600">Wage Disparity (Women) - 5,000</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 text-sm font-medium text-gray-700">B</span>
              <p className="text-sm text-gray-600">Wage Disparity (Men) - 10,000</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 text-sm font-medium text-gray-700">C</span>
              <p className="text-sm text-gray-600">Labor Market Participation (Women) - 5,000</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 text-sm font-medium text-gray-700">D</span>
              <p className="text-sm text-gray-600">Labor Market Participation (Men) - 4,700</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-lg bg-gray-50 p-6">
          <h3 className="text-lg font-medium text-gray-800">Categories E-I</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-200 text-sm font-medium text-gray-700">E</span>
              <p className="text-sm text-gray-600">Access to Resources (Women) - 200</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-200 text-sm font-medium text-gray-700">F</span>
              <p className="text-sm text-gray-600">Access to Resources (Men) - 8,500</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pink-200 text-sm font-medium text-gray-700">G</span>
              <p className="text-sm text-gray-600">Unpaid Work (Women Hours) - 8,000</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 text-sm font-medium text-gray-700">H</span>
              <p className="text-sm text-gray-600">Entrepreneurship (Women-owned Businesses) - 500</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 text-sm font-medium text-gray-700">I</span>
              <p className="text-sm text-gray-600">Entrepreneurship (Men-owned Businesses) - 9,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
