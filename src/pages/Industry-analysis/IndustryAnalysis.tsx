'use client';

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Edit2, Trash2, Plus } from 'lucide-react';
import ai1 from '/assets/images/ai 1.svg';
import vector from '/assets/images/Vector.svg';
import Edit from '/assets/images/Edit.svg';

interface AnalysisItem {
    id: string;
    text: string;
    isEditing: boolean;
    columnId: string;
}

interface Column {
    id: string;
    title: string;
    backgroundColor: string;
}

interface ColumnProps {
    column: Column;
    items: AnalysisItem[];
    onEdit: (id: string) => void;
    onSave: (id: string, text: string) => void;
    onDelete: (id: string) => void;
    onAdd: (columnId: string) => void;
    setList: (newState: AnalysisItem[]) => void;
    isFirstColumn: boolean;
}

const Column: React.FC<ColumnProps> = ({ column, items, onEdit, onSave, onDelete, onAdd, setList, isFirstColumn }) => {
    const textareaRefs = useRef<{ [key: string]: HTMLTextAreaElement | null }>({});

    const setTextareaRef = useCallback(
        (id: string) => (el: HTMLTextAreaElement | null) => {
            textareaRefs.current[id] = el;
        },
        []
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            items.forEach((item) => {
                if (item.isEditing && textareaRefs.current[item.id] && !textareaRefs.current[item.id]?.contains(event.target as Node)) {
                    onSave(item.id, textareaRefs.current[item.id]?.value || item.text);
                }
            });
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [items, onSave]);

    return (
        <div className={`flex-1 min-w-[200px] p-4 rounded-3xl ${column.backgroundColor}`}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-base  font-semibold">{column.title}</h2>
                <div className="flex gap-1 justify-between">
                    {isFirstColumn && (
                        <button>
                            <img src={ai1} alt="" className="h-5" />
                        </button>
                    )}
                    {isFirstColumn && (
                        <button onClick={() => onAdd(column.id)} className="">
                            <img src={vector} alt="" />
                        </button>
                    )}
                    {/* <button></button> */}
                </div>
            </div>
            <ReactSortable list={items} setList={setList} animation={200} group="shared">
                {items.map((item) => (
                    <div key={item.id} className="mb-4 bg-[#fafafa] p-3 rounded-md shadow h-40 overflow-hidden flex flex-col justify-between scrollbar-hide">
                        {item.isEditing ? (
                            <textarea
                                ref={setTextareaRef(item.id)}
                                className="w-full focus:border-[#605EFD] focus:outline-none p-2 border rounded resize-none h-full overflow-auto"
                                defaultValue={item.text}
                            />
                        ) : (
                            <p className="text-sm overflow-auto h-full p-2 scrollbar-hide">{item.text}</p>
                        )}
                        <div className="flex justify-end mt-2">
                            <button onClick={() => onEdit(item.id)} className="p-1">
                                <img src={Edit} alt="" className="h-4" />
                            </button>
                            <button onClick={() => onDelete(item.id)} className="p-1">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </ReactSortable>
        </div>
    );
};

export default function IndustryAnalysis() {
    const [items, setItems] = useState<AnalysisItem[]>([
        { id: '1', text: 'Simplify processes and avoid jargon to make consulting accessible and understandable.', isEditing: false, columnId: 'addChoices' },
        { id: '2', text: 'Ensure transparent pricing with no unexpected charges.', isEditing: false, columnId: 'addChoices' },
        { id: '3', text: 'Streamline project timelines to deliver faster results without compromising quality.', isEditing: false, columnId: 'addChoices' },
        { id: '4', text: 'Eliminate generic solutions and focus on tailored strategies for each client.', isEditing: false, columnId: 'addChoices' },
        { id: '5', text: 'Remove inflexible consulting frameworks to adapt to client needs dynamically.', isEditing: false, columnId: 'addChoices' },
        { id: '6', text: 'Reduce excessive dependence on data analysis, balancing it with intuitive and creative problem-solving.', isEditing: false, columnId: 'addChoices' },
        { id: '7', text: 'Lower the cost of services by optimizing internal processes and leveraging technology.', isEditing: false, columnId: 'addChoices' },
        { id: '8', text: 'Reduce overly formal communication and foster a more approachable, collaborative atmosphere.', isEditing: false, columnId: 'addChoices' },
        { id: '9', text: 'Unnecessary complexity in consulting processes and deliverables.', isEditing: false, columnId: 'eliminate' },
        { id: '10', text: 'Hidden fees and unclear pricing structures.', isEditing: false, columnId: 'eliminate' },
        { id: '11', text: 'Lengthy, drawn-out project timelines.', isEditing: false, columnId: 'eliminate' },
        { id: '12', text: "One-size-fits-all solutions that don't address specific client needs.", isEditing: false, columnId: 'eliminate' },
        { id: '13', text: 'Overreliance on industry jargon and complex terminology.', isEditing: false, columnId: 'reduce' },
        { id: '14', text: 'Excessive focus on theoretical frameworks without practical application.', isEditing: false, columnId: 'reduce' },
        { id: '15', text: 'Time spent on non-essential administrative tasks.', isEditing: false, columnId: 'reduce' },
        { id: '16', text: 'Dependency on outdated methodologies and tools.', isEditing: false, columnId: 'reduce' },
        { id: '17', text: 'Emphasis on clear, concise communication with clients.', isEditing: false, columnId: 'raise' },
        { id: '18', text: 'Focus on delivering tangible, measurable results.', isEditing: false, columnId: 'raise' },
        { id: '19', text: 'Investment in cutting-edge technologies and data analytics tools.', isEditing: false, columnId: 'raise' },
        { id: '20', text: 'Commitment to continuous learning and skill development for consultants.', isEditing: false, columnId: 'raise' },
        { id: '21', text: 'Innovative, client-centric consulting models.', isEditing: false, columnId: 'create' },
        { id: '22', text: 'Digital platforms for real-time collaboration and project tracking.', isEditing: false, columnId: 'create' },
        { id: '23', text: 'Customizable solution frameworks that adapt to various industries.', isEditing: false, columnId: 'create' },
        { id: '24', text: 'Mentorship programs to nurture next-generation business leaders.', isEditing: false, columnId: 'create' },
    ]);

    const columns: Column[] = [
        { id: 'addChoices', title: 'Add Choices', backgroundColor: 'bg-[#4361EE80]' },
        { id: 'eliminate', title: 'Eliminate', backgroundColor: 'bg-white' },
        { id: 'reduce', title: 'Reduce', backgroundColor: 'bg-white' },
        { id: 'raise', title: 'Raise', backgroundColor: 'bg-white' },
        { id: 'create', title: 'Create', backgroundColor: 'bg-white' },
    ];

    const handleEdit = useCallback((id: string) => {
        setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, isEditing: true } : item)));
    }, []);

    const handleSave = useCallback((id: string, text: string) => {
        setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, text, isEditing: false } : item)));
    }, []);

    const handleDelete = useCallback((id: string) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }, []);

    const handleAdd = useCallback((columnId: string) => {
        const newItem: AnalysisItem = {
            id: Date.now().toString(),
            text: 'New item',
            isEditing: false,
            columnId: columnId,
        };
        setItems((prevItems) => [newItem, ...prevItems]);
    }, []);

    const getItemsByColumn = useCallback(
        (columnId: string) => {
            return items.filter((item) => item.columnId === columnId);
        },
        [items]
    );

    return (
        <div>
            
            <div className="mb-5">
                <h1 className="font-bold text-lg mb-5">3D ACTIO Industry Analysis based on its mission to</h1>
                <p className="text-gray-500">
                    We are going to transform 500 companies with customer centric business strategies by the end of FY 2029, because we believe in unlocking the full potential of businesses and their
                    people through innovative strategies and actionable plans.
                </p>
            </div>
            <div className="flex flex-wrap gap-4 items-start">
                {columns.map((column, index) => (
                    <Column
                        key={column.id}
                        column={column}
                        items={getItemsByColumn(column.id)}
                        onEdit={handleEdit}
                        onSave={handleSave}
                        onDelete={handleDelete}
                        onAdd={handleAdd}
                        setList={(newState) => {
                            setItems((prevItems) => {
                                const updatedItems = prevItems.filter((item) => item.columnId !== column.id);
                                return [...newState.map((item) => ({ ...item, columnId: column.id })), ...updatedItems];
                            });
                        }}
                        isFirstColumn={index === 0}
                    />
                ))}
            </div>
        </div>
    );
}
