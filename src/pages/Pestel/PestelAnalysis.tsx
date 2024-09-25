import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BubbleChartWithQuadrants = () => {
    const generateData = (count: number, yrange: { min: number; max: number }) => {
        const series = [];
        for (let i = 0; i < count; i++) {
            const x = Math.floor(Math.random() * (100 - -100 + 1)) + -100; // Random x value between -100 and 100
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min; // Random y value
            const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
            series.push([x, y, z]);
        }
        return series;
    };

    const bubbleChart: any = {
        series: [
            {
                name: 'Bubble1',
                data: generateData(20, { min: -100, max: 100 }), 
            },
            {
                name: 'Bubble2',
                data: generateData(20, { min: -100, max: 100 }),
            },
        ],
        options: {
            chart: {
                height: 500,
                type: 'bubble',
                zoom: {
                    enabled: false,
                },
            },
            colors: ['#4361ee', '#00ab55'],
            xaxis: {
                tickAmount: 12,
                min: -100, // Include negative values on the x-axis
                max: 100,
                lines: {
                    show: true,
                },
                labels: {
                    show: true,
                    formatter: (value: number) => (value < 0 ? 'Passive' : 'Active'), // Label based on negative/positive
                },
            },
            yaxis: {
                min: -100, // Include negative values on the y-axis
                max: 100,
                lines: {
                    show: true,
                },
                labels: {
                    show: true,
                    formatter: (value: number) => (value < 0 ? 'Reactive' : 'Active'), // Label based on negative/positive
                },
            },
            grid: {
                borderColor: '#e0e6ed',
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: true,
                    },
                },
            },
            annotations: {
                xaxis: [
                    {
                        x: 0, // Create a dividing line for positive/negative x-axis
                        borderColor: '#999',
                        label: {
                            text: 'Active/Passive Line',
                            style: {
                                color: '#333',
                                background: '#fff',
                            },
                        },
                    },
                ],
                yaxis: [
                    {
                        y: 0, // Create a dividing line for positive/negative y-axis
                        borderColor: '#999',
                        label: {
                            text: 'Active/Reactive Line',
                            style: {
                                color: '#333',
                                background: '#fff',
                            },
                        },
                    },
                ],
                regions: [
                    {
                        x: 0,
                        x2: 100,
                        y: 0,
                        y2: 100,
                        fillColor: '#ffcccc', // Active-Active quadrant with shading
                        opacity: 0.2,
                    },
                    {
                        x: -100,
                        x2: 0,
                        y: -100,
                        y2: 0,
                        fillColor: '#d0e6ff', // Passive-Reactive quadrant with different shading
                        opacity: 0.2,
                    },
                ],
            },
            dataLabels: {
                enabled: false,
            },
            tooltip: {
                enabled: true,
                shared: true,
                intersect: false,
                theme: 'light',
            },
            fill: {
                opacity: 0.85,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex justify-center items-center">
            <div className="w-full max-w-3xl">
                <h2 className="text-xl font-bold text-center mb-4 dark:text-white">Bubble Chart with Quadrants</h2>
                <ReactApexChart series={bubbleChart.series} options={bubbleChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bubble" height={500} />
            </div>
        </div>
    );
};


const PestelAnalysis = () => {
    return (
        <>
            <BubbleChartWithQuadrants />
            <table className="bg-white">
                <thead className="bg-gray-400">
                    <tr>
                        <th className="border">External Driving Factor</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr className="border">
                        <td className="border">
                            Regulatory Environment: Government policies and regulations impacting business operations, including data protection and labor laws. Ensuring compliance is critical to
                            avoid legal issues.
                        </td>
                        <td className="border">
                            <div className="flex">
                                <p>Regulatory Environment: </p>
                                <select name="" id="">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                        <td className="border">
                            <h3>3</h3>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default PestelAnalysis;