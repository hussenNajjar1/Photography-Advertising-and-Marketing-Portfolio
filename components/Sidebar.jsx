import React from 'react';
import Link from 'next/link';
import { CgMenuGridR } from 'react-icons/cg';
import Image from 'next/image';
import { cairo100,cairo200 } from '../fonts';

const SideBar = () => {
    return (
        <div className="pr-6 h-screen shadow-2xl px-3 pt-9">
            <Link href="/Dashbord"  className={`flex  w-full justify-end text-2xl mb-5 py-2 px-5 rounded-lg items-center transform ${cairo200.className}`}>
                <span className="hidden lg:block ">لوحة التحكم</span>
                <CgMenuGridR className="text-3xl ml-1" />
            </Link>
            <ul className="mt-10 flex flex-col lg:items-start w-full">

                <Link href="/Dashbord/users" className={`flex  w-full justify-end text-xl mb-5 bg-slate-900 py-2 px-5 rounded-lg items-center transform ${cairo100.className}`}>
                    <span className="hidden lg:block px-4">المستخدمين</span>
                    <Image src="/images/png/users-alt 1.png" width={25} height={25} alt="image" className="me-1" />
                </Link>
                <Link href="/Dashbord/articles-table" className={`flex  w-full justify-end text-xl mb-5 bg-slate-900 py-2 px-5 rounded-lg items-center transform ${cairo100.className}`}>
                    <span className="hidden lg:block px-4">المقالات</span>
                    <Image src="/images/png/images.png" width={25} height={25} alt="image" className="me-1" />
                </Link>
                <Link href="/Dashbord/ContactsTable" className="flex w-full  justify-end text-xl mb-5 bg-slate-900 py-2 px-5 rounded-lg items-center transform">
                    <span className="hidden lg:block px-4">الحجوزات</span>
                    <Image src="/images/png/images1.png" width={25} height={25} alt="image" className="me-1" />
                </Link>
                <Link href="/Dashbord/users/Profile" className={`flex  w-full justify-end text-xl mb-5 bg-slate-900 py-2 px-5 rounded-lg items-center transform ${cairo100.className}`}>
                    <span className="hidden lg:block px-4"> البروفايل</span>
                    <Image src="/images/png/exit 1.png" width={25} height={25} alt="image" className="me-1" />
                </Link>
                <Link href="/Dashbord/Offers" className={`flex  w-full justify-end text-xl mb-5 bg-slate-900 py-2 px-5 rounded-lg items-center transform ${cairo100.className}`}>
                    <span className="hidden lg:block px-4"> العروض</span>
                    <Image src="/images/png/exit 1.png" width={25} height={25} alt="image" className="me-1" />
                </Link>
                <Link href="/" className={`flex  w-full justify-end text-xl mb-5 bg-slate-900 py-2 px-5 rounded-lg items-center transform ${cairo100.className}`}>
                    <span className="hidden lg:block px-4"> الرئيسية</span>
                    <Image src="/images/png/home.png" width={25} height={25} alt="image" className="me-1" />
                </Link>

            </ul>
        </div>
    );
};

export default SideBar;
