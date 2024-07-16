'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const setters = {
            "title": setTitle,
            "description": setDescription,
            "price": setPrice,
        }
        const setter = setters[name];
        if (setter) {
            setter(value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !price) {
            toast.info('الرجاء ملء جميع الحقول');
            return;
        }

        try {
            const res = await fetch('/api/Offers', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description, price }),
            });
            if (res.ok) {
                router.back();
            } else {
                throw new Error("فشل في إنشاء البيانات");
            }
        } catch (error) {
            toast.error('حدث خطأ اثناء ارسال البيانات يرجى المحاولة مرة اخرى');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        dir="rtl"
                    />
                    <label className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary">
                        العنوان
                    </label>
                </div>

                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        dir="rtl"
                    />
                    <label className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary">
                        الوصف
                    </label>
                </div>

                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                        type="number"
                        className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary"
                        name="price"
                        dir="rtl"
                        value={price}
                        onChange={handleChange}
                    />
                    <label className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary">
                        السعر
                    </label>
                </div>
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 w-full">
                    إرسال
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Page;