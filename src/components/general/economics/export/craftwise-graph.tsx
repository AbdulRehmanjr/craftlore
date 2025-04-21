'use client'
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type ExportChartProps = {
    label: string;
    data: number[];
}
const ExportChart = ({ label, data }: ExportChartProps) => {
    const years = ['2018-19', '2019-20', '2020-21', '2021-22', '2022-23', '2023-24', '2024-25', '2025-26 (Projected)'];

    // Academic color palette
    const colors = {
        carpet: { bg: 'rgba(0, 90, 181, 0.7)', border: 'rgba(0, 90, 181, 1)' },      // Oxford Blue
        namdah: { bg: 'rgba(0, 150, 136, 0.7)', border: 'rgba(0, 150, 136, 1)' },    // Teal
        crewel: { bg: 'rgba(121, 85, 72, 0.7)', border: 'rgba(121, 85, 72, 1)' },    // Brown
        wood: { bg: 'rgba(156, 39, 176, 0.7)', border: 'rgba(156, 39, 176, 1)' },    // Purple
        paper: { bg: 'rgba(255, 152, 0, 0.7)', border: 'rgba(255, 152, 0, 1)' },     // Amber
        fur: { bg: 'rgba(96, 125, 139, 0.7)', border: 'rgba(96, 125, 139, 1)' },     // Blue Grey
        chain: { bg: 'rgba(233, 30, 99, 0.7)', border: 'rgba(233, 30, 99, 1)' },     // Pink
        shawl: { bg: 'rgba(0, 77, 64, 0.7)', border: 'rgba(0, 77, 64, 1)' }          // Dark Teal
    };

    const getColor = (label: string) => {
        if (label.includes('Carpet')) return colors.carpet;
        if (label.includes('Namdah')) return colors.namdah;
        if (label.includes('Crewel')) return colors.crewel;
        if (label.includes('Wood')) return colors.wood;
        if (label.includes('Paper')) return colors.paper;
        if (label.includes('Fur')) return colors.fur;
        if (label.includes('Chain')) return colors.chain;
        if (label.includes('Shawl')) return colors.shawl;
        return colors.carpet; // default
    };

    const color = getColor(label);

    const chartData = {
        labels: years,
        datasets: [{
            label: label,
            data: data,
            backgroundColor: color.bg,
            borderColor: color.border,
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Export Value (Crores ₹)',
                    font: {
                        size: 12,
                        weight: 'bold' as const
                    }
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    maxRotation: 45,
                    minRotation: 45
                }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeOutBounce' as const
        },
        responsive: true,
        maintainAspectRatio: false,
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

    return (
        <div className="w-full aspect-video">
            <Bar data={chartData} options={options} />
        </div>
    );
};


export const CraftExportDashboard = () => {
    const charts = [
        { 
            label: 'Carpet Export', 
            data: [353.63, 395.78, 299.56, 320.25, 287.56, 310.75, 350.92, 380.92]
        },
        { 
            label: 'Namdah Export', 
            data: [0.05, 0, 0.04, 0.05, 0.03, 0.05, 0.10, 0.15]
        },
        { 
            label: 'Crewel Export', 
            data: [231.61, 236.26, 140.05, 150.25, 110.14, 130.50, 150.00, 170.00]
        },
        { 
            label: 'Wood Carving Export', 
            data: [10.13, 9.47, 7.22, 8.15, 6.09, 7.75, 9.25, 10.25]
        },
        { 
            label: 'Paper Mache Export', 
            data: [11.07, 9.08, 13.27, 12.25, 10.04, 11.75, 13.56, 15.56]
        },
        { 
            label: 'Fur & Leather Export', 
            data: [2.16, 1.56, 2.18, 2.35, 2.25, 2.0, 1.50, 1.00]
        },
        { 
            label: 'Chain Stitch Export', 
            data: [120.04, 115.03, 110.05, 112.25, 100.04, 105.50, 110.00, 130.00]
        },
        { 
            label: 'Woolen Shawls Export', 
            data: [305.9, 271.62, 172.53, 200.25, 150.04, 175.50, 200.00, 230.00]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {charts.map((chart, index) => (
                <div key={index} className="w-full">
                    <ExportChart
                        label={chart.label}
                        data={chart.data}
                    />
                </div>
            ))}
        </div>
    );
};
