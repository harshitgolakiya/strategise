import React, { useState } from 'react';
import IconLargePlus from '../../components/Icon/IconLargePlus';

interface Idea {
    issue: string;
    solution: string;
    proposed: string;
    scores: Record<string, number>;
    solutionDetails: Record<string, string>; // Store solution details
}

const ScoringModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    currentIdeaScores: Record<string, number>;
    updateScores: (newScores: Record<string, number>) => void;
}> = ({ isOpen, onClose, currentIdeaScores, updateScores }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateScores({
            ...currentIdeaScores,
            [e.target.name]: Number(e.target.value),
        });
    };

    const totalScore = Object.values(currentIdeaScores).reduce((a, b) => a + b, 0);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white py-4 px-5 rounded-3xl shadow-lg max-w-2xl w-full">
                <div className="grid grid-cols-2 gap-4">
                    {Object.keys(currentIdeaScores).map((key) => {
                        const value = currentIdeaScores[key as keyof typeof currentIdeaScores];
                        const getColorClass = (value: number) => {
                            if (value > 0) return 'bg-green-600';
                            if (value < 0) return 'bg-red-600';
                            return 'bg-blue-600';
                        };
                        return (
                            <div key={key} className="mb-3">
                                <label className="block font-semibold mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                                <input
                                    type="range"
                                    min="-3"
                                    max="3"
                                    value={value}
                                    name={key}
                                    onChange={handleChange}
                                    className={`w-full h-2 rounded-lg appearance-none cursor-pointer ${getColorClass(value)}`}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="mt-6 flex justify-end">
                    <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const DevelopSolutionModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    currentSolutionDetails: Record<string, string>;
    updateSolutionDetails: (newDetails: Record<string, string>) => void;
    onAllFieldsFilled: (isFilled: boolean) => void; // New prop for tracking field completion
}> = ({ isOpen, onClose, currentSolutionDetails, updateSolutionDetails, onAllFieldsFilled }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const updatedDetails = {
            ...currentSolutionDetails,
            [e.target.name]: e.target.value,
        };
        updateSolutionDetails(updatedDetails);

        // Check if all fields are filled
        const allFieldsFilled = Object.values(updatedDetails).every((value) => value.trim() !== '');
        onAllFieldsFilled(allFieldsFilled);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white py-4 px-5 rounded-3xl shadow-lg max-w-2xl w-full">
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { label: 'SUBSTITUTE What can you replace or change?' },
                        { label: 'INTEGRATE How can you blend or combine something?' },
                        { label: 'ADJUST What features can you adapt from others?' },
                        { label: 'IMPROVE What can be improved or changed?' },
                        { label: 'REDEPLOY What alternative uses can you find?' },
                        { label: 'REMOVE What parts can you take out or simplify?' },
                        { label: 'INVERT What can you turn upside down or reverse?' },
                    ].map(({ label }) => (
                        <div key={label} className="min-h-36">
                            <label className="block font-semibold mb-1">{label}</label>
                            <textarea
                                name={label.toLowerCase()}
                                value={currentSolutionDetails[label.toLowerCase()] || ''}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg resize-none"
                                rows={3}
                                
                            ></textarea>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-end">
                    <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const [ideas, setIdeas] = useState<Idea[]>([
        {
            issue: '',
            solution: '',
            proposed: '',
            scores: {
                costEffectiveness: 0,
                feasibility: 0,
                scalability: 0,
                userAcceptance: 0,
                innovation: 0,
                userExperience: 0,
                riskManagement: 0,
                impact: 0,
                sustainability: 0,
                differentiation: 0,
            },
            solutionDetails: {
                substitute: '',
                integrate: '',
                adjust: '',
                improve: '',
                redeploy: '',
                remove: '',
                invert: '',
            },
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDevelopSolutionOpen, setIsDevelopSolutionOpen] = useState(false);
    const [currentIdeaIndex, setCurrentIdeaIndex] = useState<number | null>(null);
    const [isEvaluateIdeaActive, setIsEvaluateIdeaActive] = useState(false);

    const handleInputChange = (index: number, field: keyof Idea, value: string) => {
        const newIdeas = [...ideas];
        newIdeas[index] = {
            ...newIdeas[index],
            [field]: value,
        };
        setIdeas(newIdeas);
    };

    const addBusinessIdea = () => {
        const lastIdea = ideas[ideas.length - 1];

        if (lastIdea.issue && lastIdea.solution && lastIdea.proposed) {
            setIdeas([
                ...ideas,
                {
                    issue: '',
                    solution: '',
                    proposed: '',
                    scores: {
                        costEffectiveness: 0,
                        feasibility: 0,
                        scalability: 0,
                        userAcceptance: 0,
                        innovation: 0,
                        userExperience: 0,
                        riskManagement: 0,
                        impact: 0,
                        sustainability: 0,
                        differentiation: 0,
                    },
                    solutionDetails: {
                        substitute: '',
                        integrate: '',
                        adjust: '',
                        improve: '',
                        redeploy: '',
                        remove: '',
                        invert: '',
                    },
                },
            ]);
        } else {
            alert('Please fill out all fields before adding a new idea.');
        }
    };

    const openModal = (index: number, modalType: 'evaluate' | 'develop') => {
        setCurrentIdeaIndex(index);
        if (modalType === 'evaluate') {
            setIsModalOpen(true);
        } else if (modalType === 'develop') {
            setIsDevelopSolutionOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentIdeaIndex(null);
    };

    const closeDevelopSolutionModal = () => {
        setIsDevelopSolutionOpen(false);
    };

    const updateScores = (newScores: Record<string, number>) => {
        if (currentIdeaIndex !== null) {
            const updatedIdeas = [...ideas];
            updatedIdeas[currentIdeaIndex].scores = newScores;
            setIdeas(updatedIdeas);
        }
    };

    const updateSolutionDetails = (newDetails: Record<string, string>) => {
        if (currentIdeaIndex !== null) {
            const updatedIdeas = [...ideas];
            updatedIdeas[currentIdeaIndex].solutionDetails = newDetails;
            setIdeas(updatedIdeas);
        }
    };

    const handleAllFieldsFilled = (isFilled: boolean) => {
        setIsEvaluateIdeaActive(isFilled);
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {ideas.map((idea, index) => (
                    <div key={index} className="border border-gray-300 bg-white p-4 rounded-3xl shadow-sm w-full">
                        <h3 className="text-lg font-semibold mb-2">Business Idea {index + 1}</h3>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Issue / Unmet Requirement</label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-lg resize-none"
                                placeholder="Whenever you or someone else encounters an issue or has an unmet requirement, enter it here"
                                rows={3}
                                value={idea.issue}
                                onChange={(e) => handleInputChange(index, 'issue', e.target.value)}
                            ></textarea>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => openModal(index, 'develop')} className="btn btn-outline-primary rounded-full">
                                Develop Solution
                            </button>
                            <button
                                onClick={() => openModal(index, 'evaluate')}
                                className={`btn btn-outline-primary rounded-full ${!isEvaluateIdeaActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!isEvaluateIdeaActive}
                            >
                                Evaluate Idea
                            </button>
                        </div>
                    </div>
                ))}
                <div className="text-center">
                    <button onClick={addBusinessIdea} className="bg-white w-full py-24 text-green-500 text-6xl hover:text-green-400 rounded-3xl flex items-center justify-center shadow-md">
                        <IconLargePlus />
                    </button>
                </div>
            </div>
            {currentIdeaIndex !== null && (
                <>
                    <ScoringModal isOpen={isModalOpen} onClose={closeModal} currentIdeaScores={ideas[currentIdeaIndex].scores} updateScores={updateScores} />
                    <DevelopSolutionModal
                        isOpen={isDevelopSolutionOpen}
                        onClose={closeDevelopSolutionModal}
                        currentSolutionDetails={ideas[currentIdeaIndex].solutionDetails}
                        updateSolutionDetails={updateSolutionDetails}
                        onAllFieldsFilled={handleAllFieldsFilled}
                    />
                </>
            )}
        </div>
    );
};

export default App;
