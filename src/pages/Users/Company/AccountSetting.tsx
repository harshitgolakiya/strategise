import { setPageTitle } from '../../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconHome from '../../../components/Icon/IconHome';
import IconDollarSignCircle from '../../../components/Icon/IconDollarSignCircle';
import IconPhone from '../../../components/Icon/IconPhone';
import IconCompany from '../../../components/Icon/IconCompany';
import Tippy from '@tippyjs/react';
import IconX from '../../../components/Icon/IconX';
import { useEffect, useState, useRef } from 'react';
import { ReactSortable } from 'react-sortablejs';

// import { MultiDrag } from 'sortablejs';
// import Sortable from 'sortablejs';

const items1 = [
    {
        id: 1,
        text: 'Need to be approved',
        name: 'Kelly Young',
    },
    {
        id: 2,
        text: 'Meeting with client',
        name: 'Andy King',
    },
    {
        id: 3,
        text: 'Project Detail',
        name: 'Judy Holmes',
    },
    {
        id: 4,
        text: 'Edited Post Apporval',
        name: 'Vincent Carpenter',
    },
    {
        id: 5,
        text: 'Project Lead Pickup',
        name: 'Mary McDonald',
    },
];
const items2 = [
    {
        id: 6,
        text: 'Need to be approved',
        name: 'Kelly Young',
    },
    {
        id: 7,
        text: 'Meeting with client',
        name: 'Andy King',
    },
    {
        id: 8,
        text: 'Project Detail',
        name: 'Judy Holmes',
    },
    {
        id: 9,
        text: 'Edited Post Apporval',
        name: 'Vincent Carpenter',
    },
    {
        id: 10,
        text: 'Project Lead Pickup',
        name: 'Mary McDonald',
    },
];
const items3 = [
    {
        id: 2,
        text: 'Meeting with client',
        name: 'Andy King',
    },
    {
        id: 1,
        text: 'Need to be approved',
        name: 'Kelly Young',
    },
    {
        id: 3,
        text: 'Project Detail',
        name: 'Judy Holmes',
    },
    {
        id: 4,
        text: 'Edited Post Apporval',
        name: 'Vincent Carpenter',
    },
];
const items4 = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
    { id: 11, name: 'Item 11' },
    { id: 12, name: 'Item 12' },
];

