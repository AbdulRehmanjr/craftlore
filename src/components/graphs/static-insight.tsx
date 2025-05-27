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
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const GenderInsightGraph = () => {
  const [fontSize, setFontSize] = useState<number>(16);
  const [labelFontSize, setLabelFontSize] = useState<number>(12);
  const [tickFontSize, setTickFontSize] = useState<number>(11);
  const [barThickness, setBarThickness] = useState<number>(40);
  const [paddingBottom, setPaddingBottom] = useState<number>(30);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setFontSize(14);
        setLabelFontSize(10);
        setTickFontSize(9);
        setBarThickness(20);
        setPaddingBottom(15);
      } else if (width < 1024) {
        setFontSize(15);
        setLabelFontSize(11);
        setTickFontSize(10);
        setBarThickness(30);
        setPaddingBottom(20);
      } else {
        setFontSize(16);
        setLabelFontSize(12);
        setTickFontSize(11);
        setBarThickness(40);
        setPaddingBottom(30);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        barThickness: barThickness,
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
          bottom: paddingBottom,
        },
        font: {
          size: fontSize,
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
            size: labelFontSize,
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
            size: tickFontSize,
          },
        },
      },
    },
  };

  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
        <Bar data={data} options={options} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-2">
        <div className="space-y-3 sm:space-y-4 rounded-lg bg-gray-50 p-4 sm:p-5 md:p-6">
          <h3 className="text-base sm:text-lg font-medium text-gray-800">Categories A-D</h3>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-pink-200 text-xs sm:text-sm font-medium text-gray-700">A</span>
              <p className="text-xs sm:text-sm text-gray-600">Wage Disparity (Women) - 5,000</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-200 text-xs sm:text-sm font-medium text-gray-700">B</span>
              <p className="text-xs sm:text-sm text-gray-600">Wage Disparity (Men) - 10,000</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-purple-200 text-xs sm:text-sm font-medium text-gray-700">C</span>
              <p className="text-xs sm:text-sm text-gray-600">Labor Market Participation (Women) - 5,000</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-orange-200 text-xs sm:text-sm font-medium text-gray-700">D</span>
              <p className="text-xs sm:text-sm text-gray-600">Labor Market Participation (Men) - 4,700</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 sm:space-y-4 rounded-lg bg-gray-50 p-4 sm:p-5 md:p-6">
          <h3 className="text-base sm:text-lg font-medium text-gray-800">Categories E-I</h3>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-green-200 text-xs sm:text-sm font-medium text-gray-700">E</span>
              <p className="text-xs sm:text-sm text-gray-600">Access to Resources (Women) - 200</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-orange-200 text-xs sm:text-sm font-medium text-gray-700">F</span>
              <p className="text-xs sm:text-sm text-gray-600">Access to Resources (Men) - 8,500</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-pink-200 text-xs sm:text-sm font-medium text-gray-700">G</span>
              <p className="text-xs sm:text-sm text-gray-600">Unpaid Work (Women Hours) - 8,000</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-purple-200 text-xs sm:text-sm font-medium text-gray-700">H</span>
              <p className="text-xs sm:text-sm text-gray-600">Entrepreneurship (Women-owned Businesses) - 500</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-200 text-xs sm:text-sm font-medium text-gray-700">I</span>
              <p className="text-xs sm:text-sm text-gray-600">Entrepreneurship (Men-owned Businesses) - 9,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};