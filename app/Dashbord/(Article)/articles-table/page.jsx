'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cairo100, cairo200 } from '../../../../fonts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SimpleTable = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const res = await fetch('/api/Article');
                if (!res.ok) {
                    const errorData = await res.json();
                    toast.error('فشل في جلب البيانات: ' + errorData.error);
                    return;
                }
                const data = await res.json();
                if (data.success) {
                    setArticles(data.articles);
                } else {
                    toast.error('فشل في جلب البيانات: ' + data.error);
                }
            } catch (error) {
                toast.error('هناك خطأ في جلب البيانات: ' + error.message);
            }
        };
        fetchArticles();
    }, []);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`/api/Article/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setArticles(articles.filter(article => article._id !== id));
                toast.success('تم حذف المقالة بنجاح');
            } else {
                const data = await res.json();
                toast.error('فشل في حذف المقالة: ' + data.error);
            }
            console.log(articles);
        } catch (error) {
            toast.error('هناك خطأ في حذف المقالة: ' + error.message);
        }
    };

    return (
        <div className={`container mx-auto p-4 ${cairo100.className}`}>
            <Link href={'/Dashbord/AddArticale'} className={`text-right block mb-6 text-blue-600`}>
                <span className={`text-2xl ${cairo200.className} bg-sky-700 text-white py-1 px-5 rounded-2xl`}>اضافة مقالة</span>
            </Link>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full text-right text-sm font-light text-gray-800 w-full">
                                <thead className="bg-gray-50">
                                    <tr className={`border-b border-gray-200 ${cairo200.className}`}>
                                        <th className="px-9 py-4">الاحداث</th>
                                        <th className="px-6 py-4">العنوان</th>
                                        <th className="px-6 py-4">الصورة</th>
                                        <th className="px-6 py-4">التاريخ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {articles.map((article) => (
                                        <tr key={article._id} className={`border-b border-gray-200 text-white ${cairo100.className}`}>
                                            <td className="mr-3 py-4 flex space-x-4 items-center pr-6">
                                                <button onClick={() => handleDelete(article._id)} className='bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition'>
                                                    <div className='flex items-center pr-2 space-x-1'>
                                                        <span>حذف</span>
                                                        <Image src={'/images/svg/delete.svg'} alt='delete' width={25} height={25} />
                                                    </div>
                                                </button>
                                                <Link href={`/Dashbord/editarticle/${article._id}`} className='bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition'>
                                                    <div className='flex pr-2 items-center space-x-1'>
                                                        <span>تحديث</span>
                                                        <Image src={'/images/svg/update.svg'} alt='update' width={25} height={25} />
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>{article.title}</td>
                                            <td>
                                                <Image src={article.image} alt={article.title} width={25} height={25} />
                                            </td>
                                            <td>{new Date(article.date).toLocaleDateString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SimpleTable;
