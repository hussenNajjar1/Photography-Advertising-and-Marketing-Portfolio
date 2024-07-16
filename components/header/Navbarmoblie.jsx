'use client';

import React from 'react';
import { BiHomeAlt, BiUser ,BiNews} from 'react-icons/bi';
import { BsClipboardData, BsChatSquareText ,BsGift  } from 'react-icons/bs';
import Link from 'next/link';

const Navbarmoblie = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50">
                    <Link href="#home" className="cursor-pointer w-[60px] flex items-center justify-center" >
                        <BiHomeAlt />
                    </Link>
                    <Link href="#about" className="cursor-pointer w-[60px] flex items-center justify-center" >
                        <BiUser />
                    </Link>
                    <Link href="#services" className="cursor-pointer w-[60px] flex items-center justify-center" >
                        <BsClipboardData />
                    </Link>
                    <Link href="#Article" className="cursor-pointer w-[60px] flex items-center justify-center" >
                        <BiNews />
                    </Link>
                    <Link href="#Offers" className="cursor-pointer w-[60px] flex items-center justify-center" >
                        <BsGift />
                    </Link>
                    <Link href="#contact" className="cursor-pointer w-[60px] flex items-center justify-center" >
                        <BsChatSquareText />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbarmoblie;
