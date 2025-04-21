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
import { useState, useEffect } from "react";
import { Container } from "~/components/common/container";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const ProjectGraph = () => {
  const [thickness, setThickness] = useState<number>(40);
  const [fontSize, setFontSize] = useState<number>(20);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 640;
      setThickness(isSmallScreen ? 20 : 40);
      setFontSize(isSmallScreen ? 14 : 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
    datasets: [
      {
        label: "Project Cost ($)",
        data: [80000, 21000, 17000, 20000, 10000, 140000, 4000, 3700, 93000],
        backgroundColor: "hsl(212, 99%, 24%)",
        borderColor: "hsl(212, 99%, 24%)",
        borderWidth: 1,
        barThickness: thickness,
        maxBarThickness: thickness,
        barPercentage: 0.8,
        categoryPercentage: 0.8,
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
        text: "CraftLore Projects & Business Tools Cost Overview",
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
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Project Cost ($)",
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
      },
    },
  };

  return (
    <section className="col-span-12 mt-12 gap-4 bg-[#e5edf7] py-32">
      <Container className="grid gap-7">
        <div className="flex flex-col gap-4">
          <h2 className="text-center font-montserrat text-xl text-secondary sm:text-2xl lg:text-4xl">
            Craftlore Projects Overview
          </h2>
          <h2 className="text-center font-montserrat text-xl text-secondary sm:text-2xl lg:text-4xl">
            CraftLore Business Tools and Project Costs
          </h2>
        </div>

        <div className="relative h-[200px] overflow-x-auto md:h-[300px] lg:h-[400px] xl:h-[500px]">
          <Bar data={data} options={options} />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-lg bg-gray-50 p-6">
            <h3 className="text-lg font-medium text-gray-800">Categories A-D</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">A</span>
                <p className="text-sm text-gray-600">Craft Authentication Registry</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">B</span>
                <p className="text-sm text-gray-600">Craft Traceability Registry</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">C</span>
                <p className="text-sm text-gray-600">Craft Carbon Footprint Registry</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">D</span>
                <p className="text-sm text-gray-600">Craft Business Listing Registry</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded-lg bg-gray-50 p-6">
            <h3 className="text-lg font-medium text-gray-800">Categories E-I</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">E</span>
                <p className="text-sm text-gray-600">Craft Economic Monitoring System</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">F</span>
                <p className="text-sm text-gray-600">Blockchain-Powered Digital Authentication</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">G</span>
                <p className="text-sm text-gray-600">Craft Gender Registry</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">H</span>
                <p className="text-sm text-gray-600">Craft Employment Registry</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">I</span>
                <p className="text-sm text-gray-600">Craft Digital Marketing Platform</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
