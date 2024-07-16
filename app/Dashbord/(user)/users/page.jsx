import React from 'react';
import { cairo100, cairo200 } from '../../../../fonts';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
    return (
        <div className={`container mx-auto p-4 ${cairo100.className}`}>
            <Link href={'/Dashbord/users/addUser'} className={`text-right block mb-6 text-blue-600`}>
                <span className={`text-2xl ${cairo200.className} bg-sky-700 text-white py-1 px-5 rounded-2xl`}>اضافة مستخدم</span>
            </Link>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full text-right text-sm font-light text-white w-full">
                                <thead className="bg-gray-50">
                                    <tr className={`border-b border-gray-200 ${cairo200.className}`}>
                                        <th className="px-9 py-4">الاحداث</th>
                                        <th className="px-6 py-4">التاريخ</th>
                                        <th className="px-6 py-4">الايميل</th>
                                        <th className="px-6 py-4">الاسم</th>
                                        <th className="px-6 py-4">الرقم</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={`border-b border-gray-200 ${cairo100.className}`}>
                                        <td className="mr-3 py-4 flex space-x-4 items-center pr-6">
                                            <button className='bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition'>
                                                <div className='flex items-center pr-2 space-x-1'>
                                                    <span>حذف</span>
                                                    <Image src={'/images/svg/delete.svg'} alt='delete' width={25} height={25} />
                                                </div>
                                            </button>
                                            <Link href={`/Dashbord/users/EditUser/1`} className='bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition'>
                                                <div className='flex pr-2 items-center space-x-1'>
                                                    <span>تحديث</span>
                                                    <Image src={'/images/svg/update.svg'} alt='update' width={25} height={25} />
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="px-6 py-4">2024-07-04</td> {/* Example date */}
                                        <td className="px-6 py-4">example@example.com</td> {/* Example email */}
                                        <td className="px-6 py-4">أحمد محمد</td> {/* Example name */}
                                        <td className="px-6 py-4">1234567890</td> {/* Example number */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
