'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { cairo100, cairo200 } from '../../../../fonts';

const Page = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !phone || !address || !message) {
            alert("الرجاء ملء جميع الحقول");
            return;
        }

        try {
            const res = await fetch("/api/Contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, phone, address, message }),
            });

            if (res.ok) {
                router.back();
            } else {
                throw new Error("فشل في إنشاء المشاركة");
            }
        } catch (error) {
            console.error(error);
            alert("حدث خطأ أثناء إرسال النموذج، يرجى المحاولة مرة أخرى.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const setters = {
            "name": setName,
            "phone": setPhone,
            "address": setAddress,
            "message": setMessage,
        };

        const setter = setters[name];
        if (setter) {
            setter(value);
        }
    };

    return (
        <div className={`container mx-auto ${cairo100.className} ${cairo200.className} m-9`}>
            <div className='text-right p-6 rounded-lg shadow-md'>
                <form onSubmit={handleSubmit} className={`space-y-6 ${cairo200.className}`}>
                    <div className="relative mb-3" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            dir="rtl"
                        />
                        <label
                            className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                            الاسم الكامل
                        </label>
                    </div>

                    <div className="relative mb-3" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            dir="rtl"
                        />
                        <label
                            className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                            رقم الواتساب
                        </label>
                    </div>

                    <div className="relative mb-3" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            name="address"
                            value={address}
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
                            name="message"
                            value={message}
                            onChange={handleChange}
                            dir="rtl"
                        />
                        <label
                            className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                            اكتب رسالة
                        </label>
                    </div>

                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 w-full">
                        إرسال
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
