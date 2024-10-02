'use client';

import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { IRootState } from '../../store';

interface Bubble {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    value: number;
}

const fixedData: Bubble[] = [
    { id: 1, x: -80, y: 70, size: 15, color: '#34D399', value: 12 },
    { id: 2, x: -40, y: 50, size: 20, color: '#60A5FA', value: 18 },
    { id: 3, x: 60, y: 80, size: 25, color: '#34D399', value: 22 },
    { id: 4, x: 30, y: 40, size: 18, color: '#60A5FA', value: 15 },
    { id: 5, x: -60, y: -30, size: 22, color: '#34D399', value: 20 },
    { id: 6, x: -20, y: -70, size: 16, color: '#60A5FA', value: 14 },
    { id: 7, x: 50, y: -50, size: 19, color: '#34D399', value: 17 },
    { id: 8, x: 80, y: -20, size: 23, color: '#60A5FA', value: 21 },
    { id: 9, x: 20, y: 60, size: 24, color: '#34D399', value: 19 },
    { id: 10, x: 70, y: 30, size: 17, color: '#60A5FA', value: 16 },
    { id: 11, x: 40, y: -60, size: 21, color: '#34D399', value: 13 },
    { id: 12, x: -70, y: 40, size: 14, color: '#60A5FA', value: 11 },
    { id: 13, x: -30, y: 20, size: 26, color: '#34D399', value: 23 },
    { id: 14, x: -10, y: -40, size: 27, color: '#60A5FA', value: 24 },
    { id: 15, x: 10, y: -80, size: 28, color: '#34D399', value: 25 },
    { id: 16, x: 30, y: -60, size: 29, color: '#60A5FA', value: 26 },
    { id: 17, x: 60, y: -30, size: 30, color: '#34D399', value: 27 },
    { id: 18, x: 90, y: 10, size: 31, color: '#60A5FA', value: 28 },
    { id: 19, x: 70, y: 50, size: 32, color: '#34D399', value: 29 },
];

