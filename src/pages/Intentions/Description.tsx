// src/components/StrategicIntentionsTable.tsx
import React, { useState } from 'react';

const tableData = [
    {
        id: 1,
        intention: 'Corporate DNA',
        description: "Clarifying and reaffirming the company's mission and vision statements, which define its purpose and aspirations.",
    },
    {
        id: 2,
        intention: 'Market Expansion',
        description: 'Exploring opportunities to enter new markets, either geographically or by targeting different customer segments.',
    },
    {
        id: 3,
        intention: 'Product or Service Innovation',
        description: 'Focusing on developing new products or services, or improving existing ones, to meet evolving customer needs and stay competitive.',
    },
    {
        id: 4,
        intention: 'Market Positioning',
        description: 'Determining how the company wants to position itself in the market relative to competitors, such as being a low-cost provider, a premium brand, or a leader in innovation.',
    },
    {
        id: 5,
        intention: 'Customer Experience',
        description: 'Enhancing the overall customer experience through better service, convenience, personalization, or other means.',
    },
    {
        id: 6,
        intention: 'Digital Transformation',
        description: 'Embracing technology and digital tools to streamline processes, improve efficiency, and create new value for customers.',
    },
    {
        id: 7,
        intention: 'Sustainability & Corporate Social Responsibility (CSR)',
        description: 'Integrating ESG considerations into the business strategy to minimize environmental impact, promote social responsibility, and enhance reputation.',
    },
    {
        id: 8,
        intention: 'Talent & Culture',
        description: 'Attracting and retaining top talent, fostering a culture of innovation and collaboration, and ensuring employee satisfaction and development.',
    },
    {
        id: 9,
        intention: 'Partnerships & Collaborations, or Sell',
        description:
            'Seeking strategic alliances, partnerships, or collaborations with other businesses or organizations to leverage complementary strengths and resources, or to potentially sell the business.',
    },
    {
        id: 10,
        intention: 'Risk Management',
        description: 'Identifying and mitigating potential risks and uncertainties that could impact the business, such as regulatory changes, geopolitical issues, or economic downturns.',
    },
    {
        id: 11,
        intention: 'Financial Growth & Profitability',
        description: 'Setting financial targets and goals for revenue growth, profit margins, return on investment (ROI), or other financial metrics.',
    },
];

const StrategicIntentionsTable: React.FC = () => {
    const [selected, setSelected] = useState<boolean[]>(Array(tableData.length).fill(false));
    const [isHeaderChecked, setIsHeaderChecked] = useState(false);

    const handleHeaderCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        setSelected(Array(tableData.length).fill(isChecked));
        setIsHeaderChecked(isChecked);
    };

    const handleRowCheckboxChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedSelected = [...selected];
        updatedSelected[index] = e.target.checked;
        setSelected(updatedSelected);

        // If all rows are checked, check the header checkbox. Otherwise, uncheck it.
        const allChecked = updatedSelected.every((checked) => checked);
        setIsHeaderChecked(allChecked);
    };

    return (
        <>
            <ul className="flex space-x-2 mb-5 rtl:space-x-reverse">
                <li className="ltr:before:mr-2 rtl:before:ml-2 font-semibold">
                    <span>Please select checkbox for relevant intentions</span>
                </li>
            </ul>
            <div className="p-6 table-responsive bg-white shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Strategic Intentions</h2>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th>
                                <input type="checkbox" className="form-checkbox" checked={isHeaderChecked} onChange={handleHeaderCheckboxChange} />
                            </th>
                            <th>Intentions</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={data.id}>
                                <td>
                                    <input type="checkbox" className="form-checkbox" checked={selected[index]} onChange={handleRowCheckboxChange(index)} />
                                </td>
                                <td>
                                    <div className="whitespace-nowrap">{data.intention}</div>
                                </td>
                                <td>{data.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default StrategicIntentionsTable;
