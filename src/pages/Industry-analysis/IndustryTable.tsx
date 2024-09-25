import React from 'react';

interface TableRow {
    keyConsiderations: string;
    keyFactor: string;
    rationaleAndAction: string;
    impactOn3DACTIO: number;
    impactOnIndustry: number;
}

interface CompetitionTableProps {
    heading: string;
    tableData: TableRow[];
}

const CompetitionTable: React.FC<CompetitionTableProps> = ({ heading, tableData }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-3xl">
            <h2 className="text-xl font-bold p-3 bg-[#4361ee33] rounded-t-md">{heading}</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead className="industry-head ">
                        <tr>
                            <th className="p-2 text-left font-semibold rounded-bl-md">Key Considerations</th>
                            <th className="p-2 text-left font-semibold">Key Factor</th>
                            <th className="p-2 text-left font-semibold">Rationale and Action</th>
                            <th className="p-2 text-center font-semibold">Impact on 3D-ACTIO</th>
                            <th className="p-2 text-center font-semibold rounded-br-lg">Impact on Industry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index} className="bg-white">
                                <td className="border-b p-2">{row.keyConsiderations}</td>
                                <td className="border-b p-2">{row.keyFactor}</td>
                                <td className="border-b p-2 whitespace-pre-line">{row.rationaleAndAction}</td>
                                <td className="border-b">
                                    <div className="flex justify-center">
                                        <select
                                            value={row.impactOn3DACTIO}
                                            className="px-4 py-2 rounded bg-[#17AB06] border outline-none text-white border-gray-300"
                                            onChange={(e) => console.log(e.target.value)} // Optional: Add state update here
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                        </select>
                                    </div>
                                </td>
                                <td className="border-b">
                                    <div className="flex justify-center">
                                        <select
                                            value={row.impactOnIndustry}
                                            className="px-4 py-2 rounded bg-[#EA6161] border outline-none text-white border-gray-300"
                                            onChange={(e) => console.log(e.target.value)} // Optional: Add state update here
                                        >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const CurrentCompetition: React.FC = () => {
    const tableData: TableRow[] = [
        {
            keyConsiderations: 'Number of substitute products available',
            keyFactor: 'Over-Reliance on Data',
            rationaleAndAction: 'High availability of data-driven tools as substitutes.\nAction: Diversify services by integrating intuitive and creative problem-solving approaches.',
            impactOn3DACTIO: 2,
            impactOnIndustry: 2,
        },
        {
            keyConsiderations: 'Market Penetration',
            keyFactor: 'Lack of innovation',
            rationaleAndAction: 'Low market penetration due to competitors offering more innovative solutions.\nAction: Invest in R&D for product differentiation.',
            impactOn3DACTIO: 3,
            impactOnIndustry: 1,
        },
    ];

    return (
        <div>
            <CompetitionTable heading="Current Competition" tableData={tableData} />
        </div>
    );
};

const BuyerPower: React.FC = () => {
    const tableData: TableRow[] = [
        {
            keyConsiderations: 'Number of substitute products available',
            keyFactor: 'Over-Reliance on Data',
            rationaleAndAction: 'High availability of data-driven tools as substitutes.\nAction: Diversify services by integrating intuitive and creative problem-solving approaches.',
            impactOn3DACTIO: 2,
            impactOnIndustry: 2,
        },
        {
            keyConsiderations: 'Market Penetration',
            keyFactor: 'Lack of innovation',
            rationaleAndAction: 'Limited innovation in the industry.\nAction: Embrace innovation by incorporating cutting-edge technologies and creative problem-solving approaches.',
            impactOn3DACTIO: 2,
            impactOnIndustry: 2,
        },
    ];

    return (
        <div>
            <CompetitionTable heading="Buyer Power" tableData={tableData} />
        </div>
    );
};

const SupplierPower: React.FC = () => {
    const tableData: TableRow[] = [
        {
            keyConsiderations: 'Number of substitute products available',
            keyFactor: 'Over-Reliance on Data',
            rationaleAndAction: 'High availability of data-driven tools as substitutes.\nAction: Diversify services by integrating intuitive and creative problem-solving approaches.',
            impactOn3DACTIO: 2,
            impactOnIndustry: 2,
        },
        {
            keyConsiderations: 'Market Penetration',
            keyFactor: 'Lack of innovation',
            rationaleAndAction: 'Limited innovation in the industry.\nAction: Embrace innovation by incorporating cutting-edge technologies and creative problem-solving approaches.',
            impactOn3DACTIO: 2,
            impactOnIndustry: 2,
        },
    ];

    return (
        <div>
            <CompetitionTable heading="Supplier Power" tableData={tableData} />
        </div>
    );
};

const PotentialEntrants: React.FC = () => {
    const tableData: TableRow[] = [
        {
            keyConsiderations: 'Number of substitute products available',
            keyFactor: 'Over-Reliance on Data',
            rationaleAndAction: 'High availability of data-driven tools as substitutes.\nAction: Diversify services by integrating intuitive and creative problem-solving approaches.',
            impactOn3DACTIO: 2,
            impactOnIndustry: 2,
        },
        {
            keyConsiderations: 'Market Penetration',
            keyFactor: 'Lack of innovation',
            rationaleAndAction: 'Limited innovation in the industry.\nAction: Embrace innovation by incorporating cutting-edge technologies and creative problem-solving approaches.',
            impactOn3DACTIO: 2,
            impactOnIndustry: 2,
        },
    ];

    return (
        <div>
            <CompetitionTable heading="Potential Entrants" tableData={tableData} />
        </div>
    );
};
const ThreatOfSubstitute: React.FC = () => {
    const tableData: TableRow[] = [
        {
            keyConsiderations: 'Number of substitute products available',
            keyFactor: 'Over-Reliance on Data',
            rationaleAndAction: 'High availability of data-driven tools as substitutes.\nAction: Diversify services by integrating intuitive and creative problem-solving approaches.',
            impactOn3DACTIO: 2,
            impactOnIndustry: 2,
        },
        {
            keyConsiderations: 'Market Penetration',
            keyFactor: 'Lack of innovation',
            rationaleAndAction: 'Limited innovation in the industry.\nAction: Embrace innovation by incorporating cutting-edge technologies and creative problem-solving approaches.',
            impactOn3DACTIO: 2,
            impactOnIndustry: 2,
        },
    ];

    return (
        <div>
            <CompetitionTable heading="Threat of Substitute" tableData={tableData} />
             
        </div>
    );
};
const IndustryTable: React.FC = () => {
    return (
        <>
            <div className='flex flex-col gap-4 mb-5'>
                <h1 className='text-lg font-bold'>Industry Analysis based on its mission to:</h1>
                <p className='text-gray-500'>
                    We are going to transform 500 companies with customer centric business strategies by the end of FY 2029, because we believe in unlocking the full potential of businesses and their
                    people through innovative strategies and actionable plans.
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <CurrentCompetition />
                <BuyerPower />
                <SupplierPower />
                <PotentialEntrants />
                <ThreatOfSubstitute />
            </div>
        </>
    );
};

export default IndustryTable;
