'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartContainer } from '~/components/common/chart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const HandiCraftGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeInOutBounce' as const
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Production (in Crores ₹)',
          font: {
            size: 14,
            weight: 'bold' as const
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Year',
          font: {
            size: 14,
            weight: 'bold' as const
          }
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 12,
          padding: 15,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1a1a1a',
        bodyColor: '#1a1a1a',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
        boxPadding: 4
      }
    }
  };

  const labels = [
    '2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24', '2024-25 (Projected)'
  ];

  // Professional color palette
  const colors = {
    carpet: { bg: 'rgba(0, 107, 164, 0.7)', border: 'rgba(0, 107, 164, 1)' },
    namdah: { bg: 'rgba(0, 150, 136, 0.7)', border: 'rgba(0, 150, 136, 1)' },
    crewel: { bg: 'rgba(121, 85, 72, 0.7)', border: 'rgba(121, 85, 72, 1)' },
    wood: { bg: 'rgba(156, 39, 176, 0.7)', border: 'rgba(156, 39, 176, 1)' },
    paper: { bg: 'rgba(255, 152, 0, 0.7)', border: 'rgba(255, 152, 0, 1)' },
    fur: { bg: 'rgba(96, 125, 139, 0.7)', border: 'rgba(96, 125, 139, 1)' },
    chain: { bg: 'rgba(233, 30, 99, 0.7)', border: 'rgba(233, 30, 99, 1)' },
    shawl: { bg: 'rgba(0, 77, 64, 0.7)', border: 'rgba(0, 77, 64, 1)' },
    other: { bg: 'rgba(63, 81, 181, 0.7)', border: 'rgba(63, 81, 181, 1)' },
    total: { bg: 'rgba(158, 158, 158, 0.7)', border: 'rgba(158, 158, 158, 1)' }
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Carpet',
        data: [392.92, 436.93, 329.52, 350.25, 302.45, 350.75, 400.92],
        backgroundColor: colors.carpet.bg,
        borderColor: colors.carpet.border,
        borderWidth: 1
      },
      {
        label: 'Namdah',
        data: [0.01, 0.460, 0.527, 0.65, 0.55, 0.85, 1.5],
        backgroundColor: colors.namdah.bg,
        borderColor: colors.namdah.border,
        borderWidth: 1
      },
      {
        label: 'Crewel',
        data: [330.87, 312.32, 182.68, 190.25, 180.24, 190.50, 200.00],
        backgroundColor: colors.crewel.bg,
        borderColor: colors.crewel.border,
        borderWidth: 1
      },
      {
        label: 'Wood Carving',
        data: [15.43, 12.78, 9.75, 10.15, 10.25, 11.75, 13.25],
        backgroundColor: colors.wood.bg,
        borderColor: colors.wood.border,
        borderWidth: 1
      },
      {
        label: 'Paper Mache',
        data: [14.85, 12.90, 15.92, 16.25, 17.21, 18.75, 20.56],
        backgroundColor: colors.paper.bg,
        borderColor: colors.paper.border,
        borderWidth: 1
      },
      {
        label: 'Fur & Leather',
        data: [0.70, 0.41, 0.25, 0.30, 0.15, 1.75, 3.5],
        backgroundColor: colors.fur.bg,
        borderColor: colors.fur.border,
        borderWidth: 1
      },
      {
        label: 'Chain Stitch',
        data: [125.24, 56.07, 6.24, 7.25, 0.02, 1.50, 3.0],
        backgroundColor: colors.chain.bg,
        borderColor: colors.chain.border,
        borderWidth: 1
      },
      {
        label: 'Woolen Shawl',
        data: [611.80, 413.12, 258.79, 300.25, 386.25, 395.50, 400.0],
        backgroundColor: colors.shawl.bg,
        borderColor: colors.shawl.border,
        borderWidth: 1
      },
      {
        label: 'Other Items',
        data: [11.22, 80.23, 4.046, 15.25, 24.86, 25.50, 28.97],
        backgroundColor: colors.other.bg,
        borderColor: colors.other.border,
        borderWidth: 1
      },
      {
        label: 'Total',
        data: [1514.26, 1405.45, 811.769, 900.25, 946.84, 1000.25, 1200.45],
        backgroundColor: colors.total.bg,
        borderColor: colors.total.border,
        borderWidth: 1
      }
    ]
  };

  return (
    <ChartContainer>
      <Bar options={options} data={data} />
    </ChartContainer>
  );
};

