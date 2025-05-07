"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartContainer } from "~/components/common/chart";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const ProductionTrendGraph = () => {
  const [fontSize, setFontSize] = useState<number>(12);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 640;
      setFontSize(isSmallScreen ? 10 : 12);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    labels: [
      "2010-11",
      "2011-12",
      "2012-13",
      "2013-14",
      "2014-15",
      "2015-16",
      "2016-17",
      "2017-18",
      "2018-19",
      "2019-20",
      "2020-21",
      "2022-23",
      "2023-2024",
      "2025-2026(Projected)",
    ],
    datasets: [
      {
        label: "Total Production (in Cr)",
        data: [
          1911.77, 2103.7, 2151.68, 2950.43, 3136.34, 3277.15, 3825.98, 1935.04,
          1514.26, 1405.45, 811.769, 946.84, 1100.45, 1300.5,
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "hsl(212 99% 24%)",
        borderWidth: 2,
        fill: true,
        pointRadius: 3,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: "easeInOutBounce" as const,
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Total Production (in Crores ₹)",
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
      x: {
        title: {
          display: true,
          text: "Year",
          font: {
            size: fontSize,
          },
        },
        ticks: {
          font: {
            size: fontSize,
          },
          maxRotation: 45,
          minRotation: 45,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          boxWidth: 10,
          font: {
            size: fontSize,
          },
        },
      },
      tooltip: {
        titleFont: {
          size: fontSize,
        },
        bodyFont: {
          size: fontSize,
        },
      },
    },
  };

  return (
    <div className="w-full overflow-x-auto">
      <ChartContainer>
        <Line data={data} options={options} />
      </ChartContainer>
    </div>
  );
};
