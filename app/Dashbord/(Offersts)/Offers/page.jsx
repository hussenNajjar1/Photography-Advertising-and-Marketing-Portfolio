'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cairo100, cairo200 } from '../../../../fonts';

const SimpleTable = () => {
    const [Offers, setOffers] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await fetch('/api/Offers');
                if (!res.ok) {
                    throw new Error('فشل في جلب قائمة الاتصالات');
                }
                const data = await res.json();
                setOffers(data.Offerss); // Assuming API response contains 'contacts' array
            } catch (error) {
                console.error('خطأ في جلب قائمة الاتصالات:', error);
            }
        };

        fetchContacts();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`/api/Offers/${id}`, {
                method: 'DELETE',
                cache: 'no-store'
            });
            if (!res.ok) {
                throw new Error('فشل في حذف جهة الاتصال');
            }
            // تحديث حالة contacts بإزالة جهة الاتصال المحذوفة
            setOffers(Offers.filter(Offerss => Offerss._id !== id));
        } catch (error) {
            console.error('خطأ في حذف جهة الاتصال:', error);
        }
    };
    

    return (
        <div className={`container mx-auto p-4 ${cairo100.className}`}>
            <Link href={'/Dashbord/addOffers'} className={`text-right block mb-6 text-blue-600`}>
                <span className={`text-2xl ${cairo200.className} bg-sky-700 text-white py-1 px-5 rounded-2xl`}>اضافة عرض جديد</span>
            </Link>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full text-right text-sm font-light text-gray-800 w-full">
                                <thead className="bg-gray-50">
                                    <tr className={`border-b border-gray-200 ${cairo200.className}`}>
                                        <th className="px-9 py-4">الاحداث</th>
                                        <th className="pl-14 py-4">التاريخ</th>
                                 
                                        <th className="px-6 py-4">رقم الواتساب</th>
                                        <th className="px-6 py-4">العنوان</th>
                                        <th className="px-6 py-4">الاسم </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Offers.map((contact) => (
                                        <tr key={contact._id} className={`border-b border-gray-200 text-white ${cairo100.className}`}>
                                            <td className="mr-3 py-4 flex space-x-4 items-center pr-6">
                                                <button onClick={() => handleDelete(contact._id)} className='bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition'>
                                                    <div className='flex items-center pr-2 space-x-1'>
                                                        <span>حذف</span>
                                                        <Image src={'/images/svg/delete.svg'} alt='delete' width={25} height={25} />
                                                    </div>
                                                </button>
                                                <Link href={`/Dashbord/editOffers/${contact._id}`} className='bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition'>
                                                    <div className='flex pr-2 items-center space-x-1'>
                                                        <span>تحديث</span>
                                                        <Image src={'/images/svg/update.svg'} alt='update' width={25} height={25} />
                                                    </div>
                                                </Link>
                                            </td>
                                            <td className="pl-14 py-4">{contact.date}</td>
                                            
                                            <td className="px-6 py-4">{contact.price}</td>
                                            <td className="px-6 py-4">{contact.description}</td>
                                            <td className="px-6 py-4">{contact.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimpleTable;
