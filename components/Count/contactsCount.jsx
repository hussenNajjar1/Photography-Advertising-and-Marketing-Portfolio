
'use client';
import React, { useState, useEffect } from 'react';
import { cairo100, cairo200 } from '../../fonts';
import Image from 'next/image';

const contactsCount = () => {
    const [stats, setStats] = useState({
        articlesCount: 0,
        contactsCount: 0,
        offersCount: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/countDocuments'); // تأكد من تحديث الرابط حسب بيئة التطوير أو الإنتاج
                if (!res.ok) {
                    throw new Error('Failed to fetch stats');
                }
                const data = await res.json();
                setStats(data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchStats();
    }, []);
    return (
        <>

            <div className="item bgService rounded-[15px] flex items-center justify-between h-[120px] md:p-9 p-3 pt-4 mx-2 w-[400]">
                <div className="image pl-3 pt-7 md:pt-0">
                    <Image src={'/images/png/img3.png'} alt='image' width={75} height={75} />
                </div>
                <div className="text text-right space-y-4">
                    <h1 className={` ${cairo200.className} text-2xl font-bold color-title`}>عدد المقالات</h1>
                    <p className={`${cairo100.className} text-xl`}>{stats.articlesCount}</p>
                </div>
            </div>
            <div className="item bgService rounded-[15px] flex items-center justify-between h-[120px] md:p-9 p-3 pt-4 mx-2 w-[400]">
                <div className="image pl-3 pt-7 md:pt-0">
                    <Image src={'/images/png/img3.png'} alt='image' width={75} height={75} />
                </div>
                <div className="text text-right space-y-4">
                    <h1 className={` ${cairo200.className} text-2xl font-bold color-title`}>عدد جهات الاتصال</h1>
                    <p className={`${cairo100.className} text-xl`}>{stats.contactsCount}</p>
                </div>
            </div>
            <div className="item bgService rounded-[15px] flex items-center justify-between h-[120px] md:p-9 p-3 pt-4 mx-2 w-[400]">
                <div className="image pl-3 pt-7 md:pt-0">
                    <Image src={'/images/png/img3.png'} alt='image' width={75} height={75} />
                </div>
                <div className="text text-right space-y-4">
                    <h1 className={` ${cairo200.className} text-2xl font-bold color-title`}>عدد العروض</h1>
                    <p className={`${cairo100.className} text-xl`}>{stats.offersCount}</p>
                </div>
            </div>
        </>

    )
}

export default contactsCount