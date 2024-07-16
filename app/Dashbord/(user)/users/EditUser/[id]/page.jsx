
import React from 'react';
import { cairo100,cairo200 } from '../../../../../../fonts';
const EditUserForm = () => {
    return (
        <div className={`container mx-auto ${cairo100.className} ${cairo200.className} m-9`}>
        <div className='text-right p-6 rounded-lg shadow-md'>
            <form className={`space-y-6 ${cairo200.className}`}>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        name="name"
                   
                        dir="rtl"
                    />
                    <label
                        className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                        الاسم الكامل
                    </label>
                </div>

                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        name="email"
                        dir="rtl"
                    />
                    <label
                        className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                         البريد الالكتروني
                    </label>
                </div>

                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                        type="password"
                        className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:border-primary peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300 dark:border-gray-600 dark:focus:border-primary dark:focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        name="password"
                        dir="rtl"
                    />
                    <label
                        className="pointer-events-none absolute right-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-white dark:peer-focus:text-primary">
                        كلمة السر
                    </label>
                </div>

             

                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 w-full">
                     تحديث  المعلومات
                </button>
            </form>
        </div>
    </div>
    );
};

export default EditUserForm;
