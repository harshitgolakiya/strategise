import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import App from './IdeaManager';
const IconX = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
};
const tableData = [
    {
        id: 1,
        name: 'Business Idea 1',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        score: 12,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Business Idea 2',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        score: 14,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Business Idea 3',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        score: 25,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Business Idea 4',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        score: 23,
        status: 'Complete',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

const Intentions = () => {
    const dispatch = useDispatch();
    const [isAlertVisible, setIsAlertVisible] = useState(true);

    useEffect(() => {
        dispatch(setPageTitle('Tables'));
    }, [dispatch]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    const handleCloseAlert = () => {
        setIsAlertVisible(false);
    };

    const handleShowAlert = () => {
        setIsAlertVisible(true);
    };

    return (
        <>
            {isAlertVisible && (
                <div className="alert bg-blue-100 border border-blue-200 text-blue-700 rounded-3xl p-4 mb-4 relative">
                    <button onClick={handleCloseAlert} className="absolute top-2 right-2 text-blue-700 hover:text-blue-900 focus:outline-none" aria-label="Close">
                        <IconX />
                    </button>
                    <h2 className="text-lg font-semibold mb-2">How It Works:</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>
                            Issue or Unmet Requirements: Share the challenges or unmet needs you’ve observed in your industry or daily life. Whether it's a small inconvenience or a major gap in the
                            market, every insight counts!
                        </li>
                        <li>
                            Existing Solution: Tell us about any existing solutions you’re aware of. Are there products or services currently addressing this issue? If so, what are their strengths and
                            weaknesses?
                        </li>
                        <li>
                            Proposed Solution: Let your creativity shine! Propose your own innovative solution to the problem. This could be a new product, service, or a unique approach to an existing
                            challenge.
                        </li>
                    </ol>
                </div>
            )}

            <div className="space-x-4 mt-5 flex items-center justify-between">
                <div className="panel rounded-3xl w-full">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Business ideas</h5>
                        <button onClick={handleShowAlert} className="btn btn-outline-primary rounded-full">
                            How It Works
                        </button>
                    </div>
                    <div className="table-responsive mb-5">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Score</th>
                                    <th>Evaluation</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>
                                            <div className="whitespace-nowrap">{data.name}</div>
                                        </td>
                                        <td>{data.date}</td>
                                        <td>{data.score}</td>
                                        <td>
                                            <div
                                                className={`whitespace-nowrap ${
                                                    data.status === 'Complete'
                                                        ? 'text-success'
                                                        : data.status === 'Pending'
                                                        ? 'text-secondary'
                                                        : data.status === 'In Progress'
                                                        ? 'text-info'
                                                        : data.status === 'Canceled'
                                                        ? 'text-danger'
                                                        : 'text-success'
                                                }`}
                                            >
                                                {data.status}
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <Tippy content="Delete">
                                                <button type="button">
                                                    <IconTrashLines className="m-auto" />
                                                </button>
                                            </Tippy>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="flex space-x-4 mt-5">
                <App />
            </div>
        </>
    );
};

export default Intentions;
