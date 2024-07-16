'use client'
import React from 'react'
import Link from 'next/link'
import links from './nav'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cairo100 } from '../../fonts'
const Navbar = () => {
    const PathName = usePathname();
    return (
        <div className='pt-6'>
            <header className=' text-xl text-white py-3'>
                <div className='container mx-auto flex justify-between items-center px-5 py-2'>
                    <div className="logo">
                        <Image  src={'/'} alt='logo' width={50} height={50}
                        />
                    </div>
                    <nav>
                        <div className="links space-x-4">
                            {
                                links.map((item) => (
                                    <Link key={item} scroll replace href={item.ref} className={` pr-4 ${PathName === item.ref && 'btn  text-white px-5 py-2 rounded-lg mx-6 '} ${cairo100.className}`} >{item.title}</Link>
                                ))
                            }
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
