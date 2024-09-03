import React, { useState } from 'react';
import { X } from 'lucide-react';

interface CompanyValue {
    value: string;
    definition: string;
}

interface CardData {
    title: string;
    content: string;
    icon: React.ReactNode;
    expandedContent?: {
        description: string;
        tips: string[];
        values?: CompanyValue[];
    };
}

const CompanyValuesIcon = () => (
    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M8 14S9 16 12 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const OrganisationalHabitsIcon = () => (
    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BrandPromiseIcon = () => (
    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MoreArrow = () => (
    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const InfoCard: React.FC<{ data: CardData; isExpanded: boolean; onToggle: () => void }> = ({ data, isExpanded, onToggle }) => {
    return (
        // <div className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 ease-in-out ${isExpanded ? 'h-auto' : 'h-48'} overflow-hidden`}>
        <div className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 ease-in-out ${isExpanded ? 'h-auto' : 'h-60'} `}>
            <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">{data.title}</h2>
                {data.icon}
            </div>
            <p className="text-gray-600 mb-4 text-sm">{data.content}</p>
            {isExpanded && data.expandedContent && (
                <div className="mt-4">
                    <p className="text-gray-600 mb-2">{data.expandedContent.description}</p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <h3 className="text-blue-700 font-semibold mb-2">Tips:</h3>
                        <ul className="list-disc pl-5 text-blue-600">
                            {data.expandedContent.tips.map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                    {data.expandedContent.values && (
                        <div className="mt-4">
                            <h3 className="text-gray-800 font-semibold mb-2">Values:</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {data.expandedContent.values.map((item, index) => (
                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="text-gray-700 font-semibold mb-2">{item.value}</h4>
                                        <p className="text-gray-600 text-sm">{item.definition}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
            <button onClick={onToggle} className="text-blue-600 font-semibold flex items-center text-sm hover:underline mt-4">
                {isExpanded ? (
                    <>
                        Close
                        <X className="w-4 h-4 ml-1" />
                    </>
                ) : (
                    <>
                        More
                        <MoreArrow />
                    </>
                )}
            </button>
        </div>
    );
};

export default function ExpandableCompanyInfoCards() {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const cardData: CardData[] = [
        {
            title: 'Company Values',
            content:
                "Values are the pulse of the organisation. They define how we do what we do. They instil pride and define the organisation's culture and identity. Values are the core behaviour principles for all employees, and customers should experience them when engaging in the business.",
            icon: <CompanyValuesIcon />,
            expandedContent: {
                description: 'Our core values are embedded in every action we take and define our organisational identity.',
                tips: ['Ensure values are communicated clearly.', 'Incorporate values into performance evaluations.', 'Lead by example.'],
                values: [
                    { value: 'Integrity', definition: 'We uphold the highest standards of honesty and strong moral principles.' },
                    { value: 'Innovation', definition: 'We continually seek to improve and embrace new ideas.' },
                ],
            },
        },
        {
            title: 'Organisational Habits',
            content: 'Habits within the organisation create an atmosphere and set the tone of the day-to-day business. They are the patterns of behaviour that reflect the values of the business.',
            icon: <OrganisationalHabitsIcon />,
            expandedContent: {
                description: 'Habits shape the daily life of the company and its employees.',
                tips: ['Recognise and reinforce positive habits.', 'Align habits with company goals.', 'Create an environment that fosters good habits.'],
            },
        },
        {
            title: 'Brand Promise',
            content: 'A brand promise is a value or experience your customers can expect to receive every single time they interact with your company. It sets the expectations for your customers.',
            icon: <BrandPromiseIcon />,
            expandedContent: {
                description: 'Our brand promise ensures that our customers know what to expect from us.',
                tips: ['Deliver on the brand promise consistently.', 'Communicate the brand promise clearly.', 'Align all business operations with the brand promise.'],
            },
        },
    ];

    const toggleCard = (index: number) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardData.map((card, index) => (
                    <InfoCard key={index} data={card} isExpanded={expandedCard === index} onToggle={() => toggleCard(index)} />
                ))}
            </div>
        </div>
    );
}