function QuadrantBubbleChart() {
    const [hoveredBubble, setHoveredBubble] = useState<number | null>(null);
    const [width, setWidth] = useState<number>(600);
    const chartRef = useRef<HTMLDivElement>(null);
    const chartHeight = 600; // Fixed height
    const padding = 40;
    const gridLines = 10;

    const handleMouseEnter = useCallback((id: number) => {
        setHoveredBubble(id);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredBubble(null);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (chartRef.current) {
                setWidth(chartRef.current.offsetWidth); // Set the width based on container
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={chartRef} className="flex flex-col items-center p-4 w-full col-span-9 scale-90">
            <div className="flex justify-between w-full font-semibold">
                <p>
                    <span className="font-bold"> Active:</span> significant effect on other driving forces that impact the overall business activity.
                </p>
                <p>
                    <span className="font-bold"> Critical: </span> Generate high degree of activity and reactivity in overall dynamics of the business
                </p>
            </div>
            <div className="flex">
                <div className="-rotate-90 absolute top-[50%] -left-5">
                    <h1 className="font-bold mb-3">ACTIVE</h1>
                </div>
                <svg
                    width="100%" // Make it responsive
                    height={chartHeight}
                    viewBox={`0 0 ${width} ${chartHeight}`} // Set viewBox to control scaling
                    className="border border-[#4361EE] relative "
                >
                    {/* Background grid lines */}
                    {Array.from({ length: gridLines }).map((_, i) => (
                        <line
                            key={`grid-${i}`}
                            y1={(i * (chartHeight - 2 * padding)) / (gridLines - 1) + padding}
                            x2={width}
                            y2={(i * (chartHeight - 2 * padding)) / (gridLines - 1) + padding}
                            stroke="#e0e6ed"
                            strokeWidth="1"
                        />
                    ))}

                    {/* Background for top-right quadrant */}
                    <rect x={width / 2} y={0} width={width / 2} height={chartHeight / 2} fill="#FCA5A5" opacity={0.4} />

                    {/* Axes */}
                    <line y1={chartHeight / 2} x2={width} y2={chartHeight / 2} stroke="#4361EE" strokeWidth="1" />
                    <line x1={width / 2} x2={width / 2} y2={chartHeight} stroke="#4361EE" strokeWidth="1" />

                    {/* Bubbles */}
                    {fixedData.map((bubble) => {
                        const cx = ((bubble.x + 100) / 200) * (width - 2 * padding) + padding;
                        const cy = chartHeight - (((bubble.y + 100) / 200) * (chartHeight - 2 * padding) + padding);
                        return (
                            <g key={bubble.id}>
                                <circle
                                    cx={cx}
                                    cy={cy}
                                    r={bubble.size}
                                    fill={bubble.color}
                                    opacity={hoveredBubble === bubble.id ? 0.8 : 1}
                                    onMouseEnter={() => handleMouseEnter(bubble.id)}
                                    onMouseLeave={handleMouseLeave}
                                    className="transition-all duration-300 ease-in-out cursor-pointer"
                                />
                                {hoveredBubble === bubble.id && (
                                    <text x={cx} y={cy} textAnchor="middle" dy=".3em" fill="white" fontSize="10" fontWeight="bold" pointerEvents="none">
                                        {bubble.value}
                                    </text>
                                )}
                            </g>
                        );
                    })}
                </svg>
            </div>
            <div className="grid grid-cols-3 justify-between w-full font-semibold">
                <p>
                    <span className="font-bold"> sInert:</span> minor effect in overall dynamics of the business.
                </p>
                <p className="font-bold text-center">PASSIVE</p>
                <p className="text-right">
                    <span className="font-bold"> Reactive: </span> significantly affected by other driving forces impacting overall business activty
                </p>
            </div>
        </div>
    );
}

const drivingFactors = [
    'Regulatory Environment',
    'Trade Policies',
    'Political Stability',
    'Economic Growth',
    'Oil Prices',
    'Currency Exchange Rates',
    'Interest Rates',
    'Cultural Diversity',
    'Workforce Demographics',
    'Education and Skill Levels',
    'Digital Transformation',
    'Cybersecurity',
    'Data Protection Laws',
    'Intellectual Property Rights',
    'Labor Laws',
    'Sustainability Initiatives',
    'Climate Change Policies',
    'Resource Management',
    'Geopolitical Tensions',
    'AI and Automation',
];

const ChartSection = () => {
    return (
        <div className="px-5">
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <h1 className="text-lg font-extrabold mb-3 text-center">CROSS-IMPACT MATRIX CHART</h1>
                    <div className="bg-white shadow rounded-3xl  px-3 pt-2 pb-6">
                        <h1 className="text-lg font-semibold my-3">Driving Factors</h1>
                        <ul className="list-disc px-5 text-base flex flex-col gap-1">
                            {drivingFactors.map((factor, index) => (
                                <li key={index}>{factor}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <QuadrantBubbleChart />
            </div>
        </div>
    );
};

const RadarChart: React.FC = () => {
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);

    const radarChart = useMemo(
        () => ({
            series: [
                {
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20],
                },
            ],
            options: {
                chart: {
                    height: 700,
                    type: 'radar' as any,
                    zoom: {
                        enabled: false,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                colors: ['#4361ee'],
                xaxis: {
                    categories: ['High Political', 'High Economic', 'Weak Social', 'Moderate to High Technology', 'Moderate to High Legal', 'Moderate to High Environment'],
                    labels: {
                        style: {
                            colors: Array(6).fill('black'), // Set black for all labels regardless of theme
                            // fontSize: '12px',
                        },
                    },
                },
                plotOptions: {
                    radar: {
                        polygons: {
                            strokeColors: isDark ? '#191e3a' : '#E7515A',
                            connectorColors: isDark ? '#191e3a' : '#E7515A',
                        },
                    },
                },
                markers: {
                    size: 5, // Adjust the size of the markers (dots)
                    colors: ['#4361ee'], // Optional: set the color for the markers
                    // strokeColor: isDark ? '#191e3a' : '#E7515A', // Optional: change the stroke color
                    strokeWidth: 1, // Optional: set the border thickness around the markers
                },
                tooltip: {
                    theme: isDark ? 'dark' : 'light',
                },
            },
        }),
        [isDark]
    );

    return (
        <div className=" h-full w-full flex flex-col ">
            <h2 className="text-2xl font-bold mb-4">PESTLE: Profile & Analysis of Driving Factors</h2>
            <ReactApexChart
                series={radarChart.series}
                options={radarChart.options}
                className="rounded-lg  dark:bg-black  place-content-center mx-auto w-full text-black"
                type="radar"
                height={470}
            />
        </div>
    );
};

const RedarSection: React.FC = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-7">
            <div className="p-6 rounded-lg max-w-2xl">
                <h2 className="text-2xl font-bold mb-4">Using the findings</h2>
                <p className="mb-4 text-sm">
                    These findings should also be referred back to when updating the Business Model Canvas and business objectives, associating each factor as part of the business's revenue stream or
                    cost structure.
                </p>

                <div className="space-y-4">
                    {[
                        {
                            title: 'Critical Driving Factors',
                            color: 'red',
                            description:
                                'Those driving factors that are critical will affect your business strategy the most. Actions on how the company can work with the factors e.g. effective cost management, changes in governance and/or management systems should be considered.',
                        },
                        {
                            title: 'Active Driving Factors',
                            color: 'black',
                            description:
                                'Those driving factors that are active will significantly affect other driving factors. Consider some form of tracking system to monitor the behaviour of this driving factor and how it will affect other driving factors. Will it impact the other driving factors making them more active, or will it cause them to become more reactive, even inert?',
                        },
                        {
                            title: 'Reactive Driving Factors',
                            color: 'black',
                            description:
                                'The reactive driving factors will be significantly affected by other driving factors you have identified as important to your strategy. Not all the factors can be addressed at once, so consider focusing on those factors close to the Critical quadrant and what your business would need to do should they become more impactful.',
                        },
                        {
                            title: 'Inert Driving Factors',
                            color: 'black',
                            description:
                                'The inert driving factors will have a minor effect on the overall dynamics of your business as the strategy rolls out. This means they should be addressed. Those factors close to the other three (3) quadrants that can become more active should be monitored regularly.',
                        },
                    ].map((factor, index) => (
                        <div key={index} className="flex items-start space-x-2">
                            <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${factor.color === 'red' ? 'bg-red-500' : 'bg-black'}`}></div>
                            <div>
                                <h3 className={`font-semibold ${factor.color === 'red' ? 'text-red-500' : 'text-black'}`}>{factor.title}</h3>
                                <p className="text-sm">{factor.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-6">
                <RadarChart />
            </div>
        </div>
    );
};

const PestelAnalysis = () => {
    return (
        <>
            <div className="mb-5">
                <h1 className="font-bold text-lg mb-5">PESTLE Analysis</h1>
                <p className="text-gray-500">
                    Identify and analyse the external driving forces that currently exist in 3D ACTIO industry, which will impact 3D ACTIO capabilities to achieve the mission of:
                    <br /> We are going to transform 500 companies with customer centric business strategies by the end of FY 2029, because we believe in unlocking the full potential of businesses and
                    their people through innovative strategies and actionable plans.
                </p>
            </div>
            <ChartSection />
            <RedarSection />
        </>
    );
};

export default PestelAnalysis;
