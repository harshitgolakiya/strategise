import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { bottom } from '@popperjs/core';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions for better typing
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
const ApexChart: React.FC = () => {
    const series = [76, 67, 61, 90, 66, 68, 78];
    const options: ApexOptions = {
        chart: {
            height: 550,
            width: 800,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 180,
                hollow: {
                    margin: 5,
                    size: '15%',
                    background: 'transparent',
                },
                track: {
                    show: true,
                    background: '#f2f2f2',
                    strokeWidth: '97%',
                    opacity: 0,
                    margin: 5,
                },
                dataLabels: {
                    show: false,
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical', // Set gradient direction to vertical
                shadeIntensity: 0.5,
                gradientToColors: ['#2f6eba'], // End color (darker)
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
                colorStops: [
                    { offset: 0, color: '#ebf2f8', opacity: 1 }, // Start color (lighter)
                    { offset: 100, color: '#4361EE', opacity: 1 }, // End color (darker)
                ],
            },
        },
        colors: ['#ebf2f8'], // Base color for gradient
        labels: ['Co-opetition and Networks', 'Disruptive Technologies', 'Threat of Substitutes', 'Future Competition', 'Buyer Power', 'Supplier Power', 'Industry Rivalry and Competition'],
        legend: {
            show: false,
        },
    };

    return (
        <div className="w-full bg-white rounded-3xl shadow">
            <div className="place-content-center w-full justify-center flex flex-col bg-white p-6 scale-90 ">
                <div className="flex w-[60%] text-center font-semibold text-lg justify-around">
                    <h1 className="ml-24">Driving Force</h1>
                    <h1 className="ml-24">Impact</h1>
                </div>
                <div className="place-content-center w-full justify-center flex">
                    <div style={{ position: 'relative', width: '800px', height: '600px' }}>
                        <ReactApexChart options={options} series={series} type="radialBar" height={600} width={800} />
                        <div
                            style={{
                                position: 'absolute',
                                top: 40,
                                left: 35,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10,
                                alignItems: 'flex-start',
                                pointerEvents: 'none',
                            }}
                        >
                            {options.labels?.map((label, index) => (
                                <div
                                    key={index}
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        textAlign: 'right',
                                        width: '45%',
                                    }}
                                >
                                    {label}:
                                </div>
                            ))}
                        </div>
                        {/* <div className="h-1 w-[40%] absolute rotate-[-40deg] right-[13%] top-[28%] bg-[#0f0808]    "></div> */}
                        <div className="h-1 w-[40%] absolute right-[10%] top-[50%] bg-[#fafafa]   "></div>
                        <div className="h-1 w-[40%] absolute right-[10%] top-[50%] bg-[#fafafa]  transform rotate-45 origin-left   "></div>
                        <div className="h-1 w-[40%] absolute right-[10%] top-[50%] bg-[#fafafa]  transform rotate-[-45deg] origin-left   "></div>
                        {/* <div className="h-1 w-[40%] absolute transform rotate-45 right-[11%] top-[60%] bg-[#e32aff]    "></div> */}
                    </div>
                    <div className="flex flex-col justify-between w-[28%] gap-4 font-semibold">
                        <p className="p-3 shadow-md rounded-md">
                            <span className="font-bold">ZERO to LOW IMPACT:</span> Driving forces in this segment will have minimal to no effect on the overall strategy. It may indicate that the
                            factor is not significant enough to warrant significant changes in the strategic approach.
                        </p>
                        <p className="p-3 shadow-md rounded-md">
                            <span className="font-bold">LOW to MODERATE IMPACT: </span>Driving forces in this segment will influence strategy to some extent but does not necessitate drastic changes.
                            It prompts the organization to make adjustments or minor adaptations to its strategic plans without fundamentally altering its direction or goals.
                        </p>

                        <p className="p-3 shadow-md rounded-md">
                            <span className="font-bold">MODERATE TO HIGH IMPACT: </span>Driving forces in this segment will significantly affect the organization's strategy, requiring substantial
                            adjustments or even a reevaluation of strategic priorities. The impact is substantial enough to demand attention and concerted efforts to address the challenges or
                            opportunities it presents.
                        </p>
                        <p className="p-3 shadow-md rounded-md">
                            <span className="font-bold">HIGH IMPACT:</span> Driving forces in the segment profoundly influence the organization's strategy, often necessitating a complete overhaul of
                            existing plans or the adoption of entirely new approaches. The impact is so significant that it can potentially reshape the organization's trajectory and competitive
                            position in the market.
                        </p>
                    </div>
                    <div className="place-content-center flex flex-col w-16 items-center text-center absolute left-[34%] bottom-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="230" viewBox="0 0 20 400">
                            <rect x="9" y="0" width="2" height="380" fill="#357EDD" />
                            <polygon points="0,380 20,380 10,400" fill="#357EDD" />
                        </svg>
                        <h6 className="font-bold">High</h6>
                    </div>
                    <div className="place-content-center flex flex-col w-16 items-center text-center absolute left-[34%] ">
                        <h6 className="font-bold">ZERO</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="230" viewBox="0 0 20 400">
                            <rect x="9" y="20" width="2" height="380" fill="#357EDD" />
                            <polygon points="0,20 20,20 10,0" fill="#357EDD" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
        <div className="panel rounded-3xl h-full mt-5" style={{ position: 'relative', zIndex: 1 }}>
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
            <div className="bg-white p-5 rounded-3xl">
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
            <div className='flex flex-col gap-5'>

            <RevenueChart />
            <ApexChart />
            <LevelTable />
            </div>
        </>
    );
};

export default LevelOfOffering;
