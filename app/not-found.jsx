import Link from 'next/link'
import Image from 'next/image'
export default function NotFound() {
    return (
        <div className=' flex justify-center items-center flex-col'>
            <Image src={'/images/svg/404 Error Page not Found with people connecting a plug-pana.svg'} alt='image404' width={900} height={900} />
            <h2 className='text-4xl font-cairo font-semibold '>Not Found</h2>
            <p className='text-2xl font-cairo font-semibold'>Could not find requested resource</p>
            <Link href="/" className='py-2 px-9  my-5 font-cairo font-semibold bg-sky-800  rounded-lg'>Return Home</Link>
        </div>
    )
}