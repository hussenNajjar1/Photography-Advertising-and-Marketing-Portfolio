'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { cairo100 } from "../../../../../fonts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditContacts = ({ params }) => {
    const { id } = params;

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        message: ''
    });

    const router = useRouter();

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const response = await fetch(`/api/Contacts/${id}`);
                if (!response.ok) {
                    throw new Error('Error fetching contact data');
                }
                const data = await response.json();
                setFormData(data.contact);
            } catch (error) {
                console.error(error);
                toast.error('خطأ في جلب البيانات');
            }
        };

        fetchContactData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/Contacts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error updating contact');
            }

            toast.success('تم التحديث بنجاح');

            // الانتقال إلى الصفحة السابقة بعد التحديث بنجاح
            setTimeout(() => {
                router.back();
            }, 1500); // الانتظار لمدة 1.5 ثانية قبل الانتقال
        } catch (error) {
            toast.error('خطأ في التحديث');
            console.error(error);
        }
    };

    return (
        <div className={`container mx-auto ${cairo100.className} m-9`}>
            <div className='text-right p-6 rounded-lg shadow-md'>
                <form onSubmit={handleSubmit} className={`space-y-6 ${cairo100.className}`}>
                    <div className="mb-4">
                        <label className={`block text-xl py-1 font-medium text-white ${cairo100.className}`}>الاسم الكامل</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            dir="rtl"
                            className="block w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className={`block text-xl py-1 font-medium text-white ${cairo100.className}`}>رقم الواتساب</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            dir="rtl"
                            className="block w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className={`block text-xl py-1 font-medium text-white ${cairo100.className}`}>العنوان</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            dir="rtl"
                            className="block w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className={`block text-xl py-1 font-medium text-white ${cairo100.className}`}>الرسالة</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            dir="rtl"
                            className="block w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
                        />
                    </div>
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 w-full">
                        تحديث
                    </button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default EditContacts;
