'use client'

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export const MissionGraph = () => {
    const data = {
        labels: ['A', "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
        datasets: [
            {
                label: 'Mission Alignment Progress (%)',
                data: [80, 70, 55, 75, 70, 60, 85, 75, 65, 90, 85, 70, 80], // Replace with actual values
                backgroundColor: 'hsl(212 99% 24%)',
                barThickness: 30,
                maxBarThickness: 40,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
            },
            title: {
                display: true,
                text: 'CraftLore Mission Alignment Progress',
            },
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Progress (%)',
                },
            },
        },
    };

    return (
        <section className="col-span-12 bg-[#e5edf7]  gap-4 mt-12 pt-60 pb-32">
            <div className="container">
                <div className="container grid  gap-7 ">
                    <h2 className='text-4xl font-montserrat text-secondary text-center'>Craftlore Missions</h2>
                    <h2 className='text-4xl font-montserrat text-secondary text-center'>Where Do We Stand Now?</h2>
                    <div className='container'>
                        <Bar data={data} options={options} />
                    </div>
                    <div className="container grid grid-cols-3 gap-2">
                        <div className='border border-black rounded-md p-4'>
                            <p>A. Biggest Craft Repository</p>
                            <p>B. Changing the Narrative to Science</p>
                            <p>C. Universal Craft Price Model</p>
                            <p>D. Developing Kashmir as a Brand</p>
                        </div>
                        <div className='border border-black rounded-md p-4'>
                            <p>E. Mitigating Vulnerabilities</p>
                            <p>F. Craft Economics Monitoring</p>
                            <p>G. Education & Awareness</p>
                            <p>H. Counterfeit Detection</p>
                        </div>
                        <div className='border border-black rounded-md p-4'>
                            <p>I. Supply Chain Optimization</p>
                            <p>J. Blockchain Authentication</p>
                            <p>K. Sustainable Leadership</p>
                            <p>L. Big Data Platform</p>
                            <p>M. Tech-Powered Insights</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