const AccountSetting = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Account Setting'));
    });
    const [tabs, setTabs] = useState<string>('home');
    const toggleTabs = (name: string) => {
        setTabs(name);
    };

    // ReactSortable.mount(new MultiDrag());

    const [sortable1, setSortable1] = useState(items1);
    const [sortable2, setSortable2] = useState(items2);
   const [image, setImage] = useState<string | null>(null);
   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleImageClick = () => {
       fileInputRef.current?.click();
   };

   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       const file = event.target.files?.[0];
       if (file) {
           const reader = new FileReader();
           reader.onload = (e) => {
               setImage(e.target?.result as string);
           };
           reader.readAsDataURL(file);
       }
   };
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
              
                <li className=" ltr:before:mr-2 rtl:before:ml-2">
                    <span>Company Information</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Settings</h5>
                </div>
                {/* <div>
                    <ul className="sm:flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('home')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'home' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconHome />
                                My Company
                            </button>
                        </li>
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('payment-details')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'payment-details' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconDollarSignCircle />
                                Payment Details
                            </button>
                        </li>
                
                        <li className="inline-block">
                            <button
                                onClick={() => toggleTabs('danger-zone')}
                                className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'danger-zone' ? '!border-primary text-primary' : ''}`}
                            >
                                <IconPhone />
                                Manage Account
                            </button>
                        </li>
                    </ul>
                </div> */}
                {tabs === 'home' ? (
                    <div>
                        <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-3xl p-4 mb-5 bg-white dark:bg-black">
                            <h6 className="text-lg font-bold mb-5">Company Information</h6>
                            <div className="flex flex-col sm:flex-row">
                                <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                                    <input type="file" className="hidden" id="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" />
                                    <img
                                        src={image || '/placeholder.svg?height=128&width=128'}
                                        alt="Company Logo"
                                        className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto cursor-pointer"
                                        onClick={handleImageClick}
                                    />
                                </div>
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name">Company Name</label>
                                        <input id="name" type="text" placeholder="RedSand Technology" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="Establishment_date">Date of Establishment</label>
                                        <input id="Establishment_date" type="date" defaultValue={'2024-08-12'} className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="country">Country</label>
                                        <select defaultValue="All Countries" id="country" className="form-select text-white-dark">
                                            <option value="All Countries">All Countries</option>
                                            <option value="United States">United States</option>
                                            <option value="India">India</option>
                                            <option value="Japan">Japan</option>
                                            <option value="China">China</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Canada">Canada</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="address">Company Address</label>
                                        <input id="address" type="text" placeholder="New York" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="location">Primary Regions Serve</label>
                                        <input id="location" type="text" placeholder="Location" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input id="phone" type="text" placeholder="+971-xx-xxx-xxxx" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" placeholder="Jimmy@gmail.com" className="form-input" />
                                    </div>
                                    <div>
                                        <label htmlFor="web">Website</label>
                                        <input id="web" type="text" placeholder="Enter URL" className="form-input" />
                                    </div>
                                    <div>
                                        <label className="inline-flex cursor-pointer">
                                            <input type="checkbox" className="form-checkbox" />
                                            <span className="text-white-dark relative checked:bg-none">Make this my default Company</span>
                                        </label>
                                    </div>
                                    <div className="sm:col-span-2 mt-3 ml-auto">
                                        <button type="button" className="btn btn-primary rounded-full">
                                            <IconCompany />
                                            Add Company
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="bg-white p-4 mb-5 rounded-3xl border border-[#ebedf2] dark:border-[#191e3a]">
                            <div>
                                <p className="text-lg font-bold mb-5">Company List</p>
                            </div>
                            <table className="table table-hover">
                                <tbody className="table-hover">
                                    <tr className="row">
                                        <td className="col-1">1</td>
                                        <td className="col-1">Company Name</td>
                                        <td className="col-8">Company Address</td>
                                        <td className="col-1">10/08/2024</td>
                                        <td className="col-1">
                                            <div className="flex items-center w-max mx-auto">
                                                <Tippy content="Delete">
                                                    <button type="button">
                                                        <IconX />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="row">
                                        <td className="col-1">1</td>
                                        <td className="col-1">Company Name</td>
                                        <td className="col-8">Company Address</td>
                                        <td className="col-1">10/08/2024</td>
                                        <td className="col-1">
                                            <div className="flex items-center w-max mx-auto">
                                                <Tippy content="Delete">
                                                    <button type="button">
                                                        <IconX />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="row">
                                        <td className="col-1">1</td>
                                        <td className="col-1">Company Name</td>
                                        <td className="col-8">Company Address</td>
                                        <td className="col-1">10/08/2024</td>
                                        <td className="col-1">
                                            <div className="flex items-center w-max mx-auto">
                                                <Tippy content="Delete">
                                                    <button type="button">
                                                        <IconX />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="row">
                                        <td className="col-1">1</td>
                                        <td className="col-1">Company Name</td>
                                        <td className="col-8">Company Address</td>
                                        <td className="col-1">10/08/2024</td>
                                        <td className="col-1">
                                            <div className="flex items-center w-max mx-auto">
                                                <Tippy content="Delete">
                                                    <button type="button">
                                                        <IconX />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-white p-4 mb-5 rounded-3xl border border-[#ebedf2] dark:border-[#191e3a]">
                            <div className="flex justify-between align-center">
                                <p className="text-lg font-bold ">Products / Services</p>
                                <button onClick={() => toggleTabs('danger-zone')} className="btn btn-primary rounded-full flex gap-2 p-2 mb-3">
                                    <IconCompany />
                                    Add New
                                </button>
                            </div>

                            <table className="table table-hover">
                                <thead>
                                    <tr className="row">
                                        <th className="col-1">#</th>
                                        <th className="col-1">Products / Services</th>
                                        <th className="col-8">Description</th>
                                        <th className="col-1">Create At</th>
                                        <th className="col-1"> </th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    <tr className="row">
                                        <td className="col-1">1</td>
                                        <td className="col-1">Company Name</td>
                                        <td className="col-8">Company Address</td>
                                        <td className="col-1">10/08/2024</td>
                                        <td className="col-1">
                                            <div className="flex items-center w-max mx-auto">
                                                <Tippy content="Delete">
                                                    <button type="button">
                                                        <IconX />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="row">
                                        <td className="col-1">1</td>
                                        <td className="col-1">Company Name</td>
                                        <td className="col-8">Company Address</td>
                                        <td className="col-1">10/08/2024</td>
                                        <td className="col-1">
                                            <div className="flex items-center w-max mx-auto">
                                                <Tippy content="Delete">
                                                    <button type="button">
                                                        <IconX />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="row">
                                        <td className="col-1">1</td>
                                        <td className="col-1">Company Name</td>
                                        <td className="col-8">Company Address</td>
                                        <td className="col-1">10/08/2024</td>
                                        <td className="col-1">
                                            <div className="flex items-center w-max mx-auto">
                                                <Tippy content="Delete">
                                                    <button type="button">
                                                        <IconX />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="row">
                                        <td className="col-1">1</td>
                                        <td className="col-1">Company Name</td>
                                        <td className="col-8">Company Address</td>
                                        <td className="col-1">10/08/2024</td>
                                        <td className="col-1">
                                            <div className="flex items-center w-max mx-auto">
                                                <Tippy content="Delete">
                                                    <button type="button">
                                                        <IconX />
                                                    </button>
                                                </Tippy>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex gap-5 justify-between items-center	">
                            <div className="bg-white w-full p-4 border border-[#ebedf2] dark:border-[#191e3a] rounded-3xl">
                                <div className="flex justify-between items-center mb-3">
                                    <p className="text-lg font-bold ">Key Personal</p>
                                    <button onClick={() => toggleTabs('danger-zone')} className="btn btn-primary rounded-full flex gap-2 p-2">
                                        <IconCompany />
                                        Manage
                                    </button>
                                </div>
                                <div>
                                    <ul id="example2">
                                        <ReactSortable list={sortable2} setList={setSortable2} animation={200} delay={2} ghostClass="gu-transit" group="shared">
                                            {sortable2.map((item) => {
                                                return (
                                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                                        <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:md:text-left rtl:md:text-right text-center items-md-center">
                                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                                <img alt="avatar" src={`/assets/images/profile-${item.id}.jpeg`} className="w-11 h-11 rounded-full mx-auto" />
                                                            </div>
                                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                                                <div className="font-semibold md:my-0 my-3">
                                                                    <div className="text-dark dark:text-[#bfc9d4] text-base">{item.text}</div>
                                                                    <div className="text-white-dark text-xs">{item.name}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ReactSortable>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white w-full p-4 rounded-3xl border border-[#ebedf2] dark:border-[#191e3a]">
                                <div className="flex justify-between items-center mb-3">
                                    <p className="text-lg font-bold ">Advisory Board</p>
                                    <button onClick={() => toggleTabs('danger-zone')} className="btn btn-primary rounded-full flex gap-2 p-2 ">
                                        <IconCompany />
                                        Manage
                                    </button>
                                </div>
                                <div>
                                    <ul id="example1">
                                        <ReactSortable list={sortable1} setList={setSortable1} animation={200} delay={2} ghostClass="gu-transit" group="shared">
                                            {sortable1.map((item) => {
                                                return (
                                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                                        <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:md:text-left rtl:md:text-right text-center items-md-center">
                                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                                <img alt="avatar" src={`/assets/images/profile-${item.id}.jpeg`} className="w-11 h-11 rounded-full mx-auto" />
                                                            </div>
                                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                                                <div className="font-semibold md:my-0 my-3">
                                                                    <div className="text-dark dark:text-[#bfc9d4] text-base">{item.text}</div>
                                                                    <div className="text-white-dark text-xs">{item.name}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ReactSortable>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {tabs === 'payment-details' ? (
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5 rounded-3xl">
                            <div className="panel rounded-3xl">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Billing Address</h5>
                                    <p>
                                        Changes to your <span className="text-primary">Billing</span> information will take effect starting with scheduled payment and will be refelected on your next
                                        invoice.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-start justify-between py-3">
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Address #1
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">2249 Caynor Circle, New Brunswick, New Jersey</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-start justify-between py-3">
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Address #2
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">4262 Leverton Cove Road, Springfield, Massachusetts</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-start justify-between py-3">
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Address #3
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">2692 Berkshire Circle, Knoxville, Tennessee</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary rounded-full">Add Address</button>
                            </div>
                            <div className="panel rounded-3xl">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Payment History</h5>
                                    <p>
                                        Changes to your <span className="text-primary">Payment Method</span> information will take effect starting with scheduled payment and will be refelected on your
                                        next invoice.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-start justify-between py-3">
                                            <div className="flex-none ltr:mr-4 rtl:ml-4">
                                                <img src="/assets/images/card-americanexpress.svg" alt="img" />
                                            </div>
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Mastercard
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">XXXX XXXX XXXX 9704</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                        <div className="flex items-start justify-between py-3">
                                            <div className="flex-none ltr:mr-4 rtl:ml-4">
                                                <img src="/assets/images/card-mastercard.svg" alt="img" />
                                            </div>
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                American Express
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">XXXX XXXX XXXX 310</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-start justify-between py-3">
                                            <div className="flex-none ltr:mr-4 rtl:ml-4">
                                                <img src="/assets/images/card-visa.svg" alt="img" />
                                            </div>
                                            <h6 className="text-[#515365] font-bold dark:text-white-dark text-[15px]">
                                                Visa
                                                <span className="block text-white-dark dark:text-white-light font-normal text-xs mt-1">XXXX XXXX XXXX 5264</span>
                                            </h6>
                                            <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                                <button className="btn btn-dark">Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary rounded-full">Add Payment Method</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            <div className="panel rounded-3xl">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Add Billing Address</h5>
                                    <p>
                                        Changes your New <span className="text-primary">Billing</span> Information.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <form>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="billingName">Name</label>
                                                <input id="billingName" type="text" placeholder="Enter Name" className="form-input" />
                                            </div>
                                            <div>
                                                <label htmlFor="billingEmail">Email</label>
                                                <input id="billingEmail" type="email" placeholder="Enter Email" className="form-input" />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="billingAddress">Address</label>
                                            <input id="billingAddress" type="text" placeholder="Enter Address" className="form-input" />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
                                            <div className="md:col-span-2">
                                                <label htmlFor="billingCity">City</label>
                                                <input id="billingCity" type="text" placeholder="Enter City" className="form-input" />
                                            </div>
                                            <div>
                                                <label htmlFor="billingState">State</label>
                                                <select id="billingState" className="form-select text-white-dark">
                                                    <option>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="billingZip">Zip</label>
                                                <input id="billingZip" type="text" placeholder="Enter Zip" className="form-input" />
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-primary rounded-full">
                                            Add
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="panel rounded-3xl">
                                <div className="mb-5">
                                    <h5 className="font-semibold text-lg mb-4">Add Payment Method</h5>
                                    <p>
                                        Changes your New <span className="text-primary">Payment Method </span>
                                        Information.
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <form>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="payBrand">Card Brand</label>
                                                <select id="payBrand" className="form-select text-white-dark">
                                                    <option value="Mastercard">Mastercard</option>
                                                    <option value="American Express">American Express</option>
                                                    <option value="Visa">Visa</option>
                                                    <option value="Discover">Discover</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="payNumber">Card Number</label>
                                                <input id="payNumber" type="text" placeholder="Card Number" className="form-input" />
                                            </div>
                                        </div>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="payHolder">Holder Name</label>
                                                <input id="payHolder" type="text" placeholder="Holder Name" className="form-input" />
                                            </div>
                                            <div>
                                                <label htmlFor="payCvv">CVV/CVV2</label>
                                                <input id="payCvv" type="text" placeholder="CVV" className="form-input" />
                                            </div>
                                        </div>
                                        <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="payExp">Card Expiry</label>
                                                <input id="payExp" type="text" placeholder="Card Expiry" className="form-input" />
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-primary rounded-full">
                                            Add
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {/* {tabs === 'preferences' ? (
                    <div className="switch">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Choose Theme</h5>
                                <div className="flex justify-around">
                                    <div className="flex">
                                        <label className="inline-flex cursor-pointer">
                                            <input className="form-radio ltr:mr-4 rtl:ml-4 cursor-pointer" type="radio" name="flexRadioDefault" defaultChecked />
                                            <span>
                                                <img className="ms-3" width="100" height="68" alt="settings-dark" src="/assets/images/settings-light.svg" />
                                            </span>
                                        </label>
                                    </div>

                                    <label className="inline-flex cursor-pointer">
                                        <input className="form-radio ltr:mr-4 rtl:ml-4 cursor-pointer" type="radio" name="flexRadioDefault" />
                                        <span>
                                            <img className="ms-3" width="100" height="68" alt="settings-light" src="/assets/images/settings-dark.svg" />
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Activity data</h5>
                                <p>Download your Summary, Task and Payment History Data</p>
                                <button type="button" className="btn btn-primary">
                                    Download Data
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Public Profile</h5>
                                <p>
                                    Your <span className="text-primary">Profile</span> will be visible to anyone on the network.
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox1" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Show my email</h5>
                                <p>
                                    Your <span className="text-primary">Email</span> will be visible to anyone on the network.
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox2" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Enable keyboard shortcuts</h5>
                                <p>
                                    When enabled, press <span className="text-primary">ctrl</span> for help
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox3" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Hide left navigation</h5>
                                <p>
                                    Sidebar will be <span className="text-primary">hidden</span> by default
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox4" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Advertisements</h5>
                                <p>
                                    Display <span className="text-primary">Ads</span> on your dashboard
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox5" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5">
                                <h5 className="font-semibold text-lg mb-4">Social Profile</h5>
                                <p>
                                    Enable your <span className="text-primary">social</span> profiles on this network
                                </p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox6" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white  dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )} */}
                {tabs === 'danger-zone' ? (
                    <div className="switch">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="panel space-y-5 rounded-3xl">
                                <h5 className="font-semibold text-lg mb-4">Purge Cache</h5>
                                <p>Remove the active resource from the cache without waiting for the predetermined cache expiry time.</p>
                                <button className="btn btn-secondary rounded-full">Clear</button>
                            </div>
                            <div className="panel space-y-5 rounded-3xl">
                                <h5 className="font-semibold text-lg mb-4">Deactivate Account</h5>
                                <p>You will not be able to receive messages, notifications for up to 24 hours.</p>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox7" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
                            <div className="panel space-y-5 rounded-3xl">
                                <h5 className="font-semibold text-lg mb-4">Delete Account</h5>
                                <p>Once you delete the account, there is no going back. Please be certain.</p>
                                <button className="btn btn-danger btn-delete-account rounded-full">Delete my account</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default AccountSetting;

