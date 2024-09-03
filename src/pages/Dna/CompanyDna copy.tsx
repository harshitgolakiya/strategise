import React, { useState } from 'react';
// import IconX from '../../components/Icon/IconX';
const CompanyPurposeIcon = () => <img className="ml-[5px] flex-none" src="/assets/images/targeting1.svg" alt="logo" />;
const CompanyMissionIcon = () => <img className=" ml-[5px] flex-none" src="/assets/images/mission1.svg" alt="logo" />;
const CompanyVisionIcon = () => <img className="ml-[5px] flex-none" src="/assets/images/sight1.svg" alt="logo" />;
const CompanyValuesIcon = () => <img className="ml-[5px] flex-none" src="/assets/images/value1.svg" alt="logo" />;
const OrganisationalHabitsIcon = () => <img className="ml-[5px] flex-none" src="/assets/images/company-culture 1.svg" alt="logo" />;
const CorporateCommunityIcon = () => <img className="ml-[5px] flex-none" src="/assets/images/team1.svg" alt="logo" />;
const BrandPromiseIcon = () => <img className="ml-[5px] flex-none" src="/assets/images/promise1.svg" alt="logo" />;
const MoreArrow = () => (
    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
    const IconX = () => {
    return (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_354_4840)">
            <path d="M13.5 4.5L4.5 13.5" stroke="#2196F3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.5 4.5L13.5 13.5" stroke="#2196F3" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_354_4840">
                <rect width="18" height="18" fill="white" />
            </clipPath>
            </defs>
    </svg>

    );

}
interface InfoCardProps {
    id: string;
    title: string;
    colspan: string;
    icon: React.FC;
    content: string;
    expandedContent: React.ReactNode;
    isExpanded: boolean;
    toggleExpansion: (id: string) => void;
    closeExpansion: (id: string) => void;
}
const InfoCard: React.FC<InfoCardProps> = ({ id, title, icon: Icon, content, expandedContent, colspan, isExpanded, toggleExpansion, closeExpansion }) => (
    <div className={`bg-white rounded-xl shadow-md p-6 ${colspan} ${isExpanded ? 'row-span-3' : 'row-span-1'} transition-all duration-300 ease-in-out flex flex-col justify-between`}>
        <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <Icon />
        </div>
        <div className="flex-grow">
            <p className="text-gray-600 mb-4 text-sm">{content}</p>
        </div>
        <a href="#" onClick={() => toggleExpansion(id)} className="text-blue-600 font-semibold flex items-center text-sm hover:underline" role="button" aria-expanded={isExpanded}>
            {isExpanded ? 'Less' : 'More'}
            <MoreArrow />
        </a>
        {isExpanded && (
            <div className="mt-4 w-full">
                {expandedContent}
                <button onClick={() => closeExpansion(id)} className="mt-4 btn btn-outline-primary rounded-full ml-auto" aria-label={`Close expanded content for ${title}`}>
                    Close
                </button>
            </div>
        )}
    </div>
);



interface CardsData {
    id: string;
    title: string;
    icon: React.FC;
    colspan: string;
    content: string;
    expandedContent: React.ReactNode;
}

