import React, { useState } from 'react';
import IconLargePlus from '../../components/Icon/IconLargePlus';

interface Idea {
    issue: string;
    solution: string;
    proposed: string;
    scores: Record<string, number>;
    solutionDetails: Record<string, string>;
    canEvaluate: boolean;
}

interface ScoringModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentIdeaScores: Record<string, number>;
    updateScores: (newScores: Record<string, number>) => void;
}

const ScoringModal: React.FC<ScoringModalProps> = ({ isOpen, onClose, currentIdeaScores, updateScores }) => {
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
                <div className="flex justify-between ">
                    <h1 className="text-xl font-bold mb-3">Evaluate Idea</h1>
                    <h2 className="text-lg font-semibold text-right mb-4">Total Score: {totalScore}</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {Object.entries(currentIdeaScores).map(([key, value]) => {
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
                                <div className="flex justify-between text-xs text-gray-600 mt-1">
                                    <span className="text-red-600">-3</span>
                                    <span className="text-red-600">-2</span>
                                    <span className="text-red-600">-1</span>
                                    <span className="text-blue-600">0</span>
                                    <span className="text-green-600">+1</span>
                                    <span className="text-green-600">+2</span>
                                    <span className="text-green-600">+3</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-6 flex justify-end">
                    <button onClick={onClose} className="btn h-9 btn-outline-primary rounded-full">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

interface DevelopSolutionModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentSolutionDetails: Record<string, string>;
    updateSolutionDetails: (newDetails: Record<string, string>) => void;
    onAllFieldsFilled: () => void;
}

const DevelopSolutionModal: React.FC<DevelopSolutionModalProps> = ({ isOpen, onClose, currentSolutionDetails, updateSolutionDetails, onAllFieldsFilled }) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedDetails = {
            ...currentSolutionDetails,
            [e.target.name]: e.target.value,
        };
        updateSolutionDetails(updatedDetails);

        const allFieldsFilled = Object.values(updatedDetails).every((value) => value.trim() !== '');
        if (allFieldsFilled) {
            onAllFieldsFilled();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 sm:top-2 bg-black bg-opacity-50 flex items-center justify-center sm:left-32 sm:h-screen sm:w-screen ">
            <div className="bg-white shadow-md rounded-3xl p-3 mt-3 border sm:w-4/5">
                <h1 className="text-base font-semibold my-4">Develop Your Solution</h1>
                <div className="sm:grid grid-cols-2 gap-4">
                    {[
                        { label: 'SUBSTITUTE: What can you replace or change in your product, service, or problem?' },
                        { label: 'INTEGRATE: How can you blend or combine your product, service, or issue with something else?' },
                        { label: 'ADJUST: How can you take features from other products, services, or issues and apply them to yours?' },
                        { label: 'IMPROVE: What aspects of your product, service, or issue can be increased, decreased, or changed to improve it?' },
                        { label: 'REDEPLOY: What new or alternative uses can you discover for your product, service, or issue?' },
                        { label: 'REMOVE: Which parts of your product, service, or issue can be taken out or made simpler?' },
                        { label: 'INVERT: What can be turned upside down or reversed in your product, service, or issue?' },
                    ].map(({ label }) => (
                        <div key={label} className="flex flex-col justify-between">
                            <label className="block font-semibold mb-1">{label}</label>
                            <textarea
                                name={label.split(':')[0].toLowerCase()}
                                value={currentSolutionDetails[label.split(':')[0].toLowerCase()] || ''}
                                onChange={handleChange}
                                className="w-full p-2 border focus:border-[#605EFD] focus:outline-none border-gray-300 rounded-lg resize-none"
                                rows={3}
                            ></textarea>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end align-bottom mb-3 relative">
                    <button onClick={onClose} className="btn h-9 btn-outline-primary rounded-full absolute bottom-0 right-0">
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
            canEvaluate: false,
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDevelopSolutionOpen, setIsDevelopSolutionOpen] = useState(false);
    const [currentIdeaIndex, setCurrentIdeaIndex] = useState<number | null>(null);

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
                    canEvaluate: false,
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

    const handleAllFieldsFilled = () => {
        if (currentIdeaIndex !== null) {
            const updatedIdeas = [...ideas];
            updatedIdeas[currentIdeaIndex].canEvaluate = true;
            setIdeas(updatedIdeas);
        }
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
                                className="w-full p-2 border focus:border-[#605EFD] focus:outline-none border-gray-300 rounded-lg resize-none"
                                placeholder="Whenever you or someone else encounters an issue or has an unmet requirement, enter it here"
                                rows={3}
                                value={idea.issue}
                                onChange={(e) => handleInputChange(index, 'issue', e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Existing Solution</label>
                            <textarea
                                className="w-full p-2 border focus:border-[#605EFD] focus:outline-none border-gray-300 rounded-lg resize-none"
                                placeholder="Provide details of an existing solution (if any) to this issue/unmet requirement. If no solution exists, simply write 'No current solution'."
                                rows={3}
                                value={idea.solution}
                                onChange={(e) => handleInputChange(index, 'solution', e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Proposed Solution</label>
                            <textarea
                                className="w-full p-2 border focus:border-[#605EFD] focus:outline-none border-gray-300 rounded-lg resize-none"
                                placeholder="Outline your proposed solution to this issue/unmet need."
                                rows={3}
                                value={idea.proposed}
                                onChange={(e) => handleInputChange(index, 'proposed', e.target.value)}
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => openModal(index, 'develop')} className="btn btn-outline-primary rounded-full">
                                Develop Solution
                            </button>
                            <button
                                onClick={() => openModal(index, 'evaluate')}
                                className={`btn btn-outline-primary rounded-full ${!idea.canEvaluate ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!idea.canEvaluate}
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
