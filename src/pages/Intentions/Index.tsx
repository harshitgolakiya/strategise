import { useEffect, useState } from 'react';
import CodeHighlight from '../../components/Highlight';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconCode from '../../components/Icon/IconCode';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import App from './IdeaManager'
const tableData = [
    {
        id: 1,
        name: 'Business 1',
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
        name: 'Business 2',
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
        name: 'Business 3',
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
        name: 'Business 4',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        score: 23,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

const Intentions = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Tables'));
    });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [tabs, setTabs] = useState<string[]>([]);
    const toggleCode = (name: string) => {
        if (tabs.includes(name)) {
            setTabs((value) => value.filter((d) => d !== name));
        } else {
            setTabs([...tabs, name]);
        }
    };
    
    return (
        <>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li className=" ltr:before:mr-2 rtl:before:ml-2">
                    <span>Business Idea Generator Process</span>
                </li>
            </ul>
            <div className="flex space-x-4 mt-5">
                {/* Simple */}
                <div className="panel rounded-3xl w-1/2 ">
                    <div className="flex items-center justify-between mb-5">
                        <h5 className="font-semibold text-lg dark:text-white-light">Business ideas</h5>
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
                                {tableData.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td>
                                                <div className="whitespace-nowrap">{data.name}</div>
                                            </td>
                                            <td>{data.date}</td>
                                            <td>{data.score}</td>
                                            <td>
                                                <div
                                                    className={`whitespace-nowrap ${
                                                        data.status === 'completed'
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
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="panel bg-white w-1/2 rounded-3xl shadow-md p-8 font-bold  mx-auto">
                    <h2 className="text-2xl font-bold mb-4">How It Works:</h2>
                    <ol className="list-decimal list-inside space-y-3 text-justify">
                        <li>
                            Issue or Unmet Requirements:Share the challenges or unmet needs you’ve observed in your industry or daily life. Whether it's a small inconvenience or a major gap in the
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
            </div>
            <div className="flex space-x-4 mt-5">
                {/* <div className="panel bg-white w-1/2 rounded-3xl shadow-md p-8 font-bold"> */}
                    {<App />}
                {/* </div> */}
            </div>
        </>
    );
};

export default Intentions;