export default function CompanyInfoLayout() {
    // const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

   

   
     const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

     // Updated toggle function to handle single expanded card logic
     const toggleExpansion = (id: string) => {
         setExpandedCardId((prevId) => (prevId === id ? null : id));
     };

     // Updated close function to only collapse the card if it's currently expanded
     const closeExpansion = (id: string) => {
         if (expandedCardId === id) {
             setExpandedCardId(null);
         }
     };

    const cardsData: CardsData[] = [
        {
            id: 'card1',
            title: 'Company Purpose',
            icon: CompanyPurposeIcon,
            colspan: 'col-span-4',
            content:
                'We are the only consultancy that empowers businesses by integrating customer-centric strategies with actionable execution plans, enabling leaders to make insightful decisions, drive exceptional performance, and achieve transformative results',
            expandedContent: (
                <>
                    <div className="mb-4 p-4 bg-blue-100 rounded">
                        <p className="text-sm font-semibold">Tips:</p>
                        <ul className="list-disc list-inside text-xs">
                            <li>No more than four, make them actionable and keep them short</li>
                            <li>Test your values: Can people translate values into actions?</li>
                            <li>Do they provide options in how employees use their time?</li>
                            <li>Can they be easily memorized?</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-white-light dark:border-[#1b2e4b] p-4 rounded">
                            <p className="font-semibold">Be customer-centric</p>
                        </div>
                        <div className="border border-white-light dark:border-[#1b2e4b] p-4 rounded">
                            <p>We prioritize the needs and perspective of our clients in every decision and actions, ensuring their success drives our success.</p>
                        </div>
                        <div className="border border-white-light dark:border-[#1b2e4b] p-4 rounded">
                            <p className="font-semibold">Create to Innovate</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We continuously seek and implement creative solutions and forward-thinking strategies to stay ahead in a dynamic business landscape.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Empower with integrity</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We enable and support our team and clients to take initiative, make informed decisions, and achieve their full potential.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Strive for Excellence</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We commit to the highest standards of quality and performance in everything we do, striving for exceptional outcomes and continuous improvement.</p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: 'card2',
            title: 'Company Mission',
            icon: CompanyMissionIcon,
            colspan: 'col-span-4',
            content: ` We are going to transform 500 companies with 
            customer centric business strategies by the end
            of FY 2029, because we believe in unlocking the full 
            potential of businesses and their people through innovative
            strategies and actionable plans. `,
            expandedContent: (
                <>
                    <div className="mb-4 p-4 bg-blue-100 rounded">
                        <p className="text-sm font-semibold">Tips:</p>
                        <ul className="list-disc list-inside text-xs">
                            <li>No more than four, make them actionable and keep them short</li>
                            <li>Test your values: Can people translate values into actions?</li>
                            <li>Do they provide options in how employees use their time?</li>
                            <li>Can they be easily memorized?</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Be customer-centric</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We prioritize the needs and perspective of our clients in every decision and actions, ensuring their success drives our success.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Create to Innovate</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We continuously seek and implement creative solutions and forward-thinking strategies to stay ahead in a dynamic business landscape.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Empower with integrity</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We enable and support our team and clients to take initiative, make informed decisions, and achieve their full potential.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Strive for Excellence</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We commit to the highest standards of quality and performance in everything we do, striving for exceptional outcomes and continuous improvement.</p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: 'card3',
            title: 'Company Vision',
            icon: CompanyVisionIcon,
            colspan: 'col-span-4',
            content: `Transforming businesses through customer-
centric innovation, empowering leaders to unlock
exceptional results and full potential `,
            expandedContent: (
                <>
                    <div className="mb-4 p-4 bg-blue-100 rounded">
                        <p className="text-sm font-semibold">Tips:</p>
                        <ul className="list-disc list-inside text-xs">
                            <li>No more than four, make them actionable and keep them short</li>
                            <li>Test your values: Can people translate values into actions?</li>
                            <li>Do they provide options in how employees use their time?</li>
                            <li>Can they be easily memorized?</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Be customer-centric</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We prioritize the needs and perspective of our clients in every decision and actions, ensuring their success drives our success.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Create to Innovate</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We continuously seek and implement creative solutions and forward-thinking strategies to stay ahead in a dynamic business landscape.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Empower with integrity</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We enable and support our team and clients to take initiative, make informed decisions, and achieve their full potential.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Strive for Excellence</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We commit to the highest standards of quality and performance in everything we do, striving for exceptional outcomes and continuous improvement.</p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: 'card4',
            title: 'Company Values',
            icon: CompanyValuesIcon,
            colspan: 'col-span-6',
            content: `Be customer-centric 
            Create to innovate
Empower with Integrity
Strive for excellence`,
            expandedContent: (
                <>
                    <div className="mb-4 p-4 bg-blue-100 rounded ">
                        <div className="flex justify-between">
                            <p className="text-sm text-blue-600">
                                <span className="font-semibold">Tips:</span> No more than four, make them actionable and keep them short
                            </p>
                            <button className="">
                                <IconX />
                            </button>
                        </div>
                        <div className="grid grid-cols-12 text-blue-600">
                            <p className="font-semibold col-span-3">Test your values:</p>
                            <ul className="col-span-9">
                                <li> Can people translate values into actions?</li>
                                <li>Do they provide options in how employees use their time?</li>
                                <li>Can they be easily memorized?</li>
                            </ul>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        <textarea
                            className="font-semibold border resize-none text-[14px] text-[#888EA8] border-white-light dark:border-[#1b2e4b] px-3 py-2 rounded col-span-5"
                            placeholder="Be customer-centric"
                        ></textarea>
                        <textarea
                            className="border border-white-light resize-none dark:border-[#1b2e4b] px-3 py-2 rounded col-span-7 h-24 text-[14px] text-[#888EA8]"
                            placeholder="We prioritize the needs and perspective of our clients in every decision and actions, ensuring their success drives our success."
                        ></textarea>
                        <textarea
                            className="border border-white-light resize-none dark:border-[#1b2e4b] px-3 py-2 rounded col-span-5 h-24 text-[14px] text-[#888EA8]"
                            placeholder="Create to Innovate"
                        ></textarea>
                        <textarea
                            className="border border-white-light resize-none dark:border-[#1b2e4b] px-3 py-2 rounded col-span-7 h-24 text-[14px] text-[#888EA8]"
                            placeholder="We continuously seek and implement creative solutions and forward-thinking strategies to stay ahead in a dynamic business landscape."
                        ></textarea>
                        <textarea
                            className="border border-white-light resize-none dark:border-[#1b2e4b] px-3 py-2 rounded col-span-5 h-24 text-[14px] text-[#888EA8]"
                            placeholder="Empower with integrity"
                        ></textarea>
                        <textarea
                            className="border border-white-light resize-none dark:border-[#1b2e4b] px-3 py-2 rounded col-span-7 h-24 text-[14px] text-[#888EA8]"
                            placeholder="  We enable and support our team and clients to take initiative, make informed decisions, and achieve their full potential."
                        ></textarea>
                        <textarea
                            className="border border-white-light resize-none dark:border-[#1b2e4b] px-3 py-2 rounded col-span-5 h-24 text-[14px] text-[#888EA8]"
                            placeholder="Strive for Excellence"
                        ></textarea>
                        <textarea
                            className="border border-white-light resize-none dark:border-[#1b2e4b] px-3 py-2 rounded col-span-7 h-24 text-[14px] text-[#888EA8]"
                            placeholder="We commit to the highest standards of quality and performance in everything we do, striving for exceptional outcomes and continuous improvement."
                        ></textarea>
                    </div>
                </>
            ),
        },
        {
            id: 'card5',
            title: 'Organisational Habits',
            icon: OrganisationalHabitsIcon,
            colspan: 'col-span-6',
            content:
                'We are the only consultancy that empowers businesses by integrating customer-centric strategies with actionable execution plans, enabling leaders to make insightful decisions, drive exceptional performance, and achieve transformative results',
            expandedContent: (
                <>
                    <div className="mb-4 p-4 bg-blue-100 rounded">
                        <p className="text-sm font-semibold">Tips:</p>
                        <ul className="list-disc list-inside text-xs">
                            <li>No more than four, make them actionable and keep them short</li>
                            <li>Test your values: Can people translate values into actions?</li>
                            <li>Do they provide options in how employees use their time?</li>
                            <li>Can they be easily memorized?</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Be customer-centric</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We prioritize the needs and perspective of our clients in every decision and actions, ensuring their success drives our success.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Create to Innovate</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We continuously seek and implement creative solutions and forward-thinking strategies to stay ahead in a dynamic business landscape.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Empower with integrity</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We enable and support our team and clients to take initiative, make informed decisions, and achieve their full potential.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Strive for Excellence</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We commit to the highest standards of quality and performance in everything we do, striving for exceptional outcomes and continuous improvement.</p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: 'card6',
            title: 'Corporate Community',
            icon: CorporateCommunityIcon,
            colspan: 'col-span-6',
            content:
                'We are the only consultancy that empowers businesses by integrating customer-centric strategies with actionable execution plans, enabling leaders to make insightful decisions, drive exceptional performance, and achieve transformative results',
            expandedContent: (
                <>
                    <div className="mb-4 p-4 bg-blue-100 rounded">
                        <p className="text-sm font-semibold">Tips:</p>
                        <ul className="list-disc list-inside text-xs">
                            <li>No more than four, make them actionable and keep them short</li>
                            <li>Test your values: Can people translate values into actions?</li>
                            <li>Do they provide options in how employees use their time?</li>
                            <li>Can they be easily memorized?</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Be customer-centric</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We prioritize the needs and perspective of our clients in every decision and actions, ensuring their success drives our success.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Create to Innovate</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We continuously seek and implement creative solutions and forward-thinking strategies to stay ahead in a dynamic business landscape.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Empower with integrity</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We enable and support our team and clients to take initiative, make informed decisions, and achieve their full potential.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Strive for Excellence</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We commit to the highest standards of quality and performance in everything we do, striving for exceptional outcomes and continuous improvement.</p>
                        </div>
                    </div>
                </>
            ),
        },
        {
            id: 'card7',
            title: 'Brand Promise',
            icon: BrandPromiseIcon,
            colspan: 'col-span-6',
            content:
                'We are the only consultancy that empowers businesses by integrating customer-centric strategies with actionable execution plans, enabling leaders to make insightful decisions, drive exceptional performance, and achieve transformative results',
            expandedContent: (
                <>
                    <div className="mb-4 p-4 bg-blue-100 rounded">
                        <p className="text-sm font-semibold">Tips:</p>
                        <ul className="list-disc list-inside text-xs">
                            <li>No more than four, make them actionable and keep them short</li>
                            <li>Test your values: Can people translate values into actions?</li>
                            <li>Do they provide options in how employees use their time?</li>
                            <li>Can they be easily memorized?</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Be customer-centric</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We prioritize the needs and perspective of our clients in every decision and actions, ensuring their success drives our success.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Create to Innovate</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We continuously seek and implement creative solutions and forward-thinking strategies to stay ahead in a dynamic business landscape.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Empower with integrity</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We enable and support our team and clients to take initiative, make informed decisions, and achieve their full potential.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p className="font-semibold">Strive for Excellence</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded">
                            <p>We commit to the highest standards of quality and performance in everything we do, striving for exceptional outcomes and continuous improvement.</p>
                        </div>
                    </div>
                </>
            ),
        },
        // Add more cards here with different content and IDs
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-12 gap-6">
                {cardsData.map((card) => (
                    <InfoCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        icon={card.icon}
                        colspan={card.colspan}
                        content={card.content}
                        expandedContent={card.expandedContent}
                        // isExpanded={expandedCards[card.id] || false}
                        isExpanded={expandedCardId === card.id}
                        toggleExpansion={toggleExpansion}
                        closeExpansion={closeExpansion}
                    />
                ))}
            </div>
        </div>
    );
}

