'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = ({ params }) => {
    const { id } = params;
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const res = await fetch(`/api/Article/${id}`);
                const data = await res.json();
                if (res.ok) {
                    setTitle(data.SingleArticle.title);
                    setImage(data.SingleArticle.image);
                } else {
                    toast.error('فشل في جلب البيانات: ' + data.message);
                }
            } catch (error) {
                toast.error('هناك خطأ في جلب البيانات: ' + error.message);
            }
        };

        fetchItem();
    }, [id]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/Article/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, image }),
            });
            if (response.ok) {
                toast.success('تم التعديل بنجاح');
                setTimeout(() => {
                    router.back();
                }, 1500);
            } else {
                throw new Error('Failed to update item');
            }
        } catch (error) {
            toast.error('خطأ في التحديث: ' + error.message);
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto m-9">
            <div className="text-right p-6 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative mb-3">
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-primary focus:text-primary dark:text-white dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary"
                            placeholder="مثال: وصف البوست"
                            dir="rtl"
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <label
                            htmlFor="exampleFormControlInputHelper"
                            className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out"
                        >
                            وصف البوست
                        </label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="formFile" className="mb-2 inline-block text-white">
                            تحميل الصورة
                        </label>
                        <input
                            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-gray-300 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-gray-700 transition duration-300 ease-in-out focus:border-primary focus:text-primary focus:shadow-inner focus:outline-none dark:border-gray-600 dark:text-white"
                            type="file"
                            id="formFile"
                            dir="rtl"
                            onChange={handleImageChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 w-full"
                    >
                        تحديث
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Page;
