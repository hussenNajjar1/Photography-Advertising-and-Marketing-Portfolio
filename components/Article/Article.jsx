'use client'
import { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import React from 'react'
import { cairo100, cairo200 } from '../../fonts'
const Article = () => {
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


    return (
        <div className='container mx-auto mt-16' id='Article'>
            <h1 className={`text-center color-title text-3xl py-20 ${cairo200.className}`}>المقالات</h1>
            <Suspense fallback>
                <div className='flex justify-center items-center flex-wrap'>
                    {articles.map((article) => (
                        <div key={article} className="item w-[400px] h-[600px] rounded-[25px] bg-article m-3 overflow-hidden">
                            <div className="item_head bg-article flex justify-end items-center rounded-[25px]">
                                <div className="text">
                                    <p className={`${cairo200.className} text-article text-2xl`}>استديو سدرة</p>
                                </div>
                                <div className='head-article rounded-full w-[70px] ml-5 m-2'>
                                    <Image src={'/images/png/img4.png'} alt='image' width={70} height={70} className='p-3' />
                                </div>
                            </div>
                            <div className="item_body">
                                <div className='flex justify-center items-center flex-col'>
                                    <p className={`text-xl text-right px-4 py-2 ${cairo100.className}`}>{article.title}</p>
                                    <div className='relative w-[350px] h-[250px]'>
                                        <Image src={article.image} alt={article.title}  width={100}  height={100} layout='fill' objectFit='cover' />
                                    </div>
                                    <div className='footer-article flex justify-between items-center w-full px-3 py-2 rounded-b-[25px]'>
                                        <Image src={'/images/svg/save.svg'} alt='image' width={30} height={30} />
                                        <Image src={'/images/svg/comments 6.svg'} alt='image' width={30} height={30} />
                                        <Image src={'/images/svg/Vector.svg'} alt='image' width={30} height={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Suspense>
        </div>
    )
}

export default Article