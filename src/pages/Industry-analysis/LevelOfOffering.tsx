import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { bottom } from '@popperjs/core';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions for better typing

interface ApexChartState {
    series: number[];
    options: ApexOptions; // Use ApexOptions for typing
}

class ApexChart extends React.Component<{}, ApexChartState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            series: [76, 67, 61, 90, 66, 68],
            options: {
                chart: {
                    height: 390,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 180,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                        },
                        dataLabels: {
                            name: {
                                show: true,
                            },
                            value: {
                                show: true,
                                fontSize: '16px',
                                formatter: (val: number) => `${val}`,
                            },
                        },
                    },
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal', // Adjusting to horizontal
                        gradientToColors: ['#60A5FA', '#1E3A8A'], // From light to dark blue
                        stops: [0, 100], // Define a two-point gradient (from start to end)
                    },
                },
                labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn', 'Skype', 'Whatsapp'],
                colors: ['#93C5FD'], // Base color for the gradient
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            legend: {
                                show: true,
                            },
                        },
                    },
                ],
            },
        };
    }

    render() {
        return (
            <div>
                <div id="chart">
                    <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="radialBar" // Explicitly specify the type as 'radialBar' here as well
                        height={390}
                    />
                </div>
                <div id="html-dist"></div>
            </div>
        );
    }
}

const RevenueChart = () => {
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass === 'rtl');

    const revenueChart: any = {
        series: [
            {
                name: '3D ACTIO',
                data: [1.5, 1.8, 1.6, 1.4, 1.7, 1.9, 1.5, 1.7, 1.8, 2.3, 2.5, 2.2, 2.1, 2.4, 2.2, 2.3, 2.5, 2.4],
            },
            {
                name: 'Competition',
                data: [2.0, 2.2, 1.9, 1.8, 2.1, 2.3, 2.5, 2.1, 2.4, 1.9, 1.7, 2.0, 1.8, 1.6, 1.9, 2.1, 2.2, 2.3],
            },
        ],
        options: {
            chart: {
                height: 650, // Increased height for more space
                type: 'line',
                fontFamily: 'Nunito, sans-serif',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: ['#4299e1', '#f56565'],
            markers: {
                size: 5,
                colors: ['#4299e1', '#f56565'],
                strokeColors: '#fff',
                strokeWidth: 2,
                hover: {
                    size: 7,
                },
            },
            labels: [
                'Unnecessary complexity',
                'Hidden fees',
                'Lengthy timelines',
                'One-Size-Fit-All-Solution',
                'Rigid Structures',
                'Over Reliance on Data',
                'High Costs',
                'Formality in interactions',
                'Standardised Approaches',
                'Client Engagement',
                'Transparency',
                'Focus on Outcomes',
                'Continuous Improvement',
                'Holistic Support',
                'Innovation Hubs',
                'Real-Time Solutions',
                'Community Building',
                'AI-Driven Insights',
            ],
            xaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    rotate: -90, // Keep rotation for readability
                    style: {
                        fontSize: '12px',
                    },
                    offsetX: isRtl ? 2 : 0,
                    offsetY: 0, // Adjust this value to move labels down if needed
                    show: true, // Ensure labels are shown
                },
            },
            yaxis: {
                labels: {
                    show: false, // Hide labels on y-axis
                },
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#e0e6ed',
                strokeDashArray: 5,
                padding: {
                    left: 10, // Increase left padding
                    right: 10, // Increase right padding
                    bottom: 40, // Increase bottom padding for better label visibility
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '14px',
            },
            tooltip: {
                x: {
                    formatter: (val: any) => `Factor: ${val}`,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.1,
                    stops: [0, 90, 100],
                },
            },
        },
    };

    return (
        <div className="panel h-full mt-5" style={{ position: 'relative', zIndex: 1 }}>
            <div className="flex items-center justify-between dark:text-white-light mb-5">
                <h5 className="font-semibold text-lg">Level of Offering</h5>
            </div>
            <div id="revenueChart" style={{ position: 'relative', zIndex: 999, marginBottom: 20 }}>
                <ReactApexChart series={revenueChart.series} options={revenueChart.options} type="area" height={350} />
            </div>
            <div className="flex justify-between text-sm font-medium mt-4 z-10">
                <span>Eliminate</span>
                <span>Reduce</span>
                <span>Raise</span>
                <span>Create</span>
            </div>
            <div className="text-center text-sm font-medium mt-2">Competing Factors</div>
        </div>
    );
};

