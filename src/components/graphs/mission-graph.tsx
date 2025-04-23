"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Container } from "~/components/common/container";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const MissionGraph = () => {
  const [thickness, setThickness] = useState<number>(40);
  const [fontSize, setFontSize] = useState<number>(20);
  const [barPercentage, setBarPercentage] = useState<number>(0.8);
  const [categoryPercentage, setCategoryPercentage] = useState<number>(0.8);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 640;
      setThickness(isSmallScreen ? 5 : 40);
      setFontSize(isSmallScreen ? 12 : 20);
      setBarPercentage(isSmallScreen ? 0.3 : 0.8);
      setCategoryPercentage(isSmallScreen ? 0.3 : 0.8);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    datasets: [
      {
        label: "Mission Alignment Progress (%)",
        data: [80, 70, 55, 75, 70, 60, 85, 75, 65, 90, 85, 70, 80],
        backgroundColor: "hsl(212, 99%, 24%)",
        barThickness: thickness,
        maxBarThickness: thickness,
        barPercentage: barPercentage,
        categoryPercentage: categoryPercentage,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          font: {
            size: fontSize,
          },
        },
      },
      title: {
        display: true,
        text: "Craftlore Mission Alignment Progress",
        color: "#000",
        font: {
          size: fontSize,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          font: {
            size: fontSize,
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Progress (%)",
          color: "#000",
          font: {
            size: fontSize,
          },
        },
        ticks: {
          font: {
            size: fontSize,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <section className="col-span-12 mt-12 gap-4 bg-[#e5edf7] py-16 sm:py-24 md:py-32">
      <Container className="grid gap-7">
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-montserrat text-xl text-secondary sm:text-2xl lg:text-4xl">
            Craftlore Missions
          </h2>
          <h2 className="text-center font-montserrat text-xl text-secondary sm:text-2xl lg:text-4xl">
            Where Do We Stand Now?
          </h2>
        </div>

        <div className="relative h-[300px] overflow-x-auto sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Bar data={data} options={options} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 rounded-lg bg-gray-50 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-800">Categories A-D</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">A</span>
                <p className="text-xs sm:text-sm text-gray-600">Biggest Craft Repository</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">B</span>
                <p className="text-xs sm:text-sm text-gray-600">Changing the Narrative to Science</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">C</span>
                <p className="text-xs sm:text-sm text-gray-600">Universal Craft Price Model</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">D</span>
                <p className="text-xs sm:text-sm text-gray-600">Developing Kashmir as a Brand</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-lg bg-gray-50 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-800">Categories E-H</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">E</span>
                <p className="text-xs sm:text-sm text-gray-600">Mitigating Vulnerabilities</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">F</span>
                <p className="text-xs sm:text-sm text-gray-600">Craft Economics Monitoring</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">G</span>
                <p className="text-xs sm:text-sm text-gray-600">Education & Awareness</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">H</span>
                <p className="text-xs sm:text-sm text-gray-600">Counterfeit Detection</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-lg bg-gray-50 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-800">Categories I-M</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">I</span>
                <p className="text-xs sm:text-sm text-gray-600">Supply Chain Optimization</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">J</span>
                <p className="text-xs sm:text-sm text-gray-600">Blockchain Authentication</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">K</span>
                <p className="text-xs sm:text-sm text-gray-600">Sustainable Leadership</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">L</span>
                <p className="text-xs sm:text-sm text-gray-600">Big Data Platform</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-primary text-xs sm:text-sm font-medium text-white">M</span>
                <p className="text-xs sm:text-sm text-gray-600">Tech-Powered Insights</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
