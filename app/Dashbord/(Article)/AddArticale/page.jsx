'use client'
import React from 'react';
import { useState } from 'react';
import { cairo200, cairo100 } from '../../../../fonts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
const Page = () => {

    const [title, SetTitle] = useState('')
    const [image, SetImage] = useState(null)
    const router=useRouter();
    const handleTitleChange = (e) => {
        SetTitle(e.target.value);
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            SetImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/Article', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, image }),
        });
        toast.success('تمت الاضافة بنجاح  ')
        setTimeout(() => {
            router.back();
        }, 1500);
        const data = await res.json();
        console.log(data);

    }
    return (
        <div className={`container mx-auto ${cairo100} ${cairo200} m-9`}>
            <div className='text-right p-6  rounded-lg shadow-md'>
                <form onSubmit={handleSubmit} action="" className={`space-y-6 ${cairo200.className}`}>
                    <div className="relative mb-3" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInputHelper"
                            placeholder="مثال: وصف البوست"
                            dir="rtl"
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <label
                            htmlFor="exampleFormControlInputHelper"
                            className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                            وصف البوست
                        </label>

                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="formFile"
                            className="mb-2 inline-block text-white dark:text-white">
                            تحميل   الصورة
                        </label>
                        <input
                            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-gray-300 bg-transparent bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-gray-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:mr-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-r file:border-solid file:border-inherit file:bg-transparent file:px-3 file:py-[0.32rem] file:text-gray-700 focus:border-primary focus:text-primary focus:shadow-inner focus:outline-none dark:border-gray-600 dark:text-white file:dark:text-white"
                            type="file"
                            id="formFile"
                            dir="rtl"
                            onChange={handleImageChange}
                        />
                    </div>
                    <button type='submit' className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 w-full">
                        إرسال
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Page;

