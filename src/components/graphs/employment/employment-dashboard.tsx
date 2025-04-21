'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, type ChartOptions, type ChartData } from 'chart.js';
import type { Scale, CoreScaleOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const EmploymentDashboard = () => {
    // Artisan Graph Data
    const artisanLabels = ['2020', '2021', '2022', '2023', '2024', '2025', '2026 (Projected)'];
    const artisanData: ChartData<'bar'> = {
        labels: artisanLabels,
        datasets: [
            {
                label: 'Total Artisans',
                backgroundColor: 'rgba(137, 211, 214, 0.7)',
                borderColor: 'rgba(137, 211, 214, 1)',
                borderWidth: 1,
                data: [290000, 285000, 296000, 310000, 320000, 330000, 340000]
            },
        ]
    };

    // Workforce Gender Data
    const genderLabels = ['Women', 'Men'];
    const genderData: ChartData<'bar'> = {
        labels: genderLabels,
        datasets: [
            {
                label: 'Percentage of Workforce',
                backgroundColor: 'rgba(183, 156, 251, 0.7)',
                borderColor: 'rgba(183, 156, 251, 1)',
                borderWidth: 1,
                data: [52, 48]
            },
        ]
    };

    // Workforce Area Data
    const areaLabels = ['Rural Artisans', 'Urban Artisans'];
    const areaData: ChartData<'bar'> = {
        labels: areaLabels,
        datasets: [
            {
                label: 'Percentage of Workforce',
                backgroundColor: 'rgba(245, 190, 136, 0.7)',
                borderColor: 'rgba(245, 190, 136, 1)',
                borderWidth: 1,
                data: [65, 35]
            },
        ]
    };

    const commonOptions: ChartOptions<'bar'> = {
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
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeOutBounce'
        }
    };

    const artisanOptions = {
        ...commonOptions,
        scales: {
            ...commonOptions.scales,
            y: {
                ...commonOptions.scales?.y,
                ticks: {
                    callback: function(this: Scale<CoreScaleOptions>, value: string | number) {
                        return Number(value).toLocaleString();
                    }
                }
            }
        }
    };

    const percentageOptions = {
        ...commonOptions,
        scales: {
            ...commonOptions.scales,
            y: {
                ...commonOptions.scales?.y,
                ticks: {
                    callback: function(this: Scale<CoreScaleOptions>, value: string | number) {
                        return Number(value) + '%';
                    }
                }
            }
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-full bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Artisan Population Trend (2020-2025)</h3>
                <div className="h-[300px]">
                    <Bar data={artisanData} options={artisanOptions} />
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Workforce Gender Distribution</h3>
                <div className="h-[300px]">
                    <Bar data={genderData} options={percentageOptions} />
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Workforce Area Distribution</h3>
                <div className="h-[300px]">
                    <Bar data={areaData} options={percentageOptions} />
                </div>
            </div>
        </div>
    );
}; 