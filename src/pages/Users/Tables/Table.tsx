import React, { useState } from 'react';
interface Record {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

interface TableProps {
    recordsData: Record[];
    pageSizeOptions: number[];
}
// import React, { useState } from 'react';
const rowData = [
    {
        id: 1,
        firstName: 'Caroline',
        lastName: 'Jensen',
        email: 'carolinejensen@zidant.com',
        dob: '2004-05-28',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        phone: '+1 (821) 447-3782',
        isActive: true,
        age: 39,
        company: 'POLARAX',
    },
    {
        id: 2,
        firstName: 'Celeste',
        lastName: 'Grant',
        email: 'celestegrant@polarax.com',
        dob: '1989-11-19',
        address: {
            street: '639 Kimball Street',
            city: 'Bascom',
            zipcode: 8907,
            geo: {
                lat: 65.954483,
                lng: 98.906478,
            },
        },
        phone: '+1 (838) 515-3408',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    },
    {
        id: 3,
        firstName: 'Tillman',
        lastName: 'Forbes',
        email: 'tillmanforbes@manglo.com',
        dob: '2016-09-05',
        address: {
            street: '240 Vandalia Avenue',
            city: 'Thynedale',
            zipcode: 8994,
            geo: {
                lat: -34.949388,
                lng: -82.958111,
            },
        },
        phone: '+1 (969) 496-2892',
        isActive: false,
        age: 26,
        company: 'APPLIDECK',
    },
    {
        id: 4,
        firstName: 'Daisy',
        lastName: 'Whitley',
        email: 'daisywhitley@applideck.com',
        dob: '1987-03-23',
        address: {
            street: '350 Pleasant Place',
            city: 'Idledale',
            zipcode: 9369,
            geo: {
                lat: -54.458809,
                lng: -127.476556,
            },
        },
        phone: '+1 (861) 564-2877',
        isActive: true,
        age: 21,
        company: 'VOLAX',
    },
];
const Table: React.FC<TableProps> = ({ recordsData, pageSizeOptions }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(pageSizeOptions[0]);

    const totalRecords = recordsData.length;
    const totalPages = Math.ceil(totalRecords / pageSize);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(event.target.value));
        setCurrentPage(1); // Reset to first page when page size changes
    };

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalRecords);
    const currentRecords = recordsData.slice(startIndex, endIndex);

    return (
        <div className="datatables">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 whitespace-nowrap">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone No.</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentRecords.map(record => (
                            <tr key={record.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{record.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{record.firstName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{record.lastName}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{record.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{record.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">
                    Showing {startIndex + 1} to {endIndex} of {totalRecords} entries
                </span>
                <div className="flex space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="btn btn-primary"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="btn btn-primary"
                    >
                        Next
                    </button>
                </div>
                <select
                    value={pageSize}
                    onChange={handlePageSizeChange}
                    className="border border-gray-300 rounded-lg p-2"
                >
                    {pageSizeOptions.map(size => (
                        <option key={size} value={size}>{size} per page</option>
                    ))}
                </select>
            </div> */}
        </div>
    );
};

export default Table;
