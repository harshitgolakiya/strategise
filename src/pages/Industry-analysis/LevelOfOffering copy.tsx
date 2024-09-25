import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { bottom } from '@popperjs/core';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions for better typing
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart: React.FC = () => {
    const [series] = useState<number[]>([76, 67, 61, 90, 66, 68]);
    const [options] = useState<ApexOptions>({
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
                track: {
                    show: true,
                    background: '#f2f2f2',
                    strokeWidth: '97%',
                    opacity: 1,
                    margin: 5,
                },
                dataLabels: {
                    show: true,
                    name: {
                        offsetY: -5, // Adjusted to bring the label closer
                        show: true,
                        color: '#888',
                        fontSize: '16px', // Increased font size for better visibility
                    },
                    value: {
                        color: '#111',
                        fontSize: '22px', // Increased font size for the value
                        show: true,
                        offsetY: 5, // Adjusted value offset to display correctly
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#60A5FA', '#1E3A8A'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },
        labels: [
            'Industry Rivalry and Competition',
            'Supplier Power',
            'Buyer Power',
            'Future Competition',
            'Threat of Substitutes',
            'Disruptive Technologies',
            'Co-opetition and Networks',
            'Driving Force',
        ],
        colors: ['#93C5FD'], // Base color for the gradient
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        height: 320, // Adjusted height for smaller screens
                    },
                    legend: {
                        show: true,
                    },
                },
            },
        ],
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="radialBar" height={390} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};
