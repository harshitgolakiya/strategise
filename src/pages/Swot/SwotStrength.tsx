import React from 'react';

const SwotStrength = () => {
    return (
        <div>
            <div className="mb-5">
                <h1 className="font-bold text-lg mb-5">SWOT Analysis </h1>
                <p className="text-gray-500">
                    Identify and analyse the external driving forces that currently exist in 3D ACTIO industry, which will impact 3D ACTIO capabilities to achieve the mission of:
                    <br /> We are going to transform 500 companies with customer centric business strategies by the end of FY 2029, because we believe in unlocking the full potential of businesses and
                    their people through innovative strategies and actionable plans.
                </p>
            </div>
            <div className="">
                <div className="grid grid-cols-[auto,1fr,1fr] gap-4 mb-4">
                    <div className="w-[125px]  block"></div>
                    <div className="bg-gray-100 shadow p-3 rounded-2xl">
                        <h2 className="text-center font-bold text-lg">Strengths</h2>
                        <p className="text-center text-sm text-gray-600">(Internal, Positive)</p>
                    </div>
                    <div className="bg-gray-100 shadow p-3 rounded-2xl">
                        <h2 className="text-center font-bold text-lg">Weaknesses</h2>
                        <p className="text-center text-sm text-gray-600">(Internal, Negative)</p>
                    </div>
                </div>

                <div className="grid grid-cols-[auto,1fr] gap-4">
                    <div className="grid grid-rows-2 gap-4">
                        <div className="bg-gray-100 shadow rounded-2xl flex items-center justify-center px-1">
                            <div className="transform -rotate-90 whitespace-nowrap">
                                <h2 className="text-center font-bold text-lg">Opportunities</h2>
                                <p className="text-center text-xs text-gray-600">(External, Positive)</p>
                            </div>
                        </div>
                        <div className="bg-gray-100 shadow rounded-2xl flex items-center justify-center px-1">
                            <div className="transform -rotate-90 whitespace-nowrap">
                                <h2 className="text-center font-bold text-lg">Threats</h2>
                                <p className="text-center text-xs text-gray-600">(External, Negative)</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white px-4 py-12 rounded-lg shadow flex flex-col col-span-1 justify-between">
                            <div>
                                <h3 className="text-center text-blue-600 font-semibold text-lg mb-1">Strength-Opportunity Strategies</h3>
                                <h4 className="text-center text-blue-600 font-semibold">Attacking Strategies</h4>
                            </div>
                            <p className="text-center text-sm mt-4 text-gray-700">Which one of the core business strengths will be used to maximise the opportunities identified?</p>
                        </div>
                        <div className="bg-white px-4 py-12 rounded-lg shadow flex flex-col col-span-1 justify-between">
                            <div>
                                <h3 className="text-center text-blue-600 font-semibold text-lg mb-1">Strength-Opportunity Strategies</h3>
                                <h4 className="text-center text-blue-600 font-semibold">Defensive Strategies</h4>
                            </div>
                            <p className="text-center text-sm mt-4 text-gray-700">How can the strengths of the core business be used to minimise the threats identified?</p>
                        </div>
                        {/* </div> */}
                        {/* <div className="grid grid-rows-2 gap-4"> */}
                        <div className="bg-white px-4 py-12 rounded-lg shadow flex flex-col justify-between">
                            <div>
                                <h3 className="text-center text-blue-600 font-semibold text-lg mb-1">Weakness-Opportunity Strategies Build</h3>
                                <h4 className="text-center text-blue-600 font-semibold">Strengths for attacking strategy</h4>
                            </div>
                            <p className="text-center text-sm mt-4 text-gray-700">What actions(s) can you take to minimize the weaknesses of the core business using the opportunities identified?</p>
                        </div>
                        <div className="bg-white px-4 py-12 rounded-lg shadow flex flex-col justify-between">
                            <div>
                                <h3 className="text-center text-blue-600 font-semibold text-lg mb-1">Weakness-Opportunity Strategies Build</h3>
                                <h4 className="text-center text-blue-600 font-semibold">Strengths for defensive strategy</h4>
                            </div>
                            <p className="text-center text-sm mt-4 text-gray-700">How can the weaknesses of the core business be minimised to avoid the threats identified?</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[auto,1fr] gap-4">
                    <div className="w-[125px]  block"></div>
                    <div className="bg-purple-500 p-4 rounded-lg mt-4 w-full">
                        <p className="text-center text-white font-semibold">
                            Develop key strategic intentions/results to achieve the corporate mission. Include findings from Industry & PESTLE Analysis
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwotStrength;
