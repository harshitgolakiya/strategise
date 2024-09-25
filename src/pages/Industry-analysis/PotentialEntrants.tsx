import React from 'react';

// Define the types for props
interface PotentialEntrantsBoxProps {
    heading: string;
    options: string[];
}

const PotentialEntrantsBox: React.FC<PotentialEntrantsBoxProps> = (props) => {
    return (
        <div className="bg-white rounded-3xl px-4 py-5 flex flex-col gap-y-3 shadow">
            <h1 className="font-bold text-lg">{props.heading}</h1>
            <select className="px-3 py-2 border border-[#4361EE] text-[#4361EE] rounded-md gap-x-2 w-auto max-w-max focus:border-[#4361EE] focus:ring-0">
                {props.options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>
                <p className="font-extrabold">Rationale:</p>
                <p className="font-semibold">High availability of data-driven tools as substitutes.</p>
            </div>
            <div>
                <p className="font-extrabold">Action:</p>
                <p className="font-semibold">Diversify services by integrating intuitive and creative problem-solving approaches.</p>
            </div>
        </div>
    );
};

const PotentialEntrants: React.FC = () => {
    const heading = 'Number of Customers';
    const options = ['Standardised Approaches', 'High Costs', 'Lengthy Timelines', 'Hidden Fees'];

    return (
        <>
            <div className="mb-5">
                <h1 className="font-bold text-lg mb-5">Potential Entrants</h1>
                <p className="text-gray-500">What challenges would a new entrant face?</p>
            </div>
            <div className="sm:grid grid-cols-3 gap-5">
                <PotentialEntrantsBox heading={heading} options={options} />
                <PotentialEntrantsBox heading={heading} options={options} />
                <PotentialEntrantsBox heading={heading} options={options} />
            </div>
        </>
    );
};

export default PotentialEntrants;
