import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cairo100 } from '../../fonts'
const DashboardNavbar = () => {
  return (
    <nav className="shadow-lg mb-9">
      <div className="flex justify-between items-center w-full">
        <div className='shadow-lg  py-3 px-5 '>
          <Image src={'/images/img_login.png'} alt='logo' width={50} height={50}  className='p-1'/>
        </div>
        <div>
          <p className={`${cairo100.className}`}> حسين نجار </p>
        </div>
      </div>
    </nav>

  )
}

export default DashboardNavbar