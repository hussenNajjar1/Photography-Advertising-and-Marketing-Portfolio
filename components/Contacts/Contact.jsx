'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cairo100, cairo200 } from "../../fonts";
const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !phone || !address || !message) {
            toast.error("الرجاء ملء جميع الحقول");
            return;
        }

        const phonePattern = /^[0-9]{8,}$/;
        if (!phonePattern.test(phone)) {
            toast.error("رقم الواتساب يجب أن يحتوي على 8 أرقام على الأقل وأن يكون رقماً فقط");
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
                toast.success("تم إرسال النموذج بنجاح");
                setTimeout(() => {
                    router.push("/");
                }, 1500);
            } else {
                throw new Error("فشل في إنشاء المشاركة");
            }
        } catch (error) {
            console.error(error);
            toast.error("حدث خطأ أثناء إرسال النموذج، يرجى المحاولة مرة أخرى.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const setters = {
            "firstname": setName,
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
        <div className="px-6">
            <div className="pb-16 lg:section lg:mt-40" id="contact">
                <div className="container mx-auto">
                    <h1 className={`text-center text-3xl py-20 ${cairo200.className}`}>
                        تواصل معنا
                    </h1>
                    <div className="flex flex-col lg:flex-row">
                        <form
                            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start form"
                            onSubmit={handleSubmit}
                        >
                            <input
                                className={`bg-transparent text-right border-b py-3 outline-none w-full placeholder-white focus:border-accent transition-all ${cairo100.className}`}
                                type="text"
                                placeholder="الاسم الكامل"
                                name="firstname"
                                value={name}

                                onChange={handleChange}
                            />
                            <input
                                className={`bg-transparent border-b text-right py-3 outline-none w-full placeholder-white focus:border-accent transition-all ${cairo100.className}`}
                                type="text"
                                placeholder="رقم الواتساب"
                                name="phone"
                                value={phone}

                                onChange={handleChange}
                            />
                            <input
                                className={`bg-transparent border-b text-right py-3 outline-none w-full placeholder-white focus:border-accent transition-all ${cairo100.className}`}
                                type="text"
                                placeholder="العنوان"
                                name="address"
                                value={address}

                                onChange={handleChange}
                            />
                            <textarea
                                className={`bg-transparent border-b text-right py-3 outline-none w-full h-40 placeholder-white focus:border-accent transition-all ${cairo100.className}`}
                                placeholder="اكتب رسالة"
                                name="message"
                                value={message}

                                onChange={handleChange}
                            />
                            <button className={`btn btn-lg w-full ${cairo200.className}`} type="submit">
                                ارسال
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