const LevelTable = () => {
    return (
        <>
            <div className="bg-white p-5 rounded-lg mt-5">
                <table className="w-full">
                    <thead className="bg-[#4361EE80]">
                        <tr className="bg-[#4361EE80]">
                            <th className="px-4 py-2 bg-[#4361ee33] rounded-l-md">Characteristics</th>
                            <th className="px-4 py-2 bg-[#4361ee33]">Value</th>
                            <th className="px-4 py-2 bg-[#4361ee33]">Cluster Characteristics</th>
                            <th className="px-4 py-2 bg-[#4361ee33]">3d-ACTION</th>
                            <th className="px-4 py-2 bg-[#4361ee33] rounded-r-md">Competition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=" px-4 py-2">Unnecessary complexity: Simplify processes and avoid jargon to make consulting accessible and understandable.</td>
                            <td className=" px-4 py-2">Eliminate</td>
                            <td className=" px-4 py-2">Unnecessary complexity</td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" px-4 py-2">Unnecessary complexity: Simplify processes and avoid jargon to make consulting accessible and understandable.</td>
                            <td className=" px-4 py-2">Eliminate</td>
                            <td className=" px-4 py-2">Unnecessary complexity</td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" px-4 py-2">Unnecessary complexity: Simplify processes and avoid jargon to make consulting accessible and understandable.</td>
                            <td className=" px-4 py-2">Eliminate</td>
                            <td className=" px-4 py-2">Unnecessary complexity</td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" px-4 py-2">Unnecessary complexity: Simplify processes and avoid jargon to make consulting accessible and understandable.</td>
                            <td className=" px-4 py-2">Eliminate</td>
                            <td className=" px-4 py-2">Unnecessary complexity</td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" px-4 py-2">Unnecessary complexity: Simplify processes and avoid jargon to make consulting accessible and understandable.</td>
                            <td className=" px-4 py-2">Eliminate</td>
                            <td className=" px-4 py-2">Unnecessary complexity</td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" px-4 py-2">Unnecessary complexity: Simplify processes and avoid jargon to make consulting accessible and understandable.</td>
                            <td className=" px-4 py-2">Eliminate</td>
                            <td className=" px-4 py-2">Unnecessary complexity</td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" px-4 py-2">Unnecessary complexity: Simplify processes and avoid jargon to make consulting accessible and understandable.</td>
                            <td className=" px-4 py-2">Eliminate</td>
                            <td className=" px-4 py-2">Unnecessary complexity</td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" px-4 py-2">Unnecessary complexity: Simplify processes and avoid jargon to make consulting accessible and understandable.</td>
                            <td className=" px-4 py-2">Eliminate</td>
                            <td className=" px-4 py-2">Unnecessary complexity</td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                            <td className=" px-4 py-2">
                                <div className="py-2 px-4 bg-gray-500 text-white text-center rounded-md">3</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

const LevelOfOffering = () => {
    return (
        <>
            <div>
                <h1 className="font-bold text-lg mb-5">Industry Analysis based on its mission to:</h1>
                <p className="text-gray-500">
                    We are going to transform 500 companies with customer centric business strategies by the end of FY 2029, because we believe in unlocking the full potential of businesses and their
                    people through innovative strategies and actionable plans.
                </p>
            </div>
            <RevenueChart />
            <ApexChart />
            <LevelTable />
        </>
    );
};

export default LevelOfOffering;
