import React from 'react';
import Image from 'next/image';
import { cairo100, cairo200 } from '../../../../../fonts';

const user = {
    image: '/images/user-profile.jpg',
    name: ' حسين نجار',
    email: 'HussenNajjar@example.com',
    joinDate: '2024-07-04',
    role: 'مدير',

};

const UserProfile = () => {
    return (
        <>
            <div className='container mx-auto h-screen'>
                <div className='Profile  border-sky-400 border-1  flex items-center justify-center flex-col'>
                    <div className="image border-1 border-white rounded-full shadow-lg ">
                        <Image src={'/images/img_login.png'} width={250} height={250} alt='imageProfile' className='p-9 m-3' />
                    </div>
                    <div className="text flex justify-center flex-col items-center pt-9">

                        <h2 className={`${cairo200.className}`}>{user.name}</h2>
                        <p className={`${cairo100.className} py-2`}> {user.email} </p>
                        <p className={`${cairo100.className} py-2`}> {user.joinDate} </p>
                        <p className={`${cairo100.className} py-2`}> {user.role} </p>
                   
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            تعديل المعلومات
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UserProfile;
