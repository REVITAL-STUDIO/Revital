'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const Logo = () => {
    const router = useRouter();
    return (
        <Image
        onClick={() => {router.push('/')}}
            alt='logo'
            className='sm:block md:block lg:block xl:block cursor:pointer'
            height='80'
            width='112'
            src='/images/revital-sub-logo.png'
        />

    )
}

export default Logo;