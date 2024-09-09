import React, { useState } from 'react';
import IconLargePlus from '../../components/Icon/IconLargePlus';

interface Idea {
    issue: string;
    solution: string;
    proposed: string;
    scores: Record<string, number>; // Add scores to each idea
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
                <div className="flex justify-between ">
                    <h1 className="text-xl font-bold mb-3">Evaluate Idea</h1>
                    <h2 className="text-lg font-semibold text-right mb-4">Total Score: {totalScore}</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {Object.keys(currentIdeaScores).map((key) => {
                        const value = currentIdeaScores[key as keyof typeof currentIdeaScores];

                        // Function to determine the slider color based on its value
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
                <div className="mt-6">
                    <button onClick={onClose} className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600">
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
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIdeaIndex, setCurrentIdeaIndex] = useState<number | null>(null); // Track the currently evaluated idea

 const handleInputChange = (index: number, field: keyof Idea, value: string) => {
     const newIdeas = [...ideas];
     newIdeas[index] = {
         ...newIdeas[index],
         [field]: value, // This should correctly handle the string values
     };
     setIdeas(newIdeas);
 };


    const addBusinessIdea = () => {
        const lastIdea = ideas[ideas.length - 1];

        // Check if all fields in the last idea are filled
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
                },
            ]);
        } else {
            alert('Please fill out all fields before adding a new idea.');
        }
    };

    const openModal = (index: number) => {
        setCurrentIdeaIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentIdeaIndex(null); // Reset the current idea being evaluated
    };

    const updateScores = (newScores: Record<string, number>) => {
        if (currentIdeaIndex !== null) {
            const updatedIdeas = [...ideas];
            updatedIdeas[currentIdeaIndex].scores = newScores;
            setIdeas(updatedIdeas);
        }
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {ideas.map((idea, index) => (
                    <div key={index} className="border border-gray-300 bg-white p-4 rounded-3xl shadow-sm w-full">
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-lg font-semibold">Business Idea {index + 1}</h3>
                            <button onClick={() => openModal(index)} className="btn btn-outline-primary rounded-full">
                                Evaluate Idea
                            </button>
                        </div>
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
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Existing Solution</label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-lg resize-none"
                                placeholder="Provide details of an existing solution (if any) to this issue/unmet requirement. If no solution exists, simply write 'No current solution'."
                                rows={3}
                                value={idea.solution}
                                onChange={(e) => handleInputChange(index, 'solution', e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Proposed Solution</label>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-lg resize-none"
                                placeholder="Outline your proposed solution to this issue/unmet need."
                                rows={3}
                                value={idea.proposed}
                                onChange={(e) => handleInputChange(index, 'proposed', e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                ))}

                <div className="text-center">
                    <button onClick={addBusinessIdea} className="bg-white w-full py-20 text-green-500 text-6xl hover:text-green-400 rounded-3xl flex items-center justify-center shadow-md">
                        <IconLargePlus />
                    </button>
                </div>
            </div>

            {currentIdeaIndex !== null && <ScoringModal isOpen={isModalOpen} onClose={closeModal} currentIdeaScores={ideas[currentIdeaIndex].scores} updateScores={updateScores} />}
        </div>
    );
};

export default App;
