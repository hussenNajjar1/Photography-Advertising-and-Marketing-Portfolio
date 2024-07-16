'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cairo100,cairo200 } from '../../../../../fonts';
 // تأكد من استيراد الخطوط بشكل صحيح

const EditOffer = ({ params }) => {
    const router = useRouter();
    const { id } = params;

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
    });

    useEffect(() => {
        const fetchOffer = async () => {
            try {
                const response = await fetch(`/api/Offers/${id}`);
                if (!response.ok) {
                    throw new Error('Error fetching offer data');
                }
                const data = await response.json();
                setFormData(data.Offerss); // تأكد من أن البيانات تأتي من خوادم لتقديم الطلبات
            } catch (error) {
                console.error(error);
                toast.error('خطأ في جلب البيانات');
            }
        };

        fetchOffer();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/Offers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Error updating offer');
            }

            toast.success('تم التحديث بنجاح');

            setTimeout(() => {
                router.back();
            }, 1500);
        } catch (error) {
            toast.error('خطأ في التحديث');
            console.error(error);
        }
    };
    const { title, description, price } = formData;
    return (
        <div className={`container mx-auto ${cairo100.className} ${cairo200.className} m-9`}>
            <div className='text-right p-6 rounded-lg shadow-md'>
                <form onSubmit={handleSubmit} className={`space-y-6 ${cairo200.className}`}>
                    <div className="relative mb-3" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            name="title"
                            value={title}
                            onChange={handleChange}
                            dir="rtl"
                        />
                        <label
                            className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                            العنوان
                        </label>
                    </div>

                    <div className="relative mb-3" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            name="description"
                            value={description}
                            onChange={handleChange}
                            dir="rtl"
                        />
                        <label
                            className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                            الوصف
                        </label>
                    </div>

                    <div className="relative mb-3" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            name="price"
                            value={price}
                            onChange={handleChange}
                            dir="rtl"
                        />
                        <label
                            className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                            السعر
                        </label>
                    </div>
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 w-full">
                        إرسال
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default EditOffer;
